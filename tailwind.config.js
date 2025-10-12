/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"], // ✅ custom font
      },
      colors: {
        bodyText: "#333333", // ✅ default text color
      },
      keyframes: {
        dropIn: {
          "0%": { opacity: "0", transform: "translateY(-80px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        dropIn: "dropIn 800ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
