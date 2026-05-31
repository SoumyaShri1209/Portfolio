# 🚀 Soumya Shri — Portfolio

A stunning, animated personal portfolio built with **React + Vite + Framer Motion**.

## ✨ Features

- 🎨 Dark glassmorphism design with neon accent colors
- ⚡ Smooth Framer Motion animations throughout
- 🖱️ Custom animated cursor (desktop)
- 📜 Scroll progress indicator
- 🏃 Auto-scrolling marquee skill showcase
- 🌐 Type animation hero section
- 📱 Fully responsive for mobile, tablet, desktop
- 🌀 Floating ambient orbs & particle effects
- 📨 Contact form with mailto integration
- 🗂️ Categorized skills with tech icons
- 🏆 Animated timeline for achievements
- 📊 Animated education progress bars

---

## 📁 Project Structure

```
soumya-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Achievements.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Cursor.jsx / .css
│   │   └── ScrollProgress.jsx
│   ├── assets/         ← Put your photo here!
│   ├── data.js         ← 🔑 MAIN DATA FILE — edit this!
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```



---

## 🛠️ Customization Guide

### 📸 Add Your Photo

1. Copy your photo to `src/assets/` (e.g., `photo.jpg`)
2. Open `src/data.js`
3. Update the `photo` field:
```js
export const personalInfo = {
  ...
  photo: "/src/assets/photo.jpg",  // ← update this
};
```

### 🔗 Add Project Links

In `src/data.js`, update each project's `sourceCode` and `liveDemo`:
```js
export const projects = [
  {
    title: "ShareLane",
    sourceCode: "https://github.com/SoumyaShri1209/sharelane",  // ← your GitHub link
    liveDemo: "https://sharelane.vercel.app",                    // ← your deployed URL
    ...
  },
  ...
];
```

> If a project isn't deployed yet, set `liveDemo: "#"` and it will show "Add Live URL →"

### 📄 Add Resume Link

In `src/data.js`:
```js
export const personalInfo = {
  ...
  resumeLink: "https://drive.google.com/your-resume-link",  // ← Google Drive or any link
};
```

### ✏️ Edit Content

Everything is in `src/data.js`:
- `personalInfo` — name, bio, social links
- `projects[]` — all 5 projects with links
- `skills{}` — categorized skill lists
- `achievements[]` — certifications & simulations
- `education` — college info

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/` folder. Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: drag `dist/` folder to netlify.com
- **GitHub Pages**: use `gh-pages` package

---

## 🎨 Color Customization

All colors are CSS variables in `src/index.css`:
```css
:root {
  --accent-cyan: #00f5ff;     /* Primary accent */
  --accent-violet: #7c3aed;  /* Secondary accent */
  --accent-pink: #f472b6;    /* Tertiary accent */
  --bg-primary: #050510;     /* Main background */
}
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `framer-motion` | All animations |
| `react-type-animation` | Hero typing effect |
| `react-scroll` | Smooth section scrolling |
| `react-icons` | All icons |
| `react-intersection-observer` | Scroll-triggered animations |

---

Built with ❤️ by Soumya Shri
