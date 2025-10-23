/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
        cursive: ['"La Belle Aurore"', 'cursive'],
      },
      colors: {
        background: "#0a0890",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
