/* ====================================== */
/* NIHAM - Voice Manager                  */
/* ====================================== */

/**
 * Voice Manager - Manages text-to-speech functionality using Web Speech API
 * Handles voice selection, preferences, and playback controls
 */
class VoiceManager {
  constructor() {
    this.synth = null;
    this.voices = [];
    this.currentUtterance = null;
    this.queue = [];
    this.isPlaying = false;
    this.preferences = {
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      voiceURI: null
    };
    this.initialized = false;
  }

  /**
   * Initialize voice system and load available voices
   * @returns {Promise<void>}
   */
  async init() {
    return new Promise((resolve, reject) => {
      // Check if Speech Synthesis is supported
      if (!window.speechSynthesis) {
        reject(new Error('Speech Synthesis not supported in this browser'));
        return;
      }

      this.synth = window.speechSynthesis;

      // Load voices
      const loadVoices = () => {
        this.voices = this.synth.getVoices();
        
        if (this.voices.length > 0) {
          this.initialized = true;
          this._loadPreferences();
          debugLog('Voice', `Voice Manager initialized with ${this.voices.length} voices`);
          resolve();
        }
      };

      // Voices might load asynchronously
      loadVoices();

      if (this.voices.length === 0) {
        this.synth.addEventListener('voiceschanged', () => {
          loadVoices();
        });

        // Timeout after 3 seconds
        setTimeout(() => {
          if (this.voices.length === 0) {
            reject(new Error('No voices available'));
          }
        }, 3000);
      }
    });
  }

  /**
   * Speak text in specified language
   * @param {string} text - Text to speak
   * @param {string} lang - Language code
   * @returns {Promise<void>}
   */
  async speak(text, lang = 'en') {
    if (!this.isSupported()) {
      throw new Error('Speech Synthesis not supported');
    }

    if (!text || text.trim() === '') {
      return;
    }

    return new Promise((resolve, reject) => {
      // If currently speaking, queue the request
      if (this.isPlaying) {
        this.queue.push({ text, lang, resolve, reject });
        return;
      }

      this._speakNow(text, lang, resolve, reject);
    });
  }

