# ILH Engineering — Corporate Website

> Mission-critical infrastructure engineering — designed for performance, built for resilience.

## Tech Stack

| Layer        | Technology                                    |
|-------------|----------------------------------------------|
| Framework    | [React 19](https://react.dev) + [Vite 6](https://vite.dev) |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com)    |
| Animations   | [Framer Motion](https://motion.dev)          |
| Icons        | [Lucide React](https://lucide.dev)           |
| Font         | Plus Jakarta Sans + Inter (Google Fonts)     |

## Project Structure

```
src/
├── assets/                    # Static images, logos, icons
├── constants/                 # Centralized config & design tokens
│   ├── brand.js               #   Colors, typography, company info
│   ├── navigation.js          #   Nav links & view constants
│   └── index.js               #   Barrel export
├── components/
│   ├── ui/                    # Shared, reusable UI primitives
│   │   ├── SectionPill.jsx    #   Green label badge
│   │   ├── SplitButton.jsx    #   Green CTA with arrow
│   │   ├── SectionHeading.jsx #   Consistent headings
│   │   ├── ScrollIndicator.jsx#   Mouse-scroll animation
│   │   ├── GridBackground.jsx #   Blueprint grid overlay
│   │   └── index.js           #   Barrel export
│   ├── layout/                # App-level chrome
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   ├── home/                  # Homepage sections (render order)
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── DesignRisk.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Capabilities.jsx
│   │   ├── ProjectExperience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Leadership.jsx
│   │   ├── EngineeringNetwork.jsx
│   │   └── index.js
│   ├── experience/            # Experience page sections
│   │   ├── ExperienceHero.jsx
│   │   ├── ScopeOfWork.jsx
│   │   ├── CaseStudyHighlight.jsx
│   │   ├── CaseStudyGallery.jsx
│   │   └── index.js
│   ├── capabilities/          # Capabilities detail page
│   │   ├── CapabilitiesPage.jsx
│   │   └── index.js
│   └── casestudy/             # Case study detail page
│       ├── CaseStudyPage.jsx
│       └── index.js
├── App.jsx                    # Root component & view router
├── main.jsx                   # React entry point
└── index.css                  # Global styles, animations, Tailwind
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
```

## Architecture Decisions

- **Code-splitting** — Only `Hero` + `Navbar` ship in the initial bundle. All other sections are lazy-loaded via `React.lazy()` + `Suspense`.
- **Mobile-first** — Separate mobile DOM structures for complex sections (Footer, Experience grid, Capabilities list) using `hidden lg:flex` / `flex lg:hidden` display utilities.
- **Constants over magic strings** — All brand colors, nav config, and view identifiers live in `src/constants/` so changes propagate everywhere.
- **Barrel exports** — Every directory exposes an `index.js` for clean imports: `import { Hero } from './components/home'`.

## License

Proprietary — © 2026 ILH Engineering. All rights reserved.
