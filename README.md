# AMSA Landing Page

A modern, responsive website for the Asian Medical Students' Association built with React, Vite, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- npm (comes with Node.js)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/amsa-landing-page.git
cd amsa-landing-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Ensure image folder structure

Make sure you have the following folder structure for images:

```
public/images/
```

**Note**: Images should be placed in `public/images/` NOT `src/assets/images/` for proper Vercel deployment.

### 4. Run the development server

```bash
npm run dev
```

This will start the Vite development server, typically at http://localhost:5173

## Required Images

Before running the project, make sure you have the following images in the `public/images/` directory:

### Core Images:
- `amsa-ui-white-logo.png`
- `amsa-indonesia-green.png` 
- `together-we-grow.svg`
- `together-we-grow-green.svg`
- `hero-bg.jpg`
- `about-hero.jpg`

### Events:
- `event-talkshow.jpg`
- `event-competition.jpg` 
- `event-comser.jpg`

### Achievements:
- `egypt-wm.jpg`
- `1st-best-speaker.jpg`
- `1st-winner-debate.jpg`
- `best-amsa-univ.jpg`
- `pcc-eamsc-scientific.jpg`
- `achievement-placeholder-1.jpg`
- `achievement-placeholder-2.jpg`

### Divisions:
- `divisions/academics/main.svg`
- `divisions/academics/eamsc.JPG`
- `divisions/academics/price.jpg`
- `divisions/academics/rpcp.png`
- `divisions/academics/isat.JPG`
- `divisions/amsep/main.JPG`
- `divisions/amsep/hosting.JPG`
- `divisions/amsep/amsaui_birthday.jpeg`
- `divisions/mnd/report_card.jpg`
- `divisions/mnd/awardee.PNG`
- `divisions/mnd/neutrophil.jpg`
- `divisions/mnd/outing.jpg`
- `divisions/prnd/nitrate.jpg`
- `divisions/prnd/sharing.JPG`
- `divisions/prnd/eclub.JPG`
- `divisions/prnd/video_log.jpg`
- `divisions/pnp/leaflet.JPG`
- `divisions/pnp/photo.JPG`
- `divisions/pnp/poster_comp.JPG`
- `divisions/pnp/content_creator.JPG`
- `divisions/pnp/life_beyond.JPG`
- `divisions/pnp/vid_log.JPG`
- `divisions/recruit/branding.png`
- `divisions/recruit/magang_ina.png`
- `divisions/recruit/magang_inter.png`

### Logos:
- `academics-logo.png`
- `exchange-logo.png`
- `relations-logo.png`
- `publication-logo.png`
- `recruitment-logo.png`
- `outreach-logo.png`
- `membership-logo.png`

### Buku Putih:
- `buku-putih-2024.jpg`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Lint the codebase
- `npm run preview` - Preview the production build

## Deployment to Vercel

1. Make sure all images are in `public/images/` folder
2. Push changes to GitHub
3. Connect repository to Vercel
4. Deploy!

**Important**: Images must be in `public/images/` for Vercel deployment to work properly.

## Technologies Used

- React 19
- React Router DOM 7
- Tailwind CSS 3
- AOS (Animate On Scroll)
- Vite 6

## Project Structure

```
src/
├── components/     # Reusable components
│   ├── Layout/     # Layout components (Navbar, Footer)
│   ├── UI/         # UI components (Buttons, Cards, etc.)
│   ├── Sections/   # Section components for pages
│   └── data/       # Data files
├── pages/          # Page components
├── App.jsx         # Main application component
├── main.jsx        # Entry point
└── index.css       # Global styles and Tailwind directives

public/
└── images/         # All images stored here for deployment
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](LICENSE)