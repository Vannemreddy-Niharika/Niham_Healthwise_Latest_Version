/* ====================================== */
/* NIHAM - Language Management            */
/* ====================================== */

/**
 * Initialize language selector
 */
function initLanguageSelector() {
  const langSelect = document.getElementById("langSelect");
  if (!langSelect) return;

  // Load saved language or detect from browser
  const saved = localStorage.getItem("NIHAM_lang");
  const browserLang = (navigator.language || "en").slice(0, 2);
  const lang = (saved && TRANSLATIONS[saved]) ? saved : TRANSLATIONS[browserLang] ? browserLang : "en";

  if (langSelect.value !== lang) {
    langSelect.value = lang;
  }

  // Listen for changes
  langSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    applyLanguage(selectedLang);
  });

  debugLog("Language", `Language selector initialized with: ${lang}`);
}

/**
 * Apply language changes to entire UI
 */
function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) {
    debugLog("Language", `Language not available: ${lang}, falling back to English`);
    lang = "en";
  }

  // Save preference
  setLanguage(lang);

  // Update all data-i18n attributes
  updateAllDataI18nElements(lang);

  // Update nav
  updateNavLanguage(lang);

  // Update page headings
  updateHeadingsLanguage(lang);

  // Update placeholders
  updatePlaceholders(lang);

  // Update vaccine page
  updateVaccinePage(lang);

  // Update AI Prediction page
  updateAIPredictionPage(lang);

  // Update Image Detection page
  updateImageDetectionPage(lang);

  // Update Emergency Mode
  updateEmergencyMode(lang);

  // Refresh content
  populateDiseaseList();
  populateRemedyList();

  // Update about section
  updateAboutSection(lang);

  debugLog("Language", `Applied language: ${lang}`);
  showNotification(`Language changed to ${lang.toUpperCase()}`, "success", 2000);
}

/**
 * Update all elements with data-i18n attributes
 */
function updateAllDataI18nElements(lang) {
  // Update all elements with data-i18n attribute (text content)
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = tr(lang, key, element.textContent);
      if (translation) {
        element.textContent = translation;
      }
    }
  });

  // Update all elements with data-i18n-placeholder attribute (input placeholders)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (key) {
      const translation = tr(lang, key, element.placeholder);
      if (translation) {
        element.placeholder = translation;
      }
    }
  });

  // Update all elements with data-i18n-html attribute (HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (key) {
      const translation = tr(lang, key, element.innerHTML);
      if (translation) {
        element.innerHTML = translation;
      }
    }
  });
}

/**
 * Update navigation buttons language
 */
function updateNavLanguage(lang) {
  const navMap = {
    home: "ui.home",
    explore: "ui.explore",
    remedies: "ui.remedies",
    vaccines: "ui.vaccines",
    "ai-prediction": "ui.aiPrediction",
    "image-detection": "ui.imageDetection",
    chatbot: "ui.chatbot",
    statistics: "ui.statistics",
    about: "ui.about",
  };

  document.querySelectorAll(".nav button[data-page]").forEach((btn) => {
    const page = btn.dataset.page;
    const key = navMap[page];
    if (key) {
      btn.textContent = tr(lang, key, btn.textContent);
    }
  });

  // Update Emergency button
  const emergencyBtn = document.getElementById('emergencyModeBtn');
  if (emergencyBtn) {
    emergencyBtn.textContent = tr(lang, 'ui.emergency', '🚨 Emergency');
  }
}

/**
 * Update page headings language
 */
function updateHeadingsLanguage(lang) {
  // Explore Diseases heading
  const exploreHeading = document.querySelector("#explore h2");
  if (exploreHeading) {
    exploreHeading.textContent = tr(lang, "ui.explore", "Diseases Explorer");
  }

  // Natural Remedies heading
  const remediesHeading = document.querySelector("#remedies h2");
  if (remediesHeading) {
    remediesHeading.textContent = tr(lang, "ui.remedies", "Natural & Home Remedies");
  }

  // Chatbot heading
  const chatbotHeading = document.querySelector("#chatbot h2");
  if (chatbotHeading) {
    chatbotHeading.textContent = tr(lang, "ui.chatbot", "AI Health Chatbot");
  }

  // Statistics heading
  const statsHeading = document.querySelector("#statistics h2");
  if (statsHeading) {
    statsHeading.textContent = tr(lang, "ui.statistics", "Global Health Statistics");
  }
}

