# NIHAM HealthWise - Configuration Guide

## Quick Reference Guide

### File Organization Rules
```
✓ CORRECT:
  niham-modular/
  ├── index.html
  ├── css/
  │   ├── main.css
  │   ├── animations.css
  │   └── components.css
  └── js/
      ├── init.js
      ├── data/
      ├── utils/
      ├── features/
      └── ui/

✗ WRONG:
  - Moving files to different folders
  - Changing file names
  - Removing folders
  - Duplicating files with different names
```

### Script Load Order (CRITICAL)

**Must load in this order:**
1. `diseases.js` (defines DISEASES_DATA)
2. `translations.js` (defines TRANSLATIONS, tr function)
3. `utilities.js` (defines utility functions)
4. `search.js` (uses utilities)
5. `chatbot.js` (uses utilities, DISEASES_DATA)
6. `language.js` (uses TRANSLATIONS)
7. `ui-functions.js` (uses all above + DOM)
8. `init.js` (initializes using all above)

**If order is wrong:** App will break with "undefined" errors

---

## Common Configurations

### Change App Colors

**File:** `css/main.css`  
**Section:** Lines 7-13 (`:root` block)

```css
:root {
  --bg: #041018;           /* Main background */
  --muted: #9fb2bf;        /* Muted text */
  --accent: #00fff2;       /* Primary accent (cyan) */
  --accent2: #00ff88;      /* Secondary accent (green) */
  --btn: #00f6c1;          /* Button color */
  --card: #071425;         /* Card background */
}
```

**Example:** Change accent to pink
```css
--accent: #ff1493;  /* Changed to deep pink */
```

---

### Add New Disease

**File:** `js/data/diseases.js`  
**Location:** Inside `DISEASES_DATA` array

```javascript
{
  id: 'mynewdisease',          // Unique identifier (no spaces)
  name: 'My Disease 🏥',        // Display name with emoji
  severity: 'Moderate',         // Low, Moderate, High, Critical, Variable
  diet: 'Diet recommendations', // What to eat
  med: 'Medication name',       // Treatment options
  time: '5-7 days',            // Recovery duration
  curable: 'Yes',              // Yes, No, Manageable, Treatable, Sometimes
  remedy: 'mynewdisease',      // Remedy ID (usually same as id)
  remedyText: 'Natural remedy suggestions here...' // Home treatment
}
```

**Steps:**
1. Copy-paste template after last disease in array
2. Ensure comma after closing brace
3. Fill all 8 fields
4. ID must be unique (lowercase, no spaces)
5. Test by searching for disease

---

### Add New Language

**File 1:** `js/data/translations.js`

Add new language object:
```javascript
xx: {  // xx = ISO 639-1 language code
  ui: {
    home: "Home translation",
    explore: "Explore translation",
    remedies: "Remedies translation",
    // ... add all ui keys
  },
  labels: {
    severity: "Severity translation",
    diet: "Diet translation",
    // ... add all label keys
  },
  buttons: {
    viewRemedy: "View translation",
    askChatbot: "Ask translation",
    send: "Send translation",
  },
  about: {
    title: "About translation",
    tagline: "Tagline translation",
  },
  chatbot: {
    greeting: "Greeting in new language",
    fallback: "Fallback message translation",
    disclaimer: "Disclaimer translation",
  },
},
```

**File 2:** `index.html`

Add language option (line ~180):
```html
<option value="xx">Language Name</option>
```

**Language Codes:**
- en = English
- hi = Hindi
- te = Telugu
- ta = Tamil
- bn = Bengali
- mr = Marathi
- gu = Gujarati

---

### Customize Chatbot Responses

**File:** `js/features/chatbot.js`  
**Function:** `generateBotResponse(query)`  
**Lines:** 70-180

**Add new response pattern:**
```javascript
if (/\b(keyword1|keyword2|keyword3)\b/.test(q)) {
  return "Your custom response here";
}
```

**Example - Add joke:**
```javascript
if (/\b(joke|funny)\b/.test(q)) {
  const jokes = [
    "Joke 1",
    "Joke 2",
    "Joke 3",
  ];
  return getRandomItem(jokes);
}
```

