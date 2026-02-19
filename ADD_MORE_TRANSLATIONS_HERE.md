# 📝 How to Add More Translations

## Current Status

✅ **What's Translated:**
- Disease names (35+ diseases)
- Symptoms (40+ symptoms)
- General medical terms (30+ terms)
- Basic severity levels (Low, Medium, High, etc.)
- Basic curability (Yes, No, Manageable, etc.)
- Basic time periods (2-5 days, ongoing, etc.)
- Some diet/medication content

⚠️ **What Needs More Translation:**
- Specific diet recommendations for each disease
- Specific medication names and instructions
- Detailed remedy instructions
- All disease-specific content

## How It Works Now

When you change language:
1. ✅ UI labels translate (buttons, headings)
2. ✅ Disease names translate
3. ✅ Basic fields translate (severity, curability, time)
4. ⚠️ Detailed content translates IF it's in the dictionary
5. ❌ Falls back to English if not in dictionary

## To Add More Translations

### Option 1: Quick Fix - Add Common Phrases

Edit `js/data/translation-dictionary.js` and add to the `diseaseContent` section:

```javascript
diseaseContent: {
  en: {
    'your english text here': 'Your English Text Here',
  },
  hi: {
    'your english text here': 'आपका हिंदी पाठ यहाँ',
  },
  te: {
    'your english text here': 'మీ తెలుగు వచనం ఇక్కడ',
  }
}
```

### Option 2: Translate All Disease Data

The system will automatically translate any text that's in the dictionary. To translate everything:

1. **Extract all unique content** from `js/data/diseases.js`
2. **Add translations** to `js/data/translation-dictionary.js`
3. **Reload the page** - translations appear automatically!

## Example: Adding a New Translation

Let's say you want to translate "Soups, liquids" (from Influenza diet):

```javascript
// In js/data/translation-dictionary.js, add to diseaseContent:

en: {
  'soups, liquids': 'Soups, liquids',
},
hi: {
  'soups, liquids': 'सूप, तरल पदार्थ',
},
te: {
  'soups, liquids': 'సూప్‌లు, ద్రవాలు',
}
```

That's it! The system will automatically use it.

## Current Translation Coverage

### ✅ Fully Translated
- All UI elements
- Navigation
- Buttons
- Labels
- Disease names
- Common symptoms

### ⚠️ Partially Translated
- Diet recommendations (only common ones)
- Medications (only common ones)
- Remedy instructions (only common ones)
- Time periods (only common ones)

### ❌ Not Yet Translated
- Disease-specific detailed content
- Rare medications
- Complex remedy instructions
- Specific dietary details

## Quick Translation Guide

### For Hindi (hi):
- Use Google Translate or a Hindi speaker
- Medical terms should be accurate
- Keep formatting (commas, periods)

### For Telugu (te):
- Use Google Translate or a Telugu speaker
- Medical accuracy is important
- Maintain punctuation

### For Other Languages:
- Tamil (ta)
- Bengali (bn)
- Marathi (mr)
- Gujarati (gu)

## Testing Your Translations

1. Add translation to dictionary
2. Save the file
3. Hard refresh browser (Ctrl+Shift+R)
4. Change language
5. Check if content appears translated

## Need Help?

The translation system is working! You just need to add more content to the dictionary. The more you add, the more will translate automatically.

**Pro Tip:** Start with the most common diseases and work your way through the list!
