/* ====================================== */
/* NIHAM - Emergency Mode                 */
/* ====================================== */

/**
 * Emergency Mode - Quick access to critical health information
 * For emergency situations requiring immediate medical guidance
 */

let emergencyMode = {
  enabled: false,
  startTime: null
};

/**
 * Emergency contacts and information
 */
const EMERGENCY_INFO = {
  universal: {
    ambulance: '108',
    police: '100',
    fire: '101',
    women: '1091',
    child: '1098'
  },
  firstAid: {
    cpr: {
      title: 'CPR (Cardiopulmonary Resuscitation)',
      steps: [
        'Check responsiveness - tap and shout',
        'Call emergency services (108)',
        'Place person on firm surface',
        'Position hands center of chest',
        'Push hard and fast - 100-120 compressions/min',
        'Push down 2 inches (5cm)',
        'Allow chest to rise completely',
        'Continue until help arrives'
      ],
      icon: '❤️'
    },
    choking: {
      title: 'Choking - Heimlich Maneuver',
      steps: [
        'Stand behind the person',
        'Make a fist above navel',
        'Grasp fist with other hand',
        'Give quick upward thrusts',
        'Repeat until object dislodges',
        'Call 108 if unsuccessful'
      ],
      icon: '🫁'
    },
    bleeding: {
      title: 'Severe Bleeding',
      steps: [
        'Apply direct pressure with clean cloth',
        'Maintain pressure for 10-15 minutes',
        'Elevate injured area above heart',
        'Do not remove cloth if soaked',
        'Add more cloth on top',
        'Call 108 immediately',
        'Keep person warm and calm'
      ],
      icon: '🩸'
    },
    burns: {
      title: 'Burns',
      steps: [
        'Remove from heat source',
        'Cool with running water (10-20 min)',
        'Remove jewelry/tight clothing',
        'Cover with sterile gauze',
        'Do NOT apply ice',
        'Do NOT pop blisters',
        'Seek medical help for severe burns'
      ],
      icon: '🔥'
    },
    fracture: {
      title: 'Fractures/Broken Bones',
      steps: [
        'Do not move the injured area',
        'Immobilize with splint if possible',
        'Apply ice pack (wrapped in cloth)',
        'Elevate if possible',
        'Do not try to realign bone',
        'Call 108 for severe fractures',
        'Monitor for shock'
      ],
      icon: '🦴'
    },
    poisoning: {
      title: 'Poisoning',
      steps: [
        'Call poison control immediately',
        'Identify the poison if possible',
        'Do NOT induce vomiting',
        'Keep person calm and still',
        'If unconscious, place on side',
        'Save poison container for doctors',
        'Call 108'
      ],
      icon: '☠️'
    },
    heatstroke: {
      title: 'Heat Stroke',
      steps: [
        'Move to cool area immediately',
        'Remove excess clothing',
        'Cool with water/wet cloths',
        'Fan the person',
        'Give water if conscious',
        'Call 108 - this is life-threatening',
        'Monitor temperature'
      ],
      icon: '🌡️'
    },
    seizure: {
      title: 'Seizure',
      steps: [
        'Stay calm and time the seizure',
        'Clear area of dangerous objects',
        'Cushion head with soft object',
        'Turn person on side',
        'Do NOT restrain movements',
        'Do NOT put anything in mouth',
        'Call 108 if lasts >5 minutes'
      ],
      icon: '⚡'
    }
  }
};

/**
 * Initialize Emergency Mode
 */
function initEmergencyMode() {
  // Add emergency button listener
  const emergencyBtn = document.getElementById('emergencyModeBtn');
  if (emergencyBtn) {
    emergencyBtn.addEventListener('click', toggleEmergencyMode);
  }
  
  // Add keyboard shortcut (Ctrl+E)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault();
      enableEmergencyMode();
    }
  });
  
  debugLog('Emergency', 'Emergency Mode initialized');
}

/**
 * Toggle Emergency Mode
 */
function toggleEmergencyMode() {
  if (emergencyMode.enabled) {
    disableEmergencyMode();
  } else {
    enableEmergencyMode();
  }
}

/**
 * Enable Emergency Mode
 */
