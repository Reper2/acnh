import * as timeSys from "./time.js";
import * as events from "./events.js";
import * as hours from "./hours.js";
import * as con from "./console.js";

function audctrl_show() {
	$('#music').show();
	$('#audctrlBtn_show').hide();
	$('#audctrlBtn_hide').show();
	console.log('Showing audio controls.');
}

function audctrl_hide() {
	$('#music').hide();
	$('#audctrlBtn_show').show();
	$('#audctrlBtn_hide').hide();
	console.log('Hiding audio controls.');
}

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
if (events.halloween) {
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
if (events.turkeyday) {
	$(document).ready(function () {
		console.log(`🦃${time.tdymsg} Turkey Day!`);
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
if (events.toyday) {
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
if (events.nye_happynewyear1) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/happy-new-year.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(`🎆HAPPY NEW YEAR ${timeSys.year}!!!`);
	});
}

// New Years Event - New Years Eve! Midnight
if (events.nye_midnight) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/nye-midnight.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(`🎆It is finally ${timeSys.year}! May the celebrations begin!`);
	});
}

// Midnight
else if (hours.midnight) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/12am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '12 AM.');
	});
}

// 1 AM
else if (hours.am_one) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/1am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '1 AM.');
	});
}

// 2 AM
else if (hours.am_two) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/2am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '2 AM.');
	});
}

// 3 AM
else if (hours.am_three) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/3am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '3 AM.');
	});
}

// 4 AM
else if (hours.am_four) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/4am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '4 AM.');
	});
}

// 5 AM
else if (hours.am_five) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/5am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '5 AM.');
	});
}

// 6 AM
else if (hours.am_six) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/6am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '6 AM.');
	});
}

// 7 AM
else if (hours.am_seven) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/7am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '7 AM.');
	});
}

// 8 AM
else if (hours.am_eight) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/8am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '8 AM.');
	});
}

// 9 AM
else if (hours.am_nine) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/9am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '9 AM.');
	});
}

// 10 AM
else if (hours.am_ten) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/10am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '10 AM.');
	});
}

// 11 AM
else if (hours.am_eleven) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/11am.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '11 AM.');
	});
}

// Noon
else if (hours.noon) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/12pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '12 PM (noon).');
	});
}

// 1 PM
else if (hours.pm_one) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/1pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '1 PM.');
	});
}

// 2 PM
else if (hours.pm_two) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/2pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '2 PM.');
	});
}

// 3 PM
else if (hours.pm_three) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/3pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '3 PM.');
	});
}

// 4 PM
else if (hours.pm_four) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/4pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '4 PM.');
	});
}

// 5 PM
else if (hours.pm_five) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/5pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '5 PM.');
	});
}

// 6 PM
else if (hours.pm_six) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/6pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '6 PM.');
	});
}

// 7 PM
else if (hours.pm_seven) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/7pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '7 PM.');
	});
}

// 8 PM
else if (hours.pm_eight) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/8pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '8 PM.');
	});
}

// 9 PM
else if (hours.pm_nine) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/9pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '9 PM.');
	});
}

// 10 PM
else if (hours.pm_ten) {
	$(document).ready(function () {
		$('body').append(`
			<center>
				<audio id="music" controls autoplay loop style="display: none">
					<source src="https://reper2.github.io/acnh/assets/hour-music/10pm.mp3" type="audio/mpeg">
				</audio>
			</center>
		`);

		console.log(con.curr, '10 PM.');
	});
}

// 11 PM
else if (hours.pm_eleven) {
	$(document).ready(function () {
		$('body').append(`
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/11pm.mp3" type="audio/mpeg">
			</audio>
		`);

		console.log(con.curr, '11 PM.');
	});
}

// Information for when audio is not playing
console.warn('If this page is not playing audio, ensure you have allowed this website to play audio and that you have not muted your device\'s audio.\nIf audio still does not play, click on the "show audio controls" button and press play on the audio player.');

// Makes sure the music changes when a new hour starts
var current = new Date();
var future = new Date();
future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
future.setMinutes(0);
future.setSeconds(0);

var timeout = (future.getTime() - current.getTime());
setTimeout(
	function () {
		window.location.reload(true);
		console.log('Page has been refreshed as it\'s a new hour! Changing music to the current hour\'s music.')
	},
	timeout
);