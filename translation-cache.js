/* ====================================== */
/* NIHAM - Translation Cache              */
/* ====================================== */

/**
 * LRU (Least Recently Used) Cache for translation data
 * Improves performance by caching frequently accessed translations
 */
class TranslationCache {
  /**
   * Initialize cache with size limit
   * @param {number} maxSize - Maximum cache size in entries (default 1000)
   */
  constructor(maxSize = 1000) {
    this.maxSize = maxSize;
    this.cache = new Map();
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0
    };
  }

  /**
   * Generate cache key
   * @private
   * @param {string} category - Category (diseases, symptoms, remedies, general)
   * @param {string} term - Term to translate
   * @param {string} lang - Target language code
   * @returns {string}
   */
  _generateKey(category, term, lang) {
    return `${category}:${term.toLowerCase()}:${lang}`;
  }

  /**
   * Get cached translation
   * @param {string} category - Category
   * @param {string} term - Term to look up
   * @param {string} lang - Target language code
   * @returns {string|null}
   */
  get(category, term, lang) {
    const key = this._generateKey(category, term, lang);
    
    if (this.cache.has(key)) {
      this.stats.hits++;
      const entry = this.cache.get(key);
      
      // Move to end (most recently used)
      this.cache.delete(key);
      this.cache.set(key, {
        ...entry,
        accessCount: entry.accessCount + 1,
        lastAccessed: Date.now()
      });
      
      return entry.value;
    }
    
    this.stats.misses++;
    return null;
  }

  /**
   * Store translation in cache
   * @param {string} category - Category
   * @param {string} term - Original term
   * @param {string} lang - Target language code
   * @param {string} value - Translated text
   */
  set(category, term, lang, value) {
    const key = this._generateKey(category, term, lang);
    
    // If cache is full, remove least recently used entry
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
      this.stats.evictions++;
    }
    
    // Remove if exists (to update position)
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    // Add to end (most recently used)
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      lastAccessed: Date.now(),
      accessCount: 1
    });
  }

  /**
   * Check if key exists in cache
   * @param {string} category - Category
   * @param {string} term - Term to check
   * @param {string} lang - Target language code
   * @returns {boolean}
   */
  has(category, term, lang) {
    const key = this._generateKey(category, term, lang);
    return this.cache.has(key);
  }

  /**
   * Clear entire cache
   */
  clear() {
    this.cache.clear();
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0
    };
  }

  /**
   * Clear cache for specific category
   * @param {string} category - Category to clear
   */
  clearCategory(category) {
    const keysToDelete = [];
    
    for (const key of this.cache.keys()) {
      if (key.startsWith(`${category}:`)) {
        keysToDelete.push(key);
      }
    }
    
    keysToDelete.forEach(key => this.cache.delete(key));
  }

  /**
   * Clear cache for specific language
   * @param {string} lang - Language code to clear
   */
  clearLanguage(lang) {
    const keysToDelete = [];
    
    for (const key of this.cache.keys()) {
      if (key.endsWith(`:${lang}`)) {
        keysToDelete.push(key);
      }
    }
    
    keysToDelete.forEach(key => this.cache.delete(key));
  }

  /**
   * Get cache statistics
   * @returns {Object} Stats (size, hits, misses, hitRate, evictions)
   */
  getStats() {
    const totalRequests = this.stats.hits + this.stats.misses;
    const hitRate = totalRequests > 0 
      ? (this.stats.hits / totalRequests * 100).toFixed(2) 
      : 0;
    
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hits: this.stats.hits,
      misses: this.stats.misses,
      hitRate: `${hitRate}%`,
      evictions: this.stats.evictions,
      utilizationPercent: ((this.cache.size / this.maxSize) * 100).toFixed(2)
    };
  }

  /**
   * Get current cache size
   * @returns {number}
   */
  size() {
    return this.cache.size;
  }

  /**
   * Get most frequently accessed entries
   * @param {number} limit - Number of entries to return
   * @returns {Array}
   */
  getMostAccessed(limit = 10) {
    const entries = Array.from(this.cache.entries())
      .map(([key, entry]) => ({
        key,
        value: entry.value,
        accessCount: entry.accessCount,
        lastAccessed: entry.lastAccessed
      }))
      .sort((a, b) => b.accessCount - a.accessCount)
      .slice(0, limit);
    
    return entries;
  }

  /**
   * Get cache memory estimate in bytes
   * @returns {number}
   */
  getMemoryEstimate() {
    let totalBytes = 0;
    
    for (const [key, entry] of this.cache.entries()) {
      // Rough estimate: key + value + metadata
      totalBytes += key.length * 2; // UTF-16
      totalBytes += entry.value.length * 2; // UTF-16
      totalBytes += 24; // Metadata (timestamp, accessCount, etc.)
    }
    
    return totalBytes;
  }

  /**
   * Check if cache is near capacity
   * @param {number} threshold - Threshold percentage (default 90)
   * @returns {boolean}
   */
  isNearCapacity(threshold = 90) {
    return (this.cache.size / this.maxSize) * 100 >= threshold;
  }

  /**
   * Prune old entries (not accessed recently)
   * @param {number} maxAge - Maximum age in milliseconds (default 1 hour)
   * @returns {number} Number of entries pruned
   */
  pruneOldEntries(maxAge = 3600000) {
    const now = Date.now();
    const keysToDelete = [];
    
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.lastAccessed > maxAge) {
        keysToDelete.push(key);
      }
    }
    
    keysToDelete.forEach(key => this.cache.delete(key));
    return keysToDelete.length;
  }

  /**
   * Reset statistics
   */
  resetStats() {
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TranslationCache;
}
