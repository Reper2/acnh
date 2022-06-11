module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,jpg,gif,mp3,otf,png,css,ico,JPG,zip,PNG,jsonc,js,mjs,webmanifest,txt}'
	],

	maximumFileSizeToCacheInBytes: 100000000, //100MB
	swDest: './sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};