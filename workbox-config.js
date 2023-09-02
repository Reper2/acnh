module.exports = {
	globDirectory: "./",
	globPatterns: [
		"**/*.{html,css,js,ts,json,webmanifest,map,txt,jpg,png,gif,ico,ttf,otf}" // sorted by type: code, data, text, image, audio, archive, font
	],

	maximumFileSizeToCacheInBytes: 100000000, // 100MB
	swDest: "./sw.js",
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};