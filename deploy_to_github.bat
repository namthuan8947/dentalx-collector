@echo off
title DentalX GitHub Push
cd /d "%~dp0"
echo ========================================================
echo DENTALX COLLECTOR - DONG BO LEN GITHUB
echo ========================================================
echo.

git status >nul 2>&1
if errorlevel 1 (
    git init
    git branch -M main
    git remote add origin https://github.com/namthuan8947/dentalx-collector.git
)

git add .
git commit -m "Update DentalX collector form"
git push origin main

echo.
echo ========================================================
echo DONG BO LEN GITHUB THANH CONG!
echo Link repo: https://github.com/namthuan8947/dentalx-collector
echo Link web:  https://namthuan8947.github.io/dentalx-collector/
echo ========================================================
echo.
pause