/**
 * Update search placeholders
 */
function updatePlaceholders(lang) {
  const diseaseSearch = document.getElementById("diseaseSearch");
  if (diseaseSearch) {
    diseaseSearch.placeholder = tr(
      lang,
      "ui.searchPlaceholder",
      "Search disease..."
    );
  }

  const remedySearch = document.getElementById("remedySearch");
  if (remedySearch) {
    remedySearch.placeholder = tr(
      lang,
      "ui.remedySearchPlaceholder",
      "Search remedy..."
    );
  }

  const chatInput = document.getElementById("chatInput");
  if (chatInput) {
    chatInput.placeholder = tr(
      lang,
      "ui.searchPlaceholder",
      "Ask about a disease, remedy, diet, or general health question..."
    );
  }
}

/**
 * Update about section
 */
function updateAboutSection(lang) {
  const aboutContainer = document.querySelector(".about-container");
  if (!aboutContainer) return;

  // Update title
  const aboutTitle = aboutContainer.querySelector("h2");
  if (aboutTitle) {
    aboutTitle.textContent = tr(lang, "about.title", "About NIHAM HealthWise");
  }

  // Update intro paragraph
  const aboutIntro = aboutContainer.querySelector(".about-intro");
  if (aboutIntro) {
    aboutIntro.textContent = tr(lang, "about.body", "");
  }

  // Update "Why We Built" section
  const whyBuiltHeading = aboutContainer.querySelector("h3[data-i18n='about.whyBuilt']");
  if (whyBuiltHeading) {
    whyBuiltHeading.textContent = tr(lang, "about.whyBuilt", "🌍 Why We Built NIHAM HealthWise");
  }

  const whyBuiltBody = aboutContainer.querySelector("p[data-i18n='about.whyBuiltBody']");
  if (whyBuiltBody) {
    whyBuiltBody.textContent = tr(lang, "about.whyBuiltBody", "");
  }

  // Update "Why You Should Use It" section
  const whyUseHeading = aboutContainer.querySelector("h3[data-i18n='about.whyUse']");
  if (whyUseHeading) {
    whyUseHeading.textContent = tr(lang, "about.whyUse", "⚡ Why You Should Use It");
  }

  // Update bullet points
  const points = aboutContainer.querySelectorAll(".about-points li[data-i18n-html]");
  points.forEach((li) => {
    const key = li.getAttribute("data-i18n-html");
    const translation = tr(lang, key, "");
    if (translation) {
      li.innerHTML = translation;
    }
  });

  // Update Core Features section
  const featureCards = aboutContainer.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    const title = card.querySelector("h4[data-i18n]");
    const body = card.querySelector("p[data-i18n]");
    
    if (title) {
      const key = title.getAttribute("data-i18n");
      title.textContent = tr(lang, key, title.textContent);
    }
    
    if (body) {
      const key = body.getAttribute("data-i18n");
      body.textContent = tr(lang, key, body.textContent);
    }
  });

  // Update Mission section
  const missionTitle = aboutContainer.querySelector("h3[data-i18n='core.mission.title']");
  if (missionTitle) {
    missionTitle.textContent = tr(lang, "core.mission.title", "🚀 Our Mission");
  }

  const missionBody = aboutContainer.querySelector("p[data-i18n='core.mission.body']");
  if (missionBody) {
    const translation = tr(lang, "core.mission.body", "");
    if (translation) {
      missionBody.innerHTML = translation;
    }
  }
}

/**
 * Update vaccine page
 */
