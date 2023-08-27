import ACMsgBox from "acnhmsgbox";
import path from "./paths";
const home = {
	acnhmsgbox: <HTMLDivElement>document.getElementById("acnhmsgbox"),
	site: document.createElement("a"),
	logo: document.createElement("img"),
	msgBox: new ACMsgBox({
		title: "Reper2",
		idDiv: "acnhmsgbox",
		textWriteInProcess: true,
		lines: {
			1: ["Welcome to my acnh website!"],
			2: ["Above are some apps for you to use."],
			3: ["Enjoy :)"]
		}
	})
};

[home.site.target, home.site.href] = ["_blank", path.rew];
[home.logo.src, home.logo.style.position] = [`${path.rew}logo.png`, "absolute"];
home.logo.style.width = "10%";
home.logo.style.borderRadius = "26%";

home.site.appendChild(home.logo);
home.acnhmsgbox.appendChild(home.site);
home.msgBox.draw();