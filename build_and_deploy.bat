@echo off
cd /d "C:\Projects\voltex-am-new"
npm run build
git add -A
git commit -m "fix: restore correct index.html + construction-only hero & innovation section; move images to /public/img"
git push origin main
echo Build and deployment completed!
