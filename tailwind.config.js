/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login-daftar': "url('/public/img/homepage/bg-login-daftar.png')",
        'dashboard-driver' : "url('/public/images/driver/dashboard/bg-dashboard-driver.png')",
      },
    },
      boxShadow:{
        'list-order': '-4px 4px 0px rgba(236, 156, 70, 0.23)',
      },
  },
  plugins: [],
}
