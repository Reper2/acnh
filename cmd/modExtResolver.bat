@echo off
echo Module Extension Resolver
echo All instructions refer to vscode.
echo.
echo Press Ctrl+Shift+F
pause
echo.
echo Press Ctrl+Shift+J
pause
echo.
echo Ensure:
echo - these text boxes are visible: find, replace, files to include, files to exclude
echo - Use Regular Expression indicator is ON
echo - Use Exclude Settings and Ignore Files indicator is ON
pause
echo.
echo Find: (\bfrom\s+["']\..*)(["'])
echo Replace: $1.js$2
echo files to include: app/dist/*.js
echo Press Ctrl+Alt+Enter after entering these values into the boxes.
pause
echo.
echo Now open app\dist\acnhmsgbox.js and replace "acnhmsgbox" with "../submodules/acnhmsgbox/acnhMessageBox.js"
pause
exit