**Regex Pattern Tips:**
- `/\b(word1|word2)\b/` = Match word1 OR word2
- `(?i)` = Case insensitive
- `.` = Any character
- `*` = Zero or more
- `+` = One or more

---

### Change App Welcome Message

**File:** `js/init.js`  
**Function:** `playWelcomeMessage()`  
**Line:** ~270

```javascript
const message = "Your new welcome message here";
```

---

### Add Statistics/Charts

**File:** `index.html`  
**Section:** Lines 500-580 (Statistics page)

**Add bar chart item:**
```html
<div class="bar-item">
  <span>Disease Name</span>
  <div class="bar-fill" data-width="80"></div>
</div>
```

**Add counter:**
```html
<div class="count-box">
  <h1 class="count" data-count="100">0</h1>
  <p>Year</p>
</div>
```

---

### Change Dark Mode / Light Mode

**File:** `css/main.css`

Modify `:root` variables:
```css
:root {
  --bg: #ffffff;           /* White background */
  --muted: #666666;        /* Gray text */
  --accent: #0066ff;       /* Blue accent */
  --btn: #0066ff;          /* Blue button */
}
```

---

### Add Google Analytics / Tracking

**File:** `index.html`  
**Location:** Before closing `</head>` tag

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your tracking ID.

---

### Disable Speech Synthesis

**File:** `js/features/chatbot.js`  
**Function:** `handleChatSend()`  

Comment out or remove:
```javascript
// speakMessage(response, false);
```

---

### Change Search Debounce Delay

**File:** `js/init.js`  
**Function:** `setupSearchFunctionality()`  

Find:
```javascript
.addEventListener("input", debounce(searchDisease, 500));
```

Change `500` to desired milliseconds:
- 300 = faster but more CPU
- 500 = balanced (default)
- 1000 = slower but less CPU

---

### Customize About Section

**File:** `index.html`  
**Section:** Lines 580-700 (About page)

Edit any text directly - no code changes needed.

---

### Adjust Card Width

**File:** `css/components.css`  
**Lines:** 30-35

```css
.chart-card {
  width: 42%;  /* Change this value */
}
```

- 50% = half width
- 45% = slightly narrower
- 40% = even smaller
- 33% = three columns

---

### Change Font Family

**File:** `css/main.css`  
**Lines:** 17

```css
body {
  font-family: Inter, Segoe UI, Roboto, Arial;  /* Change this */
}
```

Available fonts:
- "Courier New" = Monospace
- "Georgia" = Serif
- "Trebuchet MS" = Sans-serif
- "Verdana" = Clean sans-serif

---

## Debugging Checklist

When something breaks:

1. ✓ Check browser console (F12)
2. ✓ Look for red error messages
3. ✓ Run `runHealthCheck()` in console
4. ✓ Verify file paths are correct
5. ✓ Check script load order
6. ✓ Verify all closing braces `}`
7. ✓ Check for typos in function names
8. ✓ Hard refresh page (Ctrl+Shift+R)

---

## Performance Tips

1. **Minimize images** - Use small file sizes
2. **Lazy load content** - Don't load all at once
3. **Compress CSS** - Remove unused styles
4. **Optimize JS** - Use efficient selectors
5. **Cache data** - Use localStorage
6. **Limit animations** - Not on every element

---

## Security Notes

1. **NIHAM is offline** - No data sent anywhere
2. **All code is local** - Everything runs in browser
3. **No tracking** - Unless you add it
4. **Open source** - Anyone can inspect code
5. **Disclaimer** - Not medical advice

---

## Backup Strategy

**Before making changes:**

```bash
# Option 1: Copy entire folder
cp -r niham-modular niham-modular-backup

# Option 2: Use version control
git init
git add .
git commit -m "Initial backup"
```

**Restore from backup:**
```bash
rm -rf niham-modular
cp -r niham-modular-backup niham-modular
```

---

## Need More Help?

- Check `README.md` for full documentation
- Look at browser console for error messages
- Search function names in files using Ctrl+F
- Test changes one at a time

---

**Last Updated:** February 2025  
**Version:** 2.0 (Modular)
