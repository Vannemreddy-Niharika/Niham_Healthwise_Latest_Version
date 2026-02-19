# NIHAM HealthWise - File Index & Map

## 📑 Quick File Reference

### 🏠 Start Here
- **[QUICKSTART.md](QUICKSTART.md)** ← **START HERE** (5 min read)
  - How to open and use
  - Common tasks explained
  - Quick troubleshooting

---

## 📖 Documentation Files

| File | Purpose | Read Time | Use When |
|------|---------|-----------|----------|
| **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** | Overview of everything | 10 min | Want overview of project |
| **[README.md](README.md)** | Complete documentation | 15 min | Need detailed info |
| **[CONFIGURATION.md](CONFIGURATION.md)** | Config & customization | 10 min | Making specific changes |
| **[FILE_STRUCTURE.md](FILE_STRUCTURE.md)** | Folder & code organization | 8 min | Understanding architecture |
| **[FILE_INDEX.md](FILE_INDEX.md)** | This file - quick reference | 3 min | Need quick lookup |

---

## 🌐 HTML Files (1 files)

### `index.html` (600 lines)
**Purpose:** Main entry point - the app!  
**Edit For:** Adding page sections, modifying layout  
**Contains:** HTML structure for all 7 pages  
**How to Use:** Double-click to open in browser  

```
Structure:
├── Header (title)
├── Navigation (7 buttons + language selector)
├── Main Container
│   ├── Intro Page (splash screen)
│   ├── Home Page (hero section)
│   ├── Explore Page (diseases)
│   ├── Remedies Page (natural treatments)
│   ├── Chatbot Page (AI chat)
│   ├── Statistics Page (charts)
│   └── About Page (project info)
└── Footer
```

---

## 🎨 CSS Files (3 files)

### `css/main.css` (350 lines)
**Purpose:** Main styling - colors, layout, typography  
**Edit For:** Changing colors, fonts, responsive design  
**Key Variables:**
- `--bg` = Background color
- `--accent` = Primary accent (cyan)
- `--btn` = Button color
- `--muted` = Text color

**How to Change Colors:**
1. Find `:root` section (line ~7)
2. Change hex color codes
3. Save and refresh browser

---

### `css/animations.css` (200 lines)
**Purpose:** All animations and transitions  
**Edit For:** Changing animation speed/effects  
**Contains:**
- Intro animations (fadeIn, fadeOut)
- Background effects (particles, DNA, heartbeat)
- Button hover effects
- Statistics animations

---

### `css/components.css` (250 lines)
**Purpose:** Specific component styling  
**Edit For:** Card styles, statistics section, about page  
**Contains:**
- Chart styling (bar charts, pie charts)
- About section (feature cards, contact)
- Responsive adjustments

---

## 📊 Data Files (2 files)

### `js/data/diseases.js` (150 lines)
**Purpose:** Disease database  
**Contains:** DISEASES_DATA array with 100+ diseases  
**Edit For:** Adding/modifying disease information  

**Disease Object Structure:**
```javascript
{
  id: "disease-id",                    // Unique identifier
  name: "Disease Name 🏥",             // Display name with emoji
  severity: "Moderate",                // Severity level
  diet: "Diet recommendations",        // What to eat
  med: "Medication options",           // Treatment
  time: "5-7 days",                    // Recovery time
  curable: "Yes",                      // Curability
  remedy: "remedy-id",                 // Remedy ID
  remedyText: "Natural treatment..."   // Home remedies
}
```

**How to Add Disease:**
1. Open `js/data/diseases.js`
2. Find last disease in array
3. Add comma after its closing brace
4. Paste new disease object
5. Refresh page - disease appears automatically

---

### `js/data/translations.js` (300 lines)
**Purpose:** Multilingual support  
**Contains:** TRANSLATIONS object + `tr()` function  
**Supported Languages:** en, hi, te, ta, bn, mr, gu (7 total)

**How to Add Language:**
1. Open `js/data/translations.js`
2. Add new language object at end
3. Copy all keys from English section
4. Translate all values
5. Edit `index.html` - add `<option>` tag in language selector

---

## 🛠️ Utility Files (1 file)

