/* ====================================== */
/* NIHAM - Main Initialization Script     */
/* ====================================== */

/**
 * Initialize entire application
 */
async function initializeApp() {
  debugLog("Init", "Starting NIHAM HealthWise application...");

  try {
    // 1. Initialize translation and voice systems (async)
    try {
      await initializeTranslationAndVoice();
      debugLog("Init", "Translation and voice systems ready");
    } catch (error) {
      console.warn("Translation/Voice initialization had issues:", error);
      // Continue anyway - app works without these features
    }

    // 2. Set up language
    setBrowserLanguageAsDefault();
    initLanguageSelector();

    // 3. Populate initial content
    populateDiseaseList();
    populateRemedyList();

    // 4. Setup navigation
    setupNavigation();

    // 5. Setup search functionality
    setupSearchFunctionality();

    // 6. Setup chatbot
    initChatbot();

    // 7. Setup vaccine schedule
    initVaccineSchedule();

    // 8. Setup AI Prediction
    initAIPrediction();

    // 9. Setup Image Detection
    initImageDetection();

    // 10. Initialize Emergency Mode
    initEmergencyMode();

    // 11. Setup event listeners
    setupEventListeners();

    // 12. Initialize user profile
    initUserProfile();

    // 13. Handle intro animation
    handleIntroAnimation();

    // 9. Play welcome message
    playWelcomeMessage();

    debugLog("Init", "Application initialized successfully");
  } catch (error) {
    console.error("Error initializing app:", error);
    showNotification("Error initializing app. Please refresh the page.", "error");
  }
}

/**
 * Setup navigation
 */
function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav button[data-page]");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      navButtons.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Switch page
      const pageId = btn.dataset.page;
      setActivePage(pageId);

      // Trigger animations if needed
      if (pageId === "statistics") {
        setTimeout(animateCharts, 300);
      }
    });
  });

  debugLog("Init", "Navigation setup complete");
}

/**
 * Setup search functionality
 */
function setupSearchFunctionality() {
  // Disease search
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchDisease);
  }

  const showAllBtn = document.getElementById("showAllBtn");
  if (showAllBtn) {
    showAllBtn.addEventListener("click", showAllDiseases);
  }

  const diseaseSearch = document.getElementById("diseaseSearch");
  if (diseaseSearch) {
    diseaseSearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchDisease();
    });
    diseaseSearch.addEventListener("input", debounce(searchDisease, 500));
  }

  // Remedy search
  const remedySearchBtn = document.getElementById("remedySearchBtn");
  if (remedySearchBtn) {
    remedySearchBtn.addEventListener("click", searchRemedy);
  }

  const remedyShowAllBtn = document.getElementById("remedyShowAllBtn");
  if (remedyShowAllBtn) {
    remedyShowAllBtn.addEventListener("click", showAllRemedies);
  }

  const remedySearch = document.getElementById("remedySearch");
  if (remedySearch) {
    remedySearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchRemedy();
    });
    remedySearch.addEventListener("input", debounce(searchRemedy, 500));
  }

  debugLog("Init", "Search functionality setup complete");
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Ctrl+K or Cmd+K - Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const diseaseSearch = document.getElementById("diseaseSearch");
      if (diseaseSearch) diseaseSearch.focus();
    }

    // Escape - Close any modals
    if (e.key === "Escape") {
      // Can be expanded for modal support
    }
  });

  // Handle window resize for responsive updates
  window.addEventListener("resize", throttle(() => {
    debugLog("Event", "Window resized");
  }, 500));

  // Handle online/offline status
  window.addEventListener("online", () => {
    showNotification("You are back online!", "success");
    debugLog("Event", "Application is online");
  });

  window.addEventListener("offline", () => {
    showNotification(
      "You are offline. NIHAM works without internet connection.",
      "info"
    );
    debugLog("Event", "Application is offline");
  });

  debugLog("Init", "Event listeners setup complete");
}

/**
 * Handle intro animation
 */
