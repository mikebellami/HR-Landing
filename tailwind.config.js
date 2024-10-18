/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C78F1",
        secondary: "#0D3060",
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

