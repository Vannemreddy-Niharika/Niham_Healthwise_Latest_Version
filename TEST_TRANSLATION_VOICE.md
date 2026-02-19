# Testing Translation & Voice Features

## Quick Test Checklist

### ✅ Basic Functionality

1. **Open the Application**
   ```
   - Open index.html in a modern browser (Chrome, Edge, Firefox)
   - Check browser console (F12) for initialization messages
   ```

2. **Verify Initialization**
   - Look for: "Translation system initialized successfully"
   - Look for: "Voice system initialized successfully"
   - No red errors should appear

3. **Test Language Switching**
   - Click language dropdown in navigation
   - Select "हिन्दी (Hindi)"
   - Navigation buttons should change to Hindi
   - Disease cards should start translating

4. **Test Voice Buttons**
   - Go to "Explore Diseases" page
   - Look for 🔊 speaker icons on disease cards
   - Click a speaker icon
   - Should hear the disease information spoken

5. **Test Chatbot Voice**
   - Go to "Chatbot" page
   - Type: "What is fever?"
   - Bot responds with information
   - Click 🔊 on the bot response
   - Should hear the response spoken

6. **Test Remedy Voice**
   - Go to "Natural Remedies" page
   - Look for 🔊 icons on remedy cards
   - Click to hear remedy information

### 🔍 Detailed Tests

#### Translation Tests

```javascript
// Open browser console (F12) and run:

// Test 1: Check if translation manager is initialized
const tm = getTranslationManager();
console.log('Translation initialized:', tm.isInitialized());

// Test 2: Translate a disease name
tm.translate('fever', 'hi', 'diseases').then(result => {
  console.log('Fever in Hindi:', result); // Should show: बुखार
});

// Test 3: Check cache stats
console.log('Cache stats:', tm.getCacheStats());

// Test 4: Translate multiple terms
tm.translateBatch(['fever', 'cough', 'headache'], 'hi', 'symptoms')
  .then(results => console.log('Batch translation:', results));
```

#### Voice Tests

```javascript
// Open browser console (F12) and run:

// Test 1: Check if voice is supported
const vm = getVoiceManager();
console.log('Voice supported:', vm.isSupported());

// Test 2: Get available voices
console.log('Available voices:', vm.getAllVoices());

// Test 3: Speak in English
vm.speak('Hello, this is a test', 'en');

// Test 4: Speak in Hindi
vm.speak('नमस्ते, यह एक परीक्षण है', 'hi');

// Test 5: Control playback
vm.speak('This is a longer test message', 'en');
setTimeout(() => vm.stop(), 2000); // Stop after 2 seconds

// Test 6: Check preferences
console.log('Voice preferences:', vm.getPreferences());
```

#### Storage Tests

```javascript
// Check IndexedDB storage
const idb = new IndexedDBManager();
await idb.init();
console.log('Has translations:', await idb.hasTranslations('diseases', 'hi'));

// Check storage size
const size = await idb.getStorageSize();
console.log('Storage used:', (size / 1024 / 1024).toFixed(2), 'MB');
```

### 🎯 Expected Results

#### Language Switching
- ✅ Navigation changes to selected language
- ✅ Disease names translate (may take 1-2 seconds)
- ✅ UI labels translate immediately
- ✅ No errors in console

#### Voice Playback
- ✅ Speaker icon appears on cards
- ✅ Clicking plays audio
- ✅ Icon changes to ⏸️ while speaking
- ✅ Can stop by clicking again

#### Performance
- ✅ First translation: < 500ms
- ✅ Cached translation: < 10ms
- ✅ Voice startup: < 500ms
- ✅ No UI freezing

### ❌ Common Issues & Solutions

#### Issue: "Translation system initialized successfully" not showing
**Solution**: 
- Check if all scripts are loaded in correct order
- Verify `translation-dictionary.js` exists
- Check browser console for script errors

#### Issue: Voice buttons not appearing
**Solution**:
- Check if `isVoiceAvailable()` returns true
- Try Chrome/Edge (best voice support)
- Check if Web Speech API is enabled

#### Issue: Translations not working
**Solution**:
- Clear browser cache
- Check IndexedDB is enabled in browser settings
- Verify language code is correct ('en', 'hi', 'te', etc.)

#### Issue: Voice not speaking in selected language
**Solution**:
- Check available voices: `vm.getAllVoices()`
- Some languages may not have native voices
- Falls back to English if voice unavailable

### 🔧 Debug Commands

```javascript
// Enable debug logging
localStorage.setItem('NIHAM_debug', 'true');

// Check what's in IndexedDB
indexedDB.databases().then(dbs => console.log('Databases:', dbs));

// Clear all caches
translationManager.clearCache();
localStorage.clear();

// Force reload translations
location.reload();
```

### 📊 Performance Benchmarks

Run these to check performance:

```javascript
// Translation speed test
console.time('translate');
await tm.translate('fever', 'hi', 'diseases');
console.timeEnd('translate'); // Should be < 100ms

// Voice startup test
console.time('voice');
await vm.speak('test', 'en');
console.timeEnd('voice'); // Should be < 500ms

// Cache hit rate test
const stats = tm.getCacheStats();
console.log('Hit rate:', stats.hitRate); // Should be > 80% after warmup
```

### ✨ Feature Showcase

1. **Multi-language Support**
   - Switch between 7 languages
   - All content translates
   - Completely offline

2. **Voice in Every Language**
   - Disease information
   - Remedy instructions
   - Chatbot responses

3. **Smart Caching**
   - Fast repeat translations
   - Efficient memory usage
   - Automatic cleanup

4. **Offline First**
   - No internet needed
   - IndexedDB storage
   - Browser-native voice

### 📝 Test Report Template

```
Date: ___________
Browser: ___________
OS: ___________

✅ Translation initialized: [ ]
✅ Voice initialized: [ ]
✅ Language switching works: [ ]
✅ Voice buttons appear: [ ]
✅ Voice playback works: [ ]
✅ Translations accurate: [ ]
✅ Performance acceptable: [ ]
✅ No console errors: [ ]

Issues found:
_______________________________
_______________________________

Notes:
_______________________________
_______________________________
```

### 🎓 Advanced Testing

For developers:

1. **Test with Network Offline**
   - Open DevTools → Network tab
   - Set to "Offline"
   - Reload page
   - Everything should still work

2. **Test Storage Limits**
   - Fill cache to capacity
   - Verify LRU eviction works
   - Check no memory leaks

3. **Test Error Handling**
   - Corrupt IndexedDB data
   - Verify fallback to English
   - Check error messages

4. **Test Browser Compatibility**
   - Chrome: Full support
   - Firefox: Good support
   - Safari: Partial voice support
   - Edge: Full support

---

**Happy Testing! 🎉**

If you find any issues, check the browser console for detailed error messages.
