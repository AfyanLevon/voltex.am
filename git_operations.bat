@echo off
cd /d "C:\Projects\voltex-am-new"
git checkout -b chore/sync-tech-and-construction-copy
git add -A
git commit -m "content: construction-only hero + energy-solutions header link + 3-col innovation strip"
git push origin chore/sync-tech-and-construction-copy
echo Git operations completed!
echo.
echo Next steps:
echo 1. Go to GitHub and create a Pull Request
echo 2. Title: "Sync with voltex.tech + apply construction-only content"
echo 3. Add the PR body with the details provided

