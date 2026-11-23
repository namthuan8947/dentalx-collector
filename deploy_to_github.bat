@echo off
chcp 65001 >nul
echo ========================================================
echo    HỆ THỐNG ĐẨY WEB FORM LÊN GITHUB PAGES TỰ ĐỘNG
echo ========================================================
echo.
set /p REPO_URL="Nhập URL repository GitHub của bạn (VD: https://github.com/username/dentalx-form.git): "
if "%REPO_URL%"=="" (
    echo Chưa nhập URL! Thoát...
    pause
    exit /b
)

cd /d "%~dp0"
if not exist ".git" (
    git init
    git branch -M main
)
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git add .
git commit -m "Initial commit DentalX collector web app"
git push -u origin main --force

echo.
echo ========================================================
echo ĐÃ PUSH CODE LÊN GITHUB THÀNH CÔNG!
echo.
echo Bước tiếp theo:
echo 1. Vào repository trên GitHub -> Settings -> Pages.
echo 2. Chọn Branch: 'main', Folder: '/(root)' -> Nhấn Save.
echo 3. Chờ 30 giây là trang web sẽ hoạt động online!
echo ========================================================
pause
