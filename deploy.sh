#!/bin/bash

# NIHAM HealthWise - Quick Deployment Script
# This script helps you deploy to GitHub quickly

echo "🏥 NIHAM HealthWise - Deployment Script"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo ""
echo "📝 Adding files to Git..."
git add .

# Commit
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update NIHAM HealthWise application"
fi

git commit -m "$commit_msg"
echo "✅ Files committed"

# Check if remote exists
if git remote | grep -q "origin"; then
    echo ""
    echo "✅ Remote 'origin' already configured"
    echo ""
    read -p "Push to GitHub? (y/n): " push_confirm
    if [ "$push_confirm" = "y" ]; then
        echo "🚀 Pushing to GitHub..."
        git push origin main
        echo "✅ Pushed to GitHub successfully!"
    fi
else
    echo ""
    echo "⚠️  No remote repository configured"
    echo ""
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " repo_url
    
    if [ ! -z "$repo_url" ]; then
        git remote add origin "$repo_url"
        git branch -M main
        echo "🚀 Pushing to GitHub..."
        git push -u origin main
        echo "✅ Pushed to GitHub successfully!"
    else
        echo "❌ No repository URL provided. Skipping push."
    fi
fi

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Enable GitHub Pages in Settings → Pages"
echo "3. Or deploy to AWS Amplify by connecting your GitHub repo"
echo ""
echo "See DEPLOYMENT_GUIDE.md for detailed instructions"
