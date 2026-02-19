/* ====================================== */
/* NIHAM HealthWise - Vaccine Schedule    */
/* ====================================== */

const VACCINE_SCHEDULE = [
  // Birth to 1 Year
  { name: "BCG", ageMonths: 0, ageDisplay: "At Birth", gender: "both", description: "Protects against tuberculosis" },
  { name: "Hepatitis B (1st dose)", ageMonths: 0, ageDisplay: "At Birth", gender: "both", description: "Protects against Hepatitis B virus" },
  { name: "OPV 0", ageMonths: 0, ageDisplay: "At Birth", gender: "both", description: "Oral Polio Vaccine - birth dose" },
  
  { name: "Hepatitis B (2nd dose)", ageMonths: 1.5, ageDisplay: "6 Weeks", gender: "both", description: "Second dose of Hepatitis B" },
  { name: "DTaP (1st dose)", ageMonths: 1.5, ageDisplay: "6 Weeks", gender: "both", description: "Diphtheria, Tetanus, Pertussis" },
  { name: "IPV (1st dose)", ageMonths: 1.5, ageDisplay: "6 Weeks", gender: "both", description: "Inactivated Polio Vaccine" },
  { name: "Hib (1st dose)", ageMonths: 1.5, ageDisplay: "6 Weeks", gender: "both", description: "Haemophilus influenzae type b" },
  { name: "Rotavirus (1st dose)", ageMonths: 1.5, ageDisplay: "6 Weeks", gender: "both", description: "Protects against rotavirus" },
  { name: "PCV (1st dose)", ageMonths: 1.5, ageDisplay: "6 Weeks", gender: "both", description: "Pneumococcal Conjugate Vaccine" },
  
  { name: "DTaP (2nd dose)", ageMonths: 2.5, ageDisplay: "10 Weeks", gender: "both", description: "Diphtheria, Tetanus, Pertussis" },
  { name: "IPV (2nd dose)", ageMonths: 2.5, ageDisplay: "10 Weeks", gender: "both", description: "Inactivated Polio Vaccine" },
  { name: "Hib (2nd dose)", ageMonths: 2.5, ageDisplay: "10 Weeks", gender: "both", description: "Haemophilus influenzae type b" },
  { name: "Rotavirus (2nd dose)", ageMonths: 2.5, ageDisplay: "10 Weeks", gender: "both", description: "Protects against rotavirus" },
  { name: "PCV (2nd dose)", ageMonths: 2.5, ageDisplay: "10 Weeks", gender: "both", description: "Pneumococcal Conjugate Vaccine" },
  
  { name: "DTaP (3rd dose)", ageMonths: 3.5, ageDisplay: "14 Weeks", gender: "both", description: "Diphtheria, Tetanus, Pertussis" },
  { name: "IPV (3rd dose)", ageMonths: 3.5, ageDisplay: "14 Weeks", gender: "both", description: "Inactivated Polio Vaccine" },
  { name: "Hib (3rd dose)", ageMonths: 3.5, ageDisplay: "14 Weeks", gender: "both", description: "Haemophilus influenzae type b" },
  { name: "Rotavirus (3rd dose)", ageMonths: 3.5, ageDisplay: "14 Weeks", gender: "both", description: "Protects against rotavirus" },
  { name: "PCV (3rd dose)", ageMonths: 3.5, ageDisplay: "14 Weeks", gender: "both", description: "Pneumococcal Conjugate Vaccine" },
  
  { name: "Hepatitis B (3rd dose)", ageMonths: 6, ageDisplay: "6 Months", gender: "both", description: "Third dose of Hepatitis B" },
  { name: "OPV 1", ageMonths: 6, ageDisplay: "6 Months", gender: "both", description: "Oral Polio Vaccine" },
  
  { name: "Measles (1st dose)", ageMonths: 9, ageDisplay: "9 Months", gender: "both", description: "Protects against measles" },
  { name: "OPV 2", ageMonths: 9, ageDisplay: "9 Months", gender: "both", description: "Oral Polio Vaccine" },
  
  // 1-2 Years
  { name: "MMR (1st dose)", ageMonths: 12, ageDisplay: "12 Months", gender: "both", description: "Measles, Mumps, Rubella" },
  { name: "Hepatitis A (1st dose)", ageMonths: 12, ageDisplay: "12 Months", gender: "both", description: "Protects against Hepatitis A" },
  { name: "Varicella (1st dose)", ageMonths: 12, ageDisplay: "12 Months", gender: "both", description: "Chickenpox vaccine" },
  { name: "PCV Booster", ageMonths: 12, ageDisplay: "12-15 Months", gender: "both", description: "Pneumococcal booster" },
  
  { name: "Hepatitis A (2nd dose)", ageMonths: 18, ageDisplay: "18 Months", gender: "both", description: "Second dose of Hepatitis A" },
  { name: "DTaP (4th dose)", ageMonths: 18, ageDisplay: "15-18 Months", gender: "both", description: "Diphtheria, Tetanus, Pertussis booster" },
  { name: "IPV (4th dose)", ageMonths: 18, ageDisplay: "15-18 Months", gender: "both", description: "Polio booster" },
  { name: "Hib (4th dose)", ageMonths: 18, ageDisplay: "15-18 Months", gender: "both", description: "Hib booster" },
  { name: "OPV 3", ageMonths: 18, ageDisplay: "18 Months", gender: "both", description: "Oral Polio Vaccine" },
  
  // 2-5 Years
  { name: "MMR (2nd dose)", ageMonths: 48, ageDisplay: "4-6 Years", gender: "both", description: "MMR booster" },
  { name: "Varicella (2nd dose)", ageMonths: 48, ageDisplay: "4-6 Years", gender: "both", description: "Chickenpox booster" },
  { name: "DTaP (5th dose)", ageMonths: 48, ageDisplay: "4-6 Years", gender: "both", description: "DTaP booster" },
  { name: "IPV Booster", ageMonths: 48, ageDisplay: "4-6 Years", gender: "both", description: "Polio booster" },
  
  // 9-12 Years
  { name: "HPV (1st dose)", ageMonths: 108, ageDisplay: "9-12 Years", gender: "both", description: "Human Papillomavirus vaccine" },
  { name: "HPV (2nd dose)", ageMonths: 114, ageDisplay: "6 months after 1st dose", gender: "both", description: "HPV second dose" },
  { name: "Tdap Booster", ageMonths: 132, ageDisplay: "11-12 Years", gender: "both", description: "Tetanus, Diphtheria, Pertussis booster" },
  { name: "Meningococcal (1st dose)", ageMonths: 132, ageDisplay: "11-12 Years", gender: "both", description: "Protects against meningitis" },
  
  // Adolescents (13-18 Years)
  { name: "Meningococcal (2nd dose)", ageMonths: 192, ageDisplay: "16 Years", gender: "both", description: "Meningococcal booster" },
  { name: "HPV Catch-up", ageMonths: 156, ageDisplay: "13-18 Years", gender: "both", description: "If not vaccinated earlier" },
  
  // Adults (19-64 Years)
  { name: "Td/Tdap Booster", ageMonths: 228, ageDisplay: "Every 10 Years", gender: "both", description: "Tetanus, Diphtheria booster" },
  { name: "Influenza", ageMonths: 228, ageDisplay: "Annually", gender: "both", description: "Flu vaccine - yearly" },
  { name: "COVID-19", ageMonths: 228, ageDisplay: "As recommended", gender: "both", description: "COVID-19 vaccine and boosters" },
  
  // Women-specific
  { name: "Rubella", ageMonths: 180, ageDisplay: "Before Pregnancy", gender: "female", description: "If not immune" },
  { name: "Tdap (Pregnancy)", ageMonths: 240, ageDisplay: "Each Pregnancy", gender: "female", description: "During 27-36 weeks" },
  
  // Seniors (65+ Years)
  { name: "Pneumococcal (PCV13)", ageMonths: 780, ageDisplay: "65+ Years", gender: "both", description: "Pneumonia prevention" },
  { name: "Pneumococcal (PPSV23)", ageMonths: 780, ageDisplay: "65+ Years", gender: "both", description: "Pneumonia prevention" },
  { name: "Shingles (Zoster)", ageMonths: 600, ageDisplay: "50+ Years", gender: "both", description: "Prevents shingles" },
  { name: "Influenza (High-dose)", ageMonths: 780, ageDisplay: "65+ Annually", gender: "both", description: "High-dose flu vaccine" },
];

