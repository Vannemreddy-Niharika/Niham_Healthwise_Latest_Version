/* ====================================== */
/* NIHAM - AI Disease Prediction          */
/* ====================================== */

/**
 * Common symptoms database
 */
const COMMON_SYMPTOMS = [
  'Fever', 'Cough', 'Headache', 'Fatigue', 'Body ache',
  'Sore throat', 'Runny nose', 'Shortness of breath', 'Chest pain',
  'Nausea', 'Vomiting', 'Diarrhea', 'Abdominal pain', 'Loss of appetite',
  'Dizziness', 'Weakness', 'Joint pain', 'Muscle pain', 'Rash',
  'Itching', 'Swelling', 'Chills', 'Sweating', 'Weight loss',
  'Difficulty sleeping', 'Confusion', 'Blurred vision', 'Rapid heartbeat'
];

/**
 * Disease-symptom mapping for AI prediction
 */
const DISEASE_SYMPTOM_MAP = {
  'fever': ['fever', 'headache', 'body ache', 'fatigue', 'chills'],
  'commoncold': ['runny nose', 'sore throat', 'cough', 'sneezing', 'mild fever'],
  'influenza': ['high fever', 'severe body ache', 'fatigue', 'cough', 'headache', 'chills'],
  'covid': ['fever', 'dry cough', 'fatigue', 'loss of taste', 'loss of smell', 'shortness of breath'],
  'pneumonia': ['high fever', 'cough with phlegm', 'chest pain', 'shortness of breath', 'fatigue'],
  'malaria': ['high fever', 'chills', 'sweating', 'headache', 'nausea', 'vomiting'],
  'dengue': ['high fever', 'severe headache', 'pain behind eyes', 'joint pain', 'muscle pain', 'rash'],
  'typhoid': ['sustained fever', 'weakness', 'abdominal pain', 'headache', 'loss of appetite'],
  'diabetes': ['increased thirst', 'frequent urination', 'extreme hunger', 'fatigue', 'blurred vision', 'slow healing'],
  'hypertension': ['headache', 'dizziness', 'blurred vision', 'chest pain', 'shortness of breath'],
  'asthma': ['shortness of breath', 'wheezing', 'chest tightness', 'cough', 'difficulty breathing'],
  'migraine': ['severe headache', 'nausea', 'sensitivity to light', 'sensitivity to sound', 'visual disturbances'],
  'gastritis': ['abdominal pain', 'nausea', 'vomiting', 'bloating', 'loss of appetite', 'indigestion'],
  'uti': ['burning urination', 'frequent urination', 'cloudy urine', 'pelvic pain', 'fever'],
  'arthritis': ['joint pain', 'joint stiffness', 'swelling', 'reduced range of motion', 'warmth in joints'],
  'anemia': ['fatigue', 'weakness', 'pale skin', 'shortness of breath', 'dizziness', 'cold hands and feet'],
  'depression': ['persistent sadness', 'loss of interest', 'fatigue', 'difficulty sleeping', 'changes in appetite', 'difficulty concentrating'],
  'anxiety': ['excessive worry', 'restlessness', 'rapid heartbeat', 'sweating', 'difficulty concentrating', 'sleep problems']
};

/**
 * Initialize AI Prediction page
 */
function initAIPrediction() {
  populateSymptomCheckboxes();
  
  const predictBtn = document.getElementById('predictDiseaseBtn');
  if (predictBtn) {
    predictBtn.addEventListener('click', predictDisease);
  }
  
  debugLog('AI', 'AI Prediction initialized');
}

/**
 * Populate symptom checkboxes
 */
function populateSymptomCheckboxes() {
  const container = document.getElementById('symptomCheckboxes');
  if (!container) return;
  
  container.innerHTML = '';
  
  COMMON_SYMPTOMS.forEach(symptom => {
    const label = document.createElement('label');
    label.style.cssText = 'display: flex; align-items: center; gap: 8px; padding: 10px; background: rgba(0,255,195,0.05); border-radius: 8px; cursor: pointer; transition: all 0.3s;';
    label.onmouseover = () => label.style.background = 'rgba(0,255,195,0.15)';
    label.onmouseout = () => label.style.background = 'rgba(0,255,195,0.05)';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = symptom.toLowerCase();
    checkbox.className = 'symptom-checkbox';
    checkbox.style.cssText = 'width: 18px; height: 18px; cursor: pointer;';
    
    const span = document.createElement('span');
    span.textContent = symptom;
    span.style.color = '#cfe';
    
    label.appendChild(checkbox);
    label.appendChild(span);
    container.appendChild(label);
  });
}

/**
 * Predict disease based on symptoms
 */
function predictDisease() {
  const checkboxes = document.querySelectorAll('.symptom-checkbox:checked');
  const additionalSymptoms = document.getElementById('additionalSymptoms').value.toLowerCase();
  
  if (checkboxes.length === 0 && !additionalSymptoms) {
    showNotification('Please select at least one symptom', 'warning');
    return;
  }
  
  // Collect selected symptoms
  const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);
  
  // Add additional symptoms
  if (additionalSymptoms) {
    const additionalArray = additionalSymptoms.split(',').map(s => s.trim().toLowerCase());
    selectedSymptoms.push(...additionalArray);
  }
  
  // Calculate disease probabilities
  const predictions = calculateDiseaseProbability(selectedSymptoms);
  
  // Display results
  displayPredictionResults(predictions, selectedSymptoms);
  
  debugLog('AI', `Predicted diseases for symptoms: ${selectedSymptoms.join(', ')}`);
}

/**
 * Calculate disease probability based on symptoms
 */
