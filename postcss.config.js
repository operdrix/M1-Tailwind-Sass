module.exports = {
  parser: "postcss-scss",
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    "@csstools/postcss-sass": "./src/styles/style.scss",
  },
};