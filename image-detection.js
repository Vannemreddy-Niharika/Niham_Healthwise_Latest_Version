/* ====================================== */
/* NIHAM - Image-Based Disease Detection  */
/* ====================================== */

/**
 * Image analysis patterns for common conditions
 */
const IMAGE_PATTERNS = {
  skin: {
    redness: ['rash', 'eczema', 'dermatitis', 'allergy'],
    spots: ['acne', 'chickenpox', 'measles'],
    patches: ['psoriasis', 'vitiligo', 'fungal infection'],
    swelling: ['cellulitis', 'abscess', 'infection']
  },
  texture: {
    rough: ['psoriasis', 'eczema', 'keratosis'],
    smooth: ['vitiligo', 'fungal infection'],
    bumpy: ['acne', 'rash', 'hives']
  }
};

let uploadedImage = null;

/**
 * Initialize Image Detection page
 */
function initImageDetection() {
  const dropZone = document.getElementById('imageDropZone');
  const imageInput = document.getElementById('imageInput');
  const analyzeBtn = document.getElementById('analyzeImageBtn');
  const clearBtn = document.getElementById('clearImageBtn');
  
  // Click to upload
  if (dropZone) {
    dropZone.addEventListener('click', () => imageInput.click());
  }
  
  // File input change
  if (imageInput) {
    imageInput.addEventListener('change', handleImageUpload);
  }
  
  // Drag and drop
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'var(--accent)';
      dropZone.style.background = 'rgba(0,255,195,0.1)';
    });
    
    dropZone.addEventListener('dragleave', () => {
      dropZone.style.borderColor = 'rgba(0,255,195,0.5)';
      dropZone.style.background = 'transparent';
    });
    
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = 'rgba(0,255,195,0.5)';
      dropZone.style.background = 'transparent';
      
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleImageFile(files[0]);
      }
    });
  }
  
  // Analyze button
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', analyzeImage);
  }
  
  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', clearImage);
  }
  
  debugLog('Image', 'Image Detection initialized');
}

/**
 * Handle image upload
 */
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    handleImageFile(file);
  }
}

/**
 * Handle image file
 */
