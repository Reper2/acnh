import * as time from "./time.js";
import * as events from "./events.js";
import * as hours from "./hours.js";
import * as con from "./console.js";

// information for when audio is not playing
console.info('If audio does not play, click on the "show audio controls" button and press play on the audio player.');

/**
* On special event days, the event's soundtrack(s) will play as you browse the website.
* On any other day, the normal hour music will play just like in the game. 
*/

/**
 * Bunny Day and Festivale have different dates every year so their algorithms are very hard to add to this.
 * Therefore Bunny Day and Festivale have been left out of this music script.
*/

// My Birthday
if (events.bday) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/birthday.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🥳' + con.tdy, 'Reper2\'s birthday! To celebrate K.K. Birthday will be playing all day.');
	});
}

// Halloween
if (events.h) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/halloween.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🎃' + con.tdy, 'Halloween!');
	});
}

// Turkey Day
if (events.turkey) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/turkey-day.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🦃' + con.tdy, 'Turkey Day!');
	});
}

// Toy Day
if (events.toy) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/toy-day.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🎅' + con.tdy, 'Toy Day!');
	});
}

// New Years Event - One Hour Left...
if (events.nye_1h) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/nye-1h-left.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🎆One hour left until the New Year!');
	});
}

// New Years Event - 30 Minutes Left...
if (events.nye_30m) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/30m-left.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🎆30 minutes left until the New Year!');
	});
}

// New Years Event - 10 Minutes Left...
if (events.nye_10m) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/10m-left.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🎆10 minutes left until the New Year!');
	});
}

// New Years Event - 5 Minutes Left...
if (events.nye_5m) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/5m-left.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log('🎆5 minutes left until the New Year!');
	});
}

// New Years Event - Happy New Year!
if (events.nye_hny) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/happy-new-year.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(`🎆HAPPY NEW YEAR ${time.Y}!!!`);
	});
}

// New Years Event - New Years Eve! Midnight
if (events.nye_midn) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/nye-midnight.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(`🎆It is finally ${time.Y}! May the celebrations begin!`);
	});
}

// Midnight
else if (hours.am_12) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/12am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 1 AM
else if (hours.am_01) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/1am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 2 AM
else if (hours.am_02) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/2am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 3 AM
else if (hours.am_03) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/3am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 4 AM
else if (hours.am_04) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/4am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 5 AM
else if (hours.am_05) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/5am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 6 AM
else if (hours.am_06) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/6am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 7 AM
else if (hours.am_07) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/7am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 8 AM
else if (hours.am_08) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/8am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 9 AM
else if (hours.am_09) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/9am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 10 AM
else if (hours.am_10) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/10am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 11 AM
else if (hours.am_11) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/11am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// Noon
else if (hours.pm_12) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/12pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 1 PM
else if (hours.pm_01) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/1pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 2 PM
else if (hours.pm_02) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/2pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 3 PM
else if (hours.pm_03) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/3pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 4 PM
else if (hours.pm_04) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/4pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 5 PM
else if (hours.pm_05) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/5pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 6 PM
else if (hours.pm_06) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/6pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 7 PM
else if (hours.pm_07) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/7pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 8 PM
else if (hours.pm_08) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/8pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 9 PM
else if (hours.pm_09) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/9pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 10 PM
else if (hours.pm_10) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/10pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);
	});
}

// 11 PM
else if (hours.pm_11) {
	$(document).ready(function () {
		$('body').append(`
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/11pm.mp3" type="audio/mpeg">
			</audio>
		`);
	});
}

// ensure the music changes when a new hour starts
var current = new Date();
var future = new Date();
future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
future.setMinutes(0);
future.setSeconds(0);

var timeout = (future.getTime() - current.getTime());
setTimeout(
	function () {
		window.location.reload(true);
		console.log('Page has been refreshed as it\'s a new hour! Changing music to the current hour\'s music.');
	},
	timeout
);