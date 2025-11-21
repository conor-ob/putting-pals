module.exports = {
	globDirectory: 'dist',
	globPatterns: [
		'**/*.{json,png,html,ico,css,js}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};