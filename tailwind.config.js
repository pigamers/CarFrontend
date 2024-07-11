/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'one': '#FFFAE6',
      'two': '#FF9F66',
      'three': '#FF5F00',
      'four': '#002379',
      "five": '#313638',
      'six': '#f7fff7',
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('./assets/carsinparallel.jpg')",
      },
      fontFamily: {
        graduate: ["Graduate", "serif"],
      }
    }
  },
  plugins: [],
}

