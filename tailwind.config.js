/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "txt-clr-1": "#ffffff",
        "txt-clr-2": "#d0d6f9",
        "txt-clr-3": "#0b0d17",

        "h2-span-clr": "hsl(0, 0%, 25%)",
        "h3-span-clr": "hsl(0, 0%, 50.42%)",

        "bdr-clr": "hsl(0, 0%, 59%)",
        "home-btn-hover": "hsl(0, 0%, 60%)",

        "hover-clr": "hsl(0, 0%, 50%)",
        "indi-clr-1": "hsl(0, 0%, 100%)",
        "indi-clr-2": "hsl(0, 0%, 50.01%)",
        "indi-clr-3": "hsl(0, 0%, 17.44%)",
        "indi-clr-4": "hsl(0, 0%, 25%)",
      },
    },
  },
  plugins: [],
};
