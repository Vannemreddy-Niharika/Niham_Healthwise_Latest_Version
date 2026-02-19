/* ====================================== */
/* NIHAM - Login & Health Score System    */
/* ====================================== */

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initLoginSystem();
});

/**
 * Initialize login system
 */
function initLoginSystem() {
  // Check if user is already logged in
  const currentUser = getCurrentUser();
  if (currentUser && window.location.pathname.includes('login.html')) {
    // Redirect to main app if already logged in
    window.location.href = 'index.html';
    return;
  }

  // Setup form event listeners
  setupFormListeners();
}

/**
 * Setup form event listeners
 */
function setupFormListeners() {
  // Login form
  const loginForm = document.getElementById('loginFormElement');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  // Signup form
  const signupForm = document.getElementById('signupFormElement');
  if (signupForm) {
    signupForm.addEventListener('submit', handleSignup);
  }

  // Health profile form
  const healthForm = document.getElementById('healthProfileFormElement');
  if (healthForm) {
    healthForm.addEventListener('submit', handleHealthProfile);
  }

  // Form switching
  const showSignupBtn = document.getElementById('showSignup');
  const showLoginBtn = document.getElementById('showLogin');
  const createAccountLink = document.querySelector('.create-account-link');

  if (showSignupBtn) {
    showSignupBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchForm('signupForm');
    });
  }

  if (showLoginBtn) {
    showLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchForm('loginForm');
    });
  }

  if (createAccountLink) {
    createAccountLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchForm('signupForm');
    });
  }

  // Check if users exist and hide first-time message if they do
  checkFirstTimeUser();
}

/**
 * Switch between forms
 */
function switchForm(formId) {
  const forms = document.querySelectorAll('.form-section');
  forms.forEach(form => form.classList.remove('active'));
  
  const targetForm = document.getElementById(formId);
  if (targetForm) {
    targetForm.classList.add('active');
  }
}

/**
 * Check if this is a first-time user
 */
function checkFirstTimeUser() {
  const users = JSON.parse(localStorage.getItem('NIHAM_users') || '[]');
  const firstTimeMessage = document.getElementById('firstTimeMessage');
  
  if (firstTimeMessage) {
    if (users.length > 0) {
      // Hide the first-time message if users exist
      firstTimeMessage.style.display = 'none';
    } else {
      // Show the first-time message
      firstTimeMessage.style.display = 'block';
    }
  }
}

/**
 * Handle login
 */
function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem('NIHAM_users') || '[]');
  
  // Find user
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Set current user
    localStorage.setItem('NIHAM_currentUser', JSON.stringify(user));
    
    // Redirect to main app
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
}

/**
 * Handle signup
 */
function handleSignup(e) {
  e.preventDefault();
  
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Get existing users
  const users = JSON.parse(localStorage.getItem('NIHAM_users') || '[]');
  
  // Check if email already exists
  if (users.find(u => u.email === email)) {
    alert('Email already registered');
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    createdAt: new Date().toISOString()
  };

  // Save user
  users.push(newUser);
  localStorage.setItem('NIHAM_users', JSON.stringify(users));
  localStorage.setItem('NIHAM_currentUser', JSON.stringify(newUser));

  // Show health profile form
  switchForm('healthProfileForm');
}

/**
 * Handle health profile submission
 */
function handleHealthProfile(e) {
  e.preventDefault();
  
  // Get form data
  const healthData = {
    age: parseInt(document.getElementById('age').value),
    gender: document.getElementById('gender').value,
    height: parseFloat(document.getElementById('height').value),
    weight: parseFloat(document.getElementById('weight').value),
    bloodPressure: document.getElementById('bloodPressure').value,
    bloodSugar: parseFloat(document.getElementById('bloodSugar').value) || null,
    exerciseFrequency: document.getElementById('exerciseFrequency').value,
    smokingStatus: document.getElementById('smokingStatus').value,
    alcoholConsumption: document.getElementById('alcoholConsumption').value,
    sleepHours: parseFloat(document.getElementById('sleepHours').value),
    chronicConditions: document.getElementById('chronicConditions').value
  };

  // Calculate health score
  const healthScore = calculateHealthScore(healthData);
  
  // Save health data to user profile
  const currentUser = getCurrentUser();
  if (currentUser) {
    currentUser.healthData = healthData;
    currentUser.healthScore = healthScore;
    localStorage.setItem('NIHAM_currentUser', JSON.stringify(currentUser));
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('NIHAM_users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex] = currentUser;
      localStorage.setItem('NIHAM_users', JSON.stringify(users));
    }
  }

  // Display health score
  displayHealthScore(healthScore, healthData);
}