function calculateDiseaseProbability(userSymptoms) {
  const predictions = [];
  
  // Get all diseases
  const diseases = getAllDiseases();
  
  for (const disease of diseases) {
    if (!DISEASE_SYMPTOM_MAP[disease.id]) continue;
    
    const diseaseSymptoms = DISEASE_SYMPTOM_MAP[disease.id];
    let matchCount = 0;
    let matchedSymptoms = [];
    
    // Count matching symptoms
    for (const userSymptom of userSymptoms) {
      for (const diseaseSymptom of diseaseSymptoms) {
        if (diseaseSymptom.includes(userSymptom) || userSymptom.includes(diseaseSymptom)) {
          matchCount++;
          matchedSymptoms.push(diseaseSymptom);
          break;
        }
      }
    }
    
    if (matchCount > 0) {
      const probability = (matchCount / diseaseSymptoms.length) * 100;
      const confidence = matchCount >= 3 ? 'High' : matchCount >= 2 ? 'Medium' : 'Low';
      
      predictions.push({
        disease: disease,
        probability: Math.round(probability),
        matchCount: matchCount,
        totalSymptoms: diseaseSymptoms.length,
        confidence: confidence,
        matchedSymptoms: matchedSymptoms
      });
    }
  }
  
  // Sort by probability
  predictions.sort((a, b) => b.probability - a.probability);
  
  return predictions.slice(0, 5); // Return top 5 predictions
}

/**
 * Display prediction results
 */
function displayPredictionResults(predictions, userSymptoms) {
  const resultsDiv = document.getElementById('predictionResults');
  if (!resultsDiv) return;
  
  if (predictions.length === 0) {
    resultsDiv.innerHTML = `
      <div style="background: rgba(255,168,0,0.1); padding: 25px; border-radius: 12px; border-left: 4px solid #ffa800; text-align: center;">
        <h3 style="color: #ffa800; margin: 0 0 10px 0;">⚠️ No Clear Match Found</h3>
        <p style="color: var(--muted); margin: 0;">
          Based on the symptoms provided, we couldn't find a clear disease match. 
          Please consult a healthcare professional for accurate diagnosis.
        </p>
      </div>
    `;
    return;
  }
  
  let html = `
    <div style="background: rgba(0,255,195,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
      <h3 style="color: var(--accent); margin: 0 0 10px 0;">🔍 Analysis Complete</h3>
      <p style="color: var(--muted); margin: 0;">
        Based on your symptoms: <strong style="color: #cfe;">${userSymptoms.join(', ')}</strong>
      </p>
    </div>
    
    <h3 style="color: var(--accent); margin-bottom: 15px;">📊 Predicted Diseases (Top Matches)</h3>
  `;
  
  predictions.forEach((pred, index) => {
    const confidenceColor = pred.confidence === 'High' ? '#00ffc3' : pred.confidence === 'Medium' ? '#ffa800' : '#ff005c';
    const barWidth = pred.probability;
    
    html += `
      <div style="background: rgba(0,255,195,0.05); padding: 20px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid ${confidenceColor};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h4 style="color: var(--accent); margin: 0;">${index + 1}. ${pred.disease.name}</h4>
          <span style="background: ${confidenceColor}; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
            ${pred.confidence} Confidence
          </span>
        </div>
        
        <div style="margin: 15px 0;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="color: var(--muted); font-size: 14px;">Match Probability</span>
            <span style="color: var(--accent); font-weight: bold;">${pred.probability}%</span>
          </div>
          <div style="background: rgba(0,255,195,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, ${confidenceColor}, #00a8ff); height: 100%; width: ${barWidth}%; transition: width 0.5s;"></div>
          </div>
        </div>
        
        <p style="color: var(--muted); font-size: 14px; margin: 10px 0;">
          <strong>Matched Symptoms (${pred.matchCount}/${pred.totalSymptoms}):</strong> ${pred.matchedSymptoms.join(', ')}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 15px; font-size: 13px;">
          <div><strong style="color: var(--accent);">Severity:</strong> ${pred.disease.severity}</div>
          <div><strong style="color: var(--accent);">Recovery Time:</strong> ${pred.disease.time}</div>
          <div><strong style="color: var(--accent);">Curable:</strong> ${pred.disease.curable}</div>
        </div>
        
        <div style="margin-top: 15px;">
          <button onclick="viewDiseaseDetails('${pred.disease.id}')" style="padding: 8px 20px; background: rgba(0,255,195,0.2); color: var(--accent); border: 1px solid var(--accent); border-radius: 6px; cursor: pointer; font-weight: bold; margin-right: 10px;">
            View Details
          </button>
          <button onclick="openRemedy('${pred.disease.remedy}')" style="padding: 8px 20px; background: rgba(0,168,255,0.2); color: #00a8ff; border: 1px solid #00a8ff; border-radius: 6px; cursor: pointer; font-weight: bold;">
            Natural Remedies
          </button>
        </div>
      </div>
    `;
  });
  
  html += `
    <div style="background: rgba(255,0,92,0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ff005c; margin-top: 20px;">
      <p style="color: #ff005c; margin: 0; font-size: 14px;">
        <strong>⚠️ Important Disclaimer:</strong> This AI prediction is for informational purposes only and should not replace professional medical advice. 
        Please consult a qualified healthcare provider for accurate diagnosis and treatment.
      </p>
    </div>
  `;
  
  resultsDiv.innerHTML = html;
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * View disease details
 */
function viewDiseaseDetails(diseaseId) {
  setActivePage('explore');
  setTimeout(() => {
    const searchInput = document.getElementById('diseaseSearch');
    if (searchInput) {
      searchInput.value = diseaseId;
      searchDisease();
    }
  }, 300);
}

/**
 * Export for modular use
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initAIPrediction,
    predictDisease,
    calculateDiseaseProbability
  };
}
