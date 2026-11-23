@echo off
title DentalX GitHub Push
cd /d "%~dp0"

echo ========================================================
echo        DENTALX COLLECTOR - DONG BO LEN GITHUB
echo ========================================================
echo.

:: Kiem tra va khoi tao Git neu chua co
git status >nul 2>&1
if errorlevel 1 (
    echo [*] Dang khoi tao Git repository...
    git init
    git branch -M main
    git remote add origin https://github.com/namthuan8947/dentalx-collector.git
)

:: Xoa cac file rac sinh ra do loi truoc do (neu co)
if exist "Pages" del /f /q "Pages" 2>nul
if exist "Nhan" del /f /q "Nhan" 2>nul
if exist "Nh*" del /f /q "Nh*" 2>nul

echo [*] Dang commit va day len GitHub...
git add .
git commit -m "Update DentalX collector form"
git push origin main

echo.
echo ========================================================
echo [*] DONG BO LEN GITHUB THANH CONG!
echo [*] Link repo: https://github.com/namthuan8947/dentalx-collector
echo [*] Link web:  https://namthuan8947.github.io/dentalx-collector/
echo ========================================================
echo.
pause
