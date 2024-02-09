module.exports = {
	parser: "postcss-scss",
	map: false,
	plugins: {
		"tailwindcss/nesting": "postcss-nesting",
		"postcss-import": {},
		"postcss-partial-import": {},
		cssnano: { preset: "default" },
		tailwindcss: {},
		autoprefixer: {},
		"@csstools/postcss-sass": "./src/css/style.scss",
	},
};
