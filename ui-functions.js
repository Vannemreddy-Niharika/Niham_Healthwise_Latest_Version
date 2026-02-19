/* ====================================== */
/* NIHAM HealthWise - UI Functions        */
/* ====================================== */

/**
 * Create a disease card element
 */
async function createDiseaseCard(disease) {
  const lang = getCurrentLanguage();
  const div = document.createElement("div");
  div.className = "disease-card";
  div.setAttribute("data-name", disease.name.toLowerCase());
  div.setAttribute("data-id", disease.id);

  const severityLabel = tr(lang, "labels.severity", "Severity");
  const dietLabel = tr(lang, "labels.diet", "Diet");
  const medLabel = tr(lang, "labels.med", "Medication");
  const timeLabel = tr(lang, "labels.time", "Time");
  const curableLabel = tr(lang, "labels.curable", "Curable");
  const remedyBtn = tr(lang, "buttons.viewRemedy", "View Natural Remedies");
  const chatBtn = tr(lang, "buttons.askChatbot", "Ask Chatbot");

  // Translate disease name
  const translationManager = getTranslationManager();
  let diseaseName = disease.name;
  let severity = disease.severity;
  let diet = disease.diet;
  let med = disease.med;
  let time = disease.time;
  let curable = disease.curable;
  
  if (translationManager && translationManager.isInitialized() && lang !== 'en') {
    try {
      // Translate disease name
      const cleanName = disease.name.replace(/[🤒🥶😷🔵❤️‍🩹🫁🤧]/g, '').trim().toLowerCase();
      diseaseName = await translationManager.translate(cleanName, lang, 'diseases');
      
      // Translate all content fields
      severity = await translationManager.translate(disease.severity.toLowerCase(), lang, 'diseaseContent');
      diet = await translationManager.translate(disease.diet.toLowerCase(), lang, 'diseaseContent');
      med = await translationManager.translate(disease.med.toLowerCase(), lang, 'diseaseContent');
      time = await translationManager.translate(disease.time.toLowerCase(), lang, 'diseaseContent');
      curable = await translationManager.translate(disease.curable.toLowerCase(), lang, 'diseaseContent');
    } catch (err) {
      console.warn('Translation error:', err);
    }
  }

  div.innerHTML = `
    <h3>${diseaseName}</h3>
    <p><strong>${severityLabel}:</strong> ${severity}</p>
    <p><strong>${dietLabel}:</strong> ${diet}</p>
    <p><strong>${medLabel}:</strong> ${med}</p>
    <p><strong>${timeLabel}:</strong> ${time}</p>
    <p><strong>${curableLabel}:</strong> ${curable}</p>
    <div class="small-actions">
      <button onclick="openRemedy('${disease.remedy}')" class="primary">${remedyBtn}</button>
      <button onclick="askChat('${disease.id}')">${chatBtn}</button>
    </div>
  `;
  
  // Add voice button
  if (isVoiceAvailable()) {
    const voiceText = `${diseaseName}. ${severityLabel}: ${severity}. ${dietLabel}: ${diet}. ${medLabel}: ${med}. ${timeLabel}: ${time}. ${curableLabel}: ${curable}`;
    const voiceBtn = createVoiceButton(voiceText, lang);
    const h3 = div.querySelector('h3');
    if (h3) {
      h3.style.display = 'flex';
      h3.style.alignItems = 'center';
      h3.style.gap = '8px';
      h3.appendChild(voiceBtn);
    }
  }
  
  return div;
}

/**
 * Create a remedy card element
 */
async function createRemedyCard(disease) {
  const div = document.createElement("div");
  div.className = "remedy-card";
  div.setAttribute("data-remedy", disease.remedy);

  const lang = getCurrentLanguage();
  const remedyLabel = tr(lang, "ui.remedies", "Natural Remedy");
  
  // Translate disease name and remedy text
  const translationManager = getTranslationManager();
  let diseaseName = disease.name;
  let remedyText = disease.remedyText;
  
  if (translationManager && translationManager.isInitialized() && lang !== 'en') {
    try {
      const cleanName = disease.name.replace(/[🤒🥶😷🔵❤️‍🩹🫁🤧]/g, '').trim().toLowerCase();
      diseaseName = await translationManager.translate(cleanName, lang, 'diseases');
      remedyText = await translationManager.translate(disease.remedyText.toLowerCase(), lang, 'diseaseContent');
    } catch (err) {
      console.warn('Translation error:', err);
    }
  }

  div.innerHTML = `
    <h3>${diseaseName}</h3>
    <p><strong>${remedyLabel}:</strong> ${remedyText}</p>
  `;
  
  // Add voice button
  if (isVoiceAvailable()) {
    const voiceText = `${diseaseName}. ${remedyLabel}: ${remedyText}`;
    const voiceBtn = createVoiceButton(voiceText, lang);
    const h3 = div.querySelector('h3');
    if (h3) {
      h3.style.display = 'flex';
      h3.style.alignItems = 'center';
      h3.style.gap = '8px';
      h3.appendChild(voiceBtn);
    }
  }
  
  return div;
}

/**
 * Set active page
 */
