import * as time from './time.mjs';
import * as events from './events.mjs';
import * as hours from './hours.mjs';
import * as con from './console.mjs';
import * as path from './path.mjs';

const music = document.getElementById('music'), musicSrc = document.createElement('source');
music.controls = 'true';
music.autoplay = 'true';
music.loop = 'true';
music.preload = 'auto';
music.style.display = 'none';
if (music.paused) {
	music.play();
};
musicSrc.type = 'audio/mpeg';

// information for when audio is not playing
console.warn("If audio does not play, click on the 'show audio controls' button and press play on the audio player.");

// My Birthday
if (events.bday) {
	$(document).ready(function () {
		musicSrc.src = path.mus_e + 'bday.mp3';
		music.appendChild(musicSrc);
		console.log('🥳' + con.tdy + 'Reper2\'s birthday! To celebrate K.K. Birthday will be playing all day.');
	});
}

// Halloween
if (events.halloween) {
	$(document).ready(function () {
		musicSrc.src = path.mus_e + 'halloween.mp3';
		music.appendChild(musicSrc);
		console.log('🎃' + con.tdy + 'Halloween!');
	});
}

// Toy Day
if (events.toyday) {
	$(document).ready(function () {
		musicSrc.src = path.mus_e + 'toy-day.mp3';
		music.appendChild(musicSrc);
		console.log('🎁' + con.tdy + 'Toy Day!');
	});
}

// New Years Event - One Hour Left...
if (events.nye_1h) {
	$(document).ready(function () {
		musicSrc.src = path.mus_n + '1h-left.mp3';
		music.appendChild(musicSrc);
		console.log('🎆One hour left until the New Year!');
	});
}

// New Years Event - 30 Minutes Left...
if (events.nye_30m) {
	$(document).ready(function () {
		musicSrc.src = path.mus_n + '30-left.mp3';
		music.appendChild(musicSrc);
		console.log('🎆30 minutes left until the New Year!');
	});
}

// New Years Event - 10 Minutes Left...
if (events.nye_10m) {
	$(document).ready(function () {
		musicSrc.src = path.mus_n + '10m-left.mp3';
		music.appendChild(musicSrc);
		console.log('🎆10 minutes left until the New Year!');
	});
}

// New Years Event - 5 Minutes Left...
if (events.nye_5m) {
	$(document).ready(function () {
		musicSrc.src = path.mus_n + '5m-left.mp3';
		music.appendChild(musicSrc);
		console.log('🎆5 minutes left until the New Year!');
	});
}

// New Years Event - Happy New Year!
if (events.nye_hny) {
	$(document).ready(function () {
		musicSrc.src = path.mus_n + 'happy-new-year.mp3';
		music.appendChild(musicSrc);
		console.log(`🎆HAPPY NEW YEAR ${time.Y}!!!`);
	});
}

// New Years Event - New Years Eve! Midnight
if (events.nye_midn) {
	$(document).ready(function () {
		musicSrc.src = path.mus_n + 'nye-midn.mp3';
		music.appendChild(musicSrc);
		console.log(`🎆It is finally ${time.Y}! May the celebrations begin!`);
	});
}

// 12 AM
else if (!events.winter && hours.am_12) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '12am.mp3';
		music.appendChild(musicSrc);
	});
}

// 1 AM
else if (!events.winter && hours.am_01) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '1am.mp3';
		music.appendChild(musicSrc);
	});
}

// 2 AM
else if (!events.winter && hours.am_02) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '2am.mp3';
		music.appendChild(musicSrc);
	});
}

// 3 AM
else if (!events.winter && hours.am_03) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '3am.mp3';
		music.appendChild(musicSrc);
	});
}

// 4 AM
else if (!events.winter && hours.am_04) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '4am.mp3';
		music.appendChild(musicSrc);
	});
}

// 5 AM
else if (!events.winter && hours.am_05) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '5am.mp3';
		music.appendChild(musicSrc);
	});
}

// 6 AM
else if (!events.winter && hours.am_06) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '6am.mp3';
		music.appendChild(musicSrc);
	});
}

// 7 AM
else if (!events.winter && hours.am_07) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '7am.mp3';
		music.appendChild(musicSrc);
	});
}

// 8 AM
else if (!events.winter && hours.am_08) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '8am.mp3';
		music.appendChild(musicSrc);
	});
}

// 9 AM
else if (!events.winter && hours.am_09) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '9am.mp3';
		music.appendChild(musicSrc);
	});
}

