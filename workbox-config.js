module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,jpg,gif,mp3,otf,png,css,ico,JPG,zip,PNG,json,js,webmanifest}'
	],

	maximumFileSizeToCacheInBytes: 100000000, //100MB
	swDest: 'C:/Users/ethan/Documents/GitHub/repos/acnh/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};