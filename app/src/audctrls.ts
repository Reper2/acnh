import { music, flipNum } from "./core";
const audctrls = {
	_: <HTMLDivElement>document.getElementById("audctrls"),
	btn: {
		_: <HTMLButtonElement[]>[],
		id: ["audctrlBtn_show", "audctrlBtn_hide"],
		disp: ["none", "block"],
		name: ["🎵🎛️ - ON", "🎵🎛️ - OFF"],
		log: ["🎵🎛️Audio controls are now visible.", "🚫Audio controls are now hidden."]
	},
	tt: {
		_: <HTMLSpanElement[]>[],
		name: ["Show Audio Controls (Alt+S)", "Hide Audio Controls (Alt+H)"]
	}
};

for (let i = 0; i < audctrls.btn.name.length; i++) {
	audctrls.btn._.push(document.createElement("button"));
	[audctrls.btn._[i].id, audctrls.btn._[i].style.display, audctrls.btn._[i].innerHTML] = [audctrls.btn.id[i], audctrls.btn.disp[flipNum(i)], audctrls.btn.name[i]];

	audctrls.tt._.push(document.createElement("span"));
	[audctrls.tt._[i].className, audctrls.tt._[i].innerHTML] = ["tooltiptext", audctrls.tt.name[i]];
}

audctrls._.className = "tooltip";
audctrls.btn._[0].onclick = () => {
	music.style.display = audctrls.btn.disp[1];
	audctrls.btn._[0].style.display = audctrls.btn.disp[0];
	audctrls.btn._[1].style.display = audctrls.btn.disp[1];
	console.log(audctrls.btn.log[0]);
};
audctrls.btn._[1].onclick = () => {
	music.style.display = audctrls.btn.disp[0];
	audctrls.btn._[0].style.display = audctrls.btn.disp[1];
	audctrls.btn._[1].style.display = audctrls.btn.disp[0];
	console.log(audctrls.btn.log[1]);
};

for (let i = 0; i < audctrls.btn.name.length; i++) {
	audctrls.btn._[i].appendChild(audctrls.tt._[i]);
	audctrls._.appendChild(audctrls.btn._[i]);
}