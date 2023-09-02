import { copyLink } from "./core.js";
const copy = {
    _: document.getElementById("copy"),
    btn: document.createElement("button"),
    tt: document.createElement("span")
};
copy._.className = "tooltip";
[copy.btn.innerHTML, copy.btn.onclick] = ["📋🔗", () => copyLink(window.location.href)];
[copy.tt.innerHTML, copy.tt.className] = ["Copy Link (Ctrl+C)", "tooltiptext"];
copy.btn.appendChild(copy.tt);
copy._.appendChild(copy.btn);
//# sourceMappingURL=copyLinkBtn.js.map