  /**
   * Internal method to speak immediately
   * @private
   */
  _speakNow(text, lang, resolve, reject) {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language
      utterance.lang = this._getLanguageCode(lang);
      
      // Apply preferences
      utterance.rate = this.preferences.rate;
      utterance.pitch = this.preferences.pitch;
      utterance.volume = this.preferences.volume;
      
      // Select voice
      const voice = this._selectVoice(lang);
      if (voice) {
        utterance.voice = voice;
      }

      // Event handlers
      utterance.onend = () => {
        this.isPlaying = false;
        this.currentUtterance = null;
        this._processQueue();
        resolve();
      };

      utterance.onerror = (event) => {
        this.isPlaying = false;
        this.currentUtterance = null;
        console.error('Speech synthesis error:', event);
        reject(new Error(`Speech synthesis failed: ${event.error}`));
        this._processQueue();
      };

      // Start speaking
      this.currentUtterance = utterance;
      this.isPlaying = true;
      this.synth.speak(utterance);
    } catch (error) {
      this.isPlaying = false;
      reject(error);
    }
  }

  /**
   * Process queued speech requests
   * @private
   */
  _processQueue() {
    if (this.queue.length > 0 && !this.isPlaying) {
      const { text, lang, resolve, reject } = this.queue.shift();
      this._speakNow(text, lang, resolve, reject);
    }
  }

  /**
   * Stop current speech
   */
  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.currentUtterance = null;
      this.queue = [];
    }
  }

  /**
   * Pause current speech
   */
  pause() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
    }
  }

  /**
   * Resume paused speech
   */
  resume() {
    if (this.synth && this.isPlaying) {
      this.synth.resume();
    }
  }

  /**
   * Check if speech synthesis is supported
   * @returns {boolean}
   */
  isSupported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  /**
   * Get available voices for a language
   * @param {string} lang - Language code
   * @returns {SpeechSynthesisVoice[]}
   */
  getVoicesForLanguage(lang) {
    const langCode = this._getLanguageCode(lang);
    return this.voices.filter(voice => voice.lang.startsWith(langCode));
  }

  /**
   * Select appropriate voice for language
   * @private
   * @param {string} lang - Language code
   * @returns {SpeechSynthesisVoice|null}
   */
  _selectVoice(lang) {
    // If user has selected a specific voice
    if (this.preferences.voiceURI) {
      const preferredVoice = this.voices.find(v => v.voiceURI === this.preferences.voiceURI);
      if (preferredVoice) return preferredVoice;
    }

    // Find voice for the language
    const langCode = this._getLanguageCode(lang);
    const matchingVoices = this.voices.filter(voice => voice.lang.startsWith(langCode));
    
    if (matchingVoices.length > 0) {
      // Prefer local voices
      const localVoice = matchingVoices.find(v => v.localService);
      return localVoice || matchingVoices[0];
    }

    // Fallback to English
    const englishVoices = this.voices.filter(voice => voice.lang.startsWith('en'));
    if (englishVoices.length > 0) {
      debugLog('Voice', `No voice found for ${lang}, using English fallback`);
      return englishVoices[0];
    }

    // Return first available voice
    return this.voices[0] || null;
  }

  /**
   * Convert language code to full language code
   * @private
   * @param {string} lang - Short language code
   * @returns {string}
   */
  _getLanguageCode(lang) {
    const langMap = {
      'en': 'en-US',
      'hi': 'hi-IN',
      'te': 'te-IN',
      'ta': 'ta-IN',
      'bn': 'bn-IN',
      'mr': 'mr-IN',
      'gu': 'gu-IN'
    };
    return langMap[lang] || lang;
  }

  /**
   * Set voice preferences
   * @param {Object} preferences - Voice preferences (rate, pitch, volume, voiceURI)
   */
  setPreferences(preferences) {
    if (preferences.rate !== undefined) {
      this.preferences.rate = Math.max(0.1, Math.min(10, preferences.rate));
    }
    if (preferences.pitch !== undefined) {
      this.preferences.pitch = Math.max(0, Math.min(2, preferences.pitch));
    }
    if (preferences.volume !== undefined) {
      this.preferences.volume = Math.max(0, Math.min(1, preferences.volume));
    }
    if (preferences.voiceURI !== undefined) {
      this.preferences.voiceURI = preferences.voiceURI;
    }

    this._savePreferences();
    debugLog('Voice', 'Voice preferences updated');
  }

  /**
   * Get current voice preferences
   * @returns {Object}
   */
  getPreferences() {
    return { ...this.preferences };
  }

  /**
   * Check if currently speaking
   * @returns {boolean}
   */
  isSpeaking() {
    return this.isPlaying;
  }

  /**
   * Save preferences to localStorage
   * @private
   */
  _savePreferences() {
    try {
      localStorage.setItem('NIHAM_voice_preferences', JSON.stringify(this.preferences));
    } catch (error) {
      console.error('Error saving voice preferences:', error);
    }
  }

  /**
   * Load preferences from localStorage
   * @private
   */
  _loadPreferences() {
    try {
      const saved = localStorage.getItem('NIHAM_voice_preferences');
      if (saved) {
        this.preferences = { ...this.preferences, ...JSON.parse(saved) };
        debugLog('Voice', 'Voice preferences loaded');
      }
    } catch (error) {
      console.error('Error loading voice preferences:', error);
    }
  }

  /**
   * Get all available voices
   * @returns {SpeechSynthesisVoice[]}
   */
  getAllVoices() {
    return this.voices;
  }

  /**
   * Test voice with sample text
   * @param {string} sampleText - Text to test
   * @param {string} lang - Language code
   * @returns {Promise<void>}
   */
  async testVoice(sampleText = 'Hello, this is a test.', lang = 'en') {
    return this.speak(sampleText, lang);
  }
}

// Create global instance
let voiceManager = null;

/**
 * Get or create voice manager instance
 * @returns {VoiceManager}
 */
function getVoiceManager() {
  if (!voiceManager) {
    voiceManager = new VoiceManager();
  }
  return voiceManager;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    VoiceManager,
    getVoiceManager
  };
}
