/* ====================================== */
/* NIHAM - IndexedDB Manager              */
/* ====================================== */

/**
 * IndexedDB Manager for storing translation data offline
 * Handles database initialization, CRUD operations, and error handling
 */
class IndexedDBManager {
  constructor() {
    this.db = null;
    this.dbName = 'NIHAM_Translations';
    this.version = 1;
    this.storeName = 'translations';
  }

  /**
   * Initialize IndexedDB
   * @param {string} dbName - Database name (optional)
   * @param {number} version - Database version (optional)
   * @returns {Promise<void>}
   */
  async init(dbName = null, version = null) {
    if (dbName) this.dbName = dbName;
    if (version) this.version = version;

    return new Promise((resolve, reject) => {
      // Check if IndexedDB is supported
      if (!window.indexedDB) {
        reject(new Error('IndexedDB is not supported in this browser'));
        return;
      }

      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => {
        reject(new Error(`Failed to open database: ${request.error}`));
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(this.storeName)) {
          const objectStore = db.createObjectStore(this.storeName, {
            keyPath: ['category', 'lang']
          });

          // Create indexes for efficient querying
          objectStore.createIndex('category', 'category', { unique: false });
          objectStore.createIndex('lang', 'lang', { unique: false });
        }
      };
    });
  }

  /**
   * Store translation dictionary
   * @param {string} category - Category name (diseases, symptoms, remedies, general)
   * @param {string} lang - Language code
   * @param {Object} data - Translation data
   * @returns {Promise<void>}
   */
  async storeTranslations(category, lang, data) {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction([this.storeName], 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);

        const record = {
          category,
          lang,
          data,
          timestamp: Date.now(),
          version: '1.0.0'
        };

        const request = objectStore.put(record);

        request.onsuccess = () => resolve();
        request.onerror = () => {
          // Check for quota exceeded error
          if (request.error.name === 'QuotaExceededError') {
            reject(new Error('Storage quota exceeded. Please clear some data.'));
          } else {
            reject(new Error(`Failed to store translations: ${request.error}`));
          }
        };

        transaction.onerror = () => {
          reject(new Error(`Transaction failed: ${transaction.error}`));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Retrieve translation dictionary
   * @param {string} category - Category name
   * @param {string} lang - Language code
   * @returns {Promise<Object|null>}
   */
  async getTranslations(category, lang) {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction([this.storeName], 'readonly');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.get([category, lang]);

        request.onsuccess = () => {
          const result = request.result;
          
          // Validate data structure
          if (result && this._validateRecord(result)) {
            resolve(result);
          } else if (result) {
            // Data is corrupted
            console.warn('Corrupted translation data detected:', category, lang);
            resolve(null);
          } else {
            resolve(null);
          }
        };

        request.onerror = () => {
          reject(new Error(`Failed to retrieve translations: ${request.error}`));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Check if translations exist
   * @param {string} category - Category name
   * @param {string} lang - Language code
   * @returns {Promise<boolean>}
   */
  async hasTranslations(category, lang) {
    try {
      const result = await this.getTranslations(category, lang);
      return result !== null;
    } catch (error) {
      console.error('Error checking translations:', error);
      return false;
    }
  }

  /**
   * Delete specific translation dictionary
   * @param {string} category - Category name
   * @param {string} lang - Language code
   * @returns {Promise<void>}
   */
  async deleteTranslations(category, lang) {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction([this.storeName], 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.delete([category, lang]);

        request.onsuccess = () => resolve();
        request.onerror = () => {
          reject(new Error(`Failed to delete translations: ${request.error}`));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Clear all translation data
   * @returns {Promise<void>}
   */
  async clearAll() {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction([this.storeName], 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.clear();

        request.onsuccess = () => resolve();
        request.onerror = () => {
          reject(new Error(`Failed to clear translations: ${request.error}`));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Get database size estimate
   * @returns {Promise<number>} Size in bytes
   */
  async getStorageSize() {
    if (!navigator.storage || !navigator.storage.estimate) {
      console.warn('Storage estimation not supported');
      return 0;
    }

    try {
      const estimate = await navigator.storage.estimate();
      return estimate.usage || 0;
    } catch (error) {
      console.error('Error estimating storage:', error);
      return 0;
    }
  }

  /**
   * Get all categories stored in database
   * @returns {Promise<string[]>}
   */
  async getAllCategories() {
    if (!this.db) {
      throw new Error('Database not initialized. Call init() first.');
    }

    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction([this.storeName], 'readonly');
        const objectStore = transaction.objectStore(this.storeName);
        const index = objectStore.index('category');
        const request = index.getAllKeys();

        request.onsuccess = () => {
          const categories = [...new Set(request.result)];
          resolve(categories);
        };

        request.onerror = () => {
          reject(new Error(`Failed to get categories: ${request.error}`));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Validate record structure
   * @private
   * @param {Object} record - Record to validate
   * @returns {boolean}
   */
  _validateRecord(record) {
    return (
      record &&
      typeof record.category === 'string' &&
      typeof record.lang === 'string' &&
      typeof record.data === 'object' &&
      typeof record.timestamp === 'number'
    );
  }

  /**
   * Close database connection
   */
  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  /**
   * Check if database is initialized
   * @returns {boolean}
   */
  isInitialized() {
    return this.db !== null;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IndexedDBManager;
}
