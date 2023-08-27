import { copyLink } from "./core";
const copy = {
	_: <HTMLDivElement>document.getElementById("copy"),
	btn: document.createElement("button"),
	tt: document.createElement("span")
};

copy._.className = "tooltip";
[copy.btn.innerHTML, copy.btn.onclick] = ["📋🔗", () => copyLink(window.location.href)];
[copy.tt.innerHTML, copy.tt.className] = ["Copy Link (Ctrl+C)", "tooltiptext"];

copy.btn.appendChild(copy.tt);
copy._.appendChild(copy.btn);