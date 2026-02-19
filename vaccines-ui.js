/* ====================================== */
/* NIHAM - Vaccine Schedule UI            */
/* ====================================== */

/**
 * Initialize vaccine schedule functionality
 */
function initVaccineSchedule() {
  const getVaccinesBtn = document.getElementById('getVaccinesBtn');
  const vaccineAge = document.getElementById('vaccineAge');
  const vaccineGender = document.getElementById('vaccineGender');
  
  if (getVaccinesBtn) {
    getVaccinesBtn.addEventListener('click', displayVaccineSchedule);
  }
  
  // Allow Enter key to trigger search
  if (vaccineAge) {
    vaccineAge.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        displayVaccineSchedule();
      }
    });
  }
  
  debugLog('Vaccines', 'Vaccine schedule initialized');
}

/**
 * Display vaccine schedule based on user input
 */
async function displayVaccineSchedule() {
  const ageInput = document.getElementById('vaccineAge');
  const genderInput = document.getElementById('vaccineGender');
  const resultsDiv = document.getElementById('vaccineResults');
  
  if (!ageInput || !genderInput || !resultsDiv) return;
  
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;
  const lang = getCurrentLanguage();
  
  // Validation
  if (isNaN(age) || age < 0 || age > 120) {
    resultsDiv.innerHTML = `
      <div style="background: rgba(255,0,92,0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ff005c;">
        <p style="color: #ff005c; margin: 0;">${tr(lang, 'vaccines.errorAge', '⚠️ Please enter a valid age between 0 and 120 years')}</p>
      </div>
    `;
    return;
  }
  
  if (gender === 'both') {
    resultsDiv.innerHTML = `
      <div style="background: rgba(255,0,92,0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ff005c;">
        <p style="color: #ff005c; margin: 0;">${tr(lang, 'vaccines.errorGender', '⚠️ Please select a gender')}</p>
      </div>
    `;
    return;
  }
  
  // Get vaccines
  const currentVaccines = getVaccinesForAge(age, gender);
  const allVaccines = getAllVaccinesUpToAge(age, gender);
  
  // Translate vaccine names and descriptions
  const translationManager = getTranslationManager();
  if (translationManager && translationManager.isInitialized() && lang !== 'en') {
    // Translate current vaccines
    for (let vaccine of currentVaccines) {
      vaccine.translatedName = await translationManager.translate(vaccine.name, lang, 'general');
      vaccine.translatedDescription = await translationManager.translate(vaccine.description, lang, 'general');
    }
    
    // Translate all vaccines
    for (let vaccine of allVaccines) {
      vaccine.translatedName = await translationManager.translate(vaccine.name, lang, 'general');
      vaccine.translatedDescription = await translationManager.translate(vaccine.description, lang, 'general');
    }
  }
  
  // Display results
  let html = '';
  
  // Current/Upcoming Vaccines
  if (currentVaccines.length > 0) {
    const yearText = age === 1 ? tr(lang, 'vaccines.year', 'Year') : tr(lang, 'vaccines.years', 'Years');
    html += `
      <div style="margin-bottom: 30px;">
        <h3 style="color: var(--accent); margin-bottom: 15px;">
          ${tr(lang, 'vaccines.currentTitle', '💉 Recommended Vaccines for Age')} ${age} ${yearText}
        </h3>
        <div class="vaccine-grid">
    `;
    
    currentVaccines.forEach(vaccine => {
      html += createVaccineCard(vaccine, 'current', lang);
    });
    
    html += `</div></div>`;
  }
  
  // All vaccines taken so far
  if (allVaccines.length > 0) {
    const yearText = age === 1 ? tr(lang, 'vaccines.year', 'Year') : tr(lang, 'vaccines.years', 'Years');
    html += `
      <div style="margin-top: 40px;">
        <h3 style="color: var(--accent2); margin-bottom: 15px;">
          ${tr(lang, 'vaccines.historyTitle', '📋 Complete Vaccine History (Birth to')} ${age} ${yearText})
        </h3>
        <div class="vaccine-timeline">
    `;
    
    // Group by age
    const grouped = groupVaccinesByAge(allVaccines);
    
    Object.keys(grouped).sort((a, b) => {
      const aNum = parseFloat(a);
      const bNum = parseFloat(b);
      return aNum - bNum;
    }).forEach(ageGroup => {
      html += `
        <div class="vaccine-age-group">
          <div class="vaccine-age-label">${ageGroup}</div>
          <div class="vaccine-list">
      `;
      
      grouped[ageGroup].forEach(vaccine => {
        const displayName = vaccine.translatedName || vaccine.name;
        const displayDesc = vaccine.translatedDescription || vaccine.description;
        html += `
          <div class="vaccine-item">
            <span class="vaccine-name">✓ ${displayName}</span>
            <span class="vaccine-desc">${displayDesc}</span>
          </div>
        `;
      });
      
      html += `</div></div>`;
    });
    
    html += `</div></div>`;
  }
  
  if (currentVaccines.length === 0 && allVaccines.length === 0) {
    html = `
      <div style="background: rgba(0,255,195,0.05); padding: 30px; border-radius: 12px; text-align: center;">
        <p style="color: var(--muted); font-size: 18px;">
          ${tr(lang, 'vaccines.noVaccines', 'ℹ️ No specific vaccines recommended at this age.')}
          <br><br>
          ${tr(lang, 'vaccines.reminder', 'Remember to get your annual flu shot and maintain routine boosters!')}
        </p>
      </div>
    `;
  }
  
  resultsDiv.innerHTML = html;
  
  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  debugLog('Vaccines', `Displayed vaccines for age ${age}, gender ${gender}`);
}

/**
 * Create a vaccine card
 */
function createVaccineCard(vaccine, type, lang) {
  const cardClass = type === 'current' ? 'vaccine-card-current' : 'vaccine-card-past';
  const ageLabel = tr(lang, 'vaccines.agePrefix', 'Age:');
  const displayName = vaccine.translatedName || vaccine.name;
  const displayDesc = vaccine.translatedDescription || vaccine.description;
  
  return `
    <div class="${cardClass}" style="
      background: rgba(0,255,195,0.08);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid var(--accent);
      margin-bottom: 15px;
    ">
      <h4 style="color: var(--accent); margin: 0 0 10px 0; font-size: 18px;">
        💉 ${displayName}
      </h4>
      <p style="color: var(--muted); margin: 5px 0; font-size: 14px;">
        <strong>${ageLabel}</strong> ${vaccine.ageDisplay}
      </p>
      <p style="color: #cfe; margin: 10px 0 0 0; font-size: 14px;">
        ${displayDesc}
      </p>
    </div>
  `;
}

/**
 * Group vaccines by age display
 */
function groupVaccinesByAge(vaccines) {
  const grouped = {};
  
  vaccines.forEach(vaccine => {
    const ageGroup = vaccine.ageDisplay;
    if (!grouped[ageGroup]) {
      grouped[ageGroup] = [];
    }
    grouped[ageGroup].push(vaccine);
  });
  
  return grouped;
}

/**
 * Export for modular use
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initVaccineSchedule,
    displayVaccineSchedule,
    createVaccineCard,
    groupVaccinesByAge
  };
}
