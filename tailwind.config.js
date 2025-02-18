/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        rotate: "rotate 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      screens: {
        "max-1050": { max: "1050px" },
        "max-900": { max: "900px" },
        "max-750": { max: "750px" },
      },
    },
  },
  plugins: [],
};
