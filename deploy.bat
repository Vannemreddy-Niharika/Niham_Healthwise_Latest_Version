@echo off
REM NIHAM HealthWise - Quick Deployment Script for Windows
REM This script helps you deploy to GitHub quickly

echo.
echo ========================================
echo NIHAM HealthWise - Deployment Script
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo Git initialized successfully!
) else (
    echo Git repository already initialized
)

echo.
echo Adding files to Git...
git add .

echo.
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update NIHAM HealthWise application

git commit -m "%commit_msg%"
echo Files committed successfully!

echo.
REM Check if remote exists
git remote | findstr "origin" >nul
if %errorlevel% equ 0 (
    echo Remote 'origin' already configured
    echo.
    set /p push_confirm="Push to GitHub? (y/n): "
    if /i "%push_confirm%"=="y" (
        echo Pushing to GitHub...
        git push origin main
        echo Pushed to GitHub successfully!
    )
) else (
    echo No remote repository configured
    echo.
    set /p repo_url="Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): "
    
    if not "%repo_url%"=="" (
        git remote add origin "%repo_url%"
        git branch -M main
        echo Pushing to GitHub...
        git push -u origin main
        echo Pushed to GitHub successfully!
    ) else (
        echo No repository URL provided. Skipping push.
    )
)

echo.
echo ========================================
echo Deployment complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Enable GitHub Pages in Settings - Pages
echo 3. Or deploy to AWS Amplify by connecting your GitHub repo
echo.
echo See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
pause
