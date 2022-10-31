/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'blob': "url('components/loginPage/blob.svg')",
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
