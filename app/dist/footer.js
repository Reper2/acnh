"use strict";
const footer = {
    _: document.getElementById("footer"),
    content: document.createElement("h5"),
    cr: {
        _: document.getElementById("copyright"),
        license: document.createElement("a"),
        txt: document.createElement("h3")
    },
    specialThanks: {
        txt: document.createElement("h5"),
        link: document.createElement("a")
    }
};
footer.content.innerHTML = "DA: DA-9419-3603-8052 <br> Creator ID: MA-4116-4314-7050 <br> HHN ID: RA-7852-3149-7307";
footer._.appendChild(footer.content);
[footer.cr.license.title, footer.cr.license.href] = ["View License (Alt+R)", "https://github.com/Reper2/reper2.github.io/LICENSE"];
footer.cr.txt.innerHTML = "(c) 2023 Reper2";
footer.cr.license.appendChild(footer.cr.txt);
footer.cr._.appendChild(footer.cr.license);
footer._.appendChild(footer.cr._);
footer.specialThanks.txt.innerHTML = "Credit to ";
[footer.specialThanks.link.href, footer.specialThanks.link.title, footer.specialThanks.link.innerHTML] = ["https://downloads.khinsider.com/", "Video Game Music Downloads - Free MP3 OST downloads - Game Soundtracks for download", "KHInsider.com"];
footer.specialThanks.txt.appendChild(footer.specialThanks.link);
footer.specialThanks.txt.innerHTML += "<br>for providing the soundtracks<br>used on the website.";
footer._.appendChild(footer.specialThanks.txt);
//# sourceMappingURL=footer.js.map