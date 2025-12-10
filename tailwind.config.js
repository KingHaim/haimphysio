/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#1a1a1a",
        primary: "#d4af37", // Gold
        secondary: "#1e3a8a", // Deep Blue
        text: {
            primary: "#ffffff",
            secondary: "#a1a1aa",
            muted: "#52525b"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: "2rem",
      }
    },
  },
  plugins: [],
};
