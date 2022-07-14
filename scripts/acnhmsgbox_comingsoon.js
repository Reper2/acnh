var msgBox = new ACMsgBox({
    title: "Lloid",
    idDiv: "acnhmsgbox",
    textWriteInProcess: true,
    lines: {
        1: ["This page hasn't finished development yet."],
        2: ["Maybe check again some other time"],
        3: ["to see if it's ready yet. Redirecting in 10s..."]
    }
});

const
	acnhmsgbox = document.getElementById('acnhmsgbox'),
	a = document.createElement('a'),
	img = document.createElement('img');

a.target = '_blank';
a.href = '/';

img.src = 'assets/Lloid.png';
img.style.position = 'absolute';
img.style.width = '11%';

a.appendChild(img);
acnhmsgbox.appendChild(a);
msgBox.draw();
console.log('💬Added message box to page.');