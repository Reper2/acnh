import path from "./paths";

const app = <HTMLDivElement>document.getElementById("fileSelect");
const _names = ["sprinkle-order-", "Reper2 - ", "Sprinkle Order "];
const fileSel = {
	header: document.createElement("h2"),
	list: document.createElement("h3"),
	items: {
		collapse: <HTMLDetailsElement[]>[],
		file: <HTMLAnchorElement[]>[],
		prev: <HTMLIFrameElement[]>[]
	}
};

app.classList.add("snow");
app.classList.add("lightblueBox");
fileSel.header.textContent = "File Select:";

for (let i = 1; i < 18; i++) {
	fileSel.items.collapse.push(document.createElement("details"));
	fileSel.items.file.push(document.createElement("a"));
	fileSel.items.prev.push(document.createElement("iframe"));
}
for (const [i, e] of fileSel.items.collapse.entries()) {
	if (i > 0) {
		e.innerHTML = `<summary>Sprinkle Order ${i}</summary>`;
		$(() => {
			e.appendChild(fileSel.items.file[i]);
			e.appendChild(document.createElement("br"));
			e.appendChild(fileSel.items.prev[i]);
			fileSel.list.appendChild(e);
		});
	}
}
for (const [i, e] of fileSel.items.file.entries()) {
	if ( i > 0) {
		const n = String(i).padStart(3, "0");
		e.target = "_blank";
		e.href = `${_names[0] + n}.txt`;
		e.download = _names[1] + _names[2] + n;
		e.title = `${_names[2] + i}\n(${_names[0] + n}.txt)`;
		e.textContent = "Download";
	}
}

for (const [i, e] of fileSel.items.prev.entries()) {
	if (i > 0) {
		const n = String(i).padStart(3, "0");
		e.src = `${path.sprinkle + _names[0] + n}.txt`;
		e.title = _names[2] + n;
		e.style.textAlign = "center";
	}
}

$(() => { app.appendChild(fileSel.header); app.appendChild(fileSel.list); });