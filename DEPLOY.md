# SSVK Menu Builder — Deployment Guide
## ஸ்ரீ சிவா விஷ்ணு கேட்டரிங் மெனு உருவாக்கி

---

## OPTION A: Deploy with Vercel (Easiest — No coding needed)

### Step 1: Create accounts (one time only)
1. Go to https://github.com and create a free account
2. Go to https://vercel.com and sign up using your GitHub account

### Step 2: Upload the code to GitHub
1. Log into GitHub
2. Click the "+" icon (top right) → "New repository"
3. Name it: `ssvk-menu-builder`
4. Keep it Public, click "Create repository"
5. On the next page, click "uploading an existing file"
6. Drag and drop ALL the files from this project folder:
   - `package.json`
   - `vite.config.js`
   - `index.html`
   - `src/` folder (with `main.jsx` and `App.jsx` inside)
   - `public/` folder (with `manifest.json` inside)
7. Click "Commit changes"

### Step 3: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "Import" next to your `ssvk-menu-builder` repository
3. Framework Preset: select "Vite"
4. Click "Deploy"
5. Wait 1-2 minutes
6. You'll get a URL like: `ssvk-menu-builder.vercel.app`

### Step 4: Open on your phone
1. Open the URL in Chrome on your phone
2. Tap the three dots menu → "Add to Home screen"
3. Now it works like an app on your phone!

---

## OPTION B: Ask someone tech-savvy to do it

Share this entire folder with them and say:
"This is a Vite + React project. Please deploy it on Vercel or Netlify."

Any web developer can do this in under 10 minutes.

---

## OPTION C: Run locally on your computer

If you have Node.js installed:
```
cd ssvk-menu-app
npm install
npm run dev
```
Open http://localhost:5173 in your browser.

---

## Project Structure

```
ssvk-menu-app/
├── index.html          ← Main HTML page
├── package.json        ← Project dependencies
├── vite.config.js      ← Build configuration
├── public/
│   └── manifest.json   ← PWA settings (mobile app)
└── src/
    ├── main.jsx        ← Entry point
    └── App.jsx         ← The menu builder app (all code here)
```

---

## Future Features (to be added)
- [ ] Arrangements section (flowers, nadaswaram, etc.)
- [ ] Price quotation with slab-based pricing
- [ ] Tamil PDF generation with flower border design
- [ ] Backwork calculator (auto procurement lists)
- [ ] AI-powered pricing suggestions
- [ ] RCC layer for learning from past orders
- [ ] 1-day non-Brahmin template
- [ ] ABT parcel template
- [ ] Variety rice template

---

## Contact
Sri Siva Vishnu Catering
📞 9842408584 | 8248066570
Padma Vilas Bungalow, 30, Bharathiyar Street,
Town Station Road, Trichy - 620 002