/**
 * Calculate health score (0-100)
 */
function calculateHealthScore(data) {
  let score = 0;
  const metrics = {};

  // 1. BMI Score (25 points)
  const bmi = data.weight / ((data.height / 100) ** 2);
  metrics.bmi = bmi.toFixed(1);
  
  if (bmi >= 18.5 && bmi < 25) {
    score += 25;
    metrics.bmiStatus = 'normal';
  } else if (bmi >= 25 && bmi < 30) {
    score += 15;
    metrics.bmiStatus = 'warning';
  } else {
    score += 5;
    metrics.bmiStatus = 'danger';
  }

  // 2. Blood Pressure Score (20 points)
  if (data.bloodPressure) {
    const [systolic, diastolic] = data.bloodPressure.split('/').map(Number);
    metrics.bloodPressure = data.bloodPressure;
    
    if (systolic >= 90 && systolic < 120 && diastolic >= 60 && diastolic < 80) {
      score += 20;
      metrics.bpStatus = 'normal';
    } else if (systolic >= 120 && systolic < 140 && diastolic >= 80 && diastolic < 90) {
      score += 12;
      metrics.bpStatus = 'warning';
    } else {
      score += 5;
      metrics.bpStatus = 'danger';
    }
  } else {
    score += 10; // Partial credit if not provided
    metrics.bloodPressure = 'Not provided';
    metrics.bpStatus = 'warning';
  }

  // 3. Blood Sugar Score (20 points)
  if (data.bloodSugar) {
    metrics.bloodSugar = data.bloodSugar + ' mg/dL';
    
    if (data.bloodSugar >= 70 && data.bloodSugar < 100) {
      score += 20;
      metrics.bsStatus = 'normal';
    } else if (data.bloodSugar >= 100 && data.bloodSugar < 126) {
      score += 12;
      metrics.bsStatus = 'warning';
    } else {
      score += 5;
      metrics.bsStatus = 'danger';
    }
  } else {
    score += 10;
    metrics.bloodSugar = 'Not provided';
    metrics.bsStatus = 'warning';
  }

  // 4. Lifestyle Score (35 points)
  let lifestyleScore = 0;

  // Exercise (10 points)
  const exercisePoints = {
    'none': 0,
    '1-2': 5,
    '3-4': 8,
    '5+': 10
  };
  lifestyleScore += exercisePoints[data.exerciseFrequency] || 0;

  // Smoking (10 points)
  const smokingPoints = {
    'never': 10,
    'former': 6,
    'current': 0
  };
  lifestyleScore += smokingPoints[data.smokingStatus] || 0;

  // Alcohol (5 points)
  const alcoholPoints = {
    'none': 5,
    'occasional': 4,
    'moderate': 2,
    'heavy': 0
  };
  lifestyleScore += alcoholPoints[data.alcoholConsumption] || 0;

  // Sleep (10 points)
  if (data.sleepHours >= 7 && data.sleepHours <= 9) {
    lifestyleScore += 10;
  } else if (data.sleepHours >= 6 && data.sleepHours < 7) {
    lifestyleScore += 6;
  } else {
    lifestyleScore += 2;
  }

  score += lifestyleScore;
  metrics.lifestyleScore = lifestyleScore;
  metrics.lifestyleStatus = lifestyleScore >= 28 ? 'normal' : lifestyleScore >= 20 ? 'warning' : 'danger';

  // Chronic conditions penalty
  if (data.chronicConditions && data.chronicConditions.trim()) {
    score = Math.max(0, score - 10);
  }

  return {
    totalScore: Math.round(score),
    metrics,
    recommendations: generateRecommendations(data, metrics)
  };
}

/**
 * Generate health recommendations
 */
