var msgBox = new ACMsgBox({
	title: "Reper2",
	idDiv: "acnhmsgbox",
	textWriteInProcess: true,
	lines: {
		1: ["Welcome to my acnh website!"],
		2: ["Above are some apps for you to use."],
		3: ["Enjoy :)"]
	}
});

const
	acnhmsgbox = document.getElementById('acnhmsgbox'),
	a = document.createElement('a'),
	img = document.createElement('img');

acnhmsgbox.class = 'flex';

a.target = '_blank';
a.href = '/';
a.class = 'flex';

img.src = 'logo.png';
img.class = 'flex';
img.style.position = 'absolute';
img.style.width = '10%';
img.style.borderRadius = '26%';

a.appendChild(img);
acnhmsgbox.appendChild(a);
msgBox.draw();
console.log('Message box has completed drawing.');