### `js/utils/utilities.js` (200 lines)
**Purpose:** Helper functions used throughout app  
**Edit For:** Adding new utility functions  
**Key Functions:**
- `getCurrentLanguage()` - Get current language code
- `setLanguage(lang)` - Set and save language
- `findDiseaseById(id)` - Find disease by ID
- `searchDiseases(query)` - Search disease database
- `speak(text)` - Text-to-speech
- `showNotification(msg)` - Show toast notification
- `debounce(func, delay)` - Debounce function
- `throttle(func, limit)` - Throttle function

---

## 🎯 Feature Files (3 files)

### `js/features/search.js` (250 lines)
**Purpose:** Search and filter functionality  
**Edit For:** Modifying search behavior  
**Key Functions:**
- `searchDisease()` - Filter disease cards
- `showAllDiseases()` - Reset search
- `searchRemedy()` - Filter remedy cards
- `showAllRemedies()` - Reset remedy filter
- `filterBySeverity(severity)` - Filter by severity
- `filterByCurable(status)` - Filter by curable status
- `advancedSearch(filters)` - Multi-criteria search
- `sortDiseases(sortBy)` - Sort diseases

---

### `js/features/chatbot.js` (300 lines)
**Purpose:** AI chatbot logic and responses  
**Edit For:** Changing chatbot behavior/responses  
**Key Functions:**
- `generateBotResponse(query)` - Generate AI response (main logic)
- `appendUserMessage(text)` - Add user message to chat
- `appendBotMessage(text)` - Add bot message to chat
- `handleChatSend()` - Process user input
- `askChat(diseaseId)` - Ask about specific disease
- `initChatbot()` - Setup chatbot listeners
- `getChatHistory()` - Get all messages
- `exportChatHistory()` - Download chat as file

**How to Add Chatbot Response:**
1. Open `js/features/chatbot.js`
2. Find `generateBotResponse()` function
3. Add new `if` statement with regex pattern
4. Test by typing in chatbot

```javascript
if (/\b(keyword1|keyword2)\b/.test(q)) {
  return "Your response here";
}
```

---

### `js/features/language.js` (200 lines)
**Purpose:** Language management system  
**Edit For:** Modifying language switching behavior  
**Key Functions:**
- `initLanguageSelector()` - Setup language dropdown
- `applyLanguage(lang)` - Apply language globally
- `updateNavLanguage(lang)` - Update nav buttons
- `updateHeadingsLanguage(lang)` - Update page headings
- `updatePlaceholders(lang)` - Update input hints
- `changeLanguage(lang)` - Switch language programmatically
- `getAvailableLanguages()` - Get list of languages
- `detectBrowserLanguage()` - Auto-detect language

---

## 🎨 UI Files (1 file)

### `js/ui/ui-functions.js` (250 lines)
**Purpose:** DOM creation and UI manipulation  
**Edit For:** Changing how cards/pages look  
**Key Functions:**
- `createDiseaseCard(disease)` - Build disease card HTML
- `createRemedyCard(disease)` - Build remedy card HTML
- `setActivePage(pageId)` - Switch between pages
- `populateDiseaseList()` - Display all diseases
- `populateRemedyList()` - Display all remedies
- `updateUILanguage(lang)` - Update all text for language
- `highlightCard(element)` - Add highlight effect
- `openRemedy(remedyId)` - Jump to remedy page
- `animateCharts()` - Start statistics animations

---

## ⚙️ Initialization (1 file)

### `js/init.js` (350 lines)
**Purpose:** App initialization and setup  
**Edit For:** Changing startup behavior  
**Key Functions:**
- `initializeApp()` - Main initialization function (called on startup)
- `setupNavigation()` - Wire up navigation buttons
- `setupSearchFunctionality()` - Attach search listeners
- `setupEventListeners()` - Global keyboard shortcuts
- `handleIntroAnimation()` - Show/hide intro screen
- `playWelcomeMessage()` - Play voice greeting
- `validateDOM()` - Check all required elements exist
- `runHealthCheck()` - Verify app integrity (useful for debugging)
- `showAppInfo()` - Display app info in console