function updateVaccinePage(lang) {
  // Update title
  const vaccineTitle = document.querySelector("#vaccines h2[data-i18n='vaccines.title']");
  if (vaccineTitle) {
    vaccineTitle.textContent = tr(lang, "vaccines.title", "💉 Vaccine Schedule");
  }

  // Update subtitle
  const vaccineSubtitle = document.querySelector("#vaccines p[data-i18n='vaccines.subtitle']");
  if (vaccineSubtitle) {
    vaccineSubtitle.textContent = tr(lang, "vaccines.subtitle", "Enter your age and gender to see recommended vaccines");
  }

  // Update age label
  const ageLabel = document.querySelector("label[data-i18n='vaccines.ageLabel']");
  if (ageLabel) {
    ageLabel.textContent = tr(lang, "vaccines.ageLabel", "Age (years)");
  }

  // Update age placeholder
  const ageInput = document.getElementById("vaccineAge");
  if (ageInput) {
    ageInput.placeholder = tr(lang, "vaccines.agePlaceholder", "Enter age");
  }

  // Update gender label
  const genderLabel = document.querySelector("label[data-i18n='vaccines.genderLabel']");
  if (genderLabel) {
    genderLabel.textContent = tr(lang, "vaccines.genderLabel", "Gender");
  }

  // Update gender select options
  const genderSelect = document.getElementById("vaccineGender");
  if (genderSelect) {
    const options = genderSelect.querySelectorAll("option");
    options.forEach((option) => {
      const key = option.getAttribute("data-i18n");
      if (key) {
        option.textContent = tr(lang, key, option.textContent);
      }
    });
  }

  // Update button
  const getVaccinesBtn = document.getElementById("getVaccinesBtn");
  if (getVaccinesBtn) {
    getVaccinesBtn.textContent = tr(lang, "vaccines.getVaccinesBtn", "Get Vaccines");
  }

  // Update default message
  const defaultMessage = document.querySelector("#vaccineResults p[data-i18n='vaccines.defaultMessage']");
  if (defaultMessage) {
    defaultMessage.textContent = tr(lang, "vaccines.defaultMessage", "Enter your age and gender above to see your personalized vaccine schedule");
  }
}

/**
 * Get available languages
 */
function getAvailableLanguages() {
  return Object.keys(TRANSLATIONS).map((code) => ({
    code,
    name: getLanguageName(code),
  }));
}

/**
 * Get language name by code
 */
function getLanguageName(code) {
  const names = {
    en: "English",
    hi: "हिन्दी (Hindi)",
    te: "తెలుగు (Telugu)",
    ta: "தமிழ் (Tamil)",
    bn: "বাংলা (Bengali)",
    mr: "मराठी (Marathi)",
    gu: "ગુજરાતી (Gujarati)",
    fr: "Français (French)",
    es: "Español (Spanish)",
    ko: "한국어 (Korean)",
  };
  return names[code] || code.toUpperCase();
}

/**
 * Auto-detect browser language
 */
function detectBrowserLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage || "en")
    .slice(0, 2)
    .toLowerCase();

  return TRANSLATIONS[browserLang] ? browserLang : "en";
}

/**
 * Set browser language as default
 */
function setBrowserLanguageAsDefault() {
  const browserLang = detectBrowserLanguage();
  if (!localStorage.getItem("NIHAM_lang")) {
    applyLanguage(browserLang);
  }
}

/**
 * Change language programmatically
 */
function changeLanguage(langCode) {
  const langSelect = document.getElementById("langSelect");
  if (langSelect && TRANSLATIONS[langCode]) {
    langSelect.value = langCode;
    applyLanguage(langCode);
  } else {
    debugLog("Language", `Invalid language code: ${langCode}`);
  }
}

/**
 * Get current language full name
 */
function getCurrentLanguageName() {
  const lang = getCurrentLanguage();
  return getLanguageName(lang);
}

