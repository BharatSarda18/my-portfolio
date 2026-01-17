/**
 * Script to generate PWA icons from favicon
 * Run: node scripts/generate-icons.js
 * 
 * Note: This script requires sharp to be installed
 * Install: npm install sharp --save-dev
 */

const fs = require('fs');
const path = require('path');

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
const faviconPath = path.join(__dirname, '../app/favicon.ico');
const outputDir = path.join(__dirname, '../public/icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  try {
    // Try to use sharp if available
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.log('Sharp not found. Installing...');
      console.log('Please run: npm install sharp --save-dev');
      console.log('\nAlternatively, you can:');
      console.log('1. Use an online tool like https://realfavicongenerator.net/');
      console.log('2. Use ImageMagick: convert app/favicon.ico -resize SIZExSIZE public/icons/icon-SIZExSIZE.png');
      return;
    }

    // Check if favicon exists
    if (!fs.existsSync(faviconPath)) {
      console.error('Favicon not found at:', faviconPath);
      return;
    }

    console.log('Generating PWA icons...');
    
    // Read favicon and generate icons
    const image = sharp(faviconPath);
    
    for (const size of iconSizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      await image
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated icon-${size}x${size}.png`);
    }
    
    console.log('\n✅ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error.message);
    console.log('\nAlternative methods:');
    console.log('1. Use https://realfavicongenerator.net/');
    console.log('2. Use ImageMagick convert command');
  }
}

generateIcons();