function enableEmergencyMode() {
  emergencyMode.enabled = true;
  emergencyMode.startTime = new Date();
  
  document.body.classList.add('emergency-mode');
  
  // Show emergency overlay
  showEmergencyOverlay();
  
  // Log emergency activation
  debugLog('Emergency', 'Emergency Mode ACTIVATED');
  
  // Vibrate if supported
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

/**
 * Disable Emergency Mode
 */
function disableEmergencyMode() {
  emergencyMode.enabled = false;
  
  document.body.classList.remove('emergency-mode');
  
  // Hide emergency overlay
  hideEmergencyOverlay();
  
  debugLog('Emergency', 'Emergency Mode deactivated');
}

/**
 * Show emergency overlay
 */
function showEmergencyOverlay() {
  let overlay = document.getElementById('emergencyOverlay');
  if (!overlay) {
    overlay = createEmergencyOverlay();
    document.body.appendChild(overlay);
  }
  overlay.style.display = 'flex';
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

/**
 * Hide emergency overlay
 */
function hideEmergencyOverlay() {
  const overlay = document.getElementById('emergencyOverlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
  
  // Restore body scroll
  document.body.style.overflow = '';
}

/**
 * Create emergency overlay
 */
function createEmergencyOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'emergencyOverlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 20px;
  `;
  
  const lang = getCurrentLanguage();
  
  overlay.innerHTML = `
    <div style="max-width: 1200px; width: 100%; margin: 0 auto;">
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #ff005c;">
        <div>
          <h1 style="color: #ff005c; margin: 0; font-size: 32px; animation: pulse 1.5s infinite;">
            ${tr(lang, 'emergency.title', '🚨 EMERGENCY MODE')}
          </h1>
          <p style="color: var(--muted); margin: 5px 0 0 0;">${tr(lang, 'emergency.subtitle', 'Quick access to life-saving information')}</p>
        </div>
        <button onclick="disableEmergencyMode()" style="padding: 12px 24px; background: rgba(255,0,92,0.2); color: #ff005c; border: 2px solid #ff005c; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">
          ${tr(lang, 'emergency.exitBtn', '✕ Exit Emergency Mode')}
        </button>
      </div>
      
      <!-- Emergency Contacts -->
      <div style="background: rgba(255,0,92,0.1); padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 2px solid #ff005c;">
        <h2 style="color: #ff005c; margin: 0 0 20px 0; font-size: 24px;">${tr(lang, 'emergency.contactsTitle', '📞 Emergency Contacts (India)')}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
          <div class="emergency-contact" onclick="callEmergency('108')">
            <div style="font-size: 32px;">🚑</div>
            <div style="font-size: 24px; font-weight: bold; color: #ff005c;">108</div>
            <div style="color: var(--muted);">${tr(lang, 'emergency.ambulance', 'Ambulance')}</div>
          </div>
          <div class="emergency-contact" onclick="callEmergency('100')">
            <div style="font-size: 32px;">👮</div>
            <div style="font-size: 24px; font-weight: bold; color: #ff005c;">100</div>
            <div style="color: var(--muted);">${tr(lang, 'emergency.police', 'Police')}</div>
          </div>
          <div class="emergency-contact" onclick="callEmergency('101')">
            <div style="font-size: 32px;">🚒</div>
            <div style="font-size: 24px; font-weight: bold; color: #ff005c;">101</div>
            <div style="color: var(--muted);">${tr(lang, 'emergency.fire', 'Fire')}</div>
          </div>
          <div class="emergency-contact" onclick="callEmergency('1091')">
            <div style="font-size: 32px;">👩</div>
            <div style="font-size: 24px; font-weight: bold; color: #ff005c;">1091</div>
            <div style="color: var(--muted);">${tr(lang, 'emergency.womenHelpline', 'Women Helpline')}</div>
          </div>
          <div class="emergency-contact" onclick="callEmergency('1098')">
            <div style="font-size: 32px;">👶</div>
            <div style="font-size: 24px; font-weight: bold; color: #ff005c;">1098</div>
            <div style="color: var(--muted);">${tr(lang, 'emergency.childHelpline', 'Child Helpline')}</div>
          </div>
        </div>
      </div>
      
      <!-- First Aid Guide -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: var(--accent); margin: 0 0 20px 0; font-size: 24px;">${tr(lang, 'emergency.firstAidTitle', '🏥 First Aid Guide')}</h2>
        <div id="firstAidGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <!-- First aid cards will be inserted here -->
        </div>
      </div>
      
      <!-- Quick Actions -->
      <div style="background: rgba(0,255,195,0.05); padding: 25px; border-radius: 12px; border: 2px solid var(--accent);">
        <h2 style="color: var(--accent); margin: 0 0 20px 0; font-size: 24px;">${tr(lang, 'emergency.quickActionsTitle', '⚡ Quick Actions')}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
          <button onclick="showNearbyHospitals()" class="emergency-action-btn">
            ${tr(lang, 'emergency.findHospitals', '🏥 Find Nearby Hospitals')}
          </button>
          <button onclick="showCommonEmergencies()" class="emergency-action-btn">
            ${tr(lang, 'emergency.commonEmergencies', '🦠 Common Emergencies')}
          </button>
          <button onclick="showPoisonInfo()" class="emergency-action-btn">
            ${tr(lang, 'emergency.poisonInfo', '☠️ Poison Information')}
          </button>
          <button onclick="downloadOfflineData()" class="emergency-action-btn">
            ${tr(lang, 'emergency.downloadOffline', '💾 Download for Offline')}
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Populate first aid cards
  setTimeout(() => populateFirstAidCards(), 100);
  
  return overlay;
}

/**
 * Populate first aid cards
 */
function populateFirstAidCards() {
  const grid = document.getElementById('firstAidGrid');
  if (!grid) return;
  
  const lang = getCurrentLanguage();
  const procedures = ['cpr', 'choking', 'bleeding', 'burns', 'fracture', 'poisoning', 'heatstroke', 'seizure'];
  const icons = {
    cpr: '❤️',
    choking: '🫁',
    bleeding: '🩸',
    burns: '🔥',
    fracture: '🦴',
    poisoning: '☠️',
    heatstroke: '🌡️',
    seizure: '⚡'
  };
  
  procedures.forEach(proc => {
    const card = document.createElement('div');
    card.className = 'first-aid-card';
    card.style.cssText = `
      background: rgba(0,255,195,0.05);
      padding: 20px;
      border-radius: 12px;
      border: 2px solid rgba(0,255,195,0.3);
      cursor: pointer;
      transition: all 0.3s;
    `;
    
    // Get translated steps
    const steps = [];
    for (let i = 1; i <= 8; i++) {
      const stepKey = `emergency.${proc}.step${i}`;
      const step = tr(lang, stepKey, '');
      if (step) steps.push(step);
    }
    
    const title = tr(lang, `emergency.${proc}.title`, proc.toUpperCase());
    
    card.innerHTML = `
      <div style="font-size: 48px; margin-bottom: 10px;">${icons[proc]}</div>
      <h3 style="color: var(--accent); margin: 0 0 15px 0;">${title}</h3>
      <ol style="color: var(--muted); padding-left: 20px; margin: 0;">
        ${steps.map(step => `<li style="margin: 8px 0;">${step}</li>`).join('')}
      </ol>
    `;
    
    card.onmouseover = () => {
      card.style.background = 'rgba(0,255,195,0.1)';
      card.style.borderColor = 'var(--accent)';
      card.style.transform = 'translateY(-5px)';
    };
    
    card.onmouseout = () => {
      card.style.background = 'rgba(0,255,195,0.05)';
      card.style.borderColor = 'rgba(0,255,195,0.3)';
      card.style.transform = 'translateY(0)';
    };
    
    grid.appendChild(card);
  });
}

/**
 * Call emergency number
 */
function callEmergency(number) {
  if (confirm(`Call emergency number ${number}?`)) {
    window.location.href = `tel:${number}`;
  }
}

/**
 * Show nearby hospitals
 */
function showNearbyHospitals() {
  alert('Opening map to find nearby hospitals...\n\nIn a real implementation, this would:\n- Use geolocation API\n- Show nearby hospitals on map\n- Provide directions\n- Show contact numbers');
  
  // In real implementation, integrate with maps API
  // navigator.geolocation.getCurrentPosition(...)
}

/**
 * Show common emergencies
 */
function showCommonEmergencies() {
  const emergencies = [
    'Heart Attack - Call 108 immediately',
    'Stroke - FAST (Face, Arms, Speech, Time)',
    'Severe Allergic Reaction - Use EpiPen if available',
    'Diabetic Emergency - Check blood sugar',
    'Asthma Attack - Use inhaler, call 108 if severe',
    'Severe Bleeding - Apply pressure, elevate',
    'Unconsciousness - Check breathing, call 108',
    'Poisoning - Call poison control, do not induce vomiting'
  ];
  
  alert('COMMON MEDICAL EMERGENCIES:\n\n' + emergencies.join('\n\n'));
}

/**
 * Show poison information
 */
function showPoisonInfo() {
  alert('POISON EMERGENCY:\n\n' +
    '1. Call 108 immediately\n' +
    '2. Identify the poison if possible\n' +
    '3. Do NOT induce vomiting\n' +
    '4. Keep person calm and still\n' +
    '5. Save poison container for doctors\n' +
    '6. If unconscious, place on side\n\n' +
    'National Poison Information Centre:\n' +
    'AIIMS Delhi: 1800-11-6117'
  );
}

/**
 * Download offline data
 */
function downloadOfflineData() {
  if (typeof saveOfflineData === 'function') {
    saveOfflineData();
    alert('✅ Critical health data saved for offline use!\n\nYou can now access essential information without internet connection.');
  } else {
    alert('Offline data feature is being prepared...');
  }
}

/**
 * Export for modular use
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initEmergencyMode,
    enableEmergencyMode,
    disableEmergencyMode,
    toggleEmergencyMode
  };
}
