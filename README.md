# GSAP Animation Pack v1.0

> 12 production-ready GSAP animations. Plug into any project. Copy-paste code included.

![Preview](https://img.shields.io/badge/GSAP-3.12-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-0-blue?style=flat-square)

-----

## ✦ Animations Included

|# |Name                  |Category   |
|--|----------------------|-----------|
|01|Elastic Bounce In     |Page Load  |
|02|Stagger Grid Entrance |Page Load  |
|03|Character Split Reveal|Text       |
|04|Animated Counter      |Scroll     |
|05|Wipe Clip Reveal      |Page Load  |
|06|Infinite Float        |Loop       |
|07|Particle Burst        |Interaction|
|08|ScrollTrigger Fade Up |Scroll     |
|09|Shape Morph           |Morph      |
|10|Typewriter Effect     |Text       |
|11|Line Draw Expand      |Scroll     |
|12|Dot Pulse Loader      |Page Load  |

-----

## 🚀 Quick Start

1. Include GSAP via CDN (or install via npm):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

1. Open `index.html` in your browser — no build step required.
1. Copy any animation snippet from the `{ } Code` panel inside each card.

-----

## 📁 File Structure

```
gsap-animation-pack/
├── index.html        ← Main showcase page
├── css/
│   └── style.css     ← All styles & design tokens
├── js/
│   ├── animations.js ← 12 animation functions (ES Module)
│   └── main.js       ← Cursor, scroll, entrance logic
└── README.md
```

-----

## 📦 Usage Example

```js
import { play1, play6, play12 } from './js/animations.js';

// Elastic bounce on button click
document.querySelector('.cta').addEventListener('click', play1);

// Auto-start loops on page load
play6();   // Float loop
play12();  // Dot pulse loader
```

-----

## 🎨 Design Tokens

All colors are CSS custom properties — easy to theme:

```css
:root {
  --accent:  #c8ff00;  /* Lime green */
  --accent2: #ff3c6e;  /* Hot pink   */
  --accent3: #00c8ff;  /* Cyan       */
}
```

-----

## ⚙️ Requirements

- GSAP 3.12+ (free tier — no Club GSAP required)
- ScrollTrigger plugin (bundled with GSAP CDN)
- Modern browser (ES Modules support)

-----

## 📄 License

MIT — free for personal and commercial use.

-----

Made with ♥ using [GSAP](https://gsap.com)