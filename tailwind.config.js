/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(231 15% 11% / 1)",
        "dark-blue-1": "hsl(230 15% 30% / 1)",
        "dark-blue-2": "hsl(231.43deg 15.22% 18.04%)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
