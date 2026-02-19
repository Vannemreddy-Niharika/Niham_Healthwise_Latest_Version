# NIHAM HealthWise

**Offline AI Health Assistant for Rural India**

A comprehensive offline-first health assistant web application designed for rural India, providing health information, disease diagnosis, vaccine tracking, and personalized health scoring in multiple languages.

## 🌟 Features

### Core Features
- **Multi-language Support**: English, Hindi, Telugu, Tamil, Bengali, Marathi, Gujarati, French, Spanish, Korean
- **Offline Translation & Voice**: Works completely offline with voice input/output
- **Login & Health Scoring**: User authentication with personalized health score calculation
- **Disease Information**: Comprehensive database of common diseases with symptoms and remedies
- **Vaccine Tracking**: Track vaccination schedules for children and adults
- **AI Symptom Checker**: Predict potential diseases based on symptoms
- **Emergency Mode**: Quick access to emergency contacts and first-aid procedures
- **Natural Remedies**: Traditional and natural treatment options

### Health Score System
- BMI calculation and assessment
- Blood pressure monitoring
- Blood sugar level tracking
- Lifestyle score (exercise, smoking, alcohol, sleep)
- Personalized health recommendations

### Special Modes
- **Emergency Mode**: First-aid procedures, emergency contacts
- **Offline Mode**: Full functionality without internet
- **Voice Assistant**: Hands-free interaction in multiple languages

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/niham-healthwise.git
cd niham-healthwise
```

2. Open `login.html` in your browser to get started

That's it! No build process or dependencies needed.

## 📁 Project Structure

```
niham-healthwise/
├── index.html              # Main application page
├── login.html              # Login and signup page
├── css/                    # Stylesheets
│   ├── main.css
│   ├── login.css
│   ├── components.css
│   ├── animations.css
│   └── special-modes.css
├── js/
│   ├── features/           # Feature modules
│   │   ├── login.js
│   │   ├── chatbot.js
│   │   ├── ai-prediction.js
│   │   ├── emergency-mode.js
│   │   ├── language.js
│   │   ├── translation-manager.js
│   │   └── voice-manager.js
│   ├── data/               # Data files
│   │   ├── diseases.js
│   │   ├── vaccines.js
│   │   ├── translations.js
│   │   └── translation-dictionary.js
│   ├── ui/                 # UI components
│   └── utils/              # Utility functions
└── NIHAM_Logo.png          # Application logo
```

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch `main` and folder `/root`
4. Your site will be live at `https://YOUR_USERNAME.github.io/niham-healthwise/`

### AWS Amplify
1. Push your code to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your GitHub repository
5. Build settings are auto-detected (static site)
6. Deploy!

### Netlify / Vercel
Simply connect your GitHub repository and deploy - no configuration needed!

## 💻 Usage

### First Time Setup
1. Open `login.html`
2. Click "Create a new account"
3. Fill in your details
4. Complete your health profile
5. Get your personalized health score

### Using the App
- **Search Diseases**: Use the search bar to find information about diseases
- **Check Symptoms**: Click "AI Prediction" to diagnose based on symptoms
- **Track Vaccines**: View and manage vaccination schedules
- **Emergency Mode**: Click the emergency button for quick access to first-aid
- **Change Language**: Use the language selector in the navigation bar
- **Voice Input**: Click the microphone icon to use voice commands

## 🔧 Configuration

### Adding New Languages
Edit `js/data/translations.js` to add new language translations.

### Customizing Health Score
Modify the scoring algorithm in `js/features/login.js` → `calculateHealthScore()` function.

### Adding Diseases
Add new diseases to `js/data/diseases.js` following the existing format.

## 📱 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## 🔒 Privacy & Security

- All data stored locally in browser (localStorage)
- No data sent to external servers
- Works completely offline
- No tracking or analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Authors

Created for rural healthcare accessibility in India.

## 🙏 Acknowledgments

- Disease data compiled from medical resources
- Translation support for 10 languages
- Designed for low-bandwidth and offline environments

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for Rural India**
