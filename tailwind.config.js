module.exports = {
  mode: "jit",
  purge: ['./src/pages/**/*.{html,jsx}',
    './src/components/**/*.{html,jsx}',
    './src/layouts/**/*.{html,jsx}',
    './src/index.html',
    "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
