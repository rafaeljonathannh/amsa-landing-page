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

### 3. Create required image folders

Create the following folder structure for images:

```
src/assets/images/
```

### 4. Run the development server

```bash
npm run dev
```

This will start the Vite development server, typically at http://localhost:5173

## Required Images

Before running the project, make sure you have the following images in the `src/assets/images/` directory:

- logo.png
- hero-bg.jpg
- about-image.jpg
- achievement1.jpg, achievement2.jpg, achievement3.jpg, achievement4.jpg
- academics.jpg, exchange.jpg, outreach.jpg, membership.jpg, relations.jpg, publication.jpg, recruitment.jpg
- buku-putih-2021.jpg, buku-putih-2022.jpg, buku-putih-2023.jpg, buku-putih-2024.jpg
- team1.jpg through team6.jpg
- history-image.jpg

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Lint the codebase
- `npm run preview` - Preview the production build

## Technologies Used

- React 19
- React Router DOM 7
- Tailwind CSS 3
- AOS (Animate On Scroll)
- Vite 6

## Project Structure

```
src/
├── assets/         # Images and other static assets
│   └── images/     # Store all images here
├── components/     # Reusable components
│   ├── Layout/     # Layout components (Navbar, Footer)
│   ├── UI/         # UI components (Buttons, Cards, etc.)
│   └── Sections/   # Section components for pages
├── pages/          # Page components
├── App.jsx         # Main application component
├── main.jsx        # Entry point
└── index.css       # Global styles and Tailwind directives
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](LICENSE)