/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-image': 'url(https://hips.hearstapps.com/hmg-prod/images/4e9a7794-1671114512.jpeg?crop=0.8893333333333333xw:1xh;center,top&resize=1200:*)'
      },
      fontFamily: {
        'Hyperwave': ['Hyperwave', 'sans-serif']
      }
    },
  },
  plugins: [],
}