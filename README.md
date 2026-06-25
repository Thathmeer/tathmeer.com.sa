# Tathmeer International

Corporate website for **Tathmeer International** — a premier Saudi exporter and importer of scout clothing, military uniforms, and camping supplies. Established in the 1980s in Riyadh by Dr. Abdullah Alshebel.

## Features

- **Trilingual** — English, Arabic (RTL), and Simplified Chinese
- **Single-page design** with smooth-scroll navigation
- **Particle.js animated background**
- **SEO-optimized** — Open Graph, Twitter Cards, JSON-LD structured data, hreflang tags
- **Accessible** — skip link, `aria-` attributes, reduced-motion support, print styles
- **Responsive** — mobile-first layout using Bootstrap 4 + custom CSS

## Sections

1. **Hero** — Full-screen header with rotating fabric texture backgrounds
2. **Overview** — Company summary
3. **History** — Timeline from 1980s to present
4. **Founder** — Dr. Abdullah Al-Shebel biography with YouTube video
5. **Core Competencies** — Fabric expertise, global sourcing, custom solutions, government trust
6. **Products & Services** — Scout clothing, military uniforms, camping supplies, custom supply
7. **Future Plans** — New factory and product line expansion
8. **Why Us** — Differentiators grid
9. **Contact** — Location, phone, email, map

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure |
| CSS3 (custom + Bootstrap 4) | Styling & design system |
| JavaScript (vanilla) | i18n, scroll, particles init |
| jQuery 3.4.1 | Bootstrap dependencies |
| Bootstrap 4 | Responsive layout & navbar |
| particles.js | Animated particle backdrop |
| Themify Icons | Icon set |

## Color Palette

- Gold: `#8B6914` / `#C49A2A` / `#E8C96A`
- Navy: `#0D1B2A` / `#1E3148`
- Neutral: `#F7F3EC` / `#FEFCF9`

## Project Structure

```
.
├── index.html              # Single-page site (HTML + inlined CSS/JS + i18n)
├── .htaccess               # CSP headers for YouTube embeds
├── favicon.ico
├── assets/
│   ├── css/
│   │   ├── styles.css          # Full design system
│   │   └── bootstrap.min.css
│   ├── img/
│   │   ├── logo.png
│   │   ├── ti.png
│   │   ├── abdullah.jpeg       # Founder photo
│   │   ├── map.png
│   │   ├── header.jpg
│   │   ├── section.jpg
│   │   ├── header-fabric*.jpg  # Hero background variants (6 files)
│   │   └── letter_bg_*.jpg     # Decorative backgrounds (3 files)
│   ├── js/
│   │   ├── app.js              # particles.js config (legacy)
│   │   └── particles.js        # Library
│   └── vendors/
│       ├── bootstrap/
│       ├── jquery/
│       └── themify-icons/
└── .github/workflows/static.yml  # GitHub Pages deploy
```

## Deployment

The site is deployed via **GitHub Pages** using the included GitHub Actions workflow (`.github/workflows/static.yml`). Any push to `main` triggers an automatic deploy.

## Local Development

Open `index.html` directly in a browser — no build step required.

```bash
python3 -m http.server 8080
# or
npx serve .
```

## i18n

Translations are stored inline as a `TRANSLATIONS` object in `index.html`. Language is detected from the browser's `navigator.language` on first visit and persisted in `localStorage`. Users can switch via buttons in the footer.

## License

All rights reserved. Tathmeer International &copy; 2026.
