# PWA Icon Generation

To generate PWA icons, you can use one of these methods:

1. **Online Tool**: Use [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) or [RealFaviconGenerator](https://realfavicongenerator.net/)

2. **Using ImageMagick** (if installed):
```bash
# Convert favicon.ico to PNG first, then resize
convert app/favicon.ico -resize 72x72 public/icons/icon-72x72.png
convert app/favicon.ico -resize 96x96 public/icons/icon-96x96.png
convert app/favicon.ico -resize 128x128 public/icons/icon-128x128.png
convert app/favicon.ico -resize 144x144 public/icons/icon-144x144.png
convert app/favicon.ico -resize 152x152 public/icons/icon-152x152.png
convert app/favicon.ico -resize 192x192 public/icons/icon-192x192.png
convert app/favicon.ico -resize 384x384 public/icons/icon-384x384.png
convert app/favicon.ico -resize 512x512 public/icons/icon-512x512.png
```

3. **Using sharp (Node.js)** - Install sharp: `npm install sharp --save-dev`

For now, placeholder icons will work, but you should replace them with actual icons for production.
