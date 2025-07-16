/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          cream: "#FFF8E7",
          tomato: "#FF6347",
          salmon: "#FFA07A",
          orange: "#FF4500",
          charcoal: "#333333",
        },
      },
    },
  },
  plugins: [],
};
