/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'ec-gray01' : '#f3f3f3',
        'ec-footer-black' : '#333333',
        'ec-home-gray' : '#d9d9d9',
        'ec-gray-d3d3d3' : '#d3d3d3'
      }
    },
  },
  plugins: [],
}