function generateRecommendations(data, metrics) {
  const recommendations = [];

  // BMI recommendations
  if (metrics.bmiStatus === 'warning') {
    recommendations.push('Your BMI is slightly elevated. Consider a balanced diet and regular exercise.');
  } else if (metrics.bmiStatus === 'danger') {
    recommendations.push('Your BMI indicates health concerns. Consult a healthcare provider for a personalized plan.');
  }

  // Blood pressure recommendations
  if (metrics.bpStatus === 'warning') {
    recommendations.push('Monitor your blood pressure regularly and reduce salt intake.');
  } else if (metrics.bpStatus === 'danger') {
    recommendations.push('Your blood pressure needs attention. Please consult a doctor immediately.');
  }

  // Blood sugar recommendations
  if (metrics.bsStatus === 'warning') {
    recommendations.push('Your blood sugar is in the pre-diabetic range. Reduce sugar intake and increase physical activity.');
  } else if (metrics.bsStatus === 'danger') {
    recommendations.push('Your blood sugar levels require medical attention. Consult an endocrinologist.');
  }

  // Exercise recommendations
  if (data.exerciseFrequency === 'none' || data.exerciseFrequency === '1-2') {
    recommendations.push('Increase physical activity to at least 150 minutes per week.');
  }

  // Smoking recommendations
  if (data.smokingStatus === 'current') {
    recommendations.push('Quitting smoking is the single best thing you can do for your health.');
  }

  // Alcohol recommendations
  if (data.alcoholConsumption === 'heavy' || data.alcoholConsumption === 'moderate') {
    recommendations.push('Consider reducing alcohol consumption for better health outcomes.');
  }

  // Sleep recommendations
  if (data.sleepHours < 7 || data.sleepHours > 9) {
    recommendations.push('Aim for 7-9 hours of quality sleep each night.');
  }

  // General recommendations
  if (recommendations.length === 0) {
    recommendations.push('Great job! Keep maintaining your healthy lifestyle.');
    recommendations.push('Continue regular health check-ups and screenings.');
  } else {
    recommendations.push('Stay hydrated and eat a balanced diet rich in fruits and vegetables.');
    recommendations.push('Schedule regular health check-ups with your doctor.');
  }

  return recommendations;
}

/**
 * Display health score with animation
 */
function displayHealthScore(healthScore, healthData) {
  switchForm('healthScoreDisplay');

  const { totalScore, metrics, recommendations } = healthScore;

  // Animate score circle
  const scoreCircle = document.getElementById('scoreCircle');
  const circumference = 2 * Math.PI * 90;
  const offset = circumference - (totalScore / 100) * circumference;
  
  setTimeout(() => {
    scoreCircle.style.strokeDashoffset = offset;
  }, 100);

  // Animate score number
  animateNumber('scoreNumber', 0, totalScore, 2000);

  // Set score status
  const scoreStatus = document.getElementById('scoreStatus');
  let statusText = '';
  let statusClass = '';

  if (totalScore >= 80) {
    statusText = 'Excellent Health';
    statusClass = 'excellent';
  } else if (totalScore >= 60) {
    statusText = 'Good Health';
    statusClass = 'good';
  } else if (totalScore >= 40) {
    statusText = 'Fair Health';
    statusClass = 'fair';
  } else {
    statusText = 'Needs Improvement';
    statusClass = 'poor';
  }

  scoreStatus.textContent = statusText;
  scoreStatus.className = 'score-status ' + statusClass;

  // Display metrics
  document.getElementById('bmiValue').textContent = metrics.bmi;
  document.getElementById('bmiStatus').textContent = getStatusText(metrics.bmiStatus);
  document.getElementById('bmiStatus').className = 'metric-status ' + metrics.bmiStatus;

  document.getElementById('bpValue').textContent = metrics.bloodPressure;
  document.getElementById('bpStatus').textContent = getStatusText(metrics.bpStatus);
  document.getElementById('bpStatus').className = 'metric-status ' + metrics.bpStatus;

  document.getElementById('bsValue').textContent = metrics.bloodSugar;
  document.getElementById('bsStatus').textContent = getStatusText(metrics.bsStatus);
  document.getElementById('bsStatus').className = 'metric-status ' + metrics.bsStatus;

  document.getElementById('lifestyleValue').textContent = metrics.lifestyleScore + '/35';
  document.getElementById('lifestyleStatus').textContent = getStatusText(metrics.lifestyleStatus);
  document.getElementById('lifestyleStatus').className = 'metric-status ' + metrics.lifestyleStatus;

  // Display recommendations
  const recommendationsList = document.getElementById('recommendationsList');
  recommendationsList.innerHTML = '';
  recommendations.forEach(rec => {
    const li = document.createElement('li');
    li.textContent = rec;
    recommendationsList.appendChild(li);
  });
}

/**
 * Get status text
 */
function getStatusText(status) {
  const statusMap = {
    'normal': 'Normal',
    'warning': 'Warning',
    'danger': 'At Risk'
  };
  return statusMap[status] || '';
}

/**
 * Animate number
 */
function animateNumber(elementId, start, end, duration) {
  const element = document.getElementById(elementId);
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.round(current);
  }, 16);
}

/**
 * Get current user
 */
function getCurrentUser() {
  const userStr = localStorage.getItem('NIHAM_currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

/**
 * Logout user
 */
function logoutUser() {
  localStorage.removeItem('NIHAM_currentUser');
  window.location.href = 'login.html';
}

/**
 * Export functions
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getCurrentUser,
    logoutUser,
    calculateHealthScore
  };
}
