/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/index.html', './src/index.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  // ... other config options
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};
