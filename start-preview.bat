@echo off
echo ========================================================
echo Starting Stream to Dream Local Server
echo ========================================================
echo Opening http://localhost:5173 in your default browser...
start http://localhost:5173
python -m http.server 5173 --directory "%~dp0dist"
pause
