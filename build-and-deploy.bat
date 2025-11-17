@echo off
echo Building SJR Tech Service Landing Page...
echo.

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Building project...
npm run build
if %errorlevel% neq 0 (
    echo Failed to build project
    pause
    exit /b 1
)

echo.
echo Project built successfully!
echo.
echo To deploy to Firebase:
echo 1. Make sure Firebase CLI is installed: npm install -g firebase-tools
echo 2. Login to Firebase: firebase login
echo 3. Initialize project: firebase init hosting
echo 4. Deploy: firebase deploy
echo.
echo Or run: npm run deploy
echo.
pause