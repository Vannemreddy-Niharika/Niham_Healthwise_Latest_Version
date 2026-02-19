/* ====================================== */
/* NIHAM - Translation Manager            */
/* ====================================== */

/**
 * Translation Manager - Central component for managing all translation operations
 * Integrates with IndexedDB for storage and cache for performance
 */
class TranslationManager {
  constructor() {
    this.indexedDBManager = null;
    this.cache = null;
    this.initialized = false;
    this.fallbackLang = 'en';
  }

  /**
   * Initialize the translation system
   * @returns {Promise<void>}
   */
  async init() {
    try {
      // Initialize IndexedDB Manager
      this.indexedDBManager = new IndexedDBManager();
      await this.indexedDBManager.init();

      // Initialize Translation Cache
      this.cache = new TranslationCache(1000);

      // Load translation dictionary into IndexedDB if not already loaded
      await this._loadDictionaryToIndexedDB();

      this.initialized = true;
      debugLog('Translation', 'Translation Manager initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Translation Manager:', error);
      // Fall back to English-only mode
      this.initialized = false;
      throw error;
    }
  }

  /**
   * Load translation dictionary into IndexedDB
   * @private
   * @returns {Promise<void>}
   */
  async _loadDictionaryToIndexedDB() {
    try {
      // Check if already loaded
      const hasData = await this.indexedDBManager.hasTranslations('diseases', 'en');
      
      if (!hasData) {
        debugLog('Translation', 'Loading translation dictionary into IndexedDB...');
        
        // Load all categories and languages
        const categories = ['diseases', 'symptoms', 'general'];
        const languages = ['en', 'hi', 'te', 'ta', 'bn', 'mr', 'gu', 'fr', 'es', 'ko'];

        for (const category of categories) {
          for (const lang of languages) {
            const data = getCategoryTranslations(category, lang);
            if (Object.keys(data).length > 0) {
              await this.indexedDBManager.storeTranslations(category, lang, data);
            }
          }
        }
        
        debugLog('Translation', 'Translation dictionary loaded successfully');
      }
    } catch (error) {
      console.error('Error loading dictionary to IndexedDB:', error);
      // Continue anyway - will use in-memory dictionary
    }
  }

  /**
   * Translate a single term
   * @param {string} text - Text to translate
   * @param {string} targetLang - Target language code
   * @param {string} category - Category (diseases, symptoms, general)
   * @returns {Promise<string>} Translated text
   */
  async translate(text, targetLang, category = 'general') {
    if (!text) return '';
    if (targetLang === 'en') return text; // No translation needed for English

    try {
      const normalizedText = text.toLowerCase().trim();

      // Check cache first
      if (this.cache && this.cache.has(category, normalizedText, targetLang)) {
        return this.cache.get(category, normalizedText, targetLang);
      }

      // Try in-memory dictionary first (faster)
      let translation = getDictionaryTranslation(category, normalizedText, targetLang);

      // If not found in memory, try IndexedDB
      if (!translation && this.indexedDBManager && this.indexedDBManager.isInitialized()) {
        try {
          const data = await this.indexedDBManager.getTranslations(category, targetLang);
          if (data && data.data) {
            translation = data.data[normalizedText];
          }
        } catch (error) {
          console.warn('Error fetching from IndexedDB:', error);
        }
      }

      // Fallback to English if translation not found
      if (!translation) {
        translation = text;
        debugLog('Translation', `No translation found for "${text}" in ${targetLang}, using fallback`);
      }

      // Cache the result
      if (this.cache) {
        this.cache.set(category, normalizedText, targetLang, translation);
      }

      return translation;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    }
  }

  /**
   * Translate multiple terms at once
   * @param {string[]} texts - Array of texts to translate
   * @param {string} targetLang - Target language code
   * @param {string} category - Category
   * @returns {Promise<string[]>} Array of translated texts
   */
  async translateBatch(texts, targetLang, category = 'general') {
    if (!texts || texts.length === 0) return [];

    const promises = texts.map(text => this.translate(text, targetLang, category));
    return Promise.all(promises);
  }

  /**
   * Translate an object with multiple fields
   * @param {Object} obj - Object to translate
   * @param {string} targetLang - Target language code
   * @param {Object} fieldMap - Map of field names to categories
   * @returns {Promise<Object>} Translated object
   */
  async translateObject(obj, targetLang, fieldMap) {
    if (!obj) return obj;
    if (targetLang === 'en') return obj;

    const translatedObj = { ...obj };

    for (const [field, category] of Object.entries(fieldMap)) {
      if (obj[field]) {
        if (Array.isArray(obj[field])) {
          // Translate array of strings
          translatedObj[field] = await this.translateBatch(obj[field], targetLang, category);
        } else if (typeof obj[field] === 'string') {
          // Translate single string
          translatedObj[field] = await this.translate(obj[field], targetLang, category);
        }
      }
    }

    return translatedObj;
  }

  /**
   * Check if translation is available
   * @param {string} text - Text to check
   * @param {string} targetLang - Target language code
   * @param {string} category - Category
   * @returns {boolean}
   */
  hasTranslation(text, targetLang, category = 'general') {
    if (!text || targetLang === 'en') return true;
    
    const normalizedText = text.toLowerCase().trim();
    return hasDictionaryEntry(category, normalizedText, targetLang);
  }

  /**
   * Clear translation cache
   */
  clearCache() {
    if (this.cache) {
      this.cache.clear();
      debugLog('Translation', 'Translation cache cleared');
    }
  }

  /**
   * Get cache statistics
   * @returns {Object}
   */
  getCacheStats() {
    return this.cache ? this.cache.getStats() : null;
  }

  /**
   * Check if manager is initialized
   * @returns {boolean}
   */
  isInitialized() {
    return this.initialized;
  }

  /**
   * Get storage size estimate
   * @returns {Promise<number>}
   */
  async getStorageSize() {
    if (this.indexedDBManager) {
      return await this.indexedDBManager.getStorageSize();
    }
    return 0;
  }
}

// Create global instance
let translationManager = null;

/**
 * Get or create translation manager instance
 * @returns {TranslationManager}
 */
function getTranslationManager() {
  if (!translationManager) {
    translationManager = new TranslationManager();
  }
  return translationManager;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TranslationManager,
    getTranslationManager
  };
}
