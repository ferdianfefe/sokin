/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-daftar": "url('/public/img/homepage/bg-login-daftar.png')",
        "dashboard-driver":
          "url('/public/images/driver/dashboard/bg-dashboard-driver.png')",
      },
      fontSize: {
        xs: "10.42px",
        sm: "12px",
        base: "14px",
        lg: "15px",
        xl: "17px",
        "2xl": "18px",
        "3xl": "20px",
      },
      colors: {
        inherit: "inherit",
        transparent: "transparent",
        current: "currentColor",
        white: "#F5F5F5",
        neutral: {
          50: "#F5F5F5",
          300: "#D5D5D7",
          400: "#B6B7BA",
          500: "#95969D",
          600: "#747680",
          700: "#565962",
          800: "#393A41",
          900: "#1D1D21",
        },
        "c-orange": {
          100: "#FFF0E0",
          200: "#FFE0C0",
          300: "#FFD1A1",
          400: "#FFC182",
          500: "#FEB262",
          600: "#FEA243",
          700: "#FE9323",
          800: "#FE8304",
          900: "#E17301",
        },
        "c-red": {
          700: "#FF6363",
        },
        "c-green": {
          700: "#20CB50",
        },
      },
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
    },
    boxShadow: {
      "list-order": "-4px 4px 0px rgba(236, 156, 70, 0.23)",
      "card" : "1px 4px 12px 2px #FFFFFF40, -5px 4px 4px 0px #FE830440",
    },
    plugins: [],
  },
};
