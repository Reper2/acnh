import path from "./paths.js";
const back = {
    _: document.getElementById("back"),
    btn: document.createElement("img")
};
back._.onclick = () => {
    if (window.history.length > 1 && document.referrer.startsWith(window.location.origin)) {
        if (window.location.href.includes("#") || window.location.href.includes("?")) {
            console.log("⚙️url contained a hash (#) or parameter (?), window.location.href='../' was used rather than window.history.back() to skip all the hashes or url parameters.");
            window.location.href = "../";
        }
        else
            window.history.back();
    }
    else
        window.location.href = "../../";
};
[back.btn.src, back.btn.title] = [`${path.ass}back.png`, "Back (Alt+◁)"];
back._.appendChild(back.btn);
//# sourceMappingURL=back.js.map