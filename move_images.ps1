# Create img directory
New-Item -ItemType Directory -Path ".\public\img" -Force | Out-Null

# Move and rename images
Move-Item ".\public\man with blueprint_transparent.png" ".\public\img\man-blueprint.png" -Force
Move-Item ".\public\man key_transparent.png" ".\public\img\man-key.png" -Force

Write-Host "Images moved successfully!"