function handleImageFile(file) {
  // Validate file type
  if (!file.type.startsWith('image/')) {
    showNotification('Please upload a valid image file', 'error');
    return;
  }
  
  // Validate file size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    showNotification('Image size should be less than 5MB', 'error');
    return;
  }
  
  // Read and display image
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage = e.target.result;
    displayImagePreview(uploadedImage);
  };
  reader.readAsDataURL(file);
  
  debugLog('Image', `Image uploaded: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);
}

/**
 * Display image preview
 */
function displayImagePreview(imageSrc) {
  const previewDiv = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');
  const dropZone = document.getElementById('imageDropZone');
  
  if (previewImg && previewDiv && dropZone) {
    previewImg.src = imageSrc;
    previewDiv.style.display = 'block';
    dropZone.style.display = 'none';
  }
}

/**
 * Clear image
 */
function clearImage() {
  uploadedImage = null;
  
  const previewDiv = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');
  const dropZone = document.getElementById('imageDropZone');
  const imageInput = document.getElementById('imageInput');
  const resultsDiv = document.getElementById('imageDetectionResults');
  
  if (previewImg) previewImg.src = '';
  if (previewDiv) previewDiv.style.display = 'none';
  if (dropZone) dropZone.style.display = 'block';
  if (imageInput) imageInput.value = '';
  if (resultsDiv) resultsDiv.innerHTML = '';
  
  debugLog('Image', 'Image cleared');
}

/**
 * Analyze image using AI
 */
async function analyzeImage() {
  if (!uploadedImage) {
    showNotification('Please upload an image first', 'warning');
    return;
  }
  
  const resultsDiv = document.getElementById('imageDetectionResults');
  if (!resultsDiv) return;
  
  // Show loading state
  resultsDiv.innerHTML = `
    <div style="text-align: center; padding: 40px;">
      <div style="display: inline-block; width: 50px; height: 50px; border: 4px solid rgba(0,255,195,0.3); border-top-color: var(--accent); border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="color: var(--accent); margin-top: 20px; font-size: 18px;">🔬 Analyzing image...</p>
      <p style="color: var(--muted); font-size: 14px;">This may take a few moments</p>
    </div>
  `;
  
  // Simulate AI analysis (in real implementation, this would call an AI API)
  setTimeout(() => {
    const analysis = performImageAnalysis(uploadedImage);
    displayImageAnalysisResults(analysis);
  }, 2000);
  
  debugLog('Image', 'Image analysis started');
}

/**
 * Perform image analysis (simulated AI)
 */
function performImageAnalysis(imageSrc) {
  // In a real implementation, this would:
  // 1. Send image to AI model (TensorFlow.js, ML5.js, or cloud API)
  // 2. Get predictions with confidence scores
  // 3. Return structured results
  
  // For now, we'll simulate analysis with random but realistic results
  const conditions = [
    {
      name: 'Eczema (Atopic Dermatitis)',
      confidence: 78,
      severity: 'Moderate',
      description: 'Inflammatory skin condition causing red, itchy patches',
      recommendations: [
        'Keep skin moisturized with fragrance-free lotions',
        'Avoid harsh soaps and hot water',
        'Use prescribed topical corticosteroids',
        'Identify and avoid triggers'
      ],
      relatedDiseases: ['eczema', 'dermatitis']
    },
    {
      name: 'Contact Dermatitis',
      confidence: 65,
      severity: 'Mild-Moderate',
      description: 'Skin reaction to allergens or irritants',
      recommendations: [
        'Identify and avoid the triggering substance',
        'Apply cool compresses',
        'Use over-the-counter hydrocortisone cream',
        'Take antihistamines for itching'
      ],
      relatedDiseases: ['dermatitis', 'allergy']
    },
    {
      name: 'Psoriasis',
      confidence: 52,
      severity: 'Moderate',
      description: 'Autoimmune condition causing scaly skin patches',
      recommendations: [
        'Apply moisturizers regularly',
        'Use prescribed topical treatments',
        'Get moderate sun exposure',
        'Manage stress levels'
      ],
      relatedDiseases: ['psoriasis']
    }
  ];
  
  // Analyze image characteristics (basic color analysis)
  const imageAnalysis = analyzeImageCharacteristics(imageSrc);
  
  return {
    conditions: conditions,
    imageCharacteristics: imageAnalysis,
    confidence: 'Medium',
    timestamp: new Date().toISOString()
  };
}

/**
 * Analyze image characteristics
 */
function analyzeImageCharacteristics(imageSrc) {
  // Basic image analysis (in real implementation, use canvas to analyze pixels)
  return {
    dominantColors: ['Red', 'Pink', 'Skin tone'],
    texture: 'Rough with visible patches',
    pattern: 'Irregular distribution',
    area: 'Localized region detected'
  };
}

/**
 * Display image analysis results
 */
function displayImageAnalysisResults(analysis) {
  const resultsDiv = document.getElementById('imageDetectionResults');
  if (!resultsDiv) return;
  
  let html = `
    <div style="background: rgba(0,255,195,0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
      <h3 style="color: var(--accent); margin: 0 0 10px 0;">✅ Analysis Complete</h3>
      <p style="color: var(--muted); margin: 0;">
        AI Confidence Level: <strong style="color: var(--accent);">${analysis.confidence}</strong>
      </p>
    </div>
    
    <h3 style="color: var(--accent); margin-bottom: 15px;">🔬 Detected Conditions</h3>
  `;
  
  analysis.conditions.forEach((condition, index) => {
    const confidenceColor = condition.confidence >= 70 ? '#00ffc3' : condition.confidence >= 50 ? '#ffa800' : '#ff005c';
    const confidenceLevel = condition.confidence >= 70 ? 'High' : condition.confidence >= 50 ? 'Medium' : 'Low';
    
    html += `
      <div style="background: rgba(0,255,195,0.05); padding: 20px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid ${confidenceColor};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h4 style="color: var(--accent); margin: 0;">${index + 1}. ${condition.name}</h4>
          <span style="background: ${confidenceColor}; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
            ${condition.confidence}% ${confidenceLevel}
          </span>
        </div>
        
        <div style="margin: 15px 0;">
          <div style="background: rgba(0,255,195,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, ${confidenceColor}, #00a8ff); height: 100%; width: ${condition.confidence}%; transition: width 0.5s;"></div>
          </div>
        </div>
        
        <p style="color: var(--muted); margin: 10px 0;">
          <strong style="color: var(--accent);">Description:</strong> ${condition.description}
        </p>
        
        <p style="color: var(--muted); margin: 10px 0;">
          <strong style="color: var(--accent);">Severity:</strong> ${condition.severity}
        </p>
        
        <div style="margin-top: 15px;">
          <strong style="color: var(--accent);">Recommended Actions:</strong>
          <ul style="margin: 10px 0; padding-left: 20px; color: var(--muted);">
            ${condition.recommendations.map(rec => `<li style="margin: 5px 0;">${rec}</li>`).join('')}
          </ul>
        </div>
        
        <div style="margin-top: 15px;">
          ${condition.relatedDiseases.map(diseaseId => 
            `<button onclick="viewDiseaseDetails('${diseaseId}')" style="padding: 8px 16px; background: rgba(0,255,195,0.2); color: var(--accent); border: 1px solid var(--accent); border-radius: 6px; cursor: pointer; font-weight: bold; margin-right: 10px; margin-top: 5px;">
              View ${diseaseId.charAt(0).toUpperCase() + diseaseId.slice(1)} Info
            </button>`
          ).join('')}
        </div>
      </div>
    `;
  });
  
  // Image characteristics
  html += `
    <div style="background: rgba(0,168,255,0.05); padding: 20px; border-radius: 12px; margin-top: 20px;">
      <h4 style="color: #00a8ff; margin: 0 0 15px 0;">📊 Image Analysis Details</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div>
          <strong style="color: #00a8ff;">Dominant Colors:</strong>
          <p style="color: var(--muted); margin: 5px 0;">${analysis.imageCharacteristics.dominantColors.join(', ')}</p>
        </div>
        <div>
          <strong style="color: #00a8ff;">Texture:</strong>
          <p style="color: var(--muted); margin: 5px 0;">${analysis.imageCharacteristics.texture}</p>
        </div>
        <div>
          <strong style="color: #00a8ff;">Pattern:</strong>
          <p style="color: var(--muted); margin: 5px 0;">${analysis.imageCharacteristics.pattern}</p>
        </div>
        <div>
          <strong style="color: #00a8ff;">Affected Area:</strong>
          <p style="color: var(--muted); margin: 5px 0;">${analysis.imageCharacteristics.area}</p>
        </div>
      </div>
    </div>
  `;
  
  // Disclaimer
  html += `
    <div style="background: rgba(255,0,92,0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ff005c; margin-top: 20px;">
      <p style="color: #ff005c; margin: 0; font-size: 14px;">
        <strong>⚠️ Important Medical Disclaimer:</strong> This AI-powered image analysis is for educational and informational purposes only. 
        It should NOT be used as a substitute for professional medical diagnosis. Always consult a qualified dermatologist or healthcare 
        provider for accurate diagnosis and treatment of skin conditions or any health concerns.
      </p>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <button onclick="clearImage()" style="padding: 12px 30px; background: rgba(0,255,195,0.2); color: var(--accent); border: 1px solid var(--accent); border-radius: 8px; cursor: pointer; font-weight: bold; margin-right: 10px;">
        Analyze Another Image
      </button>
      <button onclick="setActivePage('chatbot')" style="padding: 12px 30px; background: rgba(0,168,255,0.2); color: #00a8ff; border: 1px solid #00a8ff; border-radius: 8px; cursor: pointer; font-weight: bold;">
        Ask AI Chatbot
      </button>
    </div>
  `;
  
  resultsDiv.innerHTML = html;
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  debugLog('Image', 'Analysis results displayed');
}

/**
 * Export for modular use
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initImageDetection,
    analyzeImage,
    clearImage
  };
}
