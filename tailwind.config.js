/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3181dd",
        secondary: "#1e266d",
        gray: "#7A88A0",
        lightGray: "#F7F9FB"
      },
      boxShadow: {
        btnShadow: '0px 4px 6px 0px rgba(12, 120, 241, 0.18)',
      },

    },
  },
  plugins: [],
}

