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
	img = document.createElement('img')
;

acnhmsgbox.class = 'flex';

a.target = '_blank';
a.href = '/';
a.class = 'flex';

img.src = 'assets/Lloid.png';
img.class = 'flex';
img.style.position = 'absolute';
img.style.width = '11%';

a.appendChild(img);
acnhmsgbox.appendChild(a);
msgBox.draw();
console.log('Message box has completed drawing.');