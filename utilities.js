/* ====================================== */
/* NIHAM HealthWise - Utility Functions   */
/* ====================================== */

/**
 * Get current active language
 */
function getCurrentLanguage() {
  return localStorage.getItem("NIHAM_lang") || "en";
}

/**
 * Set and save language
 */
function setLanguage(lang) {
  localStorage.setItem("NIHAM_lang", lang);
}

/**
 * Find disease by id from DATA
 */
function findDiseaseById(diseaseId) {
  return DISEASES_DATA.find((d) => d.id === diseaseId);
}

/**
 * Find disease by name (case-insensitive)
 */
function findDiseaseByName(name) {
  const lowerName = name.toLowerCase();
  return DISEASES_DATA.find((d) =>
    d.name.toLowerCase().includes(lowerName)
  );
}

/**
 * Get all diseases
 */
function getAllDiseases() {
  return DISEASES_DATA;
}

/**
 * Search diseases by query
 */
function searchDiseases(query) {
  if (!query || query.trim() === "") {
    return DISEASES_DATA;
  }

  const q = query.toLowerCase();
  return DISEASES_DATA.filter((disease) => {
    return (
      disease.id.includes(q) ||
      disease.name.toLowerCase().includes(q) ||
      disease.remedy.includes(q) ||
      disease.remedyText.toLowerCase().includes(q) ||
      disease.diet.toLowerCase().includes(q) ||
      disease.severity.toLowerCase().includes(q)
    );
  });
}

/**
 * Text to speech utility
 */
function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate || 1;
  utterance.pitch = options.pitch || 1;
  utterance.volume = options.volume || 1;
  utterance.lang = options.lang || "en-US";

  speechSynthesis.cancel(); // Cancel any ongoing speech
  speechSynthesis.speak(utterance);
}

/**
 * Stop speech synthesis
 */
function stopSpeech() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
}

/**
 * Format date
 */
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

/**
 * Debounce function for search
 */
function debounce(func, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * Throttle function
 */
function throttle(func, limit = 300) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Log helper for debugging
 */
function debugLog(tag, message, data = null) {
  const timestamp = new Date().toLocaleTimeString();
  if (data) {
    console.log(`[${timestamp}] ${tag}: ${message}`, data);
  } else {
    console.log(`[${timestamp}] ${tag}: ${message}`);
  }
}

/**
 * Show notification/toast
 */
function showNotification(message, type = "info", duration = 3000) {
  // Can be replaced with a toast library like toastr
  const div = document.createElement("div");
  div.className = `notification notification-${type}`;
  div.textContent = message;
  div.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "error" ? "#ff4444" : type === "success" ? "#44ff44" : "#4444ff"};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, duration);
}

/**
 * Scroll to element smoothly
 */
function scrollToElement(element, options = {}) {
  if (!element) return;
  element.scrollIntoView({
    behavior: options.behavior || "smooth",
    block: options.block || "center",
  });
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get random item from array
 */
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Capitalize first letter
 */
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Export for modular use
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getCurrentLanguage,
    setLanguage,
    findDiseaseById,
    findDiseaseByName,
    getAllDiseases,
    searchDiseases,
    speak,
    stopSpeech,
    formatDate,
    debounce,
    throttle,
    debugLog,
    showNotification,
    scrollToElement,
    isInViewport,
    getRandomItem,
    capitalize,
  };
}
