# Deployment Guide for NIHAM HealthWise

This guide will walk you through deploying your application to GitHub and AWS.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- AWS account (for AWS deployment)

## 🔧 Step 1: Initialize Git Repository

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: NIHAM HealthWise - Offline AI Health Assistant"
```

## 🐙 Step 2: Deploy to GitHub

### Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `niham-healthwise` (or your preferred name)
4. Description: "Offline AI Health Assistant for Rural India"
5. Keep it Public (or Private if you prefer)
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

### Push to GitHub

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/niham-healthwise.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Enable GitHub Pages (Optional - Free Hosting)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select branch: `main` and folder: `/ (root)`
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/niham-healthwise/`
7. Wait 2-3 minutes for deployment

**Note**: You'll need to update the file paths if deploying to a subdirectory. Change:
- `index.html` → `./index.html`
- `login.html` → `./login.html`
- All asset paths to relative paths

## ☁️ Step 3: Deploy to AWS Amplify

AWS Amplify provides free hosting for static websites with CI/CD.

### Method 1: Deploy from GitHub (Recommended)

1. **Go to AWS Amplify Console**
   - Log in to [AWS Console](https://console.aws.amazon.com)
   - Search for "Amplify" in the services search bar
   - Click "AWS Amplify"

2. **Create New App**
   - Click "New app" → "Host web app"
   - Select "GitHub" as the source
   - Click "Continue"

3. **Authorize GitHub**
   - Click "Authorize AWS Amplify"
   - Grant access to your repositories

4. **Select Repository**
   - Choose your repository: `niham-healthwise`
   - Select branch: `main`
   - Click "Next"

5. **Configure Build Settings**
   - App name: `niham-healthwise`
   - Build settings are auto-detected (use the amplify.yml file)
   - Click "Next"

6. **Review and Deploy**
   - Review all settings
   - Click "Save and deploy"

7. **Wait for Deployment**
   - Initial deployment takes 2-5 minutes
   - You'll get a URL like: `https://main.d1234abcd.amplifyapp.com`

8. **Custom Domain (Optional)**
   - Click "Domain management" in the left sidebar
   - Add your custom domain
   - Follow the DNS configuration instructions

### Method 2: Deploy via AWS CLI

```bash
# Install AWS CLI if not already installed
# Windows: Download from https://aws.amazon.com/cli/
# Mac: brew install awscli
# Linux: sudo apt-get install awscli

# Configure AWS credentials
aws configure

# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Select: "Hosting with Amplify Console"
# Select: "Manual deployment"

# Publish
amplify publish
```

## 🌐 Step 4: Alternative Deployment Options

### Netlify (Easiest)

1. Go to [Netlify](https://www.netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose GitHub → Select your repository
5. Build settings: Leave empty (static site)
6. Click "Deploy site"
7. Done! You get a URL like: `https://niham-healthwise.netlify.app`

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! You get a URL like: `https://niham-healthwise.vercel.app`

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Select your Firebase project
# Set public directory: . (current directory)
# Configure as single-page app: No
# Set up automatic builds: No

# Deploy
firebase deploy
```

## 🔄 Continuous Deployment

Once connected to GitHub, any push to the main branch will automatically trigger a new deployment on:
- AWS Amplify ✅
- Netlify ✅
- Vercel ✅
- GitHub Pages (may need manual trigger)

## 🔍 Verify Deployment

After deployment, test these features:
1. Open the deployed URL
2. Create a new account
3. Complete health profile
4. Check language switching
5. Test voice features (may need HTTPS)
6. Try emergency mode
7. Search for diseases

## 🐛 Troubleshooting

### GitHub Pages shows 404
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` exists in root
- Verify branch and folder settings

### AWS Amplify build fails
- Check `amplify.yml` is in root directory
- Verify all files are committed to Git
- Check build logs in Amplify console

### Voice features don't work
- Voice APIs require HTTPS
- GitHub Pages, Netlify, Vercel, and AWS Amplify all provide HTTPS
- Test on deployed URL, not local file://

### Images not loading
- Verify `NIHAM_Logo.png` is in root directory
- Check image paths are relative (not absolute)
- Ensure images are committed to Git

## 💰 Cost Estimates

### Free Tier Options
- **GitHub Pages**: Free forever (public repos)
- **Netlify**: 100GB bandwidth/month free
- **Vercel**: 100GB bandwidth/month free
- **AWS Amplify**: 
  - 1000 build minutes/month free
  - 15GB storage free
  - 15GB bandwidth/month free

### After Free Tier
- **AWS Amplify**: ~$0.01 per build minute, $0.023/GB storage, $0.15/GB bandwidth
- **Netlify**: $19/month for Pro plan
- **Vercel**: $20/month for Pro plan

For a small health app, free tier should be sufficient!

## 🎉 Success!

Your NIHAM HealthWise app is now live and accessible to users worldwide!

Share your deployment URL:
- GitHub Pages: `https://YOUR_USERNAME.github.io/niham-healthwise/`
- AWS Amplify: `https://main.xxxxx.amplifyapp.com`
- Netlify: `https://niham-healthwise.netlify.app`
- Vercel: `https://niham-healthwise.vercel.app`

## 📞 Need Help?

- AWS Amplify Docs: https://docs.amplify.aws/
- GitHub Pages Docs: https://pages.github.com/
- Netlify Docs: https://docs.netlify.com/
- Vercel Docs: https://vercel.com/docs

---

**Happy Deploying! 🚀**
