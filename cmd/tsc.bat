@echo off
echo Run from terminal manually to see details and errors
echo transpiling typescript...
start modExtResolver.bat
cd ..\app\
npx tsc
echo transpiled!