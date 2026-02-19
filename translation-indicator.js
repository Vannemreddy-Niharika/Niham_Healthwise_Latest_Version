/* ====================================== */
/* NIHAM - Translation Indicator          */
/* ====================================== */

/**
 * Show translation loading indicator
 * @param {HTMLElement} container - Container element
 */
function showTranslationLoading(container) {
  if (!container) return;
  
  const indicator = document.createElement('div');
  indicator.className = 'translation-loading';
  indicator.innerHTML = '⏳ Translating...';
  indicator.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 255, 200, 0.1);
    border: 1px solid rgba(0, 255, 200, 0.3);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 12px;
    color: var(--accent);
    z-index: 1000;
  `;
  
  container.style.position = 'relative';
  container.appendChild(indicator);
}

/**
 * Hide translation loading indicator
 * @param {HTMLElement} container - Container element
 */
function hideTranslationLoading(container) {
  if (!container) return;
  
  const indicator = container.querySelector('.translation-loading');
  if (indicator) {
    indicator.remove();
  }
}

/**
 * Show translation error
 * @param {HTMLElement} container - Container element
 * @param {string} message - Error message
 */
function showTranslationError(container, message) {
  if (!container) return;
  
  hideTranslationLoading(container);
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'translation-error';
  errorDiv.innerHTML = `❌ ${message}`;
  errorDiv.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 0, 92, 0.1);
    border: 1px solid rgba(255, 0, 92, 0.3);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 12px;
    color: #ff005c;
    z-index: 1000;
  `;
  
  container.appendChild(errorDiv);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    showTranslationLoading,
    hideTranslationLoading,
    showTranslationError
  };
}