// 10 AM
else if (!events.winter && hours.am_10) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '10am.mp3';
		music.appendChild(musicSrc);
	});
}

// 11 AM
else if (!events.winter && hours.am_11) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '11am.mp3';
		music.appendChild(musicSrc);
	});
}

// 12 PM
else if (!events.winter && hours.pm_12) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '12pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 1 PM
else if (!events.winter && hours.pm_01) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '1pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 2 PM
else if (!events.winter && hours.pm_02) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '2pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 3 PM
else if (!events.winter && hours.pm_03) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '3pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 4 PM
else if (!events.winter && hours.pm_04) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '4pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 5 PM
else if (!events.winter && hours.pm_05) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '5pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 6 PM
else if (!events.winter && hours.pm_06) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '6pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 7 PM
else if (!events.winter && hours.pm_07) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '7pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 8 PM
else if (!events.winter && hours.pm_08) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '8pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 9 PM
else if (!events.winter && hours.pm_09) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '9pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 10 PM
else if (!events.winter && hours.pm_10) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '10pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 11 PM
else if (!events.winter && hours.pm_11) {
	$(document).ready(function () {
		musicSrc.src = path.mus_h + '11pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 12 AM (Winter)
else if (events.winter && hours.am_12) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '12am.mp3';
		music.appendChild(musicSrc);
	});
}

// 1 AM (Winter)
else if (events.winter && hours.am_01) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '1am.mp3';
		music.appendChild(musicSrc);
	});
}

// 2 AM (Winter)
else if (events.winter && hours.am_02) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '2am.mp3';
		music.appendChild(musicSrc);
	});
}

// 3 AM (Winter)
else if (events.winter && hours.am_03) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '3am.mp3';
		music.appendChild(musicSrc);
	});
}

// 4 AM (Winter)
else if (events.winter && hours.am_04) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '4am.mp3';
		music.appendChild(musicSrc);
	});
}

// 5 AM (Winter)
else if (events.winter && hours.am_05) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '5am.mp3';
		music.appendChild(musicSrc);
	});
}

// 6 AM (Winter)
else if (events.winter && hours.am_06) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '6am.mp3';
		music.appendChild(musicSrc);
	});
}

// 7 AM (Winter)
else if (events.winter && hours.am_07) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '7am.mp3';
		music.appendChild(musicSrc);
	});
}

// 8 AM (Winter)
else if (events.winter && hours.am_08) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '8am.mp3';
		music.appendChild(musicSrc);
	});
}

// 9 AM (Winter)
else if (events.winter && hours.am_09) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '9am.mp3';
		music.appendChild(musicSrc);
	});
}

// 10 AM (Winter)
else if (events.winter && hours.am_10) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '10am.mp3';
		music.appendChild(musicSrc);
	});
}

// 11 AM (Winter)
else if (events.winter && hours.am_11) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '11am.mp3';
		music.appendChild(musicSrc);
	});
}

// 12 PM (Winter)
else if (events.winter && hours.pm_12) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '12pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 1 PM (Winter)
else if (events.winter && hours.pm_01) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '1pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 2 PM (Winter)
else if (events.winter && hours.pm_02) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '2pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 3 PM (Winter)
else if (events.winter && hours.pm_03) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '3pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 4 PM (Winter)
else if (events.winter && hours.pm_04) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '4pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 5 PM (Winter)
else if (events.winter && hours.pm_05) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '5pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 6 PM (Winter)
else if (events.winter && hours.pm_06) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '6pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 7 PM (Winter)
else if (events.winter && hours.pm_07) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '7pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 8 PM (Winter)
else if (events.winter && hours.pm_08) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '8pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 9 PM (Winter)
else if (events.winter && hours.pm_09) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '9pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 10 PM (Winter)
else if (events.winter && hours.pm_10) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '10pm.mp3';
		music.appendChild(musicSrc);
	});
}

// 11 PM (Winter)
else if (events.winter && hours.pm_11) {
	$(document).ready(function () {
		musicSrc.src = path.mus_s + '11pm.mp3';
		music.appendChild(musicSrc);
	});
}

// ensure the music changes when a new hour starts
var
	current = new Date(),
	future = new Date();
future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
future.setMinutes(0);
future.setSeconds(0);

var timeout = (future.getTime() - current.getTime());
setTimeout(
	function () {
		window.location.reload();
		console.log("Page has been reloaded as it's a new hour! Changing music to the current hour's music.");
	},
	timeout
);