/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('components/login-Page/blob.svg')",
      },
      colors:{
        'cookie-white' : '#FFFDF6',
        'cookie-brown' : '#44342A',
        'cookie-dull' : '#CFB489',
        'cookie-hazel' : '#BB9457'
      }
    },
  },
  plugins: [],
}
