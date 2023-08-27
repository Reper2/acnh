import * as T from "../lib/db-typings";
import { coreData, fetchDB, music } from "./core";
import ev from "./events";
import time from "./time";

const audio = {
	/**
	 * Asynchronously retrieves the music database from app/databases/music-db.json and returns it as a Promise.
	 */
	db: await fetchDB<T.Music>("music"),
	source: document.createElement("source")
};

music.controls = music.autoplay = music.loop = true;
[music.preload, music.style.display] = ["auto", "none"];
audio.source.type = "audio/mpeg";
music.paused ? music.play() : null;

$(() => {
	const winter = time.mo >= ev.winter.s && time.mo <= ev.winter.e;
	audio.source.src = audio.db._pre;

	// Checks if the current date matches an event. Up until default, events with only a date parameter (and not a month, month range, time range or multiple parameters) are checked for.
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
			} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min < ev.nye.min[0]) {
				audio.source.src += audio.db.ev[7];
			} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[0] && time.min < ev.nye.min[1]) {
				audio.source.src += audio.db.ev[8];
			} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[1] && time.min < ev.nye.min[2]) {
				audio.source.src += audio.db.ev[9];
			} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[2]) {
				audio.source.src += audio.db.ev[10];
			} else if (time.moDate() == ev.nye.moDate[1] && (time.hr == ev.nye.hr[1] || time.hr == ev.nye.hr[2])) {
				audio.source.src += audio.db.ev[11];
			} else if (time.moDate() == ev.nye.moDate[1] && time.hr == ev.nye.hr[3]) {
				audio.source.src += audio.db.ev[12];
			} else {
				winter ? audio.source.src += audio.db.hr_snowy[time.hr] : audio.source.src += audio.db.hr_sunny[time.hr];
			}
	} music.appendChild(audio.source);
});

const bg = {
	/**
	 * Fetches the body element if it has the `_bg` id. Some pages may only be requesting music and not backgrounds.
	 */
	body: <HTMLBodyElement>document.getElementById("_bg"),
	/**
	 * Asynchronously retrieves the background database from app/databases/background-db.json returns it as a Promise.
	 */
	db: await fetchDB<T.Backgrounds>("backgrounds")
};

/**
 * Function used to setup the background on the page. The background is randomised each time the page is reloaded.
 * @param bgArr - The array reference from the parsed json database, background-db.json, for the specified event. 
 * @param evName - The name of the acnh event.
 */
function bgSetup(bgArr: string[], evName: string) {
	const num_img = bgArr.length;
	const num = Math.floor(Math.random() * num_img);
	const link = `${coreData._pre + bgArr[num]}-${coreData._gameid + coreData._ext}`;
	bg.body.style.backgroundImage = `url('${link}')`;
	console.log(`Event: ${evName}, Background #${num}`);
}

$(() => {
	// Checks if the current date matches an event. Up until default, events with only a date parameter (and not a month, month range, time range or multiple parameters) are checked for.
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
			} else if (time.mo == ev.intlMuseumDay.mo && time.date >= ev.intlMuseumDay.date.s && time.date <= ev.intlMuseumDay.date.e) {
				bgSetup(bg.db.intlMuseumDay, "🌏🏦International Museum Day🐟🦋");
			} else if (time.mo == ev.weddingSeason) {
				bgSetup(bg.db.weddingSeason, "💒Wedding Season (also 🏳️‍🌈Pride Month)");
			} else if (time.day == ev.fwShow.day && time.mo == ev.fwShow.mo && time.hr >= ev.fwShow.hr.s && time.hr <= ev.fwShow.hr.e) {
				bgSetup(bg.db.fwShow, "🎆🧨Fireworks Show");
			} else {
				bgSetup(bg.db.reg, "(no event)");
			}
	}
});