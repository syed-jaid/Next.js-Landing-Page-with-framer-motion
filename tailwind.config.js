/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      clipPath: {
        square: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
      boxShadow: {
        "inner-lr":
          "inset 10px 0 15px -10px rgba(0, 0, 0, 0.1), inset -10px 0 15px -10px rgba(0, 0, 0, 0.1)", // Left and Right inner shadow
      },
    },
  },
  plugins: [],
};
