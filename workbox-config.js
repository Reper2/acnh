module.exports = {
	globDirectory: "./",
	globPatterns: [
		"**/*.{html,css,js,json,webmanifest,map,txt,jpg,png,gif,ico,mp3,ogg,zip,ttf,otf}" // sorted by type: code, data, text, image, audio, archive, font
	],

	maximumFileSizeToCacheInBytes: 100000000, // 100MB
	swDest: "./sw.js",
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};