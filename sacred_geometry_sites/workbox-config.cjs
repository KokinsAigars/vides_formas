module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,ttf,ico,png,jpg,html,json,mtl,obj}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};