import { coreData, fetchDB, music } from "./core.js";
import ev from "./events.js";
import time from "./time.js";
const audio = {
    db: await fetchDB("music"),
    source: document.createElement("source")
};
music.controls = music.autoplay = music.loop = true;
[music.preload, music.style.display] = ["auto", "none"];
audio.source.type = "audio/mpeg";
music.paused ? music.play() : null;
$(() => {
    const winter = time.mo >= ev.winter.s && time.mo <= ev.winter.e;
    audio.source.src = audio.db._pre;
    switch (time.moDate()) {
        case ev.festivale:
            audio.source.src += audio.db.ev[0];
            break;
        case ev.bunnyDay:
            audio.source.src += audio.db.ev[1];
            break;
        case ev.bday:
            audio.source.src = audio.db.ev[3];
            break;
        case ev.halloween:
            audio.source.src += audio.db.ev[4];
            break;
        case ev.turkeyDay:
            audio.source.src += audio.db.ev[5];
            break;
        case ev.toyDay:
            audio.source.src += audio.db.ev[6];
            break;
        default:
            if (time.day == ev.fwShow.day && time.mo == ev.fwShow.mo && time.hr >= ev.fwShow.hr.s && time.hr <= ev.fwShow.hr.e) {
                audio.source.src += audio.db.ev[2];
            }
            else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min < ev.nye.min[0]) {
                audio.source.src += audio.db.ev[7];
            }
            else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[0] && time.min < ev.nye.min[1]) {
                audio.source.src += audio.db.ev[8];
            }
            else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[1] && time.min < ev.nye.min[2]) {
                audio.source.src += audio.db.ev[9];
            }
            else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[2]) {
                audio.source.src += audio.db.ev[10];
            }
            else if (time.moDate() == ev.nye.moDate[1] && (time.hr == ev.nye.hr[1] || time.hr == ev.nye.hr[2])) {
                audio.source.src += audio.db.ev[11];
            }
            else if (time.moDate() == ev.nye.moDate[1] && time.hr == ev.nye.hr[3]) {
                audio.source.src += audio.db.ev[12];
            }
            else {
                winter ? audio.source.src += audio.db.hr_snowy[time.hr] : audio.source.src += audio.db.hr_sunny[time.hr];
            }
    }
    music.appendChild(audio.source);
});
const bg = {
    body: document.getElementById("_bg"),
    db: await fetchDB("backgrounds")
};
function bgSetup(bgArr, evName) {
    const num_img = bgArr.length;
    const num = Math.floor(Math.random() * num_img);
    const link = `${coreData._pre + bgArr[num]}-${coreData._gameid + coreData._ext}`;
    bg.body.style.backgroundImage = `url('${link}')`;
    console.log(`Event: ${evName}, Background #${num}`);
}
$(() => {
    switch (time.moDate()) {
        case ev.festivale:
            bgSetup(bg.db.festivale, "🌈🦚Festivale");
            break;
        case ev.bunnyDay:
            bgSetup(bg.db.bunnyDay, "🐰🐣Bunny Day (Easter)");
            break;
        case ev.bday:
            bgSetup(bg.db.bday, "🎂🥳Reper2's Birthday!");
            break;
        case ev.halloween:
            bgSetup(bg.db.halloween, "🎃👻Halloween");
            break;
        case ev.turkeyDay:
            bgSetup(bg.db.turkeyDay, "🦃🎁Turkey Day (Thanks Giving)");
            break;
        case ev.toyDay:
            bgSetup(bg.db.toyDay, "🎄🎁Toy Day (⛪👼🏼Christmas)");
            break;
        case ev.nye.moDate[0] || ev.nye.moDate[1]:
            bgSetup(bg.db.nye, "🎆🥂New Years Event; Happy New Year!");
            break;
        default:
            if (time.mo == ev.mayDayTour.mo && time.date >= ev.mayDayTour.date.s && time.date <= ev.mayDayTour.date.e) {
                bgSetup(bg.db.mayDayTour, "🏝️May Day Tour");
            }
            else if (time.mo == ev.intlMuseumDay.mo && time.date >= ev.intlMuseumDay.date.s && time.date <= ev.intlMuseumDay.date.e) {
                bgSetup(bg.db.intlMuseumDay, "🌏🏦International Museum Day🐟🦋");
            }
            else if (time.mo == ev.weddingSeason) {
                bgSetup(bg.db.weddingSeason, "💒Wedding Season (also 🏳️‍🌈Pride Month)");
            }
            else if (time.day == ev.fwShow.day && time.mo == ev.fwShow.mo && time.hr >= ev.fwShow.hr.s && time.hr <= ev.fwShow.hr.e) {
                bgSetup(bg.db.fwShow, "🎆🧨Fireworks Show");
            }
            else {
                bgSetup(bg.db.reg, "(no event)");
            }
    }
});
//# sourceMappingURL=app.js.map