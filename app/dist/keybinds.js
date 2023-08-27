import { copyLink } from "./core.js";
import path from "./paths.js";
document.addEventListener("keydown", (k) => {
    if (k.ctrlKey && k.key === "/") {
        console.warn("Ctrl+/ was pressed");
        window.location.href = path.root + "keybinds.html";
    }
    if (k.altKey && k.key === "s") {
        console.warn("Alt+S was pressed");
        $("#audctrlBtn_show").trigger("click");
    }
    if (k.altKey && k.key === "h") {
        console.warn("Alt+H was pressed");
        $("#audctrlBtn_hide").trigger("click");
    }
    if (k.ctrlKey && k.key === "c") {
        console.warn("Ctrl+C was pressed");
        $("#copy").trigger("click");
    }
    if (k.altKey && k.key === "r") {
        console.warn("Alt+R was pressed");
        window.open("https://github.com/Reper2/acnh/blob/master/LICENSE");
    }
    if (k.ctrlKey && k.key === "i") {
        console.warn("Ctrl+I was pressed");
        $("#install").trigger("click");
    }
    if (k.key === "Backspace") {
        console.warn("Backspace was pressed");
        $("#back").trigger("click");
    }
    if (k.key === "ArrowLeft") {
        console.warn("LeftArrow was pressed");
        $(".prev").trigger("click");
    }
    if (k.key === "ArrowRight") {
        console.warn("RightArrow was pressed");
        $(".next").trigger("click");
    }
    if (k.ctrlKey && k.key === "C") {
        console.warn("Enter was pressed");
        copyLink(window.location.href);
    }
    if (k.key === "Escape") {
        console.warn("Esc was pressed");
        $(".close").trigger("click");
    }
    if (k.ctrlKey && k.altKey && k.key === "d") {
        console.warn("Ctrl+Alt+D was pressed");
        window.open(path.dist + "keybinds.js");
        window.open(path.src + "keybinds.ts");
    }
});
//# sourceMappingURL=keybinds.js.map