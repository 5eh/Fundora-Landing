/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["var(--font-unbounded)", "sans-serif"],
        ddin: ["D-DIN", "sans-serif"],
        "ddin-condensed": ["D-DIN-Condensed", "sans-serif"],
        "ddin-expanded": ["D-DIN-Expanded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
