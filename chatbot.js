/* ====================================== */
/* NIHAM - Chatbot & AI Responses         */
/* ====================================== */

/**
 * Get chat area element
 */
function getChatArea() {
  return document.getElementById("chatArea");
}

/**
 * Append user message to chat
 */
function appendUserMessage(text) {
  const chatArea = getChatArea();
  if (!chatArea) return;

  const div = document.createElement("div");
  div.className = "msg user";
  div.textContent = "You: " + text;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
}

/**
 * Append bot message to chat
 */
function appendBotMessage(text) {
  const chatArea = getChatArea();
  if (!chatArea) return;

  const div = document.createElement("div");
  div.className = "msg bot";
  div.textContent = "NIHAM-Bot: " + text;
  
  // Add voice button if available
  if (isVoiceAvailable()) {
    const lang = getCurrentLanguage();
    const voiceBtn = createVoiceButton(text, lang);
    voiceBtn.style.marginLeft = '8px';
    voiceBtn.style.display = 'inline-block';
    div.appendChild(voiceBtn);
  }
  
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
}

/**
 * Generate bot response based on query
 */
function generateBotResponse(query) {
  if (!query) return tr(getCurrentLanguage(), "chatbot.fallback");

  const q = query.toLowerCase().trim();
  const lang = getCurrentLanguage();

  // Emergency check
  if (
    /\b(emergency|not breathing|chest pain|suicide|kill myself|severe bleeding|unconscious|accident|crash)\b/.test(
      q
    )
  ) {
    return "I can't provide emergency assistance. If someone is in immediate danger, call local emergency services now. NIHAM is for information only.";
  }

  // Direct disease match by ID or name
  for (const disease of DISEASES_DATA) {
    if (
      q.includes(disease.id) ||
      q.includes(disease.name.toLowerCase()) ||
      disease.name.toLowerCase().includes(q)
    ) {
      return `${disease.name}: Severity ${disease.severity}. Diet: ${disease.diet}. Medication: ${disease.med}. Recovery time: ${disease.time}. Curable: ${disease.curable}.`;
    }
  }

  // Remedy match
  for (const disease of DISEASES_DATA) {
    if (
      q.includes("remedy " + disease.id) ||
      q.includes(disease.id + " remedy") ||
      q.includes("natural " + disease.name.toLowerCase()) ||
      q.includes(disease.remedy)
    ) {
      return `${disease.name} natural remedies: ${disease.remedyText}`;
    }
  }

  // Keyword shortcuts
  if (/\b(fever|temperature|high temp)\b/.test(q)) {
    return "Fever: stay hydrated, rest, use paracetamol if necessary (follow package directions). See a doctor if fever persists >3 days or exceeds 39°C.";
  }

  if (/\b(cold|cough|flu|flu-like)\b/.test(q)) {
    return "Cough/Cold/Flu: warm fluids, steam inhalation, rest. Seek medical care if experiencing shortness of breath or severe symptoms. Most colds resolve in 5-10 days.";
  }

  if (/\b(diet|nutrition|what.*eat|food)\b/.test(q)) {
    return "General diet: Balanced meals with vegetables, whole grains, lean protein, and healthy fats. Stay hydrated. For specific conditions, ask me about that disease for tailored advice.";
  }

  if (/\b(remedy|natural.*treatment|home.*remedy|herbal)\b/.test(q)) {
    return "Ask 'Natural remedies for <disease>' (e.g., 'Natural remedies for fever' or 'Natural remedies for diabetes'). I can provide traditional, safe, and evidence-based suggestions.";
  }

  if (/\b(hello|hi|hey|greetings|namaste)\b/.test(q)) {
    return tr(lang, "chatbot.greeting");
  }

  if (/\b(bye|goodbye|exit|quit)\b/.test(q)) {
    return "Take care! Remember, NIHAM is for information only. For serious health concerns, consult a qualified healthcare provider. Stay healthy!";
  }

  if (/\b(joke|funny|laugh|humor)\b/.test(q)) {
    const jokes = [
      "Why did the doctor carry a red pen? In case they needed to draw blood! 😄",
      "What do you call a medical student who becomes an author? A documenarian! 😄",
      "Why don't eggs tell jokes in the hospital? Because they'd crack each other up! 😄",
    ];
    return getRandomItem(jokes);
  }

  if (/\b(what.*about you|who.*are you|yourself)\b/.test(q)) {
    return "I'm NIHAM — an offline health assistant powered by AI. I provide information about diseases, natural remedies, diet, and general health. But remember, I'm not a replacement for professional medical advice!";
  }

  if (/\b(thank|thanks|thankyou)\b/.test(q)) {
    return "You're welcome! Feel free to ask more health questions. Stay informed, stay healthy!";
  }

  if (/\b(pain|ache|hurt|sore)\b/.test(q)) {
    return "Pain can indicate many conditions. Please describe:\n- Location (head, chest, abdomen, joint, etc.)\n- Severity (mild, moderate, severe)\n- Duration (how long)\n\nThen I can provide more specific guidance.";
  }

  if (/\b(india|country|place)\b/.test(q)) {
    return "India is where NIHAM was created! 🇮🇳 This tool aims to democratize healthcare information across India and beyond, especially for low-connectivity areas.";
  }

  if (/\b(water|hydration|drink)\b/.test(q)) {
    return "Hydration is essential for health. Drink approximately 2-3 liters of water daily depending on activity level, climate, and health status. More during fever, diarrhea, or exercise.";
  }

  // Default fallback
  return tr(lang, "chatbot.fallback");
}

