/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-purple": "rgba(157, 113, 253, 1)",
        "custom-bg": "rgba(242, 239, 254, 1)",
        active: "4CAF50",
        inactive: "E5D2E8",
      },
    },
  },
  plugins: [],
};
