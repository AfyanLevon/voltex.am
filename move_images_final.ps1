# Move and rename the image files
Move-Item ".\public\man with blueprint_transparent.png" ".\public\img\man-blueprint.png" -Force
Move-Item ".\public\man key_transparent.png" ".\public\img\man-key.png" -Force

Write-Host "Images moved successfully!"
