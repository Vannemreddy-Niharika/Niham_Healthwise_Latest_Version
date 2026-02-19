/* ====================================== */
/* NIHAM HealthWise - Translations        */
/* ====================================== */

const TRANSLATIONS = {
  en: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "Offline AI Health Assistant for Rural India",
      tagline: "Blending Nature, Health, and Innovation"
    },
    nav: {
      home: "Home",
      explore: "Explore Diseases",
      remedies: "Natural Remedies",
      vaccines: "Vaccines",
      aiPrediction: "AI Prediction",
      imageDetection: "Image Detection",
      chatbot: "Chatbot",
      statistics: "Statistics",
      about: "About",
      emergency: "Emergency"
    },
    sections: {
      explore: "Diseases Explorer",
      remedies: "Natural & Home Remedies",
      chatbot: "AI Health Chatbot"
    },
    search: {
      disease: "Search disease...",
      remedy: "Search remedy..."
    },
    charts: {
      mostCommon: "Most Common Diseases (2025)",
      curableVsChronic: "Curable vs Chronic Conditions",
      curableLabel: "Curable (85%)",
      chronicLabel: "Chronic (15%)"
    },
    diseases: {
      commoncold: {
        name: "Common Cold"
      },
      fever: {
        name: "Fever"
      },
      diabetes: {
        name: "Diabetes"
      },
      hypertension: {
        name: "Hypertension"
      }
    },
    ui: {
      home: "Home",
      explore: "Explore Diseases",
      remedies: "Natural Remedies",
      vaccines: "Vaccines",
      aiPrediction: "AI Prediction",
      imageDetection: "Image Detection",
      chatbot: "Chatbot",
      statistics: "Statistics",
      about: "About",
      emergency: "Emergency",
      searchPlaceholder: "Search disease...",
      remedySearchPlaceholder: "Search remedy...",
      searchBtn: "Search",
      showAllBtn: "Show All",
    },
    emergency: {
      title: "🚨 EMERGENCY MODE",
      subtitle: "Quick access to life-saving information",
      exitBtn: "✕ Exit Emergency Mode",
      contactsTitle: "📞 Emergency Contacts (India)",
      ambulance: "Ambulance",
      police: "Police",
      fire: "Fire",
      womenHelpline: "Women Helpline",
      childHelpline: "Child Helpline",
      firstAidTitle: "🏥 First Aid Guide",
      quickActionsTitle: "⚡ Quick Actions",
      findHospitals: "🏥 Find Nearby Hospitals",
      commonEmergencies: "🦠 Common Emergencies",
      poisonInfo: "☠️ Poison Information",
      downloadOffline: "💾 Download for Offline",
      cpr: {
        title: "CPR (Cardiopulmonary Resuscitation)",
        step1: "Check responsiveness - tap and shout",
        step2: "Call emergency services (108)",
        step3: "Place person on firm surface",
        step4: "Position hands center of chest",
        step5: "Push hard and fast - 100-120 compressions/min",
        step6: "Push down 2 inches (5cm)",
        step7: "Allow chest to rise completely",
        step8: "Continue until help arrives"
      },
      choking: {
        title: "Choking - Heimlich Maneuver",
        step1: "Stand behind the person",
        step2: "Make a fist above navel",
        step3: "Grasp fist with other hand",
        step4: "Give quick upward thrusts",
        step5: "Repeat until object dislodges",
        step6: "Call 108 if unsuccessful"
      },
      bleeding: {
        title: "Severe Bleeding",
        step1: "Apply direct pressure with clean cloth",
        step2: "Maintain pressure for 10-15 minutes",
        step3: "Elevate injured area above heart",
        step4: "Do not remove cloth if soaked",
        step5: "Add more cloth on top",
        step6: "Call 108 immediately",
        step7: "Keep person warm and calm"
      },
      burns: {
        title: "Burns",
        step1: "Remove from heat source",
        step2: "Cool with running water (10-20 min)",
        step3: "Remove jewelry/tight clothing",
        step4: "Cover with sterile gauze",
        step5: "Do NOT apply ice",
        step6: "Do NOT pop blisters",
        step7: "Seek medical help for severe burns"
      },
      fracture: {
        title: "Fractures/Broken Bones",
        step1: "Do not move the injured area",
        step2: "Immobilize with splint if possible",
        step3: "Apply ice pack (wrapped in cloth)",
        step4: "Elevate if possible",
        step5: "Do not try to realign bone",
        step6: "Call 108 for severe fractures",
        step7: "Monitor for shock"
      },
      poisoning: {
        title: "Poisoning",
        step1: "Call poison control immediately",
        step2: "Identify the poison if possible",
        step3: "Do NOT induce vomiting",
        step4: "Keep person calm and still",
        step5: "If unconscious, place on side",
        step6: "Save poison container for doctors",
        step7: "Call 108"
      },
      heatstroke: {
        title: "Heat Stroke",
        step1: "Move to cool area immediately",
        step2: "Remove excess clothing",
        step3: "Cool with water/wet cloths",
        step4: "Fan the person",
        step5: "Give water if conscious",
        step6: "Call 108 - this is life-threatening",
        step7: "Monitor temperature"
      },
      seizure: {
        title: "Seizure",
        step1: "Stay calm and time the seizure",
        step2: "Clear area of dangerous objects",
        step3: "Cushion head with soft object",
        step4: "Turn person on side",
        step5: "Do NOT restrain movements",
        step6: "Do NOT put anything in mouth",
        step7: "Call 108 if lasts >5 minutes"
      }
    },
    aiPrediction: {
      title: "🤖 AI Disease Prediction",
      subtitle: "Enter your symptoms and our AI will predict possible diseases",
      selectSymptoms: "Select Your Symptoms",
      additionalLabel: "Additional Symptoms (Optional)",
      additionalPlaceholder: "Describe any other symptoms you're experiencing...",
      predictBtn: "🔍 Predict Disease",
      analysisComplete: "🔍 Analysis Complete",
      basedOnSymptoms: "Based on your symptoms:",
      predictedDiseases: "📊 Predicted Diseases (Top Matches)",
      confidence: "Confidence",
      matchProbability: "Match Probability",
      matchedSymptoms: "Matched Symptoms",
      severity: "Severity",
      recoveryTime: "Recovery Time",
      curable: "Curable",
      viewDetails: "View Details",
      naturalRemedies: "Natural Remedies",
      noMatch: "⚠️ No Clear Match Found",
      noMatchDesc: "Based on the symptoms provided, we couldn't find a clear disease match. Please consult a healthcare professional for accurate diagnosis.",
      disclaimer: "⚠️ Important Disclaimer:",
      disclaimerText: "This AI prediction is for informational purposes only and should not replace professional medical advice. Please consult a qualified healthcare provider for accurate diagnosis and treatment.",
      selectAtLeastOne: "Please select at least one symptom"
    },
    imageDetection: {
      title: "📸 Image-Based Disease Detection",
      subtitle: "Upload an image for AI-powered analysis (skin conditions, X-rays, etc.)",
      clickUpload: "Click to upload or drag & drop",
      supported: "Supported: JPG, PNG, JPEG (Max 5MB)",
      analyzeBtn: "🔬 Analyze Image",
      clearBtn: "Clear",
      analyzing: "🔬 Analyzing image...",
      analyzingDesc: "This may take a few moments",
      analysisComplete: "✅ Analysis Complete",
      aiConfidence: "AI Confidence Level:",
      detectedConditions: "🔬 Detected Conditions",
      description: "Description:",
      recommendations: "Recommended Actions:",
      analysisDetails: "📊 Image Analysis Details",
      dominantColors: "Dominant Colors:",
      texture: "Texture:",
      pattern: "Pattern:",
      affectedArea: "Affected Area:",
      disclaimer: "⚠️ Important Medical Disclaimer:",
      disclaimerText: "This AI-powered image analysis is for educational and informational purposes only. It should NOT be used as a substitute for professional medical diagnosis. Always consult a qualified dermatologist or healthcare provider for accurate diagnosis and treatment of skin conditions or any health concerns.",
      analyzeAnother: "Analyze Another Image",
      askChatbot: "Ask AI Chatbot",
      uploadFirst: "Please upload an image first",
      invalidFile: "Please upload a valid image file",
      fileTooLarge: "Image size should be less than 5MB"
    },
    labels: {
      severity: "Severity",
      diet: "Diet",
      med: "Medication",
      time: "Typical time to recover",
      curable: "Curable?",
      symptoms: "Symptoms",
      causes: "Causes",
    },
    buttons: {
      explore: "Explore Diseases",
      chat: "Chat with AI",
      search: "Search",
      showAll: "Show All",
      viewRemedy: "View Natural Remedies",
      askChatbot: "Ask Chatbot",
      send: "Send",
    },
    about: {
      title: "About NIHAM HealthWise",
      tagline: "Blending Nature, Health, and Innovation",
      body: "NIHAM HealthWise is an innovative, offline-first health education platform designed to empower individuals with reliable medical knowledge. Whether you're a student, teacher, or health-conscious citizen, NIHAM provides instant access to disease information, natural remedies, and AI-powered health guidance — all without requiring an internet connection.",
      whyBuilt: "🌍 Why We Built NIHAM HealthWise",
      whyBuiltBody: "In many parts of the world, reliable health information is hard to access — especially in rural areas with limited internet connectivity. We created NIHAM HealthWise to bridge this gap, making essential health knowledge available to everyone, everywhere, at any time.",
      whyUse: "⚡ Why You Should Use It",
      points: {
        offline: "<strong>Fully Offline:</strong> Works without internet — perfect for schools, rural clinics, and remote areas.",
        chatbot: "<strong>AI Health Chatbot:</strong> Get instant answers to health questions using our intelligent chatbot.",
        database: "<strong>Comprehensive Database:</strong> Explore 35+ diseases with detailed information on symptoms, causes, diet, and medications.",
        remedies: "<strong>Natural Remedies:</strong> Discover traditional and herbal treatments for common ailments.",
        educational: "<strong>Educational & Accessible:</strong> Designed for students, teachers, and health awareness programs.",
        privacy: "<strong>Privacy First:</strong> All data stays on your device — no tracking, no data collection."
      }
    },
    features: {
      chat: {
        title: "AI Health Chatbot",
        body: "Ask any health-related question — from common diseases to prevention tips — and get instant AI-based responses."
      },
      remedy: {
        title: "Natural & Herbal Remedies",
        body: "Discover traditional healing methods supported by nutrition, herbs, and lifestyle improvements."
      },
      stats: {
        title: "Interactive Statistics",
        body: "Visualize global and local health trends through colorful, easy-to-understand bar and pie charts."
      },
      innovation: {
        title: "Innovation for All",
        body: "Designed for competitions, health expos, and awareness drives — simple yet impactful for every age group."
      }
    },
    core: {
      mission: {
        title: "🚀 Our Mission",
        body: "To create a world where <strong>knowledge saves lives</strong> — where every student, teacher, and citizen can access reliable healthcare education even offline. <strong>NIHAM HealthWise</strong> is more than a website — it's a movement toward a healthier, informed, and connected world."
      }
    },
    chatbot: {
      greeting:
        "Hello! I'm NIHAM — your offline health assistant. Ask about a disease, remedy or general health question.",
      fallback:
        "I'm not sure about that yet. Try asking about a disease (e.g., 'diabetes'), a remedy ('natural remedies for fever'), or general health.",
      disclaimer:
        "For emergencies, contact local medical services immediately. NIHAM is informational only.",
    },
    vaccines: {
      title: "💉 Vaccine Schedule",
      subtitle: "Enter your age and gender to see recommended vaccines",
      ageLabel: "Age (years)",
      agePlaceholder: "Enter age",
      genderLabel: "Gender",
      genderSelect: "Select Gender",
      genderMale: "Male",
      genderFemale: "Female",
      getVaccinesBtn: "Get Vaccines",
      defaultMessage: "Enter your age and gender above to see your personalized vaccine schedule",
      errorAge: "⚠️ Please enter a valid age between 0 and 120 years",
      errorGender: "⚠️ Please select a gender",
      currentTitle: "💉 Recommended Vaccines for Age",
      year: "Year",
      years: "Years",
      historyTitle: "📋 Complete Vaccine History (Birth to",
      noVaccines: "ℹ️ No specific vaccines recommended at this age.",
      reminder: "Remember to get your annual flu shot and maintain routine boosters!",
      agePrefix: "Age:"
    },
  },

  hi: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "ग्रामीण भारत के लिए ऑफलाइन AI स्वास्थ्य सहायक",
      tagline: "प्रकृति, स्वास्थ्य और नवाचार को मिश्रित करना"
    },
    nav: {
      home: "होम",
      explore: "रोग खोजें",
      remedies: "प्राकृतिक उपचार",
      vaccines: "टीके",
      aiPrediction: "AI पूर्वानुमान",
      imageDetection: "छवि पहचान",
      chatbot: "चैटबॉट",
      statistics: "आंकड़े",
      about: "बारे में",
      emergency: "आपातकाल"
    },
    sections: {
      explore: "रोग खोजकर्ता",
      remedies: "प्राकृतिक और घरेलू उपचार",
      chatbot: "AI स्वास्थ्य चैटबॉट"
    },
    search: {
      disease: "रोग खोजें...",
      remedy: "उपचार खोजें..."
    },
    charts: {
      mostCommon: "सबसे आम रोग (2025)",
      curableVsChronic: "उपचार योग्य बनाम पुरानी स्थितियां",
      curableLabel: "उपचार योग्य (85%)",
      chronicLabel: "पुरानी (15%)"
    },
    diseases: {
      commoncold: {
        name: "सामान्य सर्दी"
      },
      fever: {
        name: "बुखार"
      },
      diabetes: {
        name: "मधुमेह"
      },
      hypertension: {
        name: "उच्च रक्तचाप"
      }
    },
    ui: {
      home: "होम",
      explore: "रोग खोजें",
      remedies: "प्राकृतिक उपचार",
      vaccines: "टीके",
      chatbot: "चैटबॉट",
      statistics: "आंकड़े",
      about: "बारे में",
      emergency: "आपातकाल",
      searchPlaceholder: "रोग खोजें...",
      remedySearchPlaceholder: "उपचार खोजें...",
      searchBtn: "खोज",
      showAllBtn: "सभी दिखाएं",
    },
    emergency: {
      title: "🚨 आपातकालीन मोड",
      subtitle: "जीवन रक्षक जानकारी तक त्वरित पहुंच",
      exitBtn: "✕ आपातकालीन मोड से बाहर निकलें",
      contactsTitle: "📞 आपातकालीन संपर्क (भारत)",
      ambulance: "एम्बुलेंस",
      police: "पुलिस",
      fire: "अग्निशमन",
      womenHelpline: "महिला हेल्पलाइन",
      childHelpline: "बाल हेल्पलाइन",
      firstAidTitle: "🏥 प्राथमिक चिकित्सा गाइड",
      quickActionsTitle: "⚡ त्वरित कार्रवाई",
      findHospitals: "🏥 नजदीकी अस्पताल खोजें",
      commonEmergencies: "🦠 सामान्य आपात स्थितियां",
      poisonInfo: "☠️ जहर की जानकारी",
      downloadOffline: "💾 ऑफलाइन के लिए डाउनलोड करें",
      cpr: {
        title: "सीपीआर (हृदय-फुफ्फुसीय पुनर्जीवन)",
        step1: "प्रतिक्रिया जांचें - थपथपाएं और चिल्लाएं",
        step2: "आपातकालीन सेवाओं को कॉल करें (108)",
        step3: "व्यक्ति को सख्त सतह पर रखें",
        step4: "छाती के केंद्र में हाथ रखें",
        step5: "जोर से और तेज दबाएं - 100-120 संपीड़न/मिनट",
        step6: "2 इंच (5 सेमी) नीचे दबाएं",
        step7: "छाती को पूरी तरह से उठने दें",
        step8: "मदद आने तक जारी रखें"
      },
      choking: {
        title: "घुटन - हेमलिच युक्ति",
        step1: "व्यक्ति के पीछे खड़े हों",
        step2: "नाभि के ऊपर मुट्ठी बनाएं",
        step3: "दूसरे हाथ से मुट्ठी पकड़ें",
        step4: "तेज ऊपर की ओर धक्का दें",
        step5: "वस्तु निकलने तक दोहराएं",
        step6: "असफल होने पर 108 पर कॉल करें"
      },
      bleeding: {
        title: "गंभीर रक्तस्राव",
        step1: "साफ कपड़े से सीधा दबाव लगाएं",
        step2: "10-15 मिनट तक दबाव बनाए रखें",
        step3: "घायल क्षेत्र को हृदय से ऊपर उठाएं",
        step4: "भीगे हुए कपड़े को न हटाएं",
        step5: "ऊपर और कपड़ा जोड़ें",
        step6: "तुरंत 108 पर कॉल करें",
        step7: "व्यक्ति को गर्म और शांत रखें"
      },
      burns: {
        title: "जलन",
        step1: "गर्मी के स्रोत से हटाएं",
        step2: "बहते पानी से ठंडा करें (10-20 मिनट)",
        step3: "आभूषण/तंग कपड़े हटाएं",
        step4: "बाँझ धुंध से ढकें",
        step5: "बर्फ न लगाएं",
        step6: "छाले न फोड़ें",
        step7: "गंभीर जलन के लिए चिकित्सा सहायता लें"
      },
      fracture: {
        title: "फ्रैक्चर/टूटी हड्डियां",
        step1: "घायल क्षेत्र को न हिलाएं",
        step2: "संभव हो तो स्प्लिंट से स्थिर करें",
        step3: "आइस पैक लगाएं (कपड़े में लपेटा हुआ)",
        step4: "संभव हो तो ऊपर उठाएं",
        step5: "हड्डी को फिर से संरेखित करने का प्रयास न करें",
        step6: "गंभीर फ्रैक्चर के लिए 108 पर कॉल करें",
        step7: "सदमे के लिए निगरानी करें"
      },
      poisoning: {
        title: "विषाक्तता",
        step1: "तुरंत जहर नियंत्रण को कॉल करें",
        step2: "संभव हो तो जहर की पहचान करें",
        step3: "उल्टी न कराएं",
        step4: "व्यक्ति को शांत और स्थिर रखें",
        step5: "बेहोश होने पर बगल में रखें",
        step6: "डॉक्टरों के लिए जहर का कंटेनर सहेजें",
        step7: "108 पर कॉल करें"
      },
      heatstroke: {
        title: "लू लगना",
        step1: "तुरंत ठंडे क्षेत्र में ले जाएं",
        step2: "अतिरिक्त कपड़े हटाएं",
        step3: "पानी/गीले कपड़े से ठंडा करें",
        step4: "व्यक्ति को हवा दें",
        step5: "होश में हो तो पानी दें",
        step6: "108 पर कॉल करें - यह जीवन के लिए खतरनाक है",
        step7: "तापमान की निगरानी करें"
      },
      seizure: {
        title: "दौरा",
        step1: "शांत रहें और दौरे का समय नोट करें",
        step2: "खतरनाक वस्तुओं का क्षेत्र साफ करें",
        step3: "नरम वस्तु से सिर को कुशन करें",
        step4: "व्यक्ति को बगल में घुमाएं",
        step5: "हरकतों को रोकें नहीं",
        step6: "मुंह में कुछ न डालें",
        step7: "5 मिनट से अधिक समय तक रहने पर 108 पर कॉल करें"
      }
    },
    aiPrediction: {
      title: "🤖 AI रोग पूर्वानुमान",
      subtitle: "अपने लक्षण दर्ज करें और हमारा AI संभावित रोगों की भविष्यवाणी करेगा",
      selectSymptoms: "अपने लक्षण चुनें",
      additionalLabel: "अतिरिक्त लक्षण (वैकल्पिक)",
      additionalPlaceholder: "आप जो अन्य लक्षण अनुभव कर रहे हैं उनका वर्णन करें...",
      predictBtn: "🔍 रोग की भविष्यवाणी करें",
      analysisComplete: "🔍 विश्लेषण पूर्ण",
      basedOnSymptoms: "आपके लक्षणों के आधार पर:",
      predictedDiseases: "📊 पूर्वानुमानित रोग (शीर्ष मिलान)",
      confidence: "विश्वास",
      matchProbability: "मिलान संभावना",
      matchedSymptoms: "मिलान किए गए लक्षण",
      severity: "गंभीरता",
      recoveryTime: "ठीक होने का समय",
      curable: "उपचार योग्य",
      viewDetails: "विवरण देखें",
      naturalRemedies: "प्राकृतिक उपचार",
      noMatch: "⚠️ कोई स्पष्ट मिलान नहीं मिला",
      noMatchDesc: "प्रदान किए गए लक्षणों के आधार पर, हम एक स्पष्ट रोग मिलान नहीं पा सके। कृपया सटीक निदान के लिए एक स्वास्थ्य सेवा पेशेवर से परामर्श करें।",
      disclaimer: "⚠️ महत्वपूर्ण अस्वीकरण:",
      disclaimerText: "यह AI पूर्वानुमान केवल सूचनात्मक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह की जगह नहीं लेना चाहिए। कृपया सटीक निदान और उपचार के लिए एक योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।",
      selectAtLeastOne: "कृपया कम से कम एक लक्षण चुनें"
    },
    imageDetection: {
      title: "📸 छवि-आधारित रोग पहचान",
      subtitle: "AI-संचालित विश्लेषण के लिए एक छवि अपलोड करें (त्वचा की स्थिति, एक्स-रे, आदि)",
      clickUpload: "अपलोड करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें",
      supported: "समर्थित: JPG, PNG, JPEG (अधिकतम 5MB)",
      analyzeBtn: "🔬 छवि का विश्लेषण करें",
      clearBtn: "साफ़ करें",
      analyzing: "🔬 छवि का विश्लेषण किया जा रहा है...",
      analyzingDesc: "इसमें कुछ क्षण लग सकते हैं",
      analysisComplete: "✅ विश्लेषण पूर्ण",
      aiConfidence: "AI विश्वास स्तर:",
      detectedConditions: "🔬 पहचानी गई स्थितियां",
      description: "विवरण:",
      recommendations: "अनुशंसित कार्रवाई:",
      analysisDetails: "📊 छवि विश्लेषण विवरण",
      dominantColors: "प्रमुख रंग:",
      texture: "बनावट:",
      pattern: "पैटर्न:",
      affectedArea: "प्रभावित क्षेत्र:",
      disclaimer: "⚠️ महत्वपूर्ण चिकित्सा अस्वीकरण:",
      disclaimerText: "यह AI-संचालित छवि विश्लेषण केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए है। इसे पेशेवर चिकित्सा निदान के विकल्प के रूप में उपयोग नहीं किया जाना चाहिए। त्वचा की स्थिति या किसी भी स्वास्थ्य चिंताओं के सटीक निदान और उपचार के लिए हमेशा एक योग्य त्वचा विशेषज्ञ या स्वास्थ्य सेवा प्रदाता से परामर्श करें।",
      analyzeAnother: "एक और छवि का विश्लेषण करें",
      askChatbot: "AI चैटबॉट से पूछें",
      uploadFirst: "कृपया पहले एक छवि अपलोड करें",
      invalidFile: "कृपया एक मान्य छवि फ़ाइल अपलोड करें",
      fileTooLarge: "छवि का आकार 5MB से कम होना चाहिए"
    },
    labels: {
      severity: "गम्भीरता",
      diet: "आहार",
      med: "दवा",
      time: "ठीक होने का समय",
      curable: "उपचार योग्य?",
      symptoms: "लक्षण",
      causes: "कारण",
    },
    buttons: {
      explore: "रोग खोजें",
      chat: "AI से चैट करें",
      search: "खोज",
      showAll: "सभी दिखाएं",
      viewRemedy: "प्राकृतिक उपचार देखें",
      askChatbot: "चैटबॉट से पूछें",
      send: "भेजें",
    },
    about: {
      title: "NIHAM HealthWise के बारे में",
      tagline: "प्रकृति, स्वास्थ्य और नवाचार को मिश्रित करना",
      body: "NIHAM HealthWise एक नवीन, ऑफ़लाइन-प्रथम स्वास्थ्य शिक्षा मंच है जो व्यक्तियों को विश्वसनीय चिकित्सा ज्ञान के साथ सशक्त बनाने के लिए डिज़ाइन किया गया है। चाहे आप छात्र हों, शिक्षक हों, या स्वास्थ्य के प्रति जागरूक नागरिक हों, NIHAM रोग की जानकारी, प्राकृतिक उपचार और AI-संचालित स्वास्थ्य मार्गदर्शन तक तत्काल पहुंच प्रदान करता है — सभी बिना इंटरनेट कनेक्शन की आवश्यकता के।",
      whyBuilt: "🌍 हमने NIHAM HealthWise क्यों बनाया",
      whyBuiltBody: "दुनिया के कई हिस्सों में, विश्वसनीय स्वास्थ्य जानकारी तक पहुंचना मुश्किल है — विशेष रूप से सीमित इंटरनेट कनेक्टिविटी वाले ग्रामीण क्षेत्रों में। हमने इस अंतर को पाटने के लिए NIHAM HealthWise बनाया, जिससे आवश्यक स्वास्थ्य ज्ञान सभी के लिए, हर जगह, किसी भी समय उपलब्ध हो।",
      whyUse: "⚡ आपको इसका उपयोग क्यों करना चाहिए",
      points: {
        offline: "<strong>पूरी तरह से ऑफ़लाइन:</strong> बिना इंटरनेट के काम करता है — स्कूलों, ग्रामीण क्लीनिकों और दूरदराज के क्षेत्रों के लिए बिल्कुल सही।",
        chatbot: "<strong>AI स्वास्थ्य चैटबॉट:</strong> हमारे बुद्धिमान चैटबॉट का उपयोग करके स्वास्थ्य प्रश्नों के तत्काल उत्तर प्राप्त करें।",
        database: "<strong>व्यापक डेटाबेस:</strong> लक्षण, कारण, आहार और दवाओं की विस्तृत जानकारी के साथ 35+ रोगों का अन्वेषण करें।",
        remedies: "<strong>प्राकृतिक उपचार:</strong> सामान्य बीमारियों के लिए पारंपरिक और हर्बल उपचार खोजें।",
        educational: "<strong>शैक्षिक और सुलभ:</strong> छात्रों, शिक्षकों और स्वास्थ्य जागरूकता कार्यक्रमों के लिए डिज़ाइन किया गया।",
        privacy: "<strong>गोपनीयता प्रथम:</strong> सभी डेटा आपके डिवाइस पर रहता है — कोई ट्रैकिंग नहीं, कोई डेटा संग्रह नहीं।"
      }
    },
    features: {
      chat: {
        title: "AI स्वास्थ्य चैटबॉट",
        body: "सामान्य रोगों से लेकर रोकथाम युक्तियों तक कोई भी स्वास्थ्य संबंधी प्रश्न पूछें — और तत्काल AI-आधारित उत्तर प्राप्त करें।"
      },
      remedy: {
        title: "प्राकृतिक और हर्बल उपचार",
        body: "पोषण, जड़ी-बूटियों और जीवनशैली में सुधार द्वारा समर्थित पारंपरिक उपचार विधियों की खोज करें।"
      },
      stats: {
        title: "इंटरैक्टिव सांख्यिकी",
        body: "रंगीन, समझने में आसान बार और पाई चार्ट के माध्यम से वैश्विक और स्थानीय स्वास्थ्य रुझानों की कल्पना करें।"
      },
      innovation: {
        title: "सभी के लिए नवाचार",
        body: "प्रतियोगिताओं, स्वास्थ्य प्रदर्शनियों और जागरूकता अभियानों के लिए डिज़ाइन किया गया — हर आयु वर्ग के लिए सरल लेकिन प्रभावशाली।"
      }
    },
    core: {
      mission: {
        title: "🚀 हमारा मिशन",
        body: "एक ऐसी दुनिया बनाना जहां <strong>ज्ञान जीवन बचाता है</strong> — जहां हर छात्र, शिक्षक और नागरिक ऑफ़लाइन भी विश्वसनीय स्वास्थ्य शिक्षा तक पहुंच सकता है। <strong>NIHAM HealthWise</strong> सिर्फ एक वेबसाइट से अधिक है — यह एक स्वस्थ, सूचित और जुड़ी हुई दुनिया की ओर एक आंदोलन है।"
      }
    },
    chatbot: {
      greeting:
        "नमस्ते — मैं NIHAM स्वास्थ्य सहायक हूँ। मुझसे रोग, आहार, उपचार या दवाओं के बारे में पूछें।",
      fallback:
        "माफ़ कीजिये, मेरे पास इस प्रश्न का विस्तृत उत्तर नहीं है। किसी रोग के बारे में पूछें।",
      disclaimer:
        "यह केवल जानकारी के लिए है — आपातकाल के लिए अपने स्वास्थ्य सेवा प्रदाता से संपर्क करें।",
    },
    vaccines: {
      title: "💉 टीकाकरण अनुसूची",
      subtitle: "अनुशंसित टीके देखने के लिए अपनी उम्र और लिंग दर्ज करें",
      ageLabel: "उम्र (वर्ष)",
      agePlaceholder: "उम्र दर्ज करें",
      genderLabel: "लिंग",
      genderSelect: "लिंग चुनें",
      genderMale: "पुरुष",
      genderFemale: "महिला",
      getVaccinesBtn: "टीके प्राप्त करें",
      defaultMessage: "अपना व्यक्तिगत टीकाकरण अनुसूची देखने के लिए ऊपर अपनी उम्र और लिंग दर्ज करें",
      errorAge: "⚠️ कृपया 0 से 120 वर्ष के बीच एक मान्य उम्र दर्ज करें",
      errorGender: "⚠️ कृपया एक लिंग चुनें",
      currentTitle: "💉 उम्र के लिए अनुशंसित टीके",
      year: "वर्ष",
      years: "वर्ष",
      historyTitle: "📋 पूर्ण टीकाकरण इतिहास (जन्म से",
      noVaccines: "ℹ️ इस उम्र में कोई विशिष्ट टीके की सिफारिश नहीं की गई है।",
      reminder: "अपना वार्षिक फ्लू शॉट लेना और नियमित बूस्टर बनाए रखना याद रखें!",
      agePrefix: "उम्र:"
    },
  },

  te: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "గ్రామీణ భారతదేశం కోసం ఆఫ్‌లైన్ AI ఆరోగ్య సహాయకుడు",
      tagline: "ప్రకృతి, ఆరోగ్యం మరియు ఆవిష్కరణను కలపడం"
    },
    nav: {
      home: "హోమ్",
      explore: "రోగాలను అన్వేషించండి",
      remedies: "సహజ చికిత్సలు",
      vaccines: "టీకాలు",
      aiPrediction: "AI అంచనా",
      imageDetection: "చిత్ర గుర్తింపు",
      chatbot: "చాట్‌బాట్",
      statistics: "గణాంకాలు",
      about: "గురించి",
      emergency: "అత్యవసరం"
    },
    sections: {
      explore: "రోగాల అన్వేషకుడు",
      remedies: "సహజ మరియు ఇంటి చికిత్సలు",
      chatbot: "AI ఆరోగ్య చాట్‌బాట్"
    },
    search: {
      disease: "రోగాన్ని శోధించండి...",
      remedy: "చికిత్సను శోధించండి..."
    },
    charts: {
      mostCommon: "అత్యంత సాధారణ రోగాలు (2025)",
      curableVsChronic: "నయం చేయదగినవి vs దీర్ఘకాలిక పరిస్థితులు",
      curableLabel: "నయం చేయదగినది (85%)",
      chronicLabel: "దీర్ఘకాలిక (15%)"
    },
    diseases: {
      commoncold: {
        name: "సాధారణ జలుబు"
      },
      fever: {
        name: "జ్వరం"
      },
      diabetes: {
        name: "మధుమేహం"
      },
      hypertension: {
        name: "రక్తపోటు"
      }
    },
    ui: {
      home: "హోమ్",
      explore: "రోగాలను అన్వేషించండి",
      remedies: "సహజ చికిత్సలు",
      vaccines: "టీకాలు",
      aiPrediction: "AI అంచనా",
      imageDetection: "చిత్ర గుర్తింపు",
      chatbot: "చాట్‌బాట్",
      statistics: "గణాంకాలు",
      about: "గురించి",
      emergency: "అత్యవసరం",
      searchPlaceholder: "రోగాన్ని శోధించండి...",
      remedySearchPlaceholder: "చికిత్సను శోధించండి...",
      searchBtn: "శోధించండి",
      showAllBtn: "అన్నిటిని చూపండి",
    },
    emergency: {
      title: "🚨 అత్యవసర మోడ్",
      subtitle: "జీవరక్షక సమాచారానికి త్వరిత ప్రాప్యత",
      exitBtn: "✕ అత్యవసర మోడ్ నుండి నిష్క్రమించండి",
      contactsTitle: "📞 అత్యవసర సంప్రదింపులు (భారతదేశం)",
      ambulance: "అంబులెన్స్",
      police: "పోలీసు",
      fire: "అగ్నిమాపక",
      womenHelpline: "మహిళా హెల్ప్‌లైన్",
      childHelpline: "పిల్లల హెల్ప్‌లైన్",
      firstAidTitle: "🏥 ప్రథమ చికిత్స గైడ్",
      quickActionsTitle: "⚡ త్వరిత చర్యలు",
      findHospitals: "🏥 సమీప ఆసుపత్రులను కనుగొనండి",
      commonEmergencies: "🦠 సాధారణ అత్యవసర పరిస్థితులు",
      poisonInfo: "☠️ విషం సమాచారం",
      downloadOffline: "💾 ఆఫ్‌లైన్ కోసం డౌన్‌లోడ్ చేయండి",
      cpr: {
        title: "CPR (హృదయ-ఊపిరితిత్తుల పునరుజ్జీవనం)",
        step1: "ప్రతిస్పందనను తనిఖీ చేయండి - తట్టండి మరియు అరవండి",
        step2: "అత్యవసర సేవలకు కాల్ చేయండి (108)",
        step3: "వ్యక్తిని దృఢమైన ఉపరితలంపై ఉంచండి",
        step4: "ఛాతీ మధ్యలో చేతులను ఉంచండి",
        step5: "గట్టిగా మరియు వేగంగా నొక్కండి - 100-120 కంప్రెషన్లు/నిమిషం",
        step6: "2 అంగుళాలు (5 సెం.మీ) క్రిందికి నొక్కండి",
        step7: "ఛాతీ పూర్తిగా పైకి రావడానికి అనుమతించండి",
        step8: "సహాయం వచ్చే వరకు కొనసాగించండి"
      },
      choking: {
        title: "ఉక్కిరిబిక్కిరి - హీమ్లిచ్ యుక్తి",
        step1: "వ్యక్తి వెనుక నిలబడండి",
        step2: "నాభి పైన పిడికిలి చేయండి",
        step3: "ఇతర చేతితో పిడికిలిని పట్టుకోండి",
        step4: "త్వరగా పైకి నెట్టండి",
        step5: "వస్తువు బయటకు వచ్చే వరకు పునరావృతం చేయండి",
        step6: "విఫలమైతే 108కి కాల్ చేయండి"
      },
      bleeding: {
        title: "తీవ్రమైన రక్తస్రావం",
        step1: "శుభ్రమైన గుడ్డతో నేరుగా ఒత్తిడి వేయండి",
        step2: "10-15 నిమిషాల పాటు ఒత్తిడిని కొనసాగించండి",
        step3: "గాయపడిన ప్రాంతాన్ని హృదయం కంటే పైకి ఎత్తండి",
        step4: "తడిసిన గుడ్డను తొలగించవద్దు",
        step5: "పైన మరింత గుడ్డ జోడించండి",
        step6: "వెంటనే 108కి కాల్ చేయండి",
        step7: "వ్యక్తిని వెచ్చగా మరియు ప్రశాంతంగా ఉంచండి"
      },
      burns: {
        title: "కాలిన గాయాలు",
        step1: "వేడి మూలం నుండి తొలగించండి",
        step2: "ప్రవహించే నీటితో చల్లబరచండి (10-20 నిమిషాలు)",
        step3: "ఆభరణాలు/బిగుతుగా ఉన్న దుస్తులను తొలగించండి",
        step4: "శుభ్రమైన గాజుతో కప్పండి",
        step5: "మంచును వర్తించవద్దు",
        step6: "పొక్కులను పగులగొట్టవద్దు",
        step7: "తీవ్రమైన కాలిన గాయాలకు వైద్య సహాయం పొందండి"
      },
      fracture: {
        title: "పగుళ్లు/విరిగిన ఎముకలు",
        step1: "గాయపడిన ప్రాంతాన్ని కదపవద్దు",
        step2: "సాధ్యమైతే స్ప్లింట్‌తో స్థిరీకరించండి",
        step3: "ఐస్ ప్యాక్ వర్తించండి (గుడ్డలో చుట్టబడినది)",
        step4: "సాధ్యమైతే పైకి ఎత్తండి",
        step5: "ఎముకను తిరిగి సరిచేయడానికి ప్రయత్నించవద్దు",
        step6: "తీవ్రమైన పగుళ్లకు 108కి కాల్ చేయండి",
        step7: "షాక్ కోసం పర్యవేక్షించండి"
      },
      poisoning: {
        title: "విషప్రయోగం",
        step1: "వెంటనే విష నియంత్రణకు కాల్ చేయండి",
        step2: "సాధ్యమైతే విషాన్ని గుర్తించండి",
        step3: "వాంతి చేయించవద్దు",
        step4: "వ్యక్తిని ప్రశాంతంగా మరియు నిశ్చలంగా ఉంచండి",
        step5: "అపస్మారక స్థితిలో ఉంటే, పక్కకు ఉంచండి",
        step6: "వైద్యుల కోసం విష కంటైనర్‌ను సేవ్ చేయండి",
        step7: "108కి కాల్ చేయండి"
      },
      heatstroke: {
        title: "వేడి దెబ్బ",
        step1: "వెంటనే చల్లని ప్రాంతానికి తరలించండి",
        step2: "అదనపు దుస్తులను తొలగించండి",
        step3: "నీరు/తడి గుడ్డలతో చల్లబరచండి",
        step4: "వ్యక్తికి గాలి ఇవ్వండి",
        step5: "స్పృహలో ఉంటే నీరు ఇవ్వండి",
        step6: "108కి కాల్ చేయండి - ఇది ప్రాణాంతకం",
        step7: "ఉష్ణోగ్రతను పర్యవేక్షించండి"
      },
      seizure: {
        title: "మూర్ఛ",
        step1: "ప్రశాంతంగా ఉండండి మరియు మూర్ఛ సమయాన్ని గమనించండి",
        step2: "ప్రమాదకరమైన వస్తువుల ప్రాంతాన్ని క్లియర్ చేయండి",
        step3: "మృదువైన వస్తువుతో తలను కుషన్ చేయండి",
        step4: "వ్యక్తిని పక్కకు తిప్పండి",
        step5: "కదలికలను నిరోధించవద్దు",
        step6: "నోటిలో ఏదీ పెట్టవద్దు",
        step7: "5 నిమిషాల కంటే ఎక్కువ ఉంటే 108కి కాల్ చేయండి"
      }
    },
    aiPrediction: {
      title: "🤖 AI రోగ అంచనా",
      subtitle: "మీ లక్షణాలను నమోదు చేయండి మరియు మా AI సాధ్యమైన రోగాలను అంచనా వేస్తుంది",
      selectSymptoms: "మీ లక్షణాలను ఎంచుకోండి",
      additionalLabel: "అదనపు లక్షణాలు (ఐచ్ఛికం)",
      additionalPlaceholder: "మీరు అనుభవిస్తున్న ఇతర లక్షణాలను వివరించండి...",
      predictBtn: "🔍 రోగాన్ని అంచనా వేయండి",
      analysisComplete: "🔍 విశ్లేషణ పూర్తయింది",
      basedOnSymptoms: "మీ లక్షణాల ఆధారంగా:",
      predictedDiseases: "📊 అంచనా వేసిన రోగాలు (టాప్ మ్యాచ్‌లు)",
      confidence: "విశ్వాసం",
      matchProbability: "మ్యాచ్ సంభావ్యత",
      matchedSymptoms: "సరిపోలిన లక్షణాలు",
      severity: "తీవ్రత",
      recoveryTime: "కోలుకునే సమయం",
      curable: "నయం చేయదగినది",
      viewDetails: "వివరాలను చూడండి",
      naturalRemedies: "సహజ చికిత్సలు",
      noMatch: "⚠️ స్పష్టమైన మ్యాచ్ కనుగొనబడలేదు",
      noMatchDesc: "అందించిన లక్షణాల ఆధారంగా, మేము స్పష్టమైన రోగ మ్యాచ్‌ను కనుగొనలేకపోయాము. దయచేసి ఖచ్చితమైన నిర్ధారణ కోసం ఆరోగ్య సంరక్షణ నిపుణుడిని సంప్రదించండి।",
      disclaimer: "⚠️ ముఖ్యమైన నిరాకరణ:",
      disclaimerText: "ఈ AI అంచనా సమాచార ప్రయోజనాల కోసం మాత్రమే మరియు వృత్తిపరమైన వైద్య సలహాను భర్తీ చేయకూడదు। దయచేసి ఖచ్చితమైన నిర్ధారణ మరియు చికిత్స కోసం అర్హత కలిగిన ఆరోగ్య సంరక్షణ ప్రదాతను సంప్రదించండి।",
      selectAtLeastOne: "దయచేసి కనీసం ఒక లక్షణాన్ని ఎంచుకోండి"
    },
    imageDetection: {
      title: "📸 చిత్రం-ఆధారిత రోగ గుర్తింపు",
      subtitle: "AI-శక్తితో కూడిన విశ్లేషణ కోసం చిత్రాన్ని అప్‌లోడ్ చేయండి (చర్మ పరిస్థితులు, X-రేలు, మొదలైనవి)",
      clickUpload: "అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి లేదా డ్రాగ్ & డ్రాప్ చేయండి",
      supported: "మద్దతు ఉంది: JPG, PNG, JPEG (గరిష్టంగా 5MB)",
      analyzeBtn: "🔬 చిత్రాన్ని విశ్లేషించండి",
      clearBtn: "క్లియర్ చేయండి",
      analyzing: "🔬 చిత్రాన్ని విశ్లేషిస్తోంది...",
      analyzingDesc: "దీనికి కొన్ని క్షణాలు పట్టవచ్చు",
      analysisComplete: "✅ విశ్లేషణ పూర్తయింది",
      aiConfidence: "AI విశ్వాస స్థాయి:",
      detectedConditions: "🔬 గుర్తించిన పరిస్థితులు",
      description: "వివరణ:",
      recommendations: "సిఫార్సు చేయబడిన చర్యలు:",
      analysisDetails: "📊 చిత్ర విశ్లేషణ వివరాలు",
      dominantColors: "ప్రధాన రంగులు:",
      texture: "ఆకృతి:",
      pattern: "నమూనా:",
      affectedArea: "ప్రభావిత ప్రాంతం:",
      disclaimer: "⚠️ ముఖ్యమైన వైద్య నిరాకరణ:",
      disclaimerText: "ఈ AI-శక్తితో కూడిన చిత్ర విశ్లేషణ విద్యా మరియు సమాచార ప్రయోజనాల కోసం మాత్రమే। దీనిని వృత్తిపరమైన వైద్య నిర్ధారణకు ప్రత్యామ్నాయంగా ఉపయోగించకూడదు। చర్మ పరిస్థితులు లేదా ఏదైనా ఆరోగ్య ఆందోళనల ఖచ్చితమైన నిర్ధారణ మరియు చికిత్స కోసం ఎల్లప్పుడూ అర్హత కలిగిన చర్మవ్యాధి నిపుణుడు లేదా ఆరోగ్య సంరక్షణ ప్రదాతను సంప్రదించండి।",
      analyzeAnother: "మరొక చిత్రాన్ని విశ్లేషించండి",
      askChatbot: "AI చాట్‌బాట్‌ను అడగండి",
      uploadFirst: "దయచేసి ముందుగా చిత్రాన్ని అప్‌లోడ్ చేయండి",
      invalidFile: "దయచేసి చెల్లుబాటు అయ్యే చిత్ర ఫైల్‌ను అప్‌లోడ్ చేయండి",
      fileTooLarge: "చిత్ర పరిమాణం 5MB కంటే తక్కువగా ఉండాలి"
    },
    labels: {
      severity: "తీవ్రత",
      diet: "ఆహారం",
      med: "దవాలు",
      time: "సాధారణ జరిగే సమయం",
      curable: "చికిత్స సాధ్యమా?",
      symptoms: "లక్షణాలు",
      causes: "కారణాలు",
    },
    buttons: {
      explore: "రోగాలను అన్వేషించండి",
      chat: "AI తో చాట్ చేయండి",
      search: "శోధించండి",
      showAll: "అన్నిటిని చూపండి",
      viewRemedy: "సహజ చికిత్సలను చూడండి",
      askChatbot: "చాట్‌బాట్‌కు అడగండి",
      send: "పంపండి",
    },
    about: {
      title: "NIHAM HealthWise గురించి",
      tagline: "ప్రకృతి, ఆరోగ్యం మరియు ఆవిష్కరణను కలపడం",
      body: "NIHAM HealthWise అనేది విశ్వసనీయ వైద్య జ్ఞానంతో వ్యక్తులను శక్తివంతం చేయడానికి రూపొందించబడిన ఒక వినూత్న, ఆఫ్‌లైన్-మొదటి ఆరోగ్య విద్యా వేదిక. మీరు విద్యార్థి, ఉపాధ్యాయుడు లేదా ఆరోగ్య-స్పృహ పౌరుడు అయినా, NIHAM వ్యాధి సమాచారం, సహజ చికిత్సలు మరియు AI-శక్తితో కూడిన ఆరోగ్య మార్గదర్శకత్వానికి తక్షణ ప్రాప్యతను అందిస్తుంది — అన్నీ ఇంటర్నెట్ కనెక్షన్ అవసరం లేకుండా.",
      whyBuilt: "🌍 మేము NIHAM HealthWise ను ఎందుకు నిర్మించాము",
      whyBuiltBody: "ప్రపంచంలోని అనేక ప్రాంతాలలో, విశ్వసనీయ ఆరోగ్య సమాచారం అందుబాటులో ఉండటం కష్టం — ముఖ్యంగా పరిమిత ఇంటర్నెట్ కనెక్టివిటీ ఉన్న గ్రామీణ ప్రాంతాలలో. ఈ అంతరాన్ని తగ్గించడానికి మేము NIHAM HealthWise ను సృష్టించాము, అవసరమైన ఆరోగ్య జ్ఞానాన్ని అందరికీ, ప్రతిచోటా, ఎప్పుడైనా అందుబాటులో ఉంచుతుంది.",
      whyUse: "⚡ మీరు దీన్ని ఎందుకు ఉపయోగించాలి",
      points: {
        offline: "<strong>పూర్తిగా ఆఫ్‌లైన్:</strong> ఇంటర్నెట్ లేకుండా పనిచేస్తుంది — పాఠశాలలు, గ్రామీణ క్లినిక్‌లు మరియు మారుమూల ప్రాంతాలకు సరైనది.",
        chatbot: "<strong>AI ఆరోగ్య చాట్‌బాట్:</strong> మా తెలివైన చాట్‌బాట్‌ను ఉపయోగించి ఆరోగ్య ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి.",
        database: "<strong>సమగ్ర డేటాబేస్:</strong> లక్షణాలు, కారణాలు, ఆహారం మరియు మందుల గురించి వివరణాత్మక సమాచారంతో 35+ వ్యాధులను అన్వేషించండి.",
        remedies: "<strong>సహజ చికిత్సలు:</strong> సాధారణ వ్యాధులకు సాంప్రదాయ మరియు మూలికా చికిత్సలను కనుగొనండి.",
        educational: "<strong>విద్యాపరమైన మరియు అందుబాటులో:</strong> విద్యార్థులు, ఉపాధ్యాయులు మరియు ఆరోగ్య అవగాహన కార్యక్రమాల కోసం రూపొందించబడింది.",
        privacy: "<strong>గోప్యత మొదటిది:</strong> అన్ని డేటా మీ పరికరంలో ఉంటుంది — ట్రాకింగ్ లేదు, డేటా సేకరణ లేదు."
      }
    },
    features: {
      chat: {
        title: "AI ఆరోగ్య చాట్‌బాట్",
        body: "సాధారణ వ్యాధుల నుండి నివారణ చిట్కాల వరకు ఏదైనా ఆరోగ్య సంబంధిత ప్రశ్న అడగండి — మరియు తక్షణ AI-ఆధారిత సమాధానాలు పొందండి."
      },
      remedy: {
        title: "సహజ మరియు మూలికా చికిత్సలు",
        body: "పోషణ, మూలికలు మరియు జీవనశైలి మెరుగుదలల ద్వారా మద్దతు ఇచ్చే సాంప్రదాయ వైద్య పద్ధతులను కనుగొనండి."
      },
      stats: {
        title: "ఇంటరాక్టివ్ గణాంకాలు",
        body: "రంగురంగుల, అర్థం చేసుకోవడానికి సులభమైన బార్ మరియు పై చార్ట్‌ల ద్వారా ప్రపంచ మరియు స్థానిక ఆరోగ్య ధోరణులను దృశ్యమానం చేయండి."
      },
      innovation: {
        title: "అందరికీ ఆవిష్కరణ",
        body: "పోటీలు, ఆరోగ్య ప్రదర్శనలు మరియు అవగాహన కార్యక్రమాల కోసం రూపొందించబడింది — ప్రతి వయస్సు వర్గానికి సరళమైనది కానీ ప్రభావశీలమైనది."
      }
    },
    core: {
      mission: {
        title: "🚀 మా లక్ష్యం",
        body: "<strong>జ్ఞానం జీవితాలను రక్షించే</strong> ప్రపంచాన్ని సృష్టించడం — ప్రతి విద్యార్థి, ఉపాధ్యాయుడు మరియు పౌరుడు ఆఫ్‌లైన్‌లో కూడా విశ్వసనీయ ఆరోగ్య విద్యను పొందగలిగే చోట. <strong>NIHAM HealthWise</strong> కేవలం వెబ్‌సైట్ కంటే ఎక్కువ — ఇది ఆరోగ్యకరమైన, సమాచారంతో కూడిన మరియు అనుసంధానించబడిన ప్రపంచం వైపు ఒక ఉద్యమం."
      }
    },
    chatbot: {
      greeting:
        "హలో - నేను NIHAM ఆరోగ్య సహాయకుడు. రోగాలు, చికిత్సలు లేదా సాధారణ ఆరోగ్య ప్రశ్నల గురించి తెలుసుకోండి.",
      fallback:
        "క్షమించాలి, దీనికి సహాయపడలేను. ఏదైనా రోగం గురించి అడగండి.",
      disclaimer:
        "ఇది శిక్షణ ప్రయోజనాల కోసం మాత్రమే — అత్యవసర సంContactUsICON్బों్జలో వైద్యుడిని సంప్రదించండి.",
    },
    vaccines: {
      title: "💉 టీకా షెడ్యూల్",
      subtitle: "సిఫార్సు చేయబడిన టీకాలను చూడటానికి మీ వయస్సు మరియు లింగాన్ని నమోదు చేయండి",
      ageLabel: "వయస్సు (సంవత్సరాలు)",
      agePlaceholder: "వయస్సు నమోదు చేయండి",
      genderLabel: "లింగం",
      genderSelect: "లింగాన్ని ఎంచుకోండి",
      genderMale: "పురుషుడు",
      genderFemale: "స్త్రీ",
      getVaccinesBtn: "టీకాలను పొందండి",
      defaultMessage: "మీ వ్యక్తిగత టీకా షెడ్యూల్‌ను చూడటానికి పైన మీ వయస్సు మరియు లింగాన్ని నమోదు చేయండి",
      errorAge: "⚠️ దయచేసి 0 మరియు 120 సంవత్సరాల మధ్య చెల్లుబాటు అయ్యే వయస్సును నమోదు చేయండి",
      errorGender: "⚠️ దయచేసి లింగాన్ని ఎంచుకోండి",
      currentTitle: "💉 వయస్సు కోసం సిఫార్సు చేయబడిన టీకాలు",
      year: "సంవత్సరం",
      years: "సంవత్సరాలు",
      historyTitle: "📋 పూర్తి టీకా చరిత్ర (పుట్టినప్పటి నుండి",
      noVaccines: "ℹ️ ఈ వయస్సులో నిర్దిష్ట టీకాలు సిఫార్సు చేయబడలేదు.",
      reminder: "మీ వార్షిక ఫ్లూ షాట్ తీసుకోవడం మరియు రొటీన్ బూస్టర్‌లను నిర్వహించడం గుర్తుంచుకోండి!",
      agePrefix: "వయస్సు:"
    },
  },

  ta: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "கிராமப்புற இந்தியாவிற்கான ஆஃப்லைன் AI சுகாதார உதவியாளர்",
      tagline: "இயற்கை, ஆரோக்கியம் மற்றும் புதுமை ஆகியவற்றை இணைப்பது"
    },
    nav: {
      home: "முகப்பு",
      explore: "நோய்களை ஆராய்க",
      remedies: "சைவமருந்துகள்",
      vaccines: "தடுப்பூசிகள்",
      aiPrediction: "AI கணிப்பு",
      imageDetection: "படம் கண்டறிதல்",
      chatbot: "சாட்பாட்",
      statistics: "புள்ளியியல்",
      about: "பற்றி",
      emergency: "அவசரநிலை"
    },
    sections: {
      explore: "நோய் ஆராய்ச்சியாளர்",
      remedies: "இயற்கை மற்றும் வீட்டு மருந்துகள்",
      chatbot: "AI ஆரோக்கிய சாட்பாட்"
    },
    search: {
      disease: "நோயை தேடவும்...",
      remedy: "சிகிச்சையை தேடவும்..."
    },
    charts: {
      mostCommon: "மிகவும் பொதுவான நோய்கள் (2025)",
      curableVsChronic: "குணப்படுத்தக்கூடியது vs நாள்பட்ட நிலைகள்",
      curableLabel: "குணப்படுத்தக்கூடியது (85%)",
      chronicLabel: "நாள்பட்டது (15%)"
    },
    diseases: {
      commoncold: {
        name: "சாதாரண சளி"
      },
      fever: {
        name: "காய்ச்சல்"
      },
      diabetes: {
        name: "நீரிழிவு"
      },
      hypertension: {
        name: "உயர் இரத்த அழுத்தம்"
      }
    },
    ui: {
      home: "முகப்பு",
      explore: "நோய்களை ஆராய்க",
      remedies: "சைவமருந்துகள்",
      vaccines: "தடுப்பூசிகள்",
      aiPrediction: "AI கணிப்பு",
      imageDetection: "படம் கண்டறிதல்",
      chatbot: "சாட்பாட்",
      statistics: "புள்ளியியல்",
      about: "பற்றி",
      emergency: "அவசரநிலை",
      searchPlaceholder: "நோயை தேடவும்...",
      remedySearchPlaceholder: "சிகிச்சையை தேடவும்...",
      searchBtn: "தேடுக",
      showAllBtn: "அனைத்தையும் காட்டு",
    },
    emergency: {
      title: "🚨 அவசர பயன்முறை",
      subtitle: "உயிர் காக்கும் தகவலுக்கான விரைவான அணுகல்",
      exitBtn: "✕ அவசர பயன்முறையிலிருந்து வெளியேறு",
      contactsTitle: "📞 அவசர தொடர்புகள் (இந்தியா)",
      ambulance: "ஆம்புலன்ஸ்",
      police: "காவல்துறை",
      fire: "தீயணைப்பு",
      womenHelpline: "பெண்கள் உதவி எண்",
      childHelpline: "குழந்தைகள் உதவி எண்",
      firstAidTitle: "🏥 முதலுதவி வழிகாட்டி",
      quickActionsTitle: "⚡ விரைவு நடவடிக்கைகள்",
      findHospitals: "🏥 அருகிலுள்ள மருத்துவமனைகளைக் கண்டறியவும்",
      commonEmergencies: "🦠 பொதுவான அவசரநிலைகள்",
      poisonInfo: "☠️ விஷம் தகவல்",
      downloadOffline: "💾 ஆஃப்லைனுக்கு பதிவிறக்கவும்",
      cpr: {
        title: "CPR (இதய-நுரையீரல் புத்துயிர்ப்பு)",
        step1: "பதிலளிப்பை சரிபார்க்கவும் - தட்டி கத்தவும்",
        step2: "அவசர சேவைகளை அழைக்கவும் (108)",
        step3: "நபரை உறுதியான மேற்பரப்பில் வைக்கவும்",
        step4: "மார்பின் மையத்தில் கைகளை வைக்கவும்",
        step5: "கடினமாகவும் வேகமாகவும் அழுத்தவும் - 100-120 அழுத்தங்கள்/நிமிடம்",
        step6: "2 அங்குலங்கள் (5 செ.மீ) கீழே அழுத்தவும்",
        step7: "மார்பு முழுமையாக உயர அனுமதிக்கவும்",
        step8: "உதவி வரும் வரை தொடரவும்"
      },
      choking: {
        title: "மூச்சுத்திணறல் - ஹெய்ம்லிச் சூழ்ச்சி",
        step1: "நபரின் பின்னால் நிற்கவும்",
        step2: "தொப்புளுக்கு மேலே முஷ்டி செய்யவும்",
        step3: "மற்ற கையால் முஷ்டியைப் பிடிக்கவும்",
        step4: "விரைவாக மேல்நோக்கி தள்ளவும்",
        step5: "பொருள் வெளியேறும் வரை மீண்டும் செய்யவும்",
        step6: "தோல்வியுற்றால் 108 ஐ அழைக்கவும்"
      },
      bleeding: {
        title: "கடுமையான இரத்தப்போக்கு",
        step1: "சுத்தமான துணியால் நேரடி அழுத்தம் கொடுக்கவும்",
        step2: "10-15 நிமிடங்களுக்கு அழுத்தத்தை பராமரிக்கவும்",
        step3: "காயப்பட்ட பகுதியை இதயத்திற்கு மேலே உயர்த்தவும்",
        step4: "நனைந்த துணியை அகற்ற வேண்டாம்",
        step5: "மேலே மேலும் துணி சேர்க்கவும்",
        step6: "உடனடியாக 108 ஐ அழைக்கவும்",
        step7: "நபரை சூடாகவும் அமைதியாகவும் வைக்கவும்"
      },
      burns: {
        title: "தீக்காயங்கள்",
        step1: "வெப்ப மூலத்திலிருந்து அகற்றவும்",
        step2: "ஓடும் நீரால் குளிர்விக்கவும் (10-20 நிமிடங்கள்)",
        step3: "நகைகள்/இறுக்கமான ஆடைகளை அகற்றவும்",
        step4: "மலட்டு துணியால் மூடவும்",
        step5: "பனிக்கட்டியைப் பயன்படுத்த வேண்டாம்",
        step6: "கொப்புளங்களை உடைக்க வேண்டாம்",
        step7: "கடுமையான தீக்காயங்களுக்கு மருத்துவ உதவி பெறவும்"
      },
      fracture: {
        title: "எலும்பு முறிவுகள்/உடைந்த எலும்புகள்",
        step1: "காயப்பட்ட பகுதியை நகர்த்த வேண்டாம்",
        step2: "முடிந்தால் ஸ்ப்ளிண்ட் மூலம் அசையாமல் செய்யவும்",
        step3: "ஐஸ் பேக் பயன்படுத்தவும் (துணியில் சுற்றப்பட்டது)",
        step4: "முடிந்தால் உயர்த்தவும்",
        step5: "எலும்பை மீண்டும் சீரமைக்க முயற்சிக்க வேண்டாம்",
        step6: "கடுமையான முறிவுகளுக்கு 108 ஐ அழைக்கவும்",
        step7: "அதிர்ச்சிக்கு கண்காணிக்கவும்"
      },
      poisoning: {
        title: "விஷம்",
        step1: "உடனடியாக விஷ கட்டுப்பாட்டை அழைக்கவும்",
        step2: "முடிந்தால் விஷத்தை அடையாளம் காணவும்",
        step3: "வாந்தியை தூண்ட வேண்டாம்",
        step4: "நபரை அமைதியாகவும் அசையாமலும் வைக்கவும்",
        step5: "மயக்கமடைந்தால், பக்கவாட்டில் வைக்கவும்",
        step6: "மருத்துவர்களுக்காக விஷ கொள்கலனை சேமிக்கவும்",
        step7: "108 ஐ அழைக்கவும்"
      },
      heatstroke: {
        title: "வெப்ப பக்கவாதம்",
        step1: "உடனடியாக குளிர்ந்த பகுதிக்கு நகர்த்தவும்",
        step2: "அதிகப்படியான ஆடைகளை அகற்றவும்",
        step3: "நீர்/ஈரமான துணிகளால் குளிர்விக்கவும்",
        step4: "நபருக்கு காற்று கொடுக்கவும்",
        step5: "சுயநினைவுடன் இருந்தால் தண்ணீர் கொடுக்கவும்",
        step6: "108 ஐ அழைக்கவும் - இது உயிருக்கு ஆபத்தானது",
        step7: "வெப்பநிலையை கண்காணிக்கவும்"
      },
      seizure: {
        title: "வலிப்பு",
        step1: "அமைதியாக இருங்கள் மற்றும் வலிப்பு நேரத்தை குறிக்கவும்",
        step2: "ஆபத்தான பொருட்களின் பகுதியை அழிக்கவும்",
        step3: "மென்மையான பொருளால் தலையை குஷன் செய்யவும்",
        step4: "நபரை பக்கவாட்டில் திருப்பவும்",
        step5: "இயக்கங்களை கட்டுப்படுத்த வேண்டாம்",
        step6: "வாயில் எதையும் வைக்க வேண்டாம்",
        step7: "5 நிமிடங்களுக்கு மேல் நீடித்தால் 108 ஐ அழைக்கவும்"
      }
    },
    aiPrediction: {
      title: "🤖 AI நோய் கணிப்பு",
      subtitle: "உங்கள் அறிகுறிகளை உள்ளிடவும், எங்கள் AI சாத்தியமான நோய்களை கணிக்கும்",
      selectSymptoms: "உங்கள் அறிகுறிகளைத் தேர்ந்தெடுக்கவும்",
      additionalLabel: "கூடுதல் அறிகுறிகள் (விருப்பமானது)",
      additionalPlaceholder: "நீங்கள் அனுபவிக்கும் பிற அறிகுறிகளை விவரிக்கவும்...",
      predictBtn: "🔍 நோயை கணிக்கவும்",
      analysisComplete: "🔍 பகுப்பாய்வு முடிந்தது",
      basedOnSymptoms: "உங்கள் அறிகுறிகளின் அடிப்படையில்:",
      predictedDiseases: "📊 கணிக்கப்பட்ட நோய்கள் (சிறந்த பொருத்தங்கள்)",
      confidence: "நம்பிக்கை",
      matchProbability: "பொருத்த நிகழ்தகவு",
      matchedSymptoms: "பொருந்திய அறிகுறிகள்",
      severity: "தீவிரம்",
      recoveryTime: "மீட்பு நேரம்",
      curable: "குணப்படுத்தக்கூடியது",
      viewDetails: "விவரங்களைக் காண்க",
      naturalRemedies: "இயற்கை மருந்துகள்",
      noMatch: "⚠️ தெளிவான பொருத்தம் கிடைக்கவில்லை",
      noMatchDesc: "வழங்கப்பட்ட அறிகுறிகளின் அடிப்படையில், தெளிவான நோய் பொருத்தத்தை எங்களால் கண்டுபிடிக்க முடியவில்லை। துல்லியமான நோயறிதலுக்கு சுகாதார நிபுணரை அணுகவும்.",
      disclaimer: "⚠️ முக்கியமான மறுப்பு:",
      disclaimerText: "இந்த AI கணிப்பு தகவல் நோக்கங்களுக்காக மட்டுமே மற்றும் தொழில்முறை மருத்துவ ஆலோசனையை மாற்றக்கூடாது। துல்லியமான நோயறிதல் மற்றும் சிகிச்சைக்கு தகுதிவாய்ந்த சுகாதார வழங்குநரை அணுகவும்.",
      selectAtLeastOne: "குறைந்தது ஒரு அறிகுறியையாவது தேர்ந்தெடுக்கவும்"
    },
    imageDetection: {
      title: "📸 படம் அடிப்படையிலான நோய் கண்டறிதல்",
      subtitle: "AI-இயக்கப்படும் பகுப்பாய்வுக்கு படத்தைப் பதிவேற்றவும் (தோல் நிலைகள், X-கதிர்கள், போன்றவை)",
      clickUpload: "பதிவேற்ற கிளிக் செய்யவும் அல்லது இழுத்து விடவும்",
      supported: "ஆதரிக்கப்படுகிறது: JPG, PNG, JPEG (அதிகபட்சம் 5MB)",
      analyzeBtn: "🔬 படத்தை பகுப்பாய்வு செய்யவும்",
      clearBtn: "அழிக்கவும்",
      analyzing: "🔬 படத்தை பகுப்பாய்வு செய்கிறது...",
      analyzingDesc: "இதற்கு சில நிமிடங்கள் ஆகலாம்",
      analysisComplete: "✅ பகுப்பாய்வு முடிந்தது",
      aiConfidence: "AI நம்பிக்கை நிலை:",
      detectedConditions: "🔬 கண்டறியப்பட்ட நிலைகள்",
      description: "விளக்கம்:",
      recommendations: "பரிந்துரைக்கப்பட்ட நடவடிக்கைகள்:",
      analysisDetails: "📊 படப் பகுப்பாய்வு விவரங்கள்",
      dominantColors: "முதன்மை நிறங்கள்:",
      texture: "அமைப்பு:",
      pattern: "வடிவம்:",
      affectedArea: "பாதிக்கப்பட்ட பகுதி:",
      disclaimer: "⚠️ முக்கியமான மருத்துவ மறுப்பு:",
      disclaimerText: "இந்த AI-இயக்கப்படும் படப் பகுப்பாய்வு கல்வி மற்றும் தகவல் நோக்கங்களுக்காக மட்டுமே. இது தொழில்முறை மருத்துவ நோயறிதலுக்கு மாற்றாகப் பயன்படுத்தப்படக்கூடாது. தோல் நிலைகள் அல்லது ஏதேனும் சுகாதார கவலைகளின் துல்லியமான நோயறிதல் மற்றும் சிகிச்சைக்கு எப்போதும் தகுதிவாய்ந்த தோல் மருத்துவர் அல்லது சுகாதார வழங்குநரை அணுகவும்.",
      analyzeAnother: "மற்றொரு படத்தை பகுப்பாய்வு செய்யவும்",
      askChatbot: "AI சாட்பாட்டிடம் கேளுங்கள்",
      uploadFirst: "முதலில் படத்தைப் பதிவேற்றவும்",
      invalidFile: "சரியான படக் கோப்பைப் பதிவேற்றவும்",
      fileTooLarge: "படத்தின் அளவு 5MB க்கும் குறைவாக இருக்க வேண்டும்"
    },
    labels: {
      severity: "தீவிரம்",
      diet: "உணவு",
      med: "மருந்து",
      time: "சிகிச்சை காலம்",
      curable: "குணப்படுத்தக்கூடியது?",
      symptoms: "அறிகுறிகள்",
      causes: "காரணங்கள்",
    },
    buttons: {
      explore: "நோய்களை ஆராய்க",
      chat: "AI உடன் அரட்டை",
      search: "தேடுக",
      showAll: "அனைத்தையும் காட்டு",
      viewRemedy: "சைவமருந்துகளைக் காணுங்கள்",
      askChatbot: "சாட்பாட்டிடம் கேளுங்கள்",
      send: "அனுப்பவும்",
    },
    about: {
      title: "NIHAM HealthWise பற்றி",
      tagline: "இயற்கை, ஆரோக்கியம் மற்றும் புதுமை ஆகியவற்றை இணைப்பது",
      body: "NIHAM HealthWise என்பது நம்பகமான மருத்துவ அறிவுடன் தனிநபர்களை மேம்படுத்த வடிவமைக்கப்பட்ட ஒரு புதுமையான, ஆஃப்லைன்-முதல் சுகாதார கல்வி தளமாகும். நீங்கள் மாணவராக, ஆசிரியராக அல்லது சுகாதார உணர்வுள்ள குடிமகனாக இருந்தாலும், NIHAM நோய் தகவல், இயற்கை சிகிச்சைகள் மற்றும் AI-இயக்கப்படும் சுகாதார வழிகாட்டுதலுக்கான உடனடி அணுகலை வழங்குகிறது — அனைத்தும் இணைய இணைப்பு தேவையில்லாமல்.",
      whyBuilt: "🌍 நாங்கள் NIHAM HealthWise ஐ ஏன் உருவாக்கினோம்",
      whyBuiltBody: "உலகின் பல பகுதிகளில், நம்பகமான சுகாதார தகவலை அணுகுவது கடினம் — குறிப்பாக குறைந்த இணைய இணைப்பு உள்ள கிராமப்புற பகுதிகளில். இந்த இடைவெளியை நிரப்ப நாங்கள் NIHAM HealthWise ஐ உருவாக்கினோம், அத்தியாவசிய சுகாதார அறிவை அனைவருக்கும், எங்கும், எந்த நேரத்திலும் கிடைக்கச் செய்கிறோம்.",
      whyUse: "⚡ நீங்கள் இதை ஏன் பயன்படுத்த வேண்டும்",
      points: {
        offline: "<strong>முழுமையாக ஆஃப்லைன்:</strong> இணையம் இல்லாமல் வேலை செய்கிறது — பள்ளிகள், கிராமப்புற மருத்துவமனைகள் மற்றும் தொலைதூர பகுதிகளுக்கு சரியானது.",
        chatbot: "<strong>AI சுகாதார சாட்பாட்:</strong> எங்கள் புத்திசாலி சாட்பாட்டைப் பயன்படுத்தி சுகாதார கேள்விகளுக்கு உடனடி பதில்களைப் பெறுங்கள்.",
        database: "<strong>விரிவான தரவுத்தளம்:</strong> அறிகுறிகள், காரணங்கள், உணவு மற்றும் மருந்துகள் பற்றிய விரிவான தகவலுடன் 35+ நோய்களை ஆராயுங்கள்.",
        remedies: "<strong>இயற்கை சிகிச்சைகள்:</strong> பொதுவான நோய்களுக்கான பாரம்பரிய மற்றும் மூலிகை சிகிச்சைகளைக் கண்டறியுங்கள்.",
        educational: "<strong>கல்வி மற்றும் அணுகக்கூடியது:</strong> மாணவர்கள், ஆசிரியர்கள் மற்றும் சுகாதார விழிப்புணர்வு திட்டங்களுக்காக வடிவமைக்கப்பட்டது.",
        privacy: "<strong>தனியுரிமை முதலில்:</strong> அனைத்து தரவும் உங்கள் சாதனத்தில் இருக்கும் — கண்காணிப்பு இல்லை, தரவு சேகரிப்பு இல்லை."
      }
    },
    features: {
      chat: { title: "AI Health Chatbot", body: "Ask any health-related question and get instant AI-based responses." },
      remedy: { title: "Natural & Herbal Remedies", body: "Discover traditional healing methods." },
      stats: { title: "Interactive Statistics", body: "Visualize health trends through charts." },
      innovation: { title: "Innovation for All", body: "Simple yet impactful for every age group." }
    },
    core: {
      mission: {
        title: "🚀 Our Mission",
        body: "To create a world where <strong>knowledge saves lives</strong>."
      }
    },
    chatbot: {
      greeting:
        "வணக்கம் - நான் NIHAM உங்களுக்காக இருக்கிறேன். நோய்கள், சிகிச்சைகள் அல்லது பொது ஆரோக்கியம் பற்றி தேடுங்கள்.",
      fallback:
        "மன்னிக்கவும், இதற்கு பதிலளிக்க முடியவில்லை. ஏதேனும் நோய் பற்றி கேளுங்கள்.",
      disclaimer:
        "இது தகவல் நோக்கத்தில் மட்டுமே - அவசரமாக மருத்துவனை சந்திக்கவும்.",
    },
    vaccines: {
      title: "💉 தடுப்பூசி அட்டவணை",
      subtitle: "பரிந்துரைக்கப்பட்ட தடுப்பூசிகளைக் காண உங்கள் வயது மற்றும் பாலினத்தை உள்ளிடவும்",
      ageLabel: "வயது (ஆண்டுகள்)",
      agePlaceholder: "வயதை உள்ளிடவும்",
      genderLabel: "பாலினம்",
      genderSelect: "பாலினத்தைத் தேர்ந்தெடுக்கவும்",
      genderMale: "ஆண்",
      genderFemale: "பெண்",
      getVaccinesBtn: "தடுப்பூசிகளைப் பெறுங்கள்",
      defaultMessage: "உங்கள் தனிப்பயனாக்கப்பட்ட தடுப்பூசி அட்டவணையைக் காண மேலே உங்கள் வயது மற்றும் பாலினத்தை உள்ளிடவும்",
      errorAge: "⚠️ தயவுசெய்து 0 முதல் 120 ஆண்டுகளுக்கு இடையில் சரியான வயதை உள்ளிடவும்",
      errorGender: "⚠️ தயவுசெய்து பாலினத்தைத் தேர்ந்தெடுக்கவும்",
      currentTitle: "💉 வயதுக்கான பரிந்துரைக்கப்பட்ட தடுப்பூசிகள்",
      year: "ஆண்டு",
      years: "ஆண்டுகள்",
      historyTitle: "📋 முழுமையான தடுப்பூசி வரலாறு (பிறப்பு முதல்",
      noVaccines: "ℹ️ இந்த வயதில் குறிப்பிட்ட தடுப்பூசிகள் பரிந்துரைக்கப்படவில்லை.",
      reminder: "உங்கள் வருடாந்திர காய்ச்சல் ஊசி எடுப்பதையும் வழக்கமான பூஸ்டர்களை பராமரிப்பதையும் நினைவில் கொள்ளுங்கள்!",
      agePrefix: "வயது:"
    },
  },

  bn: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "গ্রামীণ ভারতের জন্য অফলাইন AI স্বাস্থ্য সহায়ক",
      tagline: "প্রকৃতি, স্বাস্থ্য এবং উদ্ভাবনকে মিশ্রিত করা"
    },
    nav: {
      home: "হোম",
      explore: "রোগ অনুসন্ধান",
      remedies: "প্রাকৃতিক চিকিৎসা",
      vaccines: "টিকা",
      aiPrediction: "AI পূর্বাভাস",
      imageDetection: "ছবি সনাক্তকরণ",
      chatbot: "চ্যাটবট",
      statistics: "পরিসংখ্যান",
      about: "সম্পর্কে",
      emergency: "জরুরি"
    },
    sections: {
      explore: "রোগ অন্বেষক",
      remedies: "প্রাকৃতিক এবং ঘরোয়া প্রতিকার",
      chatbot: "AI স্বাস্থ্য চ্যাটবট"
    },
    search: {
      disease: "রোগ খুঁজুন...",
      remedy: "চিকিৎসা খুঁজুন..."
    },
    charts: {
      mostCommon: "সবচেয়ে সাধারণ রোগ (2025)",
      curableVsChronic: "নিরাময়যোগ্য বনাম দীর্ঘস্থায়ী অবস্থা",
      curableLabel: "নিরাময়যোগ্য (85%)",
      chronicLabel: "দীর্ঘস্থায়ী (15%)"
    },
    diseases: {
      commoncold: {
        name: "সাধারণ সর্দি"
      },
      fever: {
        name: "জ্বর"
      },
      diabetes: {
        name: "ডায়াবেটিস"
      },
      hypertension: {
        name: "উচ্চ রক্তচাপ"
      }
    },
    ui: {
      home: "হোম",
      explore: "রোগ অনুসন্ধান",
      remedies: "প্রাকৃতিক চিকিৎসা",
      vaccines: "টিকা",
      aiPrediction: "AI পূর্বাভাস",
      imageDetection: "ছবি সনাক্তকরণ",
      chatbot: "চ্যাটবট",
      statistics: "পরিসংখ্যান",
      about: "সম্পর্কে",
      emergency: "জরুরি",
      searchPlaceholder: "রোগ খুঁজুন...",
      remedySearchPlaceholder: "চিকিৎসা খুঁজুন...",
      searchBtn: "খুঁজুন",
      showAllBtn: "সব দেখুন",
    },
    emergency: {
      title: "🚨 জরুরি মোড",
      subtitle: "জীবন রক্ষাকারী তথ্যে দ্রুত অ্যাক্সেস",
      exitBtn: "✕ জরুরি মোড থেকে প্রস্থান করুন",
      contactsTitle: "📞 জরুরি যোগাযোগ (ভারত)",
      ambulance: "অ্যাম্বুলেন্স",
      police: "পুলিশ",
      fire: "ফায়ার সার্ভিস",
      womenHelpline: "মহিলা হেল্পলাইন",
      childHelpline: "শিশু হেল্পলাইন",
      firstAidTitle: "🏥 প্রাথমিক চিকিৎসা গাইড",
      quickActionsTitle: "⚡ দ্রুত পদক্ষেপ",
      findHospitals: "🏥 কাছাকাছি হাসপাতাল খুঁজুন",
      commonEmergencies: "🦠 সাধারণ জরুরি অবস্থা",
      poisonInfo: "☠️ বিষ তথ্য",
      downloadOffline: "💾 অফলাইনের জন্য ডাউনলোড করুন",
      cpr: {
        title: "CPR (কার্ডিওপালমোনারি রিসাসিটেশন)",
        step1: "প্রতিক্রিয়া পরীক্ষা করুন - থাপ্পড় দিন এবং চিৎকার করুন",
        step2: "জরুরি সেবায় কল করুন (108)",
        step3: "ব্যক্তিকে শক্ত পৃষ্ঠে রাখুন",
        step4: "বুকের কেন্দ্রে হাত রাখুন",
        step5: "শক্ত এবং দ্রুত চাপুন - 100-120 কম্প্রেশন/মিনিট",
        step6: "2 ইঞ্চি (5 সেমি) নিচে চাপুন",
        step7: "বুক সম্পূর্ণভাবে উঠতে দিন",
        step8: "সাহায্য আসা পর্যন্ত চালিয়ে যান"
      },
      choking: {
        title: "শ্বাসরোধ - হেইমলিচ কৌশল",
        step1: "ব্যক্তির পিছনে দাঁড়ান",
        step2: "নাভির উপরে মুষ্টি তৈরি করুন",
        step3: "অন্য হাত দিয়ে মুষ্টি ধরুন",
        step4: "দ্রুত উপরের দিকে ধাক্কা দিন",
        step5: "বস্তু বের না হওয়া পর্যন্ত পুনরাবৃত্তি করুন",
        step6: "ব্যর্থ হলে 108 এ কল করুন"
      },
      bleeding: {
        title: "গুরুতর রক্তপাত",
        step1: "পরিষ্কার কাপড় দিয়ে সরাসরি চাপ প্রয়োগ করুন",
        step2: "10-15 মিনিটের জন্য চাপ বজায় রাখুন",
        step3: "আহত এলাকা হৃদয়ের উপরে উঠান",
        step4: "ভিজে গেলে কাপড় সরাবেন না",
        step5: "উপরে আরও কাপড় যোগ করুন",
        step6: "অবিলম্বে 108 এ কল করুন",
        step7: "ব্যক্তিকে উষ্ণ এবং শান্ত রাখুন"
      },
      burns: {
        title: "পোড়া",
        step1: "তাপ উৎস থেকে সরান",
        step2: "প্রবাহিত জল দিয়ে ঠান্ডা করুন (10-20 মিনিট)",
        step3: "গহনা/আঁটসাঁট পোশাক সরান",
        step4: "জীবাণুমুক্ত গজ দিয়ে ঢেকে দিন",
        step5: "বরফ প্রয়োগ করবেন না",
        step6: "ফোস্কা ফাটাবেন না",
        step7: "গুরুতর পোড়ার জন্য চিকিৎসা সহায়তা নিন"
      },
      fracture: {
        title: "ফ্র্যাকচার/ভাঙা হাড়",
        step1: "আহত এলাকা নাড়াবেন না",
        step2: "সম্ভব হলে স্প্লিন্ট দিয়ে স্থির করুন",
        step3: "আইস প্যাক প্রয়োগ করুন (কাপড়ে মোড়ানো)",
        step4: "সম্ভব হলে উঁচু করুন",
        step5: "হাড় পুনরায় সারিবদ্ধ করার চেষ্টা করবেন না",
        step6: "গুরুতর ফ্র্যাকচারের জন্য 108 এ কল করুন",
        step7: "শক এর জন্য পর্যবেক্ষণ করুন"
      },
      poisoning: {
        title: "বিষক্রিয়া",
        step1: "অবিলম্বে বিষ নিয়ন্ত্রণে কল করুন",
        step2: "সম্ভব হলে বিষ সনাক্ত করুন",
        step3: "বমি করাবেন না",
        step4: "ব্যক্তিকে শান্ত এবং স্থির রাখুন",
        step5: "অজ্ঞান হলে, পাশে রাখুন",
        step6: "ডাক্তারদের জন্য বিষের পাত্র সংরক্ষণ করুন",
        step7: "108 এ কল করুন"
      },
      heatstroke: {
        title: "হিট স্ট্রোক",
        step1: "অবিলম্বে ঠান্ডা এলাকায় সরান",
        step2: "অতিরিক্ত পোশাক সরান",
        step3: "জল/ভেজা কাপড় দিয়ে ঠান্ডা করুন",
        step4: "ব্যক্তিকে বাতাস করুন",
        step5: "সচেতন থাকলে জল দিন",
        step6: "108 এ কল করুন - এটি জীবন-হুমকিপূর্ণ",
        step7: "তাপমাত্রা পর্যবেক্ষণ করুন"
      },
      seizure: {
        title: "খিঁচুনি",
        step1: "শান্ত থাকুন এবং খিঁচুনির সময় নোট করুন",
        step2: "বিপজ্জনক বস্তুর এলাকা পরিষ্কার করুন",
        step3: "নরম বস্তু দিয়ে মাথা কুশন করুন",
        step4: "ব্যক্তিকে পাশে ঘুরান",
        step5: "নড়াচড়া সীমাবদ্ধ করবেন না",
        step6: "মুখে কিছু রাখবেন না",
        step7: "5 মিনিটের বেশি স্থায়ী হলে 108 এ কল করুন"
      }
    },
    aiPrediction: {
      title: "🤖 AI রোগ পূর্বাভাস",
      subtitle: "আপনার লক্ষণগুলি লিখুন এবং আমাদের AI সম্ভাব্য রোগগুলি পূর্বাভাস দেবে",
      selectSymptoms: "আপনার লক্ষণগুলি নির্বাচন করুন",
      additionalLabel: "অতিরিক্ত লক্ষণ (ঐচ্ছিক)",
      additionalPlaceholder: "আপনি যে অন্যান্য লক্ষণগুলি অনুভব করছেন তা বর্ণনা করুন...",
      predictBtn: "🔍 রোগ পূর্বাভাস দিন",
      analysisComplete: "🔍 বিশ্লেষণ সম্পূর্ণ",
      basedOnSymptoms: "আপনার লক্ষণের ভিত্তিতে:",
      predictedDiseases: "📊 পূর্বাভাসিত রোগ (শীর্ষ মিল)",
      confidence: "আত্মবিশ্বাস",
      matchProbability: "মিল সম্ভাবনা",
      matchedSymptoms: "মিলিত লক্ষণ",
      severity: "তীব্রতা",
      recoveryTime: "পুনরুদ্ধারের সময়",
      curable: "নিরাময়যোগ্য",
      viewDetails: "বিস্তারিত দেখুন",
      naturalRemedies: "প্রাকৃতিক প্রতিকার",
      noMatch: "⚠️ কোনো স্পষ্ট মিল পাওয়া যায়নি",
      noMatchDesc: "প্রদত্ত লক্ষণের ভিত্তিতে, আমরা একটি স্পষ্ট রোগ মিল খুঁজে পাইনি। সঠিক নির্ণয়ের জন্য একজন স্বাস্থ্যসেবা পেশাদারের সাথে পরামর্শ করুন।",
      disclaimer: "⚠️ গুরুত্বপূর্ণ দাবিত্যাগ:",
      disclaimerText: "এই AI পূর্বাভাস শুধুমাত্র তথ্যমূলক উদ্দেশ্যে এবং পেশাদার চিকিৎসা পরামর্শ প্রতিস্থাপন করা উচিত নয়। সঠিক নির্ণয় এবং চিকিৎসার জন্য একজন যোগ্য স্বাস্থ্যসেবা প্রদানকারীর সাথে পরামর্শ করুন।",
      selectAtLeastOne: "অনুগ্রহ করে কমপক্ষে একটি লক্ষণ নির্বাচন করুন"
    },
    imageDetection: {
      title: "📸 ছবি-ভিত্তিক রোগ সনাক্তকরণ",
      subtitle: "AI-চালিত বিশ্লেষণের জন্য একটি ছবি আপলোড করুন (ত্বকের অবস্থা, এক্স-রে, ইত্যাদি)",
      clickUpload: "আপলোড করতে ক্লিক করুন বা ড্র্যাগ এবং ড্রপ করুন",
      supported: "সমর্থিত: JPG, PNG, JPEG (সর্বোচ্চ 5MB)",
      analyzeBtn: "🔬 ছবি বিশ্লেষণ করুন",
      clearBtn: "পরিষ্কার করুন",
      analyzing: "🔬 ছবি বিশ্লেষণ করা হচ্ছে...",
      analyzingDesc: "এটি কয়েক মুহূর্ত সময় নিতে পারে",
      analysisComplete: "✅ বিশ্লেষণ সম্পূর্ণ",
      aiConfidence: "AI আত্মবিশ্বাস স্তর:",
      detectedConditions: "🔬 সনাক্ত করা অবস্থা",
      description: "বর্ণনা:",
      recommendations: "প্রস্তাবিত পদক্ষেপ:",
      analysisDetails: "📊 ছবি বিশ্লেষণ বিবরণ",
      dominantColors: "প্রধান রং:",
      texture: "গঠন:",
      pattern: "প্যাটার্ন:",
      affectedArea: "প্রভাবিত এলাকা:",
      disclaimer: "⚠️ গুরুত্বপূর্ণ চিকিৎসা দাবিত্যাগ:",
      disclaimerText: "এই AI-চালিত ছবি বিশ্লেষণ শুধুমাত্র শিক্ষামূলক এবং তথ্যমূলক উদ্দেশ্যে। এটি পেশাদার চিকিৎসা নির্ণয়ের বিকল্প হিসাবে ব্যবহার করা উচিত নয়। ত্বকের অবস্থা বা কোনো স্বাস্থ্য উদ্বেগের সঠিক নির্ণয় এবং চিকিৎসার জন্য সর্বদা একজন যোগ্য চর্মরোগ বিশেষজ্ঞ বা স্বাস্থ্যসেবা প্রদানকারীর সাথে পরামর্শ করুন।",
      analyzeAnother: "আরেকটি ছবি বিশ্লেষণ করুন",
      askChatbot: "AI চ্যাটবটকে জিজ্ঞাসা করুন",
      uploadFirst: "অনুগ্রহ করে প্রথমে একটি ছবি আপলোড করুন",
      invalidFile: "অনুগ্রহ করে একটি বৈধ ছবি ফাইল আপলোড করুন",
      fileTooLarge: "ছবির আকার 5MB এর কম হওয়া উচিত"
    },
    labels: {
      severity: "তীব্রতা",
      diet: "খাদ্য",
      med: "ঔষধ",
      time: "সাধারণ নিরাময় সময়",
      curable: "চিকিত্সাযোগ্য?",
      symptoms: "লক্ষণ",
      causes: "কারণ",
    },
    buttons: {
      explore: "রোগ অনুসন্ধান করুন",
      chat: "AI এর সাথে চ্যাট করুন",
      search: "খুঁজুন",
      showAll: "সব দেখুন",
      viewRemedy: "প্রাকৃতিক চিকিৎসা দেখুন",
      askChatbot: "চ্যাটবটকে জিজ্ঞাসা করুন",
      send: "পাঠান",
    },
    about: {
      title: "NIHAM HealthWise সম্পর্কে",
      tagline: "প্রকৃতি, স্বাস্থ্য এবং উদ্ভাবনকে মিশ্রিত করা",
      body: "NIHAM HealthWise হল একটি উদ্ভাবনী, অফলাইন-প্রথম স্বাস্থ্য শিক্ষা প্ল্যাটফর্ম যা ব্যক্তিদের নির্ভরযোগ্য চিকিৎসা জ্ঞান দিয়ে ক্ষমতায়ন করার জন্য ডিজাইন করা হয়েছে। আপনি ছাত্র, শিক্ষক বা স্বাস্থ্য-সচেতন নাগরিক হোন না কেন, NIHAM রোগের তথ্য, প্রাকৃতিক প্রতিকার এবং AI-চালিত স্বাস্থ্য নির্দেশনায় তাৎক্ষণিক অ্যাক্সেস প্রদান করে — সবই ইন্টারনেট সংযোগের প্রয়োজন ছাড়াই।",
      whyBuilt: "🌍 আমরা কেন NIHAM HealthWise তৈরি করেছি",
      whyBuiltBody: "বিশ্বের অনেক অংশে, নির্ভরযোগ্য স্বাস্থ্য তথ্য অ্যাক্সেস করা কঠিন — বিশেষত সীমিত ইন্টারনেট সংযোগ সহ গ্রামীণ এলাকায়। আমরা এই ব্যবধান পূরণ করতে NIHAM HealthWise তৈরি করেছি, প্রয়োজনীয় স্বাস্থ্য জ্ঞান সবার জন্য, সর্বত্র, যেকোনো সময় উপলব্ধ করে তুলছি।",
      whyUse: "⚡ আপনার কেন এটি ব্যবহার করা উচিত",
      points: {
        offline: "<strong>সম্পূর্ণ অফলাইন:</strong> ইন্টারনেট ছাড়াই কাজ করে — স্কুল, গ্রামীণ ক্লিনিক এবং প্রত্যন্ত এলাকার জন্য নিখুঁত।",
        chatbot: "<strong>AI স্বাস্থ্য চ্যাটবট:</strong> আমাদের বুদ্ধিমান চ্যাটবট ব্যবহার করে স্বাস্থ্য প্রশ্নের তাৎক্ষণিক উত্তর পান।",
        database: "<strong>ব্যাপক ডাটাবেস:</strong> লক্ষণ, কারণ, খাদ্য এবং ওষুধের বিস্তারিত তথ্য সহ 35+ রোগ অন্বেষণ করুন।",
        remedies: "<strong>প্রাকৃতিক প্রতিকার:</strong> সাধারণ অসুস্থতার জন্য ঐতিহ্যবাহী এবং ভেষজ চিকিৎসা আবিষ্কার করুন।",
        educational: "<strong>শিক্ষামূলক এবং অ্যাক্সেসযোগ্য:</strong> ছাত্র, শিক্ষক এবং স্বাস্থ্য সচেতনতা কর্মসূচির জন্য ডিজাইন করা হয়েছে।",
        privacy: "<strong>গোপনীয়তা প্রথম:</strong> সমস্ত ডেটা আপনার ডিভাইসে থাকে — কোনো ট্র্যাকিং নেই, কোনো ডেটা সংগ্রহ নেই।"
      }
    },
    features: {
      chat: { title: "AI Health Chatbot", body: "Ask any health-related question and get instant AI-based responses." },
      remedy: { title: "Natural & Herbal Remedies", body: "Discover traditional healing methods." },
      stats: { title: "Interactive Statistics", body: "Visualize health trends through charts." },
      innovation: { title: "Innovation for All", body: "Simple yet impactful for every age group." }
    },
    core: {
      mission: {
        title: "🚀 Our Mission",
        body: "To create a world where <strong>knowledge saves lives</strong>."
      }
    },
    chatbot: {
      greeting:
        "হ্যালো — আমি NIHAM স্বাস্থ্য সহায়ক। রোগ, চিকিৎসা বা সাধারণ স্বাস্থ্য সম্পর্কে জিজ্ঞাসা করুন।",
      fallback:
        "দুঃখিত, এই বিষয়টি আমার ডাটাবেসে নেই। কোনো রোগ সম্পর্কে জিজ্ঞাসা করুন।",
      disclaimer:
        "জরুরি হলে চিকিৎসকের সাথে যোগাযোগ করুন।",
    },
    vaccines: {
      title: "💉 টিকা সময়সূচী",
      subtitle: "প্রস্তাবিত টিকা দেখতে আপনার বয়স এবং লিঙ্গ লিখুন",
      ageLabel: "বয়স (বছর)",
      agePlaceholder: "বয়স লিখুন",
      genderLabel: "লিঙ্গ",
      genderSelect: "লিঙ্গ নির্বাচন করুন",
      genderMale: "পুরুষ",
      genderFemale: "মহিলা",
      getVaccinesBtn: "টিকা পান",
      defaultMessage: "আপনার ব্যক্তিগত টিকা সময়সূচী দেখতে উপরে আপনার বয়স এবং লিঙ্গ লিখুন",
      errorAge: "⚠️ অনুগ্রহ করে 0 থেকে 120 বছরের মধ্যে একটি বৈধ বয়স লিখুন",
      errorGender: "⚠️ অনুগ্রহ করে একটি লিঙ্গ নির্বাচন করুন",
      currentTitle: "💉 বয়সের জন্য প্রস্তাবিত টিকা",
      year: "বছর",
      years: "বছর",
      historyTitle: "📋 সম্পূর্ণ টিকা ইতিহাস (জন্ম থেকে",
      noVaccines: "ℹ️ এই বয়সে কোনো নির্দিষ্ট টিকা প্রস্তাবিত নয়।",
      reminder: "আপনার বার্ষিক ফ্লু শট নিতে এবং নিয়মিত বুস্টার বজায় রাখতে মনে রাখবেন!",
      agePrefix: "বয়স:"
    },
  },

  mr: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "ग्रामीण भारतासाठी ऑफलाइन AI आरोग्य सहाय्यक",
      tagline: "प्रकृती, आरोग्य आणि नवकल्पना मिश्रित करणे"
    },
    nav: {
      home: "मुख्यपृष्ठ",
      explore: "रुग्ण शोधा",
      remedies: "नैसर्गिक उपचार",
      vaccines: "लसी",
      aiPrediction: "AI अंदाज",
      imageDetection: "प्रतिमा शोध",
      chatbot: "चॅटबॉट",
      statistics: "सांख्यिकी",
      about: "बद्दल",
      emergency: "आपत्कालीन"
    },
    sections: {
      explore: "रोग शोधक",
      remedies: "नैसर्गिक आणि घरगुती उपचार",
      chatbot: "AI आरोग्य चॅटबॉट"
    },
    search: {
      disease: "रुग्ण शोधा...",
      remedy: "उपचार शोधा..."
    },
    charts: {
      mostCommon: "सर्वात सामान्य रोग (2025)",
      curableVsChronic: "उपचारयोग्य विरुद्ध जुनाट स्थिती",
      curableLabel: "उपचारयोग्य (85%)",
      chronicLabel: "जुनाट (15%)"
    },
    diseases: {
      commoncold: {
        name: "सामान्य सर्दी"
      },
      fever: {
        name: "ताप"
      },
      diabetes: {
        name: "मधुमेह"
      },
      hypertension: {
        name: "उच्च रक्तदाब"
      }
    },
    ui: {
      home: "मुख्यपृष्ठ",
      explore: "रुग्ण शोधा",
      remedies: "नैसर्गिक उपचार",
      vaccines: "लसी",
      aiPrediction: "AI अंदाज",
      imageDetection: "प्रतिमा शोध",
      chatbot: "चॅटबॉट",
      statistics: "सांख्यिकी",
      about: "बद्दल",
      emergency: "आपत्कालीन",
      searchPlaceholder: "रुग्ण शोधा...",
      remedySearchPlaceholder: "उपचार शोधा...",
      searchBtn: "शोधा",
      showAllBtn: "सर्व दाखवा",
    },
    emergency: {
      title: "🚨 आपत्कालीन मोड",
      subtitle: "जीवन वाचवणाऱ्या माहितीसाठी जलद प्रवेश",
      exitBtn: "✕ आपत्कालीन मोडमधून बाहेर पडा",
      contactsTitle: "📞 आपत्कालीन संपर्क (भारत)",
      ambulance: "रुग्णवाहिका",
      police: "पोलीस",
      fire: "अग्निशमन",
      womenHelpline: "महिला हेल्पलाइन",
      childHelpline: "बाल हेल्पलाइन",
      firstAidTitle: "🏥 प्राथमिक उपचार मार्गदर्शक",
      quickActionsTitle: "⚡ जलद कृती",
      findHospitals: "🏥 जवळचे रुग्णालय शोधा",
      commonEmergencies: "🦠 सामान्य आपत्कालीन परिस्थिती",
      poisonInfo: "☠️ विष माहिती",
      downloadOffline: "💾 ऑफलाइनसाठी डाउनलोड करा",
      cpr: {
        title: "CPR (हृदय-फुफ्फुसीय पुनरुज्जीवन)",
        step1: "प्रतिसाद तपासा - थाप द्या आणि ओरडा",
        step2: "आपत्कालीन सेवांना कॉल करा (108)",
        step3: "व्यक्तीला कठोर पृष्ठभागावर ठेवा",
        step4: "छातीच्या मध्यभागी हात ठेवा",
        step5: "जोरात आणि वेगाने दाबा - 100-120 कॉम्प्रेशन/मिनिट",
        step6: "2 इंच (5 सेमी) खाली दाबा",
        step7: "छाती पूर्णपणे वर येऊ द्या",
        step8: "मदत येईपर्यंत सुरू ठेवा"
      },
      choking: {
        title: "गुदमरणे - हेमलिच युक्ती",
        step1: "व्यक्तीच्या मागे उभे राहा",
        step2: "नाभीच्या वर मुठी करा",
        step3: "दुसऱ्या हाताने मुठी पकडा",
        step4: "जलद वरच्या दिशेने धक्का द्या",
        step5: "वस्तू बाहेर येईपर्यंत पुनरावृत्ती करा",
        step6: "अयशस्वी झाल्यास 108 वर कॉल करा"
      },
      bleeding: {
        title: "गंभीर रक्तस्त्राव",
        step1: "स्वच्छ कापडाने थेट दाब द्या",
        step2: "10-15 मिनिटांसाठी दाब राखा",
        step3: "जखमी भाग हृदयाच्या वर उचला",
        step4: "भिजलेले कापड काढू नका",
        step5: "वर आणखी कापड घाला",
        step6: "त्वरित 108 वर कॉल करा",
        step7: "व्यक्तीला उबदार आणि शांत ठेवा"
      },
      burns: {
        title: "भाजणे",
        step1: "उष्णता स्रोतापासून काढा",
        step2: "वाहत्या पाण्याने थंड करा (10-20 मिनिटे)",
        step3: "दागिने/घट्ट कपडे काढा",
        step4: "निर्जंतुक कापसाने झाकून टाका",
        step5: "बर्फ लावू नका",
        step6: "फोड फोडू नका",
        step7: "गंभीर भाजण्यासाठी वैद्यकीय मदत घ्या"
      },
      fracture: {
        title: "फ्रॅक्चर/तुटलेली हाडे",
        step1: "जखमी भाग हलवू नका",
        step2: "शक्य असल्यास स्प्लिंटने स्थिर करा",
        step3: "आइस पॅक लावा (कापडात गुंडाळलेले)",
        step4: "शक्य असल्यास वर उचला",
        step5: "हाड पुन्हा संरेखित करण्याचा प्रयत्न करू नका",
        step6: "गंभीर फ्रॅक्चरसाठी 108 वर कॉल करा",
        step7: "शॉकसाठी निरीक्षण करा"
      },
      poisoning: {
        title: "विषबाधा",
        step1: "त्वरित विष नियंत्रणाला कॉल करा",
        step2: "शक्य असल्यास विष ओळखा",
        step3: "उलट्या करू देऊ नका",
        step4: "व्यक्तीला शांत आणि स्थिर ठेवा",
        step5: "बेशुद्ध असल्यास, बाजूला ठेवा",
        step6: "डॉक्टरांसाठी विष कंटेनर जतन करा",
        step7: "108 वर कॉल करा"
      },
      heatstroke: {
        title: "उष्माघात",
        step1: "त्वरित थंड भागात हलवा",
        step2: "अतिरिक्त कपडे काढा",
        step3: "पाणी/ओले कापड वापरून थंड करा",
        step4: "व्यक्तीला हवा द्या",
        step5: "जागरूक असल्यास पाणी द्या",
        step6: "108 वर कॉल करा - हे जीवघेणे आहे",
        step7: "तापमान निरीक्षण करा"
      },
      seizure: {
        title: "फेफरे",
        step1: "शांत राहा आणि फेफरे वेळ नोंदवा",
        step2: "धोकादायक वस्तूंचे क्षेत्र साफ करा",
        step3: "मऊ वस्तूने डोके कुशन करा",
        step4: "व्यक्तीला बाजूला वळवा",
        step5: "हालचाली प्रतिबंधित करू नका",
        step6: "तोंडात काहीही ठेवू नका",
        step7: "5 मिनिटांपेक्षा जास्त काळ राहिल्यास 108 वर कॉल करा"
      }
    },
    aiPrediction: {
      title: "🤖 AI रोग अंदाज",
      subtitle: "तुमची लक्षणे प्रविष्ट करा आणि आमचा AI संभाव्य रोगांचा अंदाज लावेल",
      selectSymptoms: "तुमची लक्षणे निवडा",
      additionalLabel: "अतिरिक्त लक्षणे (पर्यायी)",
      additionalPlaceholder: "तुम्ही अनुभवत असलेल्या इतर लक्षणांचे वर्णन करा...",
      predictBtn: "🔍 रोगाचा अंदाज लावा",
      analysisComplete: "🔍 विश्लेषण पूर्ण",
      basedOnSymptoms: "तुमच्या लक्षणांवर आधारित:",
      predictedDiseases: "📊 अंदाजित रोग (शीर्ष जुळणी)",
      confidence: "आत्मविश्वास",
      matchProbability: "जुळणी संभाव्यता",
      matchedSymptoms: "जुळलेली लक्षणे",
      severity: "तीव्रता",
      recoveryTime: "पुनर्प्राप्ती वेळ",
      curable: "उपचारयोज्य",
      viewDetails: "तपशील पहा",
      naturalRemedies: "नैसर्गिक उपचार",
      noMatch: "⚠️ कोणतीही स्पष्ट जुळणी आढळली नाही",
      noMatchDesc: "प्रदान केलेल्या लक्षणांवर आधारित, आम्हाला स्पष्ट रोग जुळणी सापडली नाही। अचूक निदानासाठी आरोग्य सेवा व्यावसायिकाचा सल्ला घ्या।",
      disclaimer: "⚠️ महत्त्वाचा अस्वीकरण:",
      disclaimerText: "हा AI अंदाज केवळ माहितीच्या उद्देशाने आहे आणि व्यावसायिक वैद्यकीय सल्ल्याची जागा घेऊ नये। अचूक निदान आणि उपचारासाठी पात्र आरोग्य सेवा प्रदात्याचा सल्ला घ्या।",
      selectAtLeastOne: "कृपया किमान एक लक्षण निवडा"
    },
    imageDetection: {
      title: "📸 प्रतिमा-आधारित रोग शोध",
      subtitle: "AI-चालित विश्लेषणासाठी प्रतिमा अपलोड करा (त्वचा स्थिती, एक्स-रे, इ.)",
      clickUpload: "अपलोड करण्यासाठी क्लिक करा किंवा ड्रॅग आणि ड्रॉप करा",
      supported: "समर्थित: JPG, PNG, JPEG (कमाल 5MB)",
      analyzeBtn: "🔬 प्रतिमेचे विश्लेषण करा",
      clearBtn: "साफ करा",
      analyzing: "🔬 प्रतिमेचे विश्लेषण करत आहे...",
      analyzingDesc: "यास काही क्षण लागू शकतात",
      analysisComplete: "✅ विश्लेषण पूर्ण",
      aiConfidence: "AI आत्मविश्वास पातळी:",
      detectedConditions: "🔬 शोधलेल्या स्थिती",
      description: "वर्णन:",
      recommendations: "शिफारस केलेल्या कृती:",
      analysisDetails: "📊 प्रतिमा विश्लेषण तपशील",
      dominantColors: "प्रमुख रंग:",
      texture: "पोत:",
      pattern: "नमुना:",
      affectedArea: "प्रभावित क्षेत्र:",
      disclaimer: "⚠️ महत्त्वाचा वैद्यकीय अस्वीकरण:",
      disclaimerText: "हे AI-चालित प्रतिमा विश्लेषण केवळ शैक्षणिक आणि माहितीच्या उद्देशाने आहे। हे व्यावसायिक वैद्यकीय निदानाचा पर्याय म्हणून वापरले जाऊ नये। त्वचा स्थिती किंवा कोणत्याही आरोग्य चिंतेच्या अचूक निदान आणि उपचारासाठी नेहमी पात्र त्वचारोग तज्ञ किंवा आरोग्य सेवा प्रदात्याचा सल्ला घ्या।",
      analyzeAnother: "दुसरी प्रतिमा विश्लेषण करा",
      askChatbot: "AI चॅटबॉटला विचारा",
      uploadFirst: "कृपया प्रथम प्रतिमा अपलोड करा",
      invalidFile: "कृपया वैध प्रतिमा फाइल अपलोड करा",
      fileTooLarge: "प्रतिमा आकार 5MB पेक्षा कमी असावा"
    },
    labels: {
      severity: "तीव्रता",
      diet: "आहार",
      med: "औषध",
      time: "साधारण बरे होण्याचा कालावधी",
      curable: "उपचारयोज्य?",
      symptoms: "लक्षणे",
      causes: "कारणे",
    },
    buttons: {
      explore: "रोग शोधक",
      chat: "AI शी चॅट करा",
      search: "शोधा",
      showAll: "सर्व दाखवा",
      viewRemedy: "नैसर्गिक उपचार पाहा",
      askChatbot: "चॅटबॉटला विचारा",
      send: "पाठवा",
    },
    about: {
      title: "NIHAM HealthWise बद्दल",
      tagline: "प्रकृती, आरोग्य आणि नवकल्पना मिश्रित करणे",
      body: "NIHAM HealthWise हे एक नाविन्यपूर्ण, ऑफलाइन-प्रथम आरोग्य शिक्षण व्यासपीठ आहे जे व्यक्तींना विश्वसनीय वैद्यकीय ज्ञानाने सक्षम करण्यासाठी डिझाइन केले आहे. तुम्ही विद्यार्थी, शिक्षक किंवा आरोग्य-जागरूक नागरिक असाल तरी, NIHAM रोग माहिती, नैसर्गिक उपचार आणि AI-चालित आरोग्य मार्गदर्शनासाठी त्वरित प्रवेश प्रदान करते — सर्व इंटरनेट कनेक्शनची आवश्यकता नसताना.",
      whyBuilt: "🌍 आम्ही NIHAM HealthWise का तयार केले",
      whyBuiltBody: "जगाच्या अनेक भागांमध्ये, विश्वसनीय आरोग्य माहितीपर्यंत पोहोचणे कठीण आहे — विशेषतः मर्यादित इंटरनेट कनेक्टिव्हिटी असलेल्या ग्रामीण भागात. ही तफावत भरून काढण्यासाठी आम्ही NIHAM HealthWise तयार केले, आवश्यक आरोग्य ज्ञान सर्वांसाठी, सर्वत्र, कोणत्याही वेळी उपलब्ध करून दिले.",
      whyUse: "⚡ तुम्ही ते का वापरावे",
      points: {
        offline: "<strong>पूर्णपणे ऑफलाइन:</strong> इंटरनेटशिवाय कार्य करते — शाळा, ग्रामीण दवाखाने आणि दुर्गम भागांसाठी योग्य.",
        chatbot: "<strong>AI आरोग्य चॅटबॉट:</strong> आमच्या बुद्धिमान चॅटबॉटचा वापर करून आरोग्य प्रश्नांची त्वरित उत्तरे मिळवा.",
        database: "<strong>सर्वसमावेशक डेटाबेस:</strong> लक्षणे, कारणे, आहार आणि औषधांची तपशीलवार माहिती असलेल्या 35+ रोगांचा शोध घ्या.",
        remedies: "<strong>नैसर्गिक उपचार:</strong> सामान्य आजारांसाठी पारंपारिक आणि हर्बल उपचार शोधा.",
        educational: "<strong>शैक्षणिक आणि प्रवेशयोग्य:</strong> विद्यार्थी, शिक्षक आणि आरोग्य जागरूकता कार्यक्रमांसाठी डिझाइन केलेले.",
        privacy: "<strong>गोपनीयता प्रथम:</strong> सर्व डेटा तुमच्या डिव्हाइसवर राहतो — ट्रॅकिंग नाही, डेटा संकलन नाही."
      }
    },
    features: {
      chat: { title: "AI Health Chatbot", body: "Ask any health-related question and get instant AI-based responses." },
      remedy: { title: "Natural & Herbal Remedies", body: "Discover traditional healing methods." },
      stats: { title: "Interactive Statistics", body: "Visualize health trends through charts." },
      innovation: { title: "Innovation for All", body: "Simple yet impactful for every age group." }
    },
    core: {
      mission: {
        title: "🚀 Our Mission",
        body: "To create a world where <strong>knowledge saves lives</strong>."
      }
    },
    chatbot: {
      greeting:
        "नमस्कार — मी NIHAM आरोग्य सहाय्यक आहे। रुग्ण, उपचार किंवा सामान्य आरोग्य विषयी विचारा।",
      fallback:
        "मला या विषयी माहिती नाही। कोणत्याही रुग्णाबद्दल विचारा।",
      disclaimer:
        "जरूरतेस वैद्यकीय सहाय्य घ्या।",
    },
    vaccines: {
      title: "💉 लसीकरण वेळापत्रक",
      subtitle: "शिफारस केलेल्या लसी पाहण्यासाठी तुमचे वय आणि लिंग प्रविष्ट करा",
      ageLabel: "वय (वर्षे)",
      agePlaceholder: "वय प्रविष्ट करा",
      genderLabel: "लिंग",
      genderSelect: "लिंग निवडा",
      genderMale: "पुरुष",
      genderFemale: "स्त्री",
      getVaccinesBtn: "लसी मिळवा",
      defaultMessage: "तुमचे वैयक्तिक लसीकरण वेळापत्रक पाहण्यासाठी वर तुमचे वय आणि लिंग प्रविष्ट करा",
      errorAge: "⚠️ कृपया 0 ते 120 वर्षांदरम्यान वैध वय प्रविष्ट करा",
      errorGender: "⚠️ कृपया लिंग निवडा",
      currentTitle: "💉 वयासाठी शिफारस केलेल्या लसी",
      year: "वर्ष",
      years: "वर्षे",
      historyTitle: "📋 संपूर्ण लसीकरण इतिहास (जन्मापासून",
      noVaccines: "ℹ️ या वयात कोणत्याही विशिष्ट लसीची शिफारस केलेली नाही.",
      reminder: "तुमचा वार्षिक फ्लू शॉट घेणे आणि नियमित बूस्टर राखणे लक्षात ठेवा!",
      agePrefix: "वय:"
    },
  },

  gu: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "ગ્રામીણ ભારત માટે ઓફલાઇન AI આરોગ્ય સહાયક",
      tagline: "પ્રકૃતિ, આરોગ્ય અને નવીનતા મિશ્રણ"
    },
    nav: {
      home: "હોમ",
      explore: "રોગો શોધો",
      remedies: "કુદરતી ઉપચાર",
      vaccines: "રસીઓ",
      aiPrediction: "AI આગાહી",
      imageDetection: "છબી શોધ",
      chatbot: "ચેટબોટ",
      statistics: "આંકડા",
      about: "વિશે",
      emergency: "કટોકટી",
      searchPlaceholder: "રોગ શોધો...",
      remedySearchPlaceholder: "ઉપચાર શોધો...",
      searchBtn: "શોધો",
      showAllBtn: "બધું બતાવો",
    },
    sections: {
      explore: "રોગ શોધક",
      remedies: "કુદરતી અને ઘરેલું ઉપચાર",
      chatbot: "AI આરોગ્ય ચેટબોટ"
    },
    search: {
      disease: "રોગ શોધો...",
      remedy: "ઉપચાર શોધો..."
    },
    charts: {
      mostCommon: "સૌથી સામાન્ય રોગો (2025)",
      curableVsChronic: "સાધ્ય વિરુદ્ધ ક્રોનિક સ્થિતિઓ",
      curableLabel: "સાધ્ય (85%)",
      chronicLabel: "ક્રોનિક (15%)"
    },
    diseases: {
      commoncold: {
        name: "સામાન્ય શરદી"
      },
      fever: {
        name: "તાવ"
      },
      diabetes: {
        name: "ડાયાબિટીસ"
      },
      hypertension: {
        name: "હાયપરટેન્શન"
      }
    },
    ui: {
      home: "હોમ",
      explore: "રોગો શોધો",
      remedies: "કુદરતી ઉપચાર",
      vaccines: "રસીઓ",
      aiPrediction: "AI આગાહી",
      imageDetection: "છબી શોધ",
      chatbot: "ચેટબોટ",
      statistics: "આંકડા",
      about: "વિશે",
      emergency: "કટોકટી",
      searchPlaceholder: "રોગ શોધો...",
      remedySearchPlaceholder: "ઉપચાર શોધો...",
      searchBtn: "શોધો",
      showAllBtn: "બધું બતાવો",
    },
    emergency: {
      title: "🚨 કટોકટી મોડ",
      subtitle: "જીવન બચાવતી માહિતી માટે ઝડપી પ્રવેશ",
      exitBtn: "✕ કટોકટી મોડમાંથી બહાર નીકળો",
      contactsTitle: "📞 કટોકટી સંપર્કો (ભારત)",
      ambulance: "એમ્બ્યુલન્સ",
      police: "પોલીસ",
      fire: "ફાયર સર્વિસ",
      womenHelpline: "મહિલા હેલ્પલાઇન",
      childHelpline: "બાળ હેલ્પલાઇન",
      firstAidTitle: "🏥 પ્રાથમિક સારવાર માર્ગદર્શિકા",
      quickActionsTitle: "⚡ ઝડપી ક્રિયાઓ",
      findHospitals: "🏥 નજીકની હોસ્પિટલો શોધો",
      commonEmergencies: "🦠 સામાન્ય કટોકટી",
      poisonInfo: "☠️ ઝેર માહિતી",
      downloadOffline: "💾 ઓફલાઇન માટે ડાઉનલોડ કરો",
      cpr: {
        title: "CPR (કાર્ડિયોપલ્મોનરી રિસુસિટેશન)",
        step1: "પ્રતિસાદ તપાસો - થપ્પડ મારો અને બૂમ પાડો",
        step2: "કટોકટી સેવાઓને કૉલ કરો (108)",
        step3: "વ્યક્તિને મજબૂત સપાટી પર મૂકો",
        step4: "છાતીના કેન્દ્રમાં હાથ મૂકો",
        step5: "સખત અને ઝડપથી દબાવો - 100-120 કમ્પ્રેશન/મિનિટ",
        step6: "2 ઇંચ (5 સેમી) નીચે દબાવો",
        step7: "છાતીને સંપૂર્ણપણે ઉપર આવવા દો",
        step8: "મદદ આવે ત્યાં સુધી ચાલુ રાખો"
      },
      choking: {
        title: "ગૂંગળામણ - હેઇમલિચ યુક્તિ",
        step1: "વ્યક્તિની પાછળ ઊભા રહો",
        step2: "નાભિની ઉપર મુઠ્ઠી બનાવો",
        step3: "બીજા હાથથી મુઠ્ઠી પકડો",
        step4: "ઝડપથી ઉપરની દિશામાં ધક્કો આપો",
        step5: "વસ્તુ બહાર ન આવે ત્યાં સુધી પુનરાવર્તન કરો",
        step6: "નિષ્ફળ થાય તો 108 પર કૉલ કરો"
      },
      bleeding: {
        title: "ગંભીર રક્તસ્રાવ",
        step1: "સ્વચ્છ કપડાથી સીધો દબાણ લાગુ કરો",
        step2: "10-15 મિનિટ સુધી દબાણ જાળવો",
        step3: "ઘાયલ વિસ્તારને હૃદય કરતાં ઉપર ઉઠાવો",
        step4: "ભીનું થયું હોય તો કપડું ન દૂર કરો",
        step5: "ઉપર વધુ કપડું ઉમેરો",
        step6: "તાત્કાલિક 108 પર કૉલ કરો",
        step7: "વ્યક્તિને ગરમ અને શાંત રાખો"
      },
      burns: {
        title: "દાઝવું",
        step1: "ગરમી સ્રોતમાંથી દૂર કરો",
        step2: "વહેતા પાણીથી ઠંડુ કરો (10-20 મિનિટ)",
        step3: "દાગીના/ચુસ્ત કપડાં દૂર કરો",
        step4: "જંતુરહિત ગોજથી ઢાંકો",
        step5: "બરફ લાગુ કરશો નહીં",
        step6: "ફોલ્લાઓ ફોડશો નહીં",
        step7: "ગંભીર દાઝવા માટે તબીબી સહાય લો"
      },
      fracture: {
        title: "અસ્થિભંગ/તૂટેલા હાડકાં",
        step1: "ઘાયલ વિસ્તારને ખસેડશો નહીં",
        step2: "શક્ય હોય તો સ્પ્લિન્ટથી સ્થિર કરો",
        step3: "આઇસ પેક લાગુ કરો (કપડામાં લપેટેલું)",
        step4: "શક્ય હોય તો ઉપર ઉઠાવો",
        step5: "હાડકાને ફરીથી ગોઠવવાનો પ્રયાસ કરશો નહીં",
        step6: "ગંભીર અસ્થિભંગ માટે 108 પર કૉલ કરો",
        step7: "આઘાત માટે નિરીક્ષણ કરો"
      },
      poisoning: {
        title: "ઝેર",
        step1: "તાત્કાલિક ઝેર નિયંત્રણને કૉલ કરો",
        step2: "શક્ય હોય તો ઝેરને ઓળખો",
        step3: "ઉલટી કરાવશો નહીં",
        step4: "વ્યક્તિને શાંત અને સ્થિર રાખો",
        step5: "બેભાન હોય તો, બાજુ પર મૂકો",
        step6: "ડૉક્ટરો માટે ઝેરનું કન્ટેનર સાચવો",
        step7: "108 પર કૉલ કરો"
      },
      heatstroke: {
        title: "ગરમીનો ફટકો",
        step1: "તાત્કાલિક ઠંડા વિસ્તારમાં ખસેડો",
        step2: "વધારાના કપડાં દૂર કરો",
        step3: "પાણી/ભીના કપડાથી ઠંડુ કરો",
        step4: "વ્યક્તિને હવા આપો",
        step5: "સભાન હોય તો પાણી આપો",
        step6: "108 પર કૉલ કરો - આ જીવલેણ છે",
        step7: "તાપમાન નિરીક્ષણ કરો"
      },
      seizure: {
        title: "આંચકી",
        step1: "શાંત રહો અને આંચકીનો સમય નોંધો",
        step2: "ખતરનાક વસ્તુઓનો વિસ્તાર સાફ કરો",
        step3: "નરમ વસ્તુથી માથું કુશન કરો",
        step4: "વ્યક્તિને બાજુ પર ફેરવો",
        step5: "હલનચલન પ્રતિબંધિત કરશો નહીં",
        step6: "મોંમાં કંઈ મૂકશો નહીં",
        step7: "5 મિનિટથી વધુ ચાલે તો 108 પર કૉલ કરો"
      }
    },
    aiPrediction: {
      title: "🤖 AI રોગ આગાહી",
      subtitle: "તમારા લક્ષણો દાખલ કરો અને અમારું AI સંભવિત રોગોની આગાહી કરશે",
      selectSymptoms: "તમારા લક્ષણો પસંદ કરો",
      additionalLabel: "વધારાના લક્ષણો (વૈકલ્પિક)",
      additionalPlaceholder: "તમે અનુભવી રહ્યા છો તે અન્ય લક્ષણોનું વર્ણન કરો...",
      predictBtn: "🔍 રોગની આગાહી કરો",
      analysisComplete: "🔍 વિશ્લેષણ પૂર્ણ",
      basedOnSymptoms: "તમારા લક્ષણોના આધારે:",
      predictedDiseases: "📊 આગાહી કરેલ રોગો (ટોચની મેચ)",
      confidence: "વિશ્વાસ",
      matchProbability: "મેચ સંભાવના",
      matchedSymptoms: "મેળ ખાતા લક્ષણો",
      severity: "તીવ્રતા",
      recoveryTime: "પુનઃપ્રાપ્તિ સમય",
      curable: "સાધ્ય",
      viewDetails: "વિગતો જુઓ",
      naturalRemedies: "કુદરતી ઉપચાર",
      noMatch: "⚠️ કોઈ સ્પષ્ટ મેચ મળી નથી",
      noMatchDesc: "પ્રદાન કરેલ લક્ષણોના આધારે, અમે સ્પષ્ટ રોગ મેચ શોધી શક્યા નથી। ચોક્કસ નિદાન માટે આરોગ્ય સંભાળ વ્યાવસાયિકનો સંપર્ક કરો।",
      disclaimer: "⚠️ મહત્વપૂર્ણ અસ્વીકરણ:",
      disclaimerText: "આ AI આગાહી માત્ર માહિતીના હેતુઓ માટે છે અને વ્યાવસાયિક તબીબી સલાહનું સ્થાન લેવું જોઈએ નહીં। ચોક્કસ નિદાન અને સારવાર માટે લાયક આરોગ્ય સંભાળ પ્રદાતાનો સંપર્ક કરો।",
      selectAtLeastOne: "કૃપા કરીને ઓછામાં ઓછું એક લક્ષણ પસંદ કરો"
    },
    imageDetection: {
      title: "📸 છબી-આધારિત રોગ શોધ",
      subtitle: "AI-સંચાલિત વિશ્લેષણ માટે છબી અપલોડ કરો (ત્વચાની સ્થિતિ, એક્સ-રે, વગેરે)",
      clickUpload: "અપલોડ કરવા માટે ક્લિક કરો અથવા ડ્રેગ અને ડ્રોપ કરો",
      supported: "સમર્થિત: JPG, PNG, JPEG (મહત્તમ 5MB)",
      analyzeBtn: "🔬 છબીનું વિશ્લેષણ કરો",
      clearBtn: "સાફ કરો",
      analyzing: "🔬 છબીનું વિશ્લેષણ કરી રહ્યું છે...",
      analyzingDesc: "આમાં થોડી ક્ષણો લાગી શકે છે",
      analysisComplete: "✅ વિશ્લેષણ પૂર્ણ",
      aiConfidence: "AI વિશ્વાસ સ્તર:",
      detectedConditions: "🔬 શોધાયેલ સ્થિતિઓ",
      description: "વર્ણન:",
      recommendations: "ભલામણ કરેલ ક્રિયાઓ:",
      analysisDetails: "📊 છબી વિશ્લેષણ વિગતો",
      dominantColors: "પ્રભાવશાળી રંગો:",
      texture: "રચના:",
      pattern: "પેટર્ન:",
      affectedArea: "અસરગ્રસ્ત વિસ્તાર:",
      disclaimer: "⚠️ મહત્વપૂર્ણ તબીબી અસ્વીકરણ:",
      disclaimerText: "આ AI-સંચાલિત છબી વિશ્લેષણ માત્ર શૈક્ષણિક અને માહિતીના હેતુઓ માટે છે। તેનો ઉપયોગ વ્યાવસાયિક તબીબી નિદાનના વિકલ્પ તરીકે થવો જોઈએ નહીં। ત્વચાની સ્થિતિ અથવા કોઈપણ આરોગ્ય ચિંતાઓના ચોક્કસ નિદાન અને સારવાર માટે હંમેશા લાયક ત્વચારોગ વિશેષજ્ઞ અથવા આરોગ્ય સંભાળ પ્રદાતાનો સંપર્ક કરો।",
      analyzeAnother: "બીજી છબીનું વિશ્લેષણ કરો",
      askChatbot: "AI ચેટબોટને પૂછો",
      uploadFirst: "કૃપા કરીને પહેલા છબી અપલોડ કરો",
      invalidFile: "કૃપા કરીને માન્ય છબી ફાઇલ અપલોડ કરો",
      fileTooLarge: "છબીનું કદ 5MB કરતાં ઓછું હોવું જોઈએ"
    },
    labels: {
      severity: "તીવ્રતા",
      diet: "આહાર",
      med: "દવા",
      time: "સામાન્ય સુધરવાનો સમય",
      curable: "નિવારણીય?",
      symptoms: "લક્ષણો",
      causes: "કારણો",
    },
    buttons: {
      explore: "રોગો શોધો",
      chat: "AI સાથે ચેટ કરો",
      search: "શોધો",
      showAll: "બધું બતાવો",
      viewRemedy: "કુદરતી ઉપચાર જુઓ",
      askChatbot: "ચેટબોટને પૂછો",
      send: "મોકલો",
    },
    about: {
      title: "NIHAM HealthWise વિશે",
      tagline: "પ્રકૃતિ, આરોગ્ય અને નવીનતા મિશ્રણ",
      body: "NIHAM HealthWise એક નવીન, ઓફલાઇન-પ્રથમ આરોગ્ય શિક્ષણ પ્લેટફોર્મ છે જે વ્યક્તિઓને વિશ્વસનીય તબીબી જ્ઞાન સાથે સશક્ત બનાવવા માટે રચાયેલ છે. તમે વિદ્યાર્થી, શિક્ષક અથવા આરોગ્ય-સભાન નાગરિક હોવ, NIHAM રોગની માહિતી, કુદરતી ઉપચાર અને AI-સંચાલિત આરોગ્ય માર્ગદર્શન માટે તાત્કાલિક પ્રવેશ પ્રદાન કરે છે — બધું ઇન્ટરનેટ કનેક્શનની જરૂરિયાત વિના.",
      whyBuilt: "🌍 અમે NIHAM HealthWise કેમ બનાવ્યું",
      whyBuiltBody: "વિશ્વના ઘણા ભાગોમાં, વિશ્વસનીય આરોગ્ય માહિતી સુધી પહોંચવું મુશ્કેલ છે — ખાસ કરીને મર્યાદિત ઇન્ટરનેટ કનેક્ટિવિટી ધરાવતા ગ્રામીણ વિસ્તારોમાં. આ અંતરને પૂરવા માટે અમે NIHAM HealthWise બનાવ્યું, જરૂરી આરોગ્ય જ્ઞાન બધા માટે, દરેક જગ્યાએ, કોઈપણ સમયે ઉપલબ્ધ કરાવ્યું.",
      whyUse: "⚡ તમારે તેનો ઉપયોગ કેમ કરવો જોઈએ",
      points: {
        offline: "<strong>સંપૂર્ણપણે ઓફલાઇન:</strong> ઇન્ટરનેટ વિના કામ કરે છે — શાળાઓ, ગ્રામીણ ક્લિનિક્સ અને દૂરના વિસ્તારો માટે યોગ્ય.",
        chatbot: "<strong>AI આરોગ્ય ચેટબોટ:</strong> અમારા બુદ્ધિશાળી ચેટબોટનો ઉપયોગ કરીને આરોગ્ય પ્રશ્નોના તાત્કાલિક જવાબો મેળવો.",
        database: "<strong>વ્યાપક ડેટાબેઝ:</strong> લક્ષણો, કારણો, આહાર અને દવાઓની વિગતવાર માહિતી સાથે 35+ રોગોનું અન્વેષણ કરો.",
        remedies: "<strong>કુદરતી ઉપચાર:</strong> સામાન્ય બીમારીઓ માટે પરંપરાગત અને હર્બલ સારવાર શોધો.",
        educational: "<strong>શૈક્ષણિક અને સુલભ:</strong> વિદ્યાર્થીઓ, શિક્ષકો અને આરોગ્ય જાગૃતિ કાર્યક્રમો માટે રચાયેલ.",
        privacy: "<strong>ગોપનીયતા પ્રથમ:</strong> બધો ડેટા તમારા ઉપકરણ પર રહે છે — કોઈ ટ્રેકિંગ નહીં, કોઈ ડેટા સંગ્રહ નહીં."
      }
    },
    features: {
      chat: { title: "AI Health Chatbot", body: "Ask any health-related question and get instant AI-based responses." },
      remedy: { title: "Natural & Herbal Remedies", body: "Discover traditional healing methods." },
      stats: { title: "Interactive Statistics", body: "Visualize health trends through charts." },
      innovation: { title: "Innovation for All", body: "Simple yet impactful for every age group." }
    },
    core: {
      mission: {
        title: "🚀 Our Mission",
        body: "To create a world where <strong>knowledge saves lives</strong>."
      }
    },
    chatbot: {
      greeting:
        "નમસ્તે — હું NIHAM આરોગ્ય સહાયક છું. રોગ, ઉપચાર અથવા સામાન્ય આરોગ્ય વિશે પૂછો.",
      fallback:
        "માફ કરો, મને આ વિશે ખબર નથી. કોઈ રોગ વિશે પૂછો.",
      disclaimer:
        "કટોકટીમાં ડॉક્ટર સાથે સંપર્ક કરો।",
    },
    vaccines: {
      title: "💉 રસી સમયપત્રક",
      subtitle: "ભલામણ કરેલ રસીઓ જોવા માટે તમારી ઉંમર અને લિંગ દાખલ કરો",
      ageLabel: "ઉંમર (વર્ષો)",
      agePlaceholder: "ઉંમર દાખલ કરો",
      genderLabel: "લિંગ",
      genderSelect: "લિંગ પસંદ કરો",
      genderMale: "પુરુષ",
      genderFemale: "સ્ત્રી",
      getVaccinesBtn: "રસીઓ મેળવો",
      defaultMessage: "તમારું વ્યક્તિગત રસી સમયપત્રક જોવા માટે ઉપર તમારી ઉંમર અને લિંગ દાખલ કરો",
      errorAge: "⚠️ કૃપા કરીને 0 થી 120 વર્ષ વચ્ચેની માન્ય ઉંમર દાખલ કરો",
      errorGender: "⚠️ કૃપા કરીને લિંગ પસંદ કરો",
      currentTitle: "💉 ઉંમર માટે ભલામણ કરેલ રસીઓ",
      year: "વર્ષ",
      years: "વર્ષો",
      historyTitle: "📋 સંપૂર્ણ રસી ઇતિહાસ (જન્મથી",
      noVaccines: "ℹ️ આ ઉંમરે કોઈ ચોક્કસ રસીઓની ભલામણ કરવામાં આવી નથી.",
      reminder: "તમારો વાર્ષિક ફ્લૂ શોટ લેવાનું અને નિયમિત બૂસ્ટર જાળવવાનું યાદ રાખો!",
      agePrefix: "ઉંમર:"
    },
  },

  fr: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "Assistant de santé IA hors ligne pour l'Inde rurale",
      tagline: "Allier nature, santé et innovation"
    },
    nav: {
      home: "Accueil",
      explore: "Explorer les maladies",
      remedies: "Remèdes naturels",
      vaccines: "Vaccins",
      aiPrediction: "Prédiction IA",
      imageDetection: "Détection d'image",
      chatbot: "Chatbot",
      statistics: "Statistiques",
      about: "À propos",
      emergency: "Urgence",
      searchPlaceholder: "Rechercher une maladie...",
      remedySearchPlaceholder: "Rechercher un remède...",
      searchBtn: "Rechercher",
      showAllBtn: "Tout afficher",
    },
    sections: {
      explore: "Explorateur de maladies",
      remedies: "Remèdes naturels et maison",
      chatbot: "Chatbot de santé IA"
    },
    search: {
      disease: "Rechercher une maladie...",
      remedy: "Rechercher un remède..."
    },
    charts: {
      mostCommon: "Maladies les plus courantes (2025)",
      curableVsChronic: "Conditions curables vs chroniques",
      curableLabel: "Curable (85%)",
      chronicLabel: "Chronique (15%)"
    },
    diseases: {
      commoncold: {
        name: "Rhume"
      },
      fever: {
        name: "Fièvre"
      },
      diabetes: {
        name: "Diabète"
      },
      hypertension: {
        name: "Hypertension"
      }
    },
    ui: {
      home: "Accueil",
      explore: "Explorer les maladies",
      remedies: "Remèdes naturels",
      vaccines: "Vaccins",
      aiPrediction: "Prédiction IA",
      imageDetection: "Détection d'image",
      chatbot: "Chatbot",
      statistics: "Statistiques",
      about: "À propos",
      emergency: "Urgence",
      searchPlaceholder: "Rechercher une maladie...",
      remedySearchPlaceholder: "Rechercher un remède...",
      searchBtn: "Rechercher",
      showAllBtn: "Tout afficher",
    },
    emergency: {
      title: "🚨 MODE D'URGENCE",
      subtitle: "Accès rapide aux informations vitales",
      exitBtn: "✕ Quitter le mode d'urgence",
      contactsTitle: "📞 Contacts d'urgence (Inde)",
      ambulance: "Ambulance",
      police: "Police",
      fire: "Pompiers",
      womenHelpline: "Ligne d'aide aux femmes",
      childHelpline: "Ligne d'aide aux enfants",
      firstAidTitle: "🏥 Guide des premiers secours",
      quickActionsTitle: "⚡ Actions rapides",
      findHospitals: "🏥 Trouver des hôpitaux à proximité",
      commonEmergencies: "🦠 Urgences courantes",
      poisonInfo: "☠️ Informations sur les poisons",
      downloadOffline: "💾 Télécharger pour hors ligne",
      cpr: {
        title: "RCR (Réanimation cardio-respiratoire)",
        step1: "Vérifiez la réactivité - tapotez et criez",
        step2: "Appelez les services d'urgence (108)",
        step3: "Placez la personne sur une surface ferme",
        step4: "Positionnez les mains au centre de la poitrine",
        step5: "Appuyez fort et vite - 100-120 compressions/min",
        step6: "Appuyez à 2 pouces (5 cm) de profondeur",
        step7: "Laissez la poitrine se relever complètement",
        step8: "Continuez jusqu'à l'arrivée des secours"
      },
      choking: {
        title: "Étouffement - Manœuvre de Heimlich",
        step1: "Tenez-vous derrière la personne",
        step2: "Faites un poing au-dessus du nombril",
        step3: "Saisissez le poing avec l'autre main",
        step4: "Donnez des poussées rapides vers le haut",
        step5: "Répétez jusqu'à ce que l'objet se dégage",
        step6: "Appelez le 108 en cas d'échec"
      },
      bleeding: {
        title: "Saignement grave",
        step1: "Appliquez une pression directe avec un tissu propre",
        step2: "Maintenez la pression pendant 10-15 minutes",
        step3: "Élevez la zone blessée au-dessus du cœur",
        step4: "Ne retirez pas le tissu s'il est imbibé",
        step5: "Ajoutez plus de tissu par-dessus",
        step6: "Appelez le 108 immédiatement",
        step7: "Gardez la personne au chaud et calme"
      },
      burns: {
        title: "Brûlures",
        step1: "Éloignez de la source de chaleur",
        step2: "Refroidissez avec de l'eau courante (10-20 min)",
        step3: "Retirez les bijoux/vêtements serrés",
        step4: "Couvrez avec une gaze stérile",
        step5: "N'appliquez PAS de glace",
        step6: "Ne percez PAS les ampoules",
        step7: "Consultez un médecin pour les brûlures graves"
      },
      fracture: {
        title: "Fractures/Os cassés",
        step1: "Ne bougez pas la zone blessée",
        step2: "Immobilisez avec une attelle si possible",
        step3: "Appliquez un sac de glace (enveloppé dans un tissu)",
        step4: "Élevez si possible",
        step5: "N'essayez pas de réaligner l'os",
        step6: "Appelez le 108 pour les fractures graves",
        step7: "Surveillez les signes de choc"
      },
      poisoning: {
        title: "Empoisonnement",
        step1: "Appelez immédiatement le centre antipoison",
        step2: "Identifiez le poison si possible",
        step3: "NE provoquez PAS de vomissements",
        step4: "Gardez la personne calme et immobile",
        step5: "Si inconsciente, placez sur le côté",
        step6: "Conservez le contenant du poison pour les médecins",
        step7: "Appelez le 108"
      },
      heatstroke: {
        title: "Coup de chaleur",
        step1: "Déplacez immédiatement dans un endroit frais",
        step2: "Retirez les vêtements en excès",
        step3: "Refroidissez avec de l'eau/des tissus humides",
        step4: "Éventez la personne",
        step5: "Donnez de l'eau si consciente",
        step6: "Appelez le 108 - c'est potentiellement mortel",
        step7: "Surveillez la température"
      },
      seizure: {
        title: "Crise convulsive",
        step1: "Restez calme et chronométrez la crise",
        step2: "Dégagez la zone des objets dangereux",
        step3: "Coussinz la tête avec un objet doux",
        step4: "Tournez la personne sur le côté",
        step5: "NE restreignez PAS les mouvements",
        step6: "Ne mettez RIEN dans la bouche",
        step7: "Appelez le 108 si dure >5 minutes"
      }
    },
    aiPrediction: {
      title: "🤖 Prédiction de maladie par IA",
      subtitle: "Entrez vos symptômes et notre IA prédira les maladies possibles",
      selectSymptoms: "Sélectionnez vos symptômes",
      additionalLabel: "Symptômes supplémentaires (facultatif)",
      additionalPlaceholder: "Décrivez les autres symptômes que vous ressentez...",
      predictBtn: "🔍 Prédire la maladie",
      analysisComplete: "🔍 Analyse terminée",
      basedOnSymptoms: "Basé sur vos symptômes:",
      predictedDiseases: "📊 Maladies prédites (meilleures correspondances)",
      confidence: "Confiance",
      matchProbability: "Probabilité de correspondance",
      matchedSymptoms: "Symptômes correspondants",
      severity: "Gravité",
      recoveryTime: "Temps de récupération",
      curable: "Curable",
      viewDetails: "Voir les détails",
      naturalRemedies: "Remèdes naturels",
      noMatch: "⚠️ Aucune correspondance claire trouvée",
      noMatchDesc: "Sur la base des symptômes fournis, nous n'avons pas pu trouver de correspondance claire avec une maladie. Veuillez consulter un professionnel de la santé pour un diagnostic précis.",
      disclaimer: "⚠️ Avertissement important:",
      disclaimerText: "Cette prédiction par IA est à des fins informatives uniquement et ne doit pas remplacer les conseils médicaux professionnels. Veuillez consulter un professionnel de la santé qualifié pour un diagnostic et un traitement précis.",
      selectAtLeastOne: "Veuillez sélectionner au moins un symptôme"
    },
    imageDetection: {
      title: "📸 Détection de maladie basée sur l'image",
      subtitle: "Téléchargez une image pour une analyse alimentée par l'IA (affections cutanées, radiographies, etc.)",
      clickUpload: "Cliquez pour télécharger ou glisser-déposer",
      supported: "Pris en charge: JPG, PNG, JPEG (Max 5MB)",
      analyzeBtn: "🔬 Analyser l'image",
      clearBtn: "Effacer",
      analyzing: "🔬 Analyse de l'image en cours...",
      analyzingDesc: "Cela peut prendre quelques instants",
      analysisComplete: "✅ Analyse terminée",
      aiConfidence: "Niveau de confiance de l'IA:",
      detectedConditions: "🔬 Conditions détectées",
      description: "Description:",
      recommendations: "Actions recommandées:",
      analysisDetails: "📊 Détails de l'analyse d'image",
      dominantColors: "Couleurs dominantes:",
      texture: "Texture:",
      pattern: "Motif:",
      affectedArea: "Zone affectée:",
      disclaimer: "⚠️ Avertissement médical important:",
      disclaimerText: "Cette analyse d'image alimentée par l'IA est à des fins éducatives et informatives uniquement. Elle ne doit PAS être utilisée comme substitut à un diagnostic médical professionnel. Consultez toujours un dermatologue qualifié ou un professionnel de la santé pour un diagnostic et un traitement précis des affections cutanées ou de tout problème de santé.",
      analyzeAnother: "Analyser une autre image",
      askChatbot: "Demander au chatbot IA",
      uploadFirst: "Veuillez d'abord télécharger une image",
      invalidFile: "Veuillez télécharger un fichier image valide",
      fileTooLarge: "La taille de l'image doit être inférieure à 5 Mo"
    },
    labels: {
      severity: "Gravité",
      diet: "Régime",
      med: "Médicament",
      time: "Temps de récupération",
      curable: "Curable?",
      symptoms: "Symptômes",
      causes: "Causes",
    },
    buttons: {
      explore: "Explorer les maladies",
      chat: "Discuter avec l'IA",
      search: "Rechercher",
      showAll: "Tout afficher",
      viewRemedy: "Voir les remèdes naturels",
      askChatbot: "Demander au chatbot",
      send: "Envoyer",
    },
    about: {
      title: "À propos de NIHAM HealthWise",
      tagline: "Allier nature, santé et innovation",
      body: "NIHAM HealthWise est une plateforme éducative de santé innovante et hors ligne conçue pour donner aux individus des connaissances médicales fiables. Que vous soyez étudiant, enseignant ou citoyen soucieux de sa santé, NIHAM fournit un accès instantané aux informations sur les maladies, aux remèdes naturels et aux conseils de santé alimentés par l'IA — le tout sans nécessiter de connexion Internet.",
      whyBuilt: "🌍 Pourquoi nous avons créé NIHAM HealthWise",
      whyBuiltBody: "Dans de nombreuses régions du monde, l'accès à des informations de santé fiables est difficile — en particulier dans les zones rurales avec une connectivité Internet limitée. Nous avons créé NIHAM HealthWise pour combler cette lacune, rendant les connaissances essentielles en matière de santé disponibles pour tous, partout, à tout moment.",
      whyUse: "⚡ Pourquoi vous devriez l'utiliser",
      points: {
        offline: "<strong>Entièrement hors ligne:</strong> Fonctionne sans Internet — parfait pour les écoles, les cliniques rurales et les zones reculées.",
        chatbot: "<strong>Chatbot de santé IA:</strong> Obtenez des réponses instantanées aux questions de santé en utilisant notre chatbot intelligent.",
        database: "<strong>Base de données complète:</strong> Explorez plus de 35 maladies avec des informations détaillées sur les symptômes, les causes, le régime alimentaire et les médicaments.",
        remedies: "<strong>Remèdes naturels:</strong> Découvrez des traitements traditionnels et à base de plantes pour les maux courants.",
        educational: "<strong>Éducatif et accessible:</strong> Conçu pour les étudiants, les enseignants et les programmes de sensibilisation à la santé.",
        privacy: "<strong>Confidentialité d'abord:</strong> Toutes les données restent sur votre appareil — pas de suivi, pas de collecte de données."
      }
    },
    features: {
      chat: {
        title: "Chatbot de santé IA",
        body: "Posez n'importe quelle question liée à la santé — des maladies courantes aux conseils de prévention — et obtenez des réponses instantanées basées sur l'IA."
      },
      remedy: {
        title: "Remèdes naturels et à base de plantes",
        body: "Découvrez des méthodes de guérison traditionnelles soutenues par la nutrition, les herbes et les améliorations du mode de vie."
      },
      stats: {
        title: "Statistiques interactives",
        body: "Visualisez les tendances de santé mondiales et locales à travers des graphiques colorés et faciles à comprendre."
      },
      innovation: {
        title: "Innovation pour tous",
        body: "Conçu pour les compétitions, les expositions de santé et les campagnes de sensibilisation — simple mais percutant pour tous les groupes d'âge."
      }
    },
    core: {
      mission: {
        title: "🚀 Notre mission",
        body: "Créer un monde où <strong>la connaissance sauve des vies</strong> — où chaque étudiant, enseignant et citoyen peut accéder à une éducation sanitaire fiable même hors ligne. <strong>NIHAM HealthWise</strong> est plus qu'un site Web — c'est un mouvement vers un monde plus sain, informé et connecté."
      }
    },
    chatbot: {
      greeting: "Bonjour! Je suis NIHAM — votre assistant de santé hors ligne. Posez des questions sur une maladie, un remède ou une question de santé générale.",
      fallback: "Je ne suis pas sûr de cela pour le moment. Essayez de poser des questions sur une maladie (par exemple, 'diabète'), un remède ('remèdes naturels contre la fièvre') ou la santé générale.",
      disclaimer: "Pour les urgences, contactez immédiatement les services médicaux locaux. NIHAM est à titre informatif uniquement.",
    },
    vaccines: {
      title: "💉 Calendrier de vaccination",
      subtitle: "Entrez votre âge et votre sexe pour voir les vaccins recommandés",
      ageLabel: "Âge (années)",
      agePlaceholder: "Entrez l'âge",
      genderLabel: "Sexe",
      genderSelect: "Sélectionner le sexe",
      genderMale: "Homme",
      genderFemale: "Femme",
      getVaccinesBtn: "Obtenir les vaccins",
      defaultMessage: "Entrez votre âge et votre sexe ci-dessus pour voir votre calendrier de vaccination personnalisé",
      errorAge: "⚠️ Veuillez entrer un âge valide entre 0 et 120 ans",
      errorGender: "⚠️ Veuillez sélectionner un sexe",
      currentTitle: "💉 Vaccins recommandés pour l'âge",
      year: "An",
      years: "Ans",
      historyTitle: "📋 Historique complet de vaccination (De la naissance à",
      noVaccines: "ℹ️ Aucun vaccin spécifique recommandé à cet âge.",
      reminder: "N'oubliez pas de faire votre vaccin annuel contre la grippe et de maintenir les rappels de routine!",
      agePrefix: "Âge:"
    },
  },

  es: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "Asistente de salud IA sin conexión para la India rural",
      tagline: "Combinando naturaleza, salud e innovación"
    },
    nav: {
      home: "Inicio",
      explore: "Explorar enfermedades",
      remedies: "Remedios naturales",
      vaccines: "Vacunas",
      aiPrediction: "Predicción IA",
      imageDetection: "Detección de imagen",
      chatbot: "Chatbot",
      statistics: "Estadísticas",
      about: "Acerca de",
      emergency: "Emergencia",
      searchPlaceholder: "Buscar enfermedad...",
      remedySearchPlaceholder: "Buscar remedio...",
      searchBtn: "Buscar",
      showAllBtn: "Mostrar todo",
    },
    sections: {
      explore: "Explorador de enfermedades",
      remedies: "Remedios naturales y caseros",
      chatbot: "Chatbot de salud IA"
    },
    search: {
      disease: "Buscar enfermedad...",
      remedy: "Buscar remedio..."
    },
    charts: {
      mostCommon: "Enfermedades más comunes (2025)",
      curableVsChronic: "Condiciones curables vs crónicas",
      curableLabel: "Curable (85%)",
      chronicLabel: "Crónico (15%)"
    },
    diseases: {
      commoncold: {
        name: "Resfriado común"
      },
      fever: {
        name: "Fiebre"
      },
      diabetes: {
        name: "Diabetes"
      },
      hypertension: {
        name: "Hipertensión"
      }
    },
    ui: {
      home: "Inicio",
      explore: "Explorar enfermedades",
      remedies: "Remedios naturales",
      vaccines: "Vacunas",
      aiPrediction: "Predicción IA",
      imageDetection: "Detección de imagen",
      chatbot: "Chatbot",
      statistics: "Estadísticas",
      about: "Acerca de",
      emergency: "Emergencia",
      searchPlaceholder: "Buscar enfermedad...",
      remedySearchPlaceholder: "Buscar remedio...",
      searchBtn: "Buscar",
      showAllBtn: "Mostrar todo",
    },
    emergency: {
      title: "🚨 MODO DE EMERGENCIA",
      subtitle: "Acceso rápido a información vital",
      exitBtn: "✕ Salir del modo de emergencia",
      contactsTitle: "📞 Contactos de emergencia (India)",
      ambulance: "Ambulancia",
      police: "Policía",
      fire: "Bomberos",
      womenHelpline: "Línea de ayuda para mujeres",
      childHelpline: "Línea de ayuda infantil",
      firstAidTitle: "🏥 Guía de primeros auxilios",
      quickActionsTitle: "⚡ Acciones rápidas",
      findHospitals: "🏥 Encontrar hospitales cercanos",
      commonEmergencies: "🦠 Emergencias comunes",
      poisonInfo: "☠️ Información sobre venenos",
      downloadOffline: "💾 Descargar para sin conexión",
      cpr: {
        title: "RCP (Reanimación cardiopulmonar)",
        step1: "Verifique la respuesta - golpee y grite",
        step2: "Llame a servicios de emergencia (108)",
        step3: "Coloque a la persona en una superficie firme",
        step4: "Posicione las manos en el centro del pecho",
        step5: "Presione fuerte y rápido - 100-120 compresiones/min",
        step6: "Presione 2 pulgadas (5 cm) hacia abajo",
        step7: "Permita que el pecho se eleve completamente",
        step8: "Continúe hasta que llegue ayuda"
      },
      choking: {
        title: "Asfixia - Maniobra de Heimlich",
        step1: "Párese detrás de la persona",
        step2: "Haga un puño sobre el ombligo",
        step3: "Agarre el puño con la otra mano",
        step4: "Dé empujones rápidos hacia arriba",
        step5: "Repita hasta que el objeto se desaloje",
        step6: "Llame al 108 si no tiene éxito"
      },
      bleeding: {
        title: "Sangrado severo",
        step1: "Aplique presión directa con un paño limpio",
        step2: "Mantenga la presión durante 10-15 minutos",
        step3: "Eleve el área lesionada por encima del corazón",
        step4: "No retire el paño si está empapado",
        step5: "Agregue más paño encima",
        step6: "Llame al 108 inmediatamente",
        step7: "Mantenga a la persona abrigada y tranquila"
      },
      burns: {
        title: "Quemaduras",
        step1: "Retire de la fuente de calor",
        step2: "Enfríe con agua corriente (10-20 min)",
        step3: "Retire joyas/ropa ajustada",
        step4: "Cubra con gasa estéril",
        step5: "NO aplique hielo",
        step6: "NO reviente las ampollas",
        step7: "Busque ayuda médica para quemaduras graves"
      },
      fracture: {
        title: "Fracturas/Huesos rotos",
        step1: "No mueva el área lesionada",
        step2: "Inmovilice con una férula si es posible",
        step3: "Aplique una bolsa de hielo (envuelta en tela)",
        step4: "Eleve si es posible",
        step5: "No intente realinear el hueso",
        step6: "Llame al 108 para fracturas graves",
        step7: "Monitoree para detectar shock"
      },
      poisoning: {
        title: "Envenenamiento",
        step1: "Llame al control de envenenamiento inmediatamente",
        step2: "Identifique el veneno si es posible",
        step3: "NO induzca el vómito",
        step4: "Mantenga a la persona tranquila e inmóvil",
        step5: "Si está inconsciente, coloque de lado",
        step6: "Guarde el recipiente del veneno para los médicos",
        step7: "Llame al 108"
      },
      heatstroke: {
        title: "Golpe de calor",
        step1: "Mueva inmediatamente a un área fresca",
        step2: "Retire el exceso de ropa",
        step3: "Enfríe con agua/paños húmedos",
        step4: "Abanice a la persona",
        step5: "Dé agua si está consciente",
        step6: "Llame al 108 - esto es potencialmente mortal",
        step7: "Monitoree la temperatura"
      },
      seizure: {
        title: "Convulsión",
        step1: "Mantenga la calma y cronométre la convulsión",
        step2: "Despeje el área de objetos peligrosos",
        step3: "Acolchone la cabeza con un objeto suave",
        step4: "Gire a la persona de lado",
        step5: "NO restrinja los movimientos",
        step6: "NO ponga nada en la boca",
        step7: "Llame al 108 si dura >5 minutos"
      }
    },
    aiPrediction: {
      title: "🤖 Predicción de enfermedad por IA",
      subtitle: "Ingresa tus síntomas y nuestra IA predecirá posibles enfermedades",
      selectSymptoms: "Selecciona tus síntomas",
      additionalLabel: "Síntomas adicionales (opcional)",
      additionalPlaceholder: "Describe cualquier otro síntoma que estés experimentando...",
      predictBtn: "🔍 Predecir enfermedad",
      analysisComplete: "🔍 Análisis completo",
      basedOnSymptoms: "Basado en tus síntomas:",
      predictedDiseases: "📊 Enfermedades predichas (mejores coincidencias)",
      confidence: "Confianza",
      matchProbability: "Probabilidad de coincidencia",
      matchedSymptoms: "Síntomas coincidentes",
      severity: "Gravedad",
      recoveryTime: "Tiempo de recuperación",
      curable: "Curable",
      viewDetails: "Ver detalles",
      naturalRemedies: "Remedios naturales",
      noMatch: "⚠️ No se encontró coincidencia clara",
      noMatchDesc: "Según los síntomas proporcionados, no pudimos encontrar una coincidencia clara de enfermedad. Consulta a un profesional de la salud para un diagnóstico preciso.",
      disclaimer: "⚠️ Descargo de responsabilidad importante:",
      disclaimerText: "Esta predicción de IA es solo con fines informativos y no debe reemplazar el consejo médico profesional. Consulta a un proveedor de atención médica calificado para un diagnóstico y tratamiento precisos.",
      selectAtLeastOne: "Por favor selecciona al menos un síntoma"
    },
    imageDetection: {
      title: "📸 Detección de enfermedad basada en imagen",
      subtitle: "Sube una imagen para análisis impulsado por IA (condiciones de la piel, rayos X, etc.)",
      clickUpload: "Haz clic para subir o arrastra y suelta",
      supported: "Compatible: JPG, PNG, JPEG (Máx 5MB)",
      analyzeBtn: "🔬 Analizar imagen",
      clearBtn: "Limpiar",
      analyzing: "🔬 Analizando imagen...",
      analyzingDesc: "Esto puede tomar unos momentos",
      analysisComplete: "✅ Análisis completo",
      aiConfidence: "Nivel de confianza de IA:",
      detectedConditions: "🔬 Condiciones detectadas",
      description: "Descripción:",
      recommendations: "Acciones recomendadas:",
      analysisDetails: "📊 Detalles del análisis de imagen",
      dominantColors: "Colores dominantes:",
      texture: "Textura:",
      pattern: "Patrón:",
      affectedArea: "Área afectada:",
      disclaimer: "⚠️ Descargo de responsabilidad médica importante:",
      disclaimerText: "Este análisis de imagen impulsado por IA es solo con fines educativos e informativos. NO debe usarse como sustituto del diagnóstico médico profesional. Siempre consulta a un dermatólogo calificado o proveedor de atención médica para un diagnóstico y tratamiento precisos de afecciones de la piel o cualquier problema de salud.",
      analyzeAnother: "Analizar otra imagen",
      askChatbot: "Preguntar al chatbot de IA",
      uploadFirst: "Por favor sube una imagen primero",
      invalidFile: "Por favor sube un archivo de imagen válido",
      fileTooLarge: "El tamaño de la imagen debe ser menor a 5MB"
    },
    labels: {
      severity: "Gravedad",
      diet: "Dieta",
      med: "Medicamento",
      time: "Tiempo de recuperación",
      curable: "¿Curable?",
      symptoms: "Síntomas",
      causes: "Causas",
    },
    buttons: {
      explore: "Explorar enfermedades",
      chat: "Chatear con IA",
      search: "Buscar",
      showAll: "Mostrar todo",
      viewRemedy: "Ver remedios naturales",
      askChatbot: "Preguntar al chatbot",
      send: "Enviar",
    },
    about: {
      title: "Acerca de NIHAM HealthWise",
      tagline: "Combinando naturaleza, salud e innovación",
      body: "NIHAM HealthWise es una plataforma educativa de salud innovadora y sin conexión diseñada para empoderar a las personas con conocimientos médicos confiables. Ya sea que seas estudiante, maestro o ciudadano consciente de la salud, NIHAM proporciona acceso instantáneo a información sobre enfermedades, remedios naturales y orientación de salud impulsada por IA, todo sin requerir una conexión a Internet.",
      whyBuilt: "🌍 Por qué construimos NIHAM HealthWise",
      whyBuiltBody: "En muchas partes del mundo, el acceso a información de salud confiable es difícil, especialmente en áreas rurales con conectividad limitada a Internet. Creamos NIHAM HealthWise para cerrar esta brecha, haciendo que el conocimiento esencial de salud esté disponible para todos, en todas partes, en cualquier momento.",
      whyUse: "⚡ Por qué deberías usarlo",
      points: {
        offline: "<strong>Completamente sin conexión:</strong> Funciona sin Internet — perfecto para escuelas, clínicas rurales y áreas remotas.",
        chatbot: "<strong>Chatbot de salud con IA:</strong> Obtén respuestas instantáneas a preguntas de salud usando nuestro chatbot inteligente.",
        database: "<strong>Base de datos completa:</strong> Explora más de 35 enfermedades con información detallada sobre síntomas, causas, dieta y medicamentos.",
        remedies: "<strong>Remedios naturales:</strong> Descubre tratamientos tradicionales y herbales para dolencias comunes.",
        educational: "<strong>Educativo y accesible:</strong> Diseñado para estudiantes, maestros y programas de concientización sobre la salud.",
        privacy: "<strong>Privacidad primero:</strong> Todos los datos permanecen en tu dispositivo — sin seguimiento, sin recopilación de datos."
      }
    },
    features: {
      chat: {
        title: "Chatbot de salud con IA",
        body: "Haz cualquier pregunta relacionada con la salud — desde enfermedades comunes hasta consejos de prevención — y obtén respuestas instantáneas basadas en IA."
      },
      remedy: {
        title: "Remedios naturales y herbales",
        body: "Descubre métodos de curación tradicionales respaldados por nutrición, hierbas y mejoras en el estilo de vida."
      },
      stats: {
        title: "Estadísticas interactivas",
        body: "Visualiza tendencias de salud globales y locales a través de gráficos coloridos y fáciles de entender."
      },
      innovation: {
        title: "Innovación para todos",
        body: "Diseñado para competencias, exposiciones de salud y campañas de concientización — simple pero impactante para todos los grupos de edad."
      }
    },
    core: {
      mission: {
        title: "🚀 Nuestra misión",
        body: "Crear un mundo donde <strong>el conocimiento salve vidas</strong> — donde cada estudiante, maestro y ciudadano pueda acceder a educación sanitaria confiable incluso sin conexión. <strong>NIHAM HealthWise</strong> es más que un sitio web — es un movimiento hacia un mundo más saludable, informado y conectado."
      }
    },
    chatbot: {
      greeting: "¡Hola! Soy NIHAM — tu asistente de salud sin conexión. Pregunta sobre una enfermedad, remedio o pregunta general de salud.",
      fallback: "No estoy seguro de eso todavía. Intenta preguntar sobre una enfermedad (por ejemplo, 'diabetes'), un remedio ('remedios naturales para la fiebre') o salud general.",
      disclaimer: "Para emergencias, contacta a los servicios médicos locales de inmediato. NIHAM es solo informativo.",
    },
    vaccines: {
      title: "💉 Calendario de vacunación",
      subtitle: "Ingresa tu edad y sexo para ver las vacunas recomendadas",
      ageLabel: "Edad (años)",
      agePlaceholder: "Ingresa la edad",
      genderLabel: "Sexo",
      genderSelect: "Seleccionar sexo",
      genderMale: "Masculino",
      genderFemale: "Femenino",
      getVaccinesBtn: "Obtener vacunas",
      defaultMessage: "Ingresa tu edad y sexo arriba para ver tu calendario de vacunación personalizado",
      errorAge: "⚠️ Por favor ingresa una edad válida entre 0 y 120 años",
      errorGender: "⚠️ Por favor selecciona un sexo",
      currentTitle: "💉 Vacunas recomendadas para la edad",
      year: "Año",
      years: "Años",
      historyTitle: "📋 Historial completo de vacunación (Desde el nacimiento hasta",
      noVaccines: "ℹ️ No se recomiendan vacunas específicas a esta edad.",
      reminder: "¡Recuerda recibir tu vacuna anual contra la gripe y mantener los refuerzos de rutina!",
      agePrefix: "Edad:"
    },
  },

  ko: {
    site: {
      title: "NIHAM HealthWise",
      subtitle: "인도 농촌을 위한 오프라인 AI 건강 도우미",
      tagline: "자연, 건강, 혁신의 결합"
    },
    nav: {
      home: "홈",
      explore: "질병 탐색",
      remedies: "자연 요법",
      vaccines: "백신",
      aiPrediction: "AI 예측",
      imageDetection: "이미지 감지",
      chatbot: "챗봇",
      statistics: "통계",
      about: "소개",
      emergency: "응급",
      searchPlaceholder: "질병 검색...",
      remedySearchPlaceholder: "치료법 검색...",
      searchBtn: "검색",
      showAllBtn: "모두 표시",
    },
    sections: {
      explore: "질병 탐색기",
      remedies: "자연 및 가정 요법",
      chatbot: "AI 건강 챗봇"
    },
    search: {
      disease: "질병 검색...",
      remedy: "치료법 검색..."
    },
    charts: {
      mostCommon: "가장 흔한 질병 (2025)",
      curableVsChronic: "치료 가능 vs 만성 질환",
      curableLabel: "치료 가능 (85%)",
      chronicLabel: "만성 (15%)"
    },
    diseases: {
      commoncold: {
        name: "감기"
      },
      fever: {
        name: "발열"
      },
      diabetes: {
        name: "당뇨병"
      },
      hypertension: {
        name: "고혈압"
      }
    },
    ui: {
      home: "홈",
      explore: "질병 탐색",
      remedies: "자연 요법",
      vaccines: "백신",
      aiPrediction: "AI 예측",
      imageDetection: "이미지 감지",
      chatbot: "챗봇",
      statistics: "통계",
      about: "소개",
      emergency: "응급",
      searchPlaceholder: "질병 검색...",
      remedySearchPlaceholder: "치료법 검색...",
      searchBtn: "검색",
      showAllBtn: "모두 표시",
    },
    emergency: {
      title: "🚨 응급 모드",
      subtitle: "생명을 구하는 정보에 빠르게 접근",
      exitBtn: "✕ 응급 모드 종료",
      contactsTitle: "📞 응급 연락처 (인도)",
      ambulance: "구급차",
      police: "경찰",
      fire: "소방서",
      womenHelpline: "여성 헬프라인",
      childHelpline: "아동 헬프라인",
      firstAidTitle: "🏥 응급 처치 가이드",
      quickActionsTitle: "⚡ 빠른 조치",
      findHospitals: "🏥 근처 병원 찾기",
      commonEmergencies: "🦠 일반적인 응급 상황",
      poisonInfo: "☠️ 독극물 정보",
      downloadOffline: "💾 오프라인용 다운로드",
      cpr: {
        title: "CPR (심폐소생술)",
        step1: "반응 확인 - 두드리고 소리치기",
        step2: "응급 서비스에 전화 (108)",
        step3: "사람을 단단한 표면에 눕히기",
        step4: "가슴 중앙에 손 위치시키기",
        step5: "세게 빠르게 누르기 - 분당 100-120회 압박",
        step6: "2인치(5cm) 깊이로 누르기",
        step7: "가슴이 완전히 올라오도록 허용",
        step8: "도움이 올 때까지 계속하기"
      },
      choking: {
        title: "질식 - 하임리히법",
        step1: "사람 뒤에 서기",
        step2: "배꼽 위에 주먹 만들기",
        step3: "다른 손으로 주먹 잡기",
        step4: "빠르게 위쪽으로 밀어올리기",
        step5: "물체가 빠질 때까지 반복",
        step6: "실패하면 108에 전화"
      },
      bleeding: {
        title: "심한 출혈",
        step1: "깨끗한 천으로 직접 압박",
        step2: "10-15분 동안 압박 유지",
        step3: "부상 부위를 심장보다 높이 올리기",
        step4: "젖은 천을 제거하지 말 것",
        step5: "위에 더 많은 천 추가",
        step6: "즉시 108에 전화",
        step7: "사람을 따뜻하고 차분하게 유지"
      },
      burns: {
        title: "화상",
        step1: "열원에서 제거",
        step2: "흐르는 물로 식히기 (10-20분)",
        step3: "보석/꽉 끼는 옷 제거",
        step4: "멸균 거즈로 덮기",
        step5: "얼음을 바르지 말 것",
        step6: "물집을 터뜨리지 말 것",
        step7: "심한 화상은 의료 도움 받기"
      },
      fracture: {
        title: "골절/부러진 뼈",
        step1: "부상 부위를 움직이지 말 것",
        step2: "가능하면 부목으로 고정",
        step3: "아이스팩 적용 (천으로 감싼 것)",
        step4: "가능하면 높이 올리기",
        step5: "뼈를 재정렬하려고 시도하지 말 것",
        step6: "심한 골절은 108에 전화",
        step7: "쇼크 모니터링"
      },
      poisoning: {
        title: "중독",
        step1: "즉시 중독 관리 센터에 전화",
        step2: "가능하면 독극물 식별",
        step3: "구토를 유도하지 말 것",
        step4: "사람을 차분하고 가만히 있게 하기",
        step5: "의식이 없으면 옆으로 눕히기",
        step6: "의사를 위해 독극물 용기 보관",
        step7: "108에 전화"
      },
      heatstroke: {
        title: "열사병",
        step1: "즉시 시원한 곳으로 이동",
        step2: "과도한 옷 제거",
        step3: "물/젖은 천으로 식히기",
        step4: "사람에게 바람 쐬어주기",
        step5: "의식이 있으면 물 주기",
        step6: "108에 전화 - 생명을 위협함",
        step7: "체온 모니터링"
      },
      seizure: {
        title: "발작",
        step1: "침착하게 발작 시간 측정",
        step2: "위험한 물체가 있는 구역 정리",
        step3: "부드러운 물체로 머리 쿠션",
        step4: "사람을 옆으로 돌리기",
        step5: "움직임을 제한하지 말 것",
        step6: "입에 아무것도 넣지 말 것",
        step7: "5분 이상 지속되면 108에 전화"
      }
    },
    aiPrediction: {
      title: "🤖 AI 질병 예측",
      subtitle: "증상을 입력하면 AI가 가능한 질병을 예측합니다",
      selectSymptoms: "증상 선택",
      additionalLabel: "추가 증상 (선택사항)",
      additionalPlaceholder: "경험하고 있는 다른 증상을 설명하세요...",
      predictBtn: "🔍 질병 예측",
      analysisComplete: "🔍 분석 완료",
      basedOnSymptoms: "증상을 기반으로:",
      predictedDiseases: "📊 예측된 질병 (상위 일치)",
      confidence: "신뢰도",
      matchProbability: "일치 확률",
      matchedSymptoms: "일치하는 증상",
      severity: "심각도",
      recoveryTime: "회복 시간",
      curable: "치료 가능",
      viewDetails: "세부 정보 보기",
      naturalRemedies: "자연 요법",
      noMatch: "⚠️ 명확한 일치 항목을 찾을 수 없음",
      noMatchDesc: "제공된 증상을 기반으로 명확한 질병 일치를 찾을 수 없습니다. 정확한 진단을 위해 의료 전문가와 상담하세요.",
      disclaimer: "⚠️ 중요한 면책 조항:",
      disclaimerText: "이 AI 예측은 정보 제공 목적으로만 사용되며 전문적인 의료 조언을 대체해서는 안 됩니다. 정확한 진단 및 치료를 위해 자격을 갖춘 의료 제공자와 상담하세요.",
      selectAtLeastOne: "최소 하나의 증상을 선택하세요"
    },
    imageDetection: {
      title: "📸 이미지 기반 질병 감지",
      subtitle: "AI 기반 분석을 위해 이미지를 업로드하세요 (피부 상태, X-레이 등)",
      clickUpload: "업로드하려면 클릭하거나 드래그 앤 드롭",
      supported: "지원: JPG, PNG, JPEG (최대 5MB)",
      analyzeBtn: "🔬 이미지 분석",
      clearBtn: "지우기",
      analyzing: "🔬 이미지 분석 중...",
      analyzingDesc: "몇 분 정도 걸릴 수 있습니다",
      analysisComplete: "✅ 분석 완료",
      aiConfidence: "AI 신뢰 수준:",
      detectedConditions: "🔬 감지된 상태",
      description: "설명:",
      recommendations: "권장 조치:",
      analysisDetails: "📊 이미지 분석 세부 정보",
      dominantColors: "주요 색상:",
      texture: "질감:",
      pattern: "패턴:",
      affectedArea: "영향을 받은 영역:",
      disclaimer: "⚠️ 중요한 의료 면책 조항:",
      disclaimerText: "이 AI 기반 이미지 분석은 교육 및 정보 제공 목적으로만 사용됩니다. 전문적인 의료 진단을 대체하는 용도로 사용해서는 안 됩니다. 피부 상태 또는 건강 문제의 정확한 진단 및 치료를 위해 항상 자격을 갖춘 피부과 전문의 또는 의료 제공자와 상담하세요.",
      analyzeAnother: "다른 이미지 분석",
      askChatbot: "AI 챗봇에게 물어보기",
      uploadFirst: "먼저 이미지를 업로드하세요",
      invalidFile: "유효한 이미지 파일을 업로드하세요",
      fileTooLarge: "이미지 크기는 5MB 미만이어야 합니다"
    },
    labels: {
      severity: "심각도",
      diet: "식단",
      med: "약물",
      time: "회복 시간",
      curable: "치료 가능?",
      symptoms: "증상",
      causes: "원인",
    },
    buttons: {
      explore: "질병 탐색",
      chat: "AI와 채팅",
      search: "검색",
      showAll: "모두 표시",
      viewRemedy: "자연 요법 보기",
      askChatbot: "챗봇에게 물어보기",
      send: "보내기",
    },
    about: {
      title: "NIHAM HealthWise 소개",
      tagline: "자연, 건강, 혁신의 결합",
      body: "NIHAM HealthWise는 신뢰할 수 있는 의료 지식으로 개인에게 힘을 실어주기 위해 설계된 혁신적인 오프라인 우선 건강 교육 플랫폼입니다. 학생, 교사 또는 건강을 의식하는 시민이든 NIHAM은 인터넷 연결 없이도 질병 정보, 자연 요법 및 AI 기반 건강 지침에 즉시 액세스할 수 있습니다.",
      whyBuilt: "🌍 NIHAM HealthWise를 만든 이유",
      whyBuiltBody: "세계 많은 지역에서 신뢰할 수 있는 건강 정보에 접근하기 어렵습니다. 특히 인터넷 연결이 제한된 농촌 지역에서 그렇습니다. 우리는 이 격차를 해소하기 위해 NIHAM HealthWise를 만들었으며, 필수 건강 지식을 모든 사람이 언제 어디서나 이용할 수 있도록 했습니다.",
      whyUse: "⚡ 사용해야 하는 이유",
      points: {
        offline: "<strong>완전 오프라인:</strong> 인터넷 없이 작동 — 학교, 농촌 진료소 및 외딴 지역에 완벽합니다.",
        chatbot: "<strong>AI 건강 챗봇:</strong> 지능형 챗봇을 사용하여 건강 질문에 대한 즉각적인 답변을 얻으세요.",
        database: "<strong>포괄적인 데이터베이스:</strong> 증상, 원인, 식단 및 약물에 대한 자세한 정보가 포함된 35개 이상의 질병을 탐색하세요.",
        remedies: "<strong>자연 요법:</strong> 일반적인 질병에 대한 전통적이고 허브 치료법을 발견하세요.",
        educational: "<strong>교육적이고 접근 가능:</strong> 학생, 교사 및 건강 인식 프로그램을 위해 설계되었습니다.",
        privacy: "<strong>개인 정보 보호 우선:</strong> 모든 데이터는 기기에 남아 있습니다 — 추적 없음, 데이터 수집 없음."
      }
    },
    features: {
      chat: {
        title: "AI 건강 챗봇",
        body: "일반적인 질병부터 예방 팁까지 건강 관련 질문을 하고 AI 기반 즉각적인 답변을 받으세요."
      },
      remedy: {
        title: "자연 및 허브 요법",
        body: "영양, 허브 및 생활 방식 개선으로 뒷받침되는 전통적인 치유 방법을 발견하세요."
      },
      stats: {
        title: "대화형 통계",
        body: "이해하기 쉬운 컬러풀한 막대 및 원형 차트를 통해 글로벌 및 로컬 건강 트렌드를 시각화하세요."
      },
      innovation: {
        title: "모두를 위한 혁신",
        body: "경쟁, 건강 박람회 및 인식 캠페인을 위해 설계 — 모든 연령대에 간단하지만 영향력 있습니다."
      }
    },
    core: {
      mission: {
        title: "🚀 우리의 사명",
        body: "<strong>지식이 생명을 구하는</strong> 세상을 만드는 것 — 모든 학생, 교사 및 시민이 오프라인에서도 신뢰할 수 있는 건강 교육에 접근할 수 있는 곳. <strong>NIHAM HealthWise</strong>는 단순한 웹사이트 이상입니다 — 더 건강하고 정보에 입각하며 연결된 세상을 향한 운동입니다."
      }
    },
    chatbot: {
      greeting: "안녕하세요! 저는 NIHAM입니다 — 오프라인 건강 도우미입니다. 질병, 치료법 또는 일반 건강 질문에 대해 물어보세요.",
      fallback: "아직 확실하지 않습니다. 질병(예: '당뇨병'), 치료법('발열에 대한 자연 요법') 또는 일반 건강에 대해 물어보세요.",
      disclaimer: "응급 상황의 경우 즉시 지역 의료 서비스에 연락하십시오. NIHAM은 정보 제공 목적으로만 사용됩니다.",
    },
    vaccines: {
      title: "💉 백신 일정",
      subtitle: "권장 백신을 보려면 나이와 성별을 입력하세요",
      ageLabel: "나이 (년)",
      agePlaceholder: "나이 입력",
      genderLabel: "성별",
      genderSelect: "성별 선택",
      genderMale: "남성",
      genderFemale: "여성",
      getVaccinesBtn: "백신 받기",
      defaultMessage: "개인 맞춤 백신 일정을 보려면 위에 나이와 성별을 입력하세요",
      errorAge: "⚠️ 0세에서 120세 사이의 유효한 나이를 입력하세요",
      errorGender: "⚠️ 성별을 선택하세요",
      currentTitle: "💉 나이에 권장되는 백신",
      year: "년",
      years: "년",
      historyTitle: "📋 전체 백신 기록 (출생부터",
      noVaccines: "ℹ️ 이 나이에 권장되는 특정 백신이 없습니다.",
      reminder: "연간 독감 예방 주사를 맞고 정기 부스터를 유지하는 것을 잊지 마세요!",
      agePrefix: "나이:"
    },
  },
};

/**
 * Get translation safely with fallback
 */
function tr(lang, path, fallback = "") {
  try {
    const parts = path.split(".");
    let current = TRANSLATIONS[lang];
    for (let part of parts) {
      if (!current) return fallback;
      current = current[part];
    }
    return current !== undefined && current !== null ? current : fallback;
  } catch (e) {
    return fallback;
  }
}
