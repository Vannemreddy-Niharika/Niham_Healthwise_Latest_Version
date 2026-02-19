/* ====================================== */
/* NIHAM - Search & Filter Functions      */
/* ====================================== */

/**
 * Search diseases based on query
 */
function searchDisease() {
  const query = document.getElementById("diseaseSearch");
  if (!query) return;

  const q = query.value.trim().toLowerCase();
  const cards = document.querySelectorAll("#diseaseList .disease-card");

  if (!q) {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    return;
  }

  let foundCount = 0;
  cards.forEach((card) => {
    const name = card.getAttribute("data-name") || "";
    const id = card.getAttribute("data-id") || "";
    const content = card.textContent.toLowerCase();

    const matches =
      name.includes(q) || id.includes(q) || content.includes(q);

    if (matches) {
      card.style.display = "block";
      foundCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (foundCount === 0) {
    showNotification(
      'No disease found. Try simpler terms like "fever", "diabetes", "cold".',
      "info"
    );
  }

  debugLog("Search", `Found ${foundCount} disease results for: "${q}"`);
}

/**
 * Show all diseases
 */
function showAllDiseases() {
  const searchInput = document.getElementById("diseaseSearch");
  if (searchInput) {
    searchInput.value = "";
  }

  const cards = document.querySelectorAll("#diseaseList .disease-card");
  cards.forEach((card) => {
    card.style.display = "block";
  });

  debugLog("Search", "Showing all diseases");
}

/**
 * Search remedies based on query
 */
function searchRemedy() {
  const query = document.getElementById("remedySearch");
  if (!query) return;

  const q = query.value.trim().toLowerCase();
  const cards = document.querySelectorAll("#remedyList .remedy-card");

  if (!q) {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    return;
  }

  let foundCount = 0;
  cards.forEach((card) => {
    const remedy = card.getAttribute("data-remedy") || "";
    const content = card.textContent.toLowerCase();

    const matches = remedy.includes(q) || content.includes(q);

    if (matches) {
      card.style.display = "block";
      foundCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (foundCount === 0) {
    showNotification("No remedies found. Try another term.", "info");
  }

  debugLog("Search", `Found ${foundCount} remedy results for: "${q}"`);
}

/**
 * Show all remedies
 */
function showAllRemedies() {
  const searchInput = document.getElementById("remedySearch");
  if (searchInput) {
    searchInput.value = "";
  }

  const cards = document.querySelectorAll("#remedyList .remedy-card");
  cards.forEach((card) => {
    card.style.display = "block";
  });

  debugLog("Search", "Showing all remedies");
}

/**
 * Filter disease by severity
 */
function filterBySeverity(severity) {
  const cards = document.querySelectorAll("#diseaseList .disease-card");

  if (!severity || severity === "all") {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    debugLog("Filter", "Showing all severities");
    return;
  }

  let foundCount = 0;
  cards.forEach((card) => {
    const content = card.textContent.toLowerCase();
    if (content.includes(severity.toLowerCase())) {
      card.style.display = "block";
      foundCount++;
    } else {
      card.style.display = "none";
    }
  });

  debugLog(
    "Filter",
    `Filtered by severity "${severity}": ${foundCount} results`
  );
}

/**
 * Filter disease by curable status
 */
function filterByCurable(status) {
  const cards = document.querySelectorAll("#diseaseList .disease-card");

  if (!status || status === "all") {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    return;
  }

  let foundCount = 0;
  const searchTerm = status.toLowerCase();

  cards.forEach((card) => {
    const content = card.textContent.toLowerCase();
    const isCurable =
      content.includes("curable: yes") || content.includes("curable: yes");
    const isManageable =
      content.includes("manageable") || content.includes("treatable");

    let matches = false;
    if (
      status.toLowerCase() === "yes" ||
      status.toLowerCase() === "curable"
    ) {
      matches = isCurable;
    } else if (
      status.toLowerCase() === "manageable" ||
      status.toLowerCase() === "treatable"
    ) {
      matches = isManageable;
    }

    if (matches) {
      card.style.display = "block";
      foundCount++;
    } else {
      card.style.display = "none";
    }
  });

  debugLog(
    "Filter",
    `Filtered by status "${status}": ${foundCount} results`
  );
}

/**
 * Advanced search with multiple filters
 */
function advancedSearch(filters) {
  const {
    query = "",
    severity = null,
    curable = null,
    minRecoveryTime = null,
  } = filters;

  const cards = document.querySelectorAll("#diseaseList .disease-card");
  let foundCount = 0;

  cards.forEach((card) => {
    let matches = true;
    const content = card.textContent.toLowerCase();

    // Query filter
    if (query) {
      const q = query.toLowerCase();
      matches = matches && content.includes(q);
    }

    // Severity filter
    if (severity && matches) {
      matches = matches && content.includes(severity.toLowerCase());
    }

    // Curable filter
    if (curable && matches) {
      if (curable === "yes") {
        matches =
          matches &&
          (content.includes("curable: yes") ||
            content.includes("curable: usually"));
      } else if (curable === "manageable") {
        matches = matches && content.includes("manageable");
      }
    }

    if (matches) {
      card.style.display = "block";
      foundCount++;
    } else {
      card.style.display = "none";
    }
  });

  debugLog("Search", `Advanced search found ${foundCount} results`);
  return foundCount;
}

/**
 * Sort diseases
 */
function sortDiseases(sortBy) {
  const diseaseList = document.getElementById("diseaseList");
  if (!diseaseList) return;

  const cards = Array.from(
    document.querySelectorAll("#diseaseList .disease-card")
  );

  cards.sort((a, b) => {
    const aText = a.textContent;
    const bText = b.textContent;

    switch (sortBy) {
      case "name":
        return aText.localeCompare(bText);
      case "name-desc":
        return bText.localeCompare(aText);
      case "severity":
        const severityOrder = {
          critical: 0,
          high: 1,
          moderate: 2,
          "low-medium": 3,
          medium: 4,
          low: 5,
          variable: 6,
        };
        const aSeverity =
          severityOrder[
            (aText.match(/Severity:\s*(\w+(?:-\w+)?)/i) || [])[1]?.toLowerCase()
          ] || 99;
        const bSeverity =
          severityOrder[
            (bText.match(/Severity:\s*(\w+(?:-\w+)?)/i) || [])[1]?.toLowerCase()
          ] || 99;
        return aSeverity - bSeverity;
      default:
        return 0;
    }
  });

  // Re-append sorted cards
  cards.forEach((card) => {
    diseaseList.appendChild(card);
  });

  debugLog("Sort", `Sorted by: ${sortBy}`);
}

/**
 * Reset all filters and search
 */
function resetAllFilters() {
  const diseaseSearch = document.getElementById("diseaseSearch");
  const remedySearch = document.getElementById("remedySearch");

  if (diseaseSearch) diseaseSearch.value = "";
  if (remedySearch) remedySearch.value = "";

  showAllDiseases();
  showAllRemedies();

  debugLog("Filter", "All filters reset");
}

/**
 * Export for modular use
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    searchDisease,
    showAllDiseases,
    searchRemedy,
    showAllRemedies,
    filterBySeverity,
    filterByCurable,
    advancedSearch,
    sortDiseases,
    resetAllFilters,
  };
}
