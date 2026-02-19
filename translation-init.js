/* ====================================== */
/* NIHAM - Translation & Voice Init       */
/* ====================================== */

/**
 * Initialize translation and voice systems
 * @returns {Promise<Object>} Initialization result
 */
async function initializeTranslationAndVoice() {
  const result = {
    translation: false,
    voice: false,
    errors: []
  };

  try {
    debugLog('Init', 'Initializing translation and voice systems...');

    // Initialize Translation Manager
    try {
      const translationManager = getTranslationManager();
      await translationManager.init();
      result.translation = true;
      debugLog('Init', 'Translation system initialized successfully');
    } catch (error) {
      console.error('Translation initialization failed:', error);
      result.errors.push(`Translation: ${error.message}`);
      showNotification('Translation features unavailable. Using English only.', 'warning', 5000);
    }

    // Initialize Voice Manager
    try {
      const voiceManager = getVoiceManager();
      await voiceManager.init();
      result.voice = true;
      debugLog('Init', 'Voice system initialized successfully');
    } catch (error) {
      console.error('Voice initialization failed:', error);
      result.errors.push(`Voice: ${error.message}`);
      // Don't show notification for voice - it's optional
      debugLog('Init', 'Voice features not available in this browser');
    }

    return result;
  } catch (error) {
    console.error('Critical initialization error:', error);
    result.errors.push(`Critical: ${error.message}`);
    return result;
  }
}

/**
 * Check if translation features are available
 * @returns {boolean}
 */
function isTranslationAvailable() {
  const manager = getTranslationManager();
  return manager && manager.isInitialized();
}

/**
 * Check if voice features are available
 * @returns {boolean}
 */
function isVoiceAvailable() {
  const manager = getVoiceManager();
  return manager && manager.isSupported();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeTranslationAndVoice,
    isTranslationAvailable,
    isVoiceAvailable
  };
}
