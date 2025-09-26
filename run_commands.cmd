@echo off
cd /d "C:\Projects\voltex-am-new"
mkdir public\img 2>nul
copy "public\man with blueprint_transparent.png" "public\img\man-blueprint.png"
copy "public\man key_transparent.png" "public\img\man-key.png"
del "public\man with blueprint_transparent.png"
del "public\man key_transparent.png"
npm run build
git add public/img
git commit -m "assets: move hero images to public/img (clean slugs)"
git push origin main
echo All commands completed successfully!
