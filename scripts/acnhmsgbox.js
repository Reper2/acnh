var msgBox = new ACMsgBox({
	title: "Reper2",
	idDiv: "acnhmsgbox",
	textWriteInProcess: true,
	lines: {
		1: ["Welcome to my ACNH website!"],
		2: ["Above are some apps for you to use."],
		3: ["Enjoy :)"]
	}
})

function draw() {
	msgBox.draw()
	$('#acnhmsgboxDrawBtn').hide()
	console.log('Message box successfully drawn.')
}