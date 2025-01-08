/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#4B3D3D",
        "light-brown": "#D9CBAE",
      },
      rotate: {
        "-20": "-20deg",
        20: "20deg",
        6: "6deg",
      },
    },
  },
  plugins: [],
};
