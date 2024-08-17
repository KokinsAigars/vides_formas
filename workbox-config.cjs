module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,jpg,mtl,obj}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};