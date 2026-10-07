import sys
import os
from PIL import Image

try:
    from rembg import remove
    print("rembg imported successfully")
except Exception as e:
    print("rembg import error:", e)
    sys.exit(1)

input_path = "src/assets/images/hero_portrait_profile_1791048121984.jpg"
if not os.path.exists(input_path):
    print("Input path does not exist:", input_path)
    sys.exit(1)

print("Opening image...", input_path)
input_image = Image.open(input_path)
print("Removing background...")
output_image = remove(input_image)

output_path = "hero-portrait.png"
output_image.save(output_path)
print("Saved transparent portrait to:", output_path)

public_path = "public/hero-portrait.png"
output_image.save(public_path)
print("Saved to public:", public_path)

assets_path = "src/assets/images/hero-portrait.png"
output_image.save(assets_path)
print("Saved to assets:", assets_path)