function handleIntroAnimation() {
  const introPage = document.getElementById("intro");
  const homePage = document.getElementById("home");

  if (introPage && homePage) {
    // Hide intro after animation
    setTimeout(() => {
      introPage.style.display = "none";
      homePage.classList.add("active");
    }, 4000);
  }

  debugLog("Init", "Intro animation handled");
}

/**
 * Play welcome message
 */
function playWelcomeMessage() {
  const message = "Hello, welcome to NIHAM HealthWise. Blending Nature, Health and Innovation.";

  try {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    debugLog("Init", "Could not play welcome message", error);
  }
}

/**
 * Setup statistics page
 */
function setupStatisticsPage() {
  const statsBtn = document.querySelector('.nav button[data-page="statistics"]');
  if (statsBtn) {
    statsBtn.addEventListener("click", () => {
      setTimeout(animateCharts, 300);
    });
  }
}

/**
 * Check if all required elements exist
 */
function validateDOM() {
  const required = [
    "diseaseList",
    "remedyList",
    "chatArea",
    "chatInput",
    "sendChatBtn",
    "diseaseSearch",
    "remedySearch",
    "langSelect",
  ];

  const missing = required.filter((id) => !document.getElementById(id));

  if (missing.length > 0) {
    console.warn("Missing DOM elements:", missing);
    return false;
  }

  return true;
}

/**
 * Run health check on app
 */
function runHealthCheck() {
  const checks = [
    { name: "DOM Elements", fn: validateDOM },
    { name: "Data Loaded", fn: () => DISEASES_DATA.length > 0 },
    { name: "Translations", fn: () => Object.keys(TRANSLATIONS).length > 0 },
    { name: "Storage", fn: () => typeof localStorage !== "undefined" },
  ];

  let passed = 0;
  checks.forEach((check) => {
    const result = check.fn();
    const status = result ? "✓" : "✗";
    console.log(`${status} ${check.name}`);
    if (result) passed++;
  });

  console.log(`\nHealth Check: ${passed}/${checks.length} passed`);
  return passed === checks.length;
}

/**
 * Display app version info
 */
function showAppInfo() {
  const info = `
  =====================================
  NIHAM HealthWise
  Version: 2.0 (Modular)
  Build Date: ${new Date().toLocaleDateString()}
  Diseases: ${DISEASES_DATA.length}
  Languages: ${Object.keys(TRANSLATIONS).length}
  =====================================
  `;
  console.log(info);
}

/**
 * Initialize user profile
 */
function initUserProfile() {
  const currentUser = getCurrentUser();
  const userInfo = document.getElementById('userInfo');
  const loginLink = document.getElementById('loginLink');
  const logoutBtn = document.getElementById('logoutBtn');

  if (currentUser) {
    // Show user info
    if (userInfo) {
      userInfo.style.display = 'flex';
      document.getElementById('userName').textContent = currentUser.name;
      
      if (currentUser.healthScore) {
        document.getElementById('userScore').textContent = `Health Score: ${currentUser.healthScore.totalScore}/100`;
      }
    }
    
    // Hide login link
    if (loginLink) {
      loginLink.style.display = 'none';
    }

    // Setup logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
          logoutUser();
        }
      });
    }
  } else {
    // Show login link
    if (loginLink) {
      loginLink.style.display = 'block';
    }
    if (userInfo) {
      userInfo.style.display = 'none';
    }
  }

  debugLog("Init", "User profile initialized");
}

/**
 * Get current user
 */
function getCurrentUser() {
  try {
    const userStr = localStorage.getItem('NIHAM_currentUser');
    return userStr ? JSON.parse(userStr) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Logout user
 */
function logoutUser() {
  localStorage.removeItem('NIHAM_currentUser');
  window.location.reload();
}

/**
 * Export for modular use
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeApp,
    setupNavigation,
    setupSearchFunctionality,
    setupEventListeners,
    handleIntroAnimation,
    playWelcomeMessage,
    validateDOM,
    runHealthCheck,
    showAppInfo,
  };
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    showAppInfo();
    runHealthCheck();
    initializeApp();
  });
} else {
  // DOM already loaded
  showAppInfo();
  runHealthCheck();
  initializeApp();
}
