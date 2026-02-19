/* ====================================== */
/* NIHAM - Voice Button Component         */
/* ====================================== */

/**
 * Create a voice button element
 * @param {string} text - Text to speak
 * @param {string} lang - Language code
 * @param {string} elementId - Unique ID for the button
 * @returns {HTMLElement}
 */
function createVoiceButton(text, lang, elementId = null) {
  const button = document.createElement('button');
  button.className = 'voice-btn';
  if (elementId) {
    button.id = elementId;
  }
  
  button.innerHTML = '🔊';
  button.title = 'Listen';
  button.setAttribute('aria-label', 'Listen to this content');
  
  // Store data
  button.dataset.text = text;
  button.dataset.lang = lang;
  button.dataset.state = 'idle';
  
  // Click handler
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await handleVoiceButtonClick(button);
  });
  
  return button;
}

/**
 * Handle voice button click
 * @param {HTMLElement} button - Button element
 */
async function handleVoiceButtonClick(button) {
  const voiceManager = getVoiceManager();
  const state = button.dataset.state;
  
  if (state === 'speaking') {
    // Stop speaking
    voiceManager.stop();
    updateVoiceButtonState(button, 'idle');
    return;
  }
  
  const text = button.dataset.text;
  const lang = button.dataset.lang || getCurrentLanguage();
  
  if (!text) {
    console.warn('No text to speak');
    return;
  }
  
  try {
    updateVoiceButtonState(button, 'speaking');
    await voiceManager.speak(text, lang);
    updateVoiceButtonState(button, 'idle');
  } catch (error) {
    console.error('Voice playback error:', error);
    updateVoiceButtonState(button, 'error');
    showNotification('Voice playback failed. Please try again.', 'error', 3000);
    
    // Reset to idle after 2 seconds
    setTimeout(() => {
      updateVoiceButtonState(button, 'idle');
    }, 2000);
  }
}

/**
 * Update voice button state
 * @param {HTMLElement} button - Button element
 * @param {string} state - State (idle, speaking, paused, error)
 */
function updateVoiceButtonState(button, state) {
  button.dataset.state = state;
  
  switch (state) {
    case 'idle':
      button.innerHTML = '🔊';
      button.title = 'Listen';
      button.classList.remove('speaking', 'error');
      break;
      
    case 'speaking':
      button.innerHTML = '⏸️';
      button.title = 'Stop';
      button.classList.add('speaking');
      button.classList.remove('error');
      break;
      
    case 'paused':
      button.innerHTML = '▶️';
      button.title = 'Resume';
      button.classList.remove('speaking', 'error');
      break;
      
    case 'error':
      button.innerHTML = '❌';
      button.title = 'Error - Click to retry';
      button.classList.add('error');
      button.classList.remove('speaking');
      break;
  }
}

/**
 * Add voice button to container
 * @param {HTMLElement} container - Container element
 * @param {string} text - Text to speak
 * @param {string} lang - Language code
 * @param {string} position - Position ('before' or 'after')
 * @returns {HTMLElement}
 */
function addVoiceButtonToContainer(container, text, lang, position = 'after') {
  if (!container) return null;
  
  const button = createVoiceButton(text, lang);
  
  if (position === 'before') {
    container.insertBefore(button, container.firstChild);
  } else {
    container.appendChild(button);
  }
  
  return button;
}

/**
 * Remove all voice buttons from container
 * @param {HTMLElement} container - Container element
 */
function removeVoiceButtons(container) {
  if (!container) return;
  
  const buttons = container.querySelectorAll('.voice-btn');
  buttons.forEach(btn => btn.remove());
}

/**
 * Update voice button text
 * @param {HTMLElement} button - Button element
 * @param {string} newText - New text to speak
 * @param {string} newLang - New language code (optional)
 */
function updateVoiceButtonText(button, newText, newLang = null) {
  if (!button) return;
  
  button.dataset.text = newText;
  if (newLang) {
    button.dataset.lang = newLang;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createVoiceButton,
    handleVoiceButtonClick,
    updateVoiceButtonState,
    addVoiceButtonToContainer,
    removeVoiceButtons,
    updateVoiceButtonText
  };
}