/**
 * Get vaccines for a specific age and gender
 * @param {number} ageYears - Age in years
 * @param {string} gender - 'male', 'female', or 'both'
 * @returns {Array} Array of recommended vaccines
 */
function getVaccinesForAge(ageYears, gender) {
  const ageMonths = ageYears * 12;
  
  return VACCINE_SCHEDULE.filter(vaccine => {
    // Check gender match
    const genderMatch = vaccine.gender === 'both' || vaccine.gender === gender;
    
    // Check age range
    let ageMatch = false;
    
    if (vaccine.ageDisplay.includes("Annually") || vaccine.ageDisplay.includes("Every 10 Years")) {
      // Recurring vaccines
      if (vaccine.name.includes("Influenza")) {
        ageMatch = ageYears >= 6; // Flu vaccine from 6 months onwards
      } else if (vaccine.name.includes("Td/Tdap")) {
        ageMatch = ageYears >= 19;
      }
    } else if (vaccine.ageDisplay.includes("+")) {
      // Age threshold vaccines (e.g., "65+")
      const threshold = parseInt(vaccine.ageDisplay);
      ageMatch = ageYears >= threshold;
    } else {
      // Specific age vaccines - show if within range
      const vaccineAgeMonths = vaccine.ageMonths;
      const tolerance = 6; // 6 months tolerance
      ageMatch = Math.abs(ageMonths - vaccineAgeMonths) <= tolerance || 
                 (ageMonths >= vaccineAgeMonths && ageMonths <= vaccineAgeMonths + 12);
    }
    
    return genderMatch && ageMatch;
  });
}

/**
 * Get all vaccines up to a certain age
 * @param {number} ageYears - Age in years
 * @param {string} gender - 'male', 'female', or 'both'
 * @returns {Array} Array of all vaccines that should have been taken
 */
function getAllVaccinesUpToAge(ageYears, gender) {
  const ageMonths = ageYears * 12;
  
  return VACCINE_SCHEDULE.filter(vaccine => {
    const genderMatch = vaccine.gender === 'both' || vaccine.gender === gender;
    const ageMatch = vaccine.ageMonths <= ageMonths;
    
    return genderMatch && ageMatch;
  }).sort((a, b) => a.ageMonths - b.ageMonths);
}

// Export for modular use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    VACCINE_SCHEDULE,
    getVaccinesForAge,
    getAllVaccinesUpToAge
  };
}
