<div align="center">

# K1 Mobile Tyres Website

**A premium homepage redesign for K1 Dover Tyres — 24/7 mobile tyre fitting across Dover & Kent.**

[![Live demo](https://img.shields.io/badge/Live%20demo-Homepage-E31B22?style=for-the-badge)](https://ebthalgamal2020.github.io/k1-mobile-tyres-website/)
[![V3](https://img.shields.io/badge/Version-V3-03254F?style=for-the-badge)](https://ebthalgamal2020.github.io/k1-mobile-tyres-website/V3/)
[![V4](https://img.shields.io/badge/Version-V4-03254F?style=for-the-badge)](https://ebthalgamal2020.github.io/k1-mobile-tyres-website/V4/)

</div>

---

## Contents

- [About the project](#about-the-project)
- [Live demo](#live-demo)
- [Website versions](#website-versions)
- [Technologies used](#technologies-used)
- [Repository structure](#repository-structure)
- [Running locally](#running-locally)
- [Image credits](#image-credits)
- [Project note](#project-note)

---

## About the project

K1 Dover Tyres is a 24/7 mobile tyre fitting business founded in Dover in 2010, serving Dover and the whole of Kent. This repository contains three homepage design versions created as a redesign of the current website, built around the original K1 brand identity: **red `#E31B22`, navy `#03254F`, black and white**, and the original K1 Mobile Tyres logo.

All versions keep the business's real details — phone, WhatsApp, services, coverage areas and genuine Google reviews — and link to the existing service and location pages.

## Live demo

| Version | Live link |
| --- | --- |
| 🏁 **Main homepage** | https://ebthalgamal2020.github.io/k1-mobile-tyres-website/ |
| 🔹 **V3** | https://ebthalgamal2020.github.io/k1-mobile-tyres-website/V3/ |
| 🔹 **V4** | https://ebthalgamal2020.github.io/k1-mobile-tyres-website/V4/ |

## Website versions

Each version is fully self-contained in its own folder, with its own `index.html` and images. Styles are never shared between versions.

### Main homepage — dark, cinematic, luxury
- Black and charcoal base with red accents and a navy/white/red livery stripe.
- Animated logo intro: the original logo split into layers that assemble on load.
- Full-bleed photographic hero, graded imagery and slanted service cards.
- Live animated Kent coverage map with routes radiating from Dover.
- Smooth scrolling (Lenis), headline reveals, parallax, animated icons.
- Postcode coverage checker and a callback form that opens WhatsApp pre-filled.
- Built with Tailwind CSS (Play CDN) plus a small JavaScript file.

### V3 — navy-led, cinematic hero
- Navy colour scheme with the genuine K1 van in a dusk hero scene.
- Manrope typography, scroll progress bar, parallax and an animated booking-steps rail.
- Single-file build: hand-written CSS and JavaScript inline in `index.html`.

### V4 — navy and light grey, conversion-focused
- Navy hero with a "Get help in 3 taps" panel for quick issue selection.
- Light grey content sections with a bento-style service grid using K1's own job photos.
- Manrope typography; single-file build with inline CSS and JavaScript.

## Technologies used

| | |
| --- | --- |
| **Markup** | HTML5 (semantic, accessible landmarks, ARIA where needed) |
| **Styling** | Tailwind CSS (main homepage), hand-written CSS with custom properties (V3, V4) |
| **Scripting** | Vanilla JavaScript — no frameworks |
| **Motion** | CSS animations, IntersectionObserver reveals, SVG/SMIL map animation, [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll |
| **Fonts** | Google Fonts — Barlow / Barlow Condensed (main), Manrope (V3, V4) |
| **Images** | Optimised WebP |
| **Hosting** | GitHub Pages |

All versions respect `prefers-reduced-motion`.

## Repository structure

```
k1-mobile-tyres-website/
├── index.html              # Main homepage
├── assets/
│   ├── images/             # Main homepage images
│   │   └── logo/           # Original logo split into animation layers
│   └── js/
│       └── main.js         # Main homepage interactions
├── V3/
│   ├── index.html          # V3 (CSS + JS inline)
│   └── assets/images/      # V3 images only
├── V4/
│   ├── index.html          # V4 (CSS + JS inline)
│   └── assets/images/      # V4 images only
├── .nojekyll               # Serve files as-is on GitHub Pages
└── README.md
```

## Running locally

No build step is needed. Clone the repository and serve the folder:

```bash
git clone https://github.com/Ebthalgamal2020/k1-mobile-tyres-website.git
cd k1-mobile-tyres-website
python -m http.server 8000
```

Then open http://localhost:8000/, http://localhost:8000/V3/ or http://localhost:8000/V4/.

## Image credits

- K1 Dover Tyres' own job photos and logo, from the current website.
- Additional photography from [Unsplash](https://unsplash.com/license) and [Pexels](https://www.pexels.com/license/) under their free licences.
- Kent boundary outline derived from Office for National Statistics open boundary data.

## Project note

> This is a **redesign / concept project** for the K1 Mobile Tyres homepage. It is not the live business website — for bookings and enquiries visit [k1dovertyres.co.uk](https://k1dovertyres.co.uk/) or call **01304 350200**.
>
> Before production use, the main homepage should switch from the Tailwind Play CDN to a compiled Tailwind build.
