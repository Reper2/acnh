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
	reper2_site = document.createElement('a'),
	reper2_logo = document.createElement('img');

reper2_site.target = '_blank';
reper2_site.href = '/';
reper2_site.class = 'flex';

reper2_logo.src = '/logo.png';
reper2_logo.style.position = 'absolute';
reper2_logo.style.width = '10%';
reper2_logo.style.borderRadius = '26%';

reper2_site.appendChild(reper2_logo);
acnhmsgbox.appendChild(reper2_site);
msgBox.draw();
console.log('💬Added message box to page.');