function setActivePage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add("active");
  }

  // Update nav button active state
  const navButtons = document.querySelectorAll(".nav button[data-page]");
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });

  // Focus search input for explore/remedies
  if (pageId === "explore") {
    setTimeout(() => {
      const searchInput = document.getElementById("diseaseSearch");
      if (searchInput) searchInput.focus();
    }, 120);
  }
  if (pageId === "remedies") {
    setTimeout(() => {
      const searchInput = document.getElementById("remedySearch");
      if (searchInput) searchInput.focus();
    }, 120);
  }

  debugLog("UI", `Switched to page: ${pageId}`);
}

/**
 * Populate disease list
 */
async function populateDiseaseList() {
  const diseaseList = document.getElementById("diseaseList");
  if (!diseaseList) return;

  diseaseList.innerHTML = "";
  const diseases = getAllDiseases();
  
  for (const disease of diseases) {
    const card = await createDiseaseCard(disease);
    diseaseList.appendChild(card);
  }

  debugLog("UI", `Populated ${diseases.length} diseases`);
}

/**
 * Populate remedy list
 */
async function populateRemedyList() {
  const remedyList = document.getElementById("remedyList");
  if (!remedyList) return;

  remedyList.innerHTML = "";
  const diseases = getAllDiseases();
  
  for (const disease of diseases) {
    const card = await createRemedyCard(disease);
    remedyList.appendChild(card);
  }

  debugLog("UI", `Populated ${diseases.length} remedies`);
}

/**
 * Update UI text based on language
 */
function updateUILanguage(lang) {
  // Update nav buttons
  const navMap = {
    home: "ui.home",
    explore: "ui.explore",
    remedies: "ui.remedies",
    chatbot: "ui.chatbot",
    statistics: "ui.statistics",
    about: "ui.about",
  };

  document.querySelectorAll(".nav button[data-page]").forEach((btn) => {
    const page = btn.dataset.page;
    const translationKey = navMap[page];
    if (translationKey) {
      btn.textContent = tr(lang, translationKey, btn.textContent);
    }
  });

  // Update search placeholders
  const diseaseSearch = document.getElementById("diseaseSearch");
  if (diseaseSearch) {
    diseaseSearch.placeholder = tr(
      lang,
      "ui.searchPlaceholder",
      diseaseSearch.placeholder
    );
  }

  const remedySearch = document.getElementById("remedySearch");
  if (remedySearch) {
    remedySearch.placeholder = tr(
      lang,
      "ui.remedySearchPlaceholder",
      remedySearch.placeholder
    );
  }

  const chatInput = document.getElementById("chatInput");
  if (chatInput) {
    chatInput.placeholder = tr(
      lang,
      "ui.searchPlaceholder",
      "Ask a health question..."
    );
  }

  // Refresh disease and remedy cards
  populateDiseaseList();
  populateRemedyList();

  debugLog("UI", `Updated language to: ${lang}`);
}

/**
 * Highlight card with animation
 */
function highlightCard(element, duration = 2200) {
  if (!element) return;

  const originalShadow = element.style.boxShadow;
  element.style.boxShadow = "0 0 18px 4px rgba(0,255,170,0.18)";

  setTimeout(() => {
    element.style.boxShadow = originalShadow;
  }, duration);
}

/**
 * Open remedy page and highlight card
 */
function openRemedy(remedyId) {
  setActivePage("remedies");
  setTimeout(() => {
    const card = document.querySelector(
      `#remedyList .remedy-card[data-remedy="${remedyId}"]`
    );
    if (card) {
      scrollToElement(card, { behavior: "smooth", block: "center" });
      highlightCard(card);
    } else {
      showNotification(
        "No specific remedy listed for this condition",
        "info"
      );
    }
  }, 180);
}

/**
 * Clear all cards from a container
 */
function clearCards(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "";
  }
}

/**
 * Show loading spinner
 */
function showLoadingSpinner(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div style="text-align:center; padding: 40px;">
      <div style="
        border: 3px solid rgba(0,255,200,0.2);
        border-top: 3px solid #00ffc3;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
      "></div>
      <p style="color: var(--muted); margin-top: 15px;">Loading...</p>
    </div>
  `;
}

/**
 * Animate statistics section
 */
function animateCharts() {
  // Animate bars
  document.querySelectorAll(".bar-fill").forEach((bar) => {
    const width = bar.getAttribute("data-width");
    if (width) {
      bar.style.width = width + "%";
    }
  });

  // Animate counters
  const counters = document.querySelectorAll(".count");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");
    let current = 0;
    const speed = 20;

    const updateCounter = () => {
      if (current < target) {
        current++;
        counter.textContent = current;
        setTimeout(updateCounter, speed);
      }
    };

    updateCounter();
  });

  debugLog("UI", "Animated charts and counters");
}

/**
 * Scroll to element by id
 */
function scrollToPage(pageId) {
  const element = document.getElementById(pageId);
  if (element) {
    scrollToElement(element);
  }
}

/**
 * Export for modular use
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    createDiseaseCard,
    createRemedyCard,
    setActivePage,
    populateDiseaseList,
    populateRemedyList,
    updateUILanguage,
    highlightCard,
    openRemedy,
    clearCards,
    showLoadingSpinner,
    animateCharts,
    scrollToPage,
  };
}
