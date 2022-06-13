import * as time from './time.mjs';
import * as events from './events.mjs';
import * as hours from './hours.mjs';
import * as con from './console.mjs';

const
	music = document.getElementById('music'),
	musicSrc = document.createElement('source'),

	// dev
	//path = '/assets/music/',
	path = '/acnh/assets/music/',
	eventsPath = `${path}event/`,
	nyePath = `${eventsPath}new-years-event/`,
	hoursPath = `${path}hour/`
;

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
console.info("If audio does not play, click on the 'show audio controls' button and press play on the audio player.");

// My Birthday
if (events.bday) {
	$(document).ready(function () {
		musicSrc.src = `${eventsPath}bday.mp3`;
		music.appendChild(musicSrc);
		console.log(`🥳${con.tdy} Reper2\'s birthday! To celebrate K.K. Birthday will be playing all day.`);
	});
}

// Halloween
if (events.halloween) {
	$(document).ready(function () {
		musicSrc.src = `${eventsPath}halloween.mp3`;
		music.appendChild(musicSrc);
		console.log(`🎃${con.tdy} Halloween!`);
	});
}

// Toy Day
if (events.toyday) {
	$(document).ready(function () {
		musicSrc.src = `${eventsPath}toy-day.mp3`;
		music.appendChild(musicSrc);
		console.log(`🎅${con.tdy} Toy Day!`);
	});
}

// New Years Event - One Hour Left...
if (events.nye_1h) {
	$(document).ready(function () {
		musicSrc.src = `${nyePath}1h-left.mp3`;
		music.appendChild(musicSrc);
		console.log('🎆One hour left until the New Year!');
	});
}

// New Years Event - 30 Minutes Left...
if (events.nye_30m) {
	$(document).ready(function () {
		musicSrc.src = `${nyePath}30-left.mp3`;
		music.appendChild(musicSrc);
		console.log('🎆30 minutes left until the New Year!');
	});
}

// New Years Event - 10 Minutes Left...
if (events.nye_10m) {
	$(document).ready(function () {
		musicSrc.src = `${nyePath}10m-left.mp3`;
		music.appendChild(musicSrc);
		console.log('🎆10 minutes left until the New Year!');
	});
}

// New Years Event - 5 Minutes Left...
if (events.nye_5m) {
	$(document).ready(function () {
		musicSrc.src = `${nyePath}5m-left.mp3`;
		music.appendChild(musicSrc);
		console.log('🎆5 minutes left until the New Year!');
	});
}

// New Years Event - Happy New Year!
if (events.nye_hny) {
	$(document).ready(function () {
		musicSrc.src = `${nyePath}happy-new-year.mp3`;
		music.appendChild(musicSrc);
		console.log(`🎆HAPPY NEW YEAR ${time.Y}!!!`);
	});
}

// New Years Event - New Years Eve! Midnight
if (events.nye_midn) {
	$(document).ready(function () {
		musicSrc.src = `${nyePath}nye-midn.mp3`;
		music.appendChild(musicSrc);
		console.log(`🎆It is finally ${time.Y}! May the celebrations begin!`);
	});
}

// Midnight
else if (hours.am_12) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}12am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 1 AM
else if (hours.am_01) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}1am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 2 AM
else if (hours.am_02) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}2am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 3 AM
else if (hours.am_03) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}3am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 4 AM
else if (hours.am_04) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}4am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 5 AM
else if (hours.am_05) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}5am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 6 AM
else if (hours.am_06) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}6am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 7 AM
else if (hours.am_07) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}7am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 8 AM
else if (hours.am_08) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}8am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 9 AM
else if (hours.am_09) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}9am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 10 AM
else if (hours.am_10) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}10am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 11 AM
else if (hours.am_11) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}11am.mp3`;
		music.appendChild(musicSrc);
	});
}

// 12 PM
else if (hours.pm_12) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}12pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 1 PM
else if (hours.pm_01) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}1pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 2 PM
else if (hours.pm_02) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}2pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 3 PM
else if (hours.pm_03) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}3pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 4 PM
else if (hours.pm_04) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}4pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 5 PM
else if (hours.pm_05) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}5pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 6 PM
else if (hours.pm_06) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}6pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 7 PM
else if (hours.pm_07) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}7pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 8 PM
else if (hours.pm_08) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}8pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 9 PM
else if (hours.pm_09) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}9pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 10 PM
else if (hours.pm_10) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}10pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// 11 PM
else if (hours.pm_11) {
	$(document).ready(function () {
		musicSrc.src = `${hoursPath}11pm.mp3`;
		music.appendChild(musicSrc);
	});
}

// ensure the music changes when a new hour starts
var
	current = new Date(),
	future = new Date()
;

future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
future.setMinutes(0);
future.setSeconds(0);

var timeout = (future.getTime() - current.getTime());
setTimeout(
	function () {
		window.location.reload();
		console.log("Page has been refreshed as it's a new hour! Changing music to the current hour's music.");
	},
	timeout
);