**Auto-runs on page load:**
```javascript
If DOM not loaded → Wait for DOMContentLoaded event
Else → Run showAppInfo() and initializeApp()
```

---

## 📋 Summary Table

| Category | Files | Total Lines | Purpose |
|----------|-------|-------------|---------|
| **HTML** | 1 | 600 | Page structure |
| **CSS** | 3 | 800 | Styling & animations |
| **Data** | 2 | 450 | Diseases & translations |
| **Utils** | 1 | 200 | Helper functions |
| **Features** | 3 | 750 | Core functionality |
| **UI** | 1 | 250 | DOM manipulation |
| **Init** | 1 | 350 | App startup |
| **Docs** | 5 | 2,000+ | Documentation |
| **TOTAL** | 17 | 5,400+ | Complete project |

---

## 🎯 Most Important Files

1. **index.html** - The app itself
2. **diseases.js** - Disease database
3. **translations.js** - Language support
4. **chatbot.js** - AI responses
5. **init.js** - App startup

---

## 🔗 File Relationships

```
index.html
├─ CSS (styling all pages)
│   ├─ main.css
│   ├─ animations.css
│   └─ components.css
│
└─ JavaScript (app logic)
    [MUST LOAD IN THIS ORDER]
    ├─ diseases.js (defines DISEASES_DATA)
    ├─ translations.js (defines TRANSLATIONS, tr())
    ├─ utilities.js (defines helper functions)
    ├─ search.js (uses DISEASES_DATA, utilities)
    ├─ chatbot.js (uses DISEASES_DATA)
    ├─ language.js (uses TRANSLATIONS)
    ├─ ui-functions.js (uses everything above)
    └─ init.js (brings everything together)
```

---

## ⚡ Quick Navigation

### 🏥 To Modify Diseases
→ Go to: `js/data/diseases.js`

### 🌍 To Add Languages
→ Go to: `js/data/translations.js`

### 💬 To Change Chatbot Responses  
→ Go to: `js/features/chatbot.js`

### 🎨 To Change Colors
→ Go to: `css/main.css`

### ⚙️ To Add Features
→ Go to: `js/features/` folder

### 🔧 To Debug App
→ Go to: `js/init.js` → run `runHealthCheck()` in console

---

## 📞 Need Help?

| Question | Answer | File |
|----------|--------|------|
| How do I use the app? | See QUICKSTART.md | [QUICKSTART.md](QUICKSTART.md) |
| How do I add a disease? | See README.md Section 4 | [README.md](README.md) |
| How do I change colors? | See CONFIGURATION.md | [CONFIGURATION.md](CONFIGURATION.md) |
| Where are my files? | See FILE_STRUCTURE.md | [FILE_STRUCTURE.md](FILE_STRUCTURE.md) |
| Which file does what? | This file! | [FILE_INDEX.md](FILE_INDEX.md) |

---

## ✅ File Checklist

Verify all files exist:

```
✓ index.html

✓ css/main.css
✓ css/animations.css
✓ css/components.css

✓ js/data/diseases.js
✓ js/data/translations.js

✓ js/utils/utilities.js

✓ js/features/search.js
✓ js/features/chatbot.js
✓ js/features/language.js

✓ js/ui/ui-functions.js
✓ js/init.js

✓ Documentation files (4):
  ✓ README.md
  ✓ CONFIGURATION.md
  ✓ FILE_STRUCTURE.md
  ✓ QUICKSTART.md
```

**Total: 17 files** ✅

---

## 🚀 Getting Started Path

1. **Read:** [QUICKSTART.md](QUICKSTART.md) (5 min)
2. **Open:** index.html (play with app)
3. **Read:** [README.md](README.md) (learn more)
4. **Explore:** Individual files (understand code)
5. **Customize:** Make your changes
6. **Deploy:** Share with others

---

## 💡 Pro Tips

- **Use Ctrl+F** to find text in files
- **Test in console** before making changes
- **Keep backups** before major edits
- **Read documentation** before asking questions
- **One change at a time** - easier to debug

---

**Created:** February 2025  
**Version:** 2.0 (Modular)  
**Status:** ✅ Complete & Production Ready

**Happy customizing! 🎉**