/**
 * Export for modular use
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initLanguageSelector,
    applyLanguage,
    updateNavLanguage,
    updateHeadingsLanguage,
    updatePlaceholders,
    getAvailableLanguages,
    getLanguageName,
    detectBrowserLanguage,
    setBrowserLanguageAsDefault,
    changeLanguage,
    getCurrentLanguageName,
  };
}


/**
 * Update AI Prediction page
 */
function updateAIPredictionPage(lang) {
  // Update title
  const aiTitle = document.querySelector("#ai-prediction h2");
  if (aiTitle) {
    aiTitle.textContent = tr(lang, "aiPrediction.title", "🤖 AI Disease Prediction");
  }

  // Update subtitle
  const aiSubtitle = document.querySelector("#ai-prediction > p");
  if (aiSubtitle) {
    aiSubtitle.textContent = tr(lang, "aiPrediction.subtitle", "Enter your symptoms and our AI will predict possible diseases");
  }

  // Update "Select Your Symptoms" heading
  const symptomsHeading = document.querySelector("#ai-prediction h3");
  if (symptomsHeading) {
    symptomsHeading.textContent = tr(lang, "aiPrediction.selectSymptoms", "Select Your Symptoms");
  }

  // Update additional symptoms label
  const additionalLabel = document.querySelector("#ai-prediction label");
  if (additionalLabel) {
    additionalLabel.textContent = tr(lang, "aiPrediction.additionalLabel", "Additional Symptoms (Optional)");
  }

  // Update additional symptoms placeholder
  const additionalTextarea = document.getElementById("additionalSymptoms");
  if (additionalTextarea) {
    additionalTextarea.placeholder = tr(lang, "aiPrediction.additionalPlaceholder", "Describe any other symptoms you're experiencing...");
  }

  // Update predict button
  const predictBtn = document.getElementById("predictDiseaseBtn");
  if (predictBtn) {
    predictBtn.textContent = tr(lang, "aiPrediction.predictBtn", "🔍 Predict Disease");
  }
}

/**
 * Update Image Detection page
 */
function updateImageDetectionPage(lang) {
  // Update title
  const imageTitle = document.querySelector("#image-detection h2");
  if (imageTitle) {
    imageTitle.textContent = tr(lang, "imageDetection.title", "📸 Image-Based Disease Detection");
  }

  // Update subtitle
  const imageSubtitle = document.querySelector("#image-detection > p");
  if (imageSubtitle) {
    imageSubtitle.textContent = tr(lang, "imageDetection.subtitle", "Upload an image for AI-powered analysis (skin conditions, X-rays, etc.)");
  }

  // Update drop zone text
  const dropZoneText = document.querySelector("#imageDropZone p:first-of-type");
  if (dropZoneText) {
    dropZoneText.textContent = tr(lang, "imageDetection.clickUpload", "Click to upload or drag & drop");
  }

  const dropZoneSupported = document.querySelector("#imageDropZone p:last-of-type");
  if (dropZoneSupported) {
    dropZoneSupported.textContent = tr(lang, "imageDetection.supported", "Supported: JPG, PNG, JPEG (Max 5MB)");
  }

  // Update analyze button
  const analyzeBtn = document.getElementById("analyzeImageBtn");
  if (analyzeBtn) {
    analyzeBtn.textContent = tr(lang, "imageDetection.analyzeBtn", "🔬 Analyze Image");
  }

  // Update clear button
  const clearBtn = document.getElementById("clearImageBtn");
  if (clearBtn) {
    clearBtn.textContent = tr(lang, "imageDetection.clearBtn", "Clear");
  }
}


/**
 * Update Emergency Mode overlay
 */
function updateEmergencyMode(lang) {
  // Check if Emergency Mode overlay exists
  const overlay = document.getElementById('emergencyOverlay');
  if (!overlay) return;

  // If Emergency Mode is active, recreate the overlay with new translations
  if (emergencyMode && emergencyMode.enabled) {
    // Hide current overlay
    hideEmergencyOverlay();
    // Show updated overlay
    setTimeout(() => showEmergencyOverlay(), 100);
  }
}