/**
 * Tell user message and bot response
 */
function speakMessage(text, isUser = false) {
  const options = {
    rate: 0.9,
    pitch: isUser ? 1 : 0.9,
    lang: "en-US",
  };
  speak(text, options);
}

/**
 * Handle chat input submission
 */
function handleChatSend() {
  const chatInput = document.getElementById("chatInput");
  if (!chatInput) return;

  const query = chatInput.value.trim();
  if (!query) return;

  // Append user message
  appendUserMessage(query);
  chatInput.value = "";

  // Generate and append bot response
  setTimeout(() => {
    const response = generateBotResponse(query);
    appendBotMessage(response);

    // Optional: Speak response
    // speakMessage(response, false);

    debugLog("Chatbot", `Q: "${query}" | A: "${response.substring(0, 50)}..."`);
  }, 350);
}

/**
 * Ask chatbot about a specific disease
 */
function askChat(diseaseId) {
  setActivePage("chatbot");

  const disease = findDiseaseById(diseaseId);
  if (!disease) return;

  setTimeout(() => {
    const lang = getCurrentLanguage();
    const query = `Tell me about ${disease.name}`;

    // Set input and send
    const chatInput = document.getElementById("chatInput");
    if (chatInput) {
      chatInput.value = query;
    }

    appendUserMessage(query);

    setTimeout(() => {
      const response = generateBotResponse(diseaseId);
      appendBotMessage(response);
    }, 350);
  }, 220);
}

/**
 * Initialize chatbot
 */
function initChatbot() {
  const sendBtn = document.getElementById("sendChatBtn");
  const chatInput = document.getElementById("chatInput");

  if (sendBtn) {
    sendBtn.addEventListener("click", handleChatSend);
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleChatSend();
      }
    });
  }

  // Add greeting message
  setTimeout(() => {
    const greeting = tr(
      getCurrentLanguage(),
      "chatbot.greeting"
    );
    appendBotMessage(greeting);
  }, 500);

  debugLog("Chatbot", "Chatbot initialized");
}

/**
 * Clear chat history
 */
function clearChatHistory() {
  const chatArea = getChatArea();
  if (chatArea) {
    chatArea.innerHTML = "";
    const greeting = tr(getCurrentLanguage(), "chatbot.greeting");
    appendBotMessage(greeting);
  }
  debugLog("Chatbot", "Chat history cleared");
}

/**
 * Get chat history
 */
function getChatHistory() {
  const chatArea = getChatArea();
  if (!chatArea) return [];

  const messages = [];
  document.querySelectorAll("#chatArea .msg").forEach((msg) => {
    messages.push({
      type: msg.classList.contains("user") ? "user" : "bot",
      text: msg.textContent,
      timestamp: new Date(),
    });
  });
  return messages;
}

/**
 * Export chat history to text
 */
function exportChatHistory() {
  const history = getChatHistory();
  let text = "NIHAM HealthWise - Chat History\n";
  text += "=" + "=".repeat(40) + "\n\n";

  history.forEach((msg) => {
    text += `[${msg.type.toUpperCase()}] ${msg.text}\n\n`;
  });

  // Download as text file
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", "niham-chat-history.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  debugLog("Chatbot", "Chat history exported");
}

/**
 * Export for modular use
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getChatArea,
    appendUserMessage,
    appendBotMessage,
    generateBotResponse,
    handleChatSend,
    askChat,
    initChatbot,
    clearChatHistory,
    getChatHistory,
    exportChatHistory,
  };
}
