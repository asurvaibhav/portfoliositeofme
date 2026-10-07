import imglyRemoveBackground from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function processImage() {
  const inputPath = path.resolve('src/assets/images/hero_portrait_profile_1791048121984.jpg');
  console.log('Loading input image:', inputPath);

  try {
    const blob = await imglyRemoveBackground(inputPath);
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const targets = [
      'hero-portrait.png',
      'public/hero-portrait.png',
      'src/assets/images/hero-portrait.png',
      'src/assets/images/hero_portrait_profile_1791048121984.png'
    ];

    for (const target of targets) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, buffer);
      console.log('Successfully saved transparent portrait to:', target);
    }
  } catch (error) {
    console.error('Error during background removal:', error);
    process.exit(1);
  }
}

processImage();
