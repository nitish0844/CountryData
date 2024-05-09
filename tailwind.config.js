/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "hsl(209, 23%, 22%)",
        light: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
