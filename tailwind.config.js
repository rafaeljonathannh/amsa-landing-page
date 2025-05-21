// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", 
        secondary: "#6B7280",
      },
      fontFamily: {
        sans: ['Akzidenz-Grotesk', 'system-ui', 'sans-serif'],
        aileron: ['Aileron', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}