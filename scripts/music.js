var today = new Date();
var year = today.getFullYear();
var hour = today.getHours();
var date = (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes();
var dateTime = date + ' ' + time;
var dateHour = date + ' ' + hour;
var currmsg = 'It is currently';
var tdymsg = 'Today is';

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
if (date == '10-1') {
	console.log(`🥳${tdymsg} Reper2\'s birthday! To celebrate K.K. Birthday will be playing all day.`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/birthday.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// Halloween
if (date == '10-31') {
	console.log(`🎃${tdymsg} Halloween!`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/halloween.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// Turkey Day
if (date == '11-25') {
	console.log(`🦃${tdymsg} Turkey Day!`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/turkey-day.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// Toy Day
if (date == '12-24') {
	console.log(`🎅${tdymsg} Toy Day!`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/toy-day.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// New Years Event - One Hour Left...
if (dateHour == '12-31 23') {
	console.log('🎆One hour left until the New Year!');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/nye-1h-left.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// New Years Event - 30 Minutes Left...
if (dateTime == '12-31 23:30') {
	console.log('🎆30 minutes left until the New Year!');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/30m-left.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// New Years Event - 10 Minutes Left...
if (dateTime == '12-31 23:50') {
	console.log('🎆10 minutes left until the New Year!');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/10m-left.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// New Years Event - 5 Minutes Left...
if (dateTime == '12-31 23:55') {
	console.log('🎆5 minutes left until the New Year!');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/5m-left.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// New Years Event - Happy New Year!
if (dateTime == '1-1 0:00') {
	console.log(`🎆HAPPY NEW YEAR ${year}!!!`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/happy-new-year.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// New Years Event - New Years Eve! Midnight
if (dateHour == '1-1 0') {
	console.log('🎆It is finally ${year}! May the celebrations begin!');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/event-music/new-years-event/nye-midnight.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// Midnight
else if (hour == '0') {
	console.log(`${currmsg} 12 AM.`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/12am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 1 AM
else if (hour == '1') {
	console.log(`$`);
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/1am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 2 AM
else if (hour == '2') {
	console.log(currmsg + '2 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/2am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 3 AM
else if (hour == '3') {
	console.log(currmsg + '3 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/3am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 4 AM
else if (hour == '4') {
	console.log('It is currenty 4 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/4am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 5 AM
else if (hour == '5') {
	console.log(currmsg + '5 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/5am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 6 AM
else if (hour == '6') {
	console.log(currmsg + '6 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/6am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 7 AM
else if (hour == '7') {
	console.log(currmsg + '7 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/7am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 8 AM
else if (hour == '8') {
	console.log(currmsg + '8 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/8am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 9 AM
else if (hour == '9') {
	console.log(currmsg + '9 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/9am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 10 AM
else if (hour == '10') {
	console.log(currmsg + '10 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/10am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 11 AM
else if (hour == '11') {
	console.log(currmsg + '11 AM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/11am.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// Noon
else if (hour == '12') {
	console.log(currmsg + '12 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/12pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 1 PM
else if (hour == '13') {
	console.log(currmsg + '1 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/1pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 2 PM
else if (hour == '14') {
	console.log(currmsg + '2 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/2pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 3 PM
else if (hour == '15') {
	console.log(currmsg + '3 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/3pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 4 PM
else if (hour == '16') {
	console.log(currmsg + '4 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/4pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 5 PM
else if (hour == '17') {
	console.log(currmsg + '5 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/5pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 6 PM
else if (hour == '18') {
	console.log(currmsg + '6 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/6pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 7 PM
else if (hour == '19') {
	console.log(currmsg + '7 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/7pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 8 PM
else if (hour == '20') {
	console.log(currmsg + '8 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/8pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 9 PM
else if (hour == '21') {
	console.log(currmsg + '9 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/9pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 10 PM
else if (hour == '22') {
	console.log(currmsg + '10 PM');
	$('body').append(`
		<center>
			<audio id="music" controls autoplay loop style="display: none">
				<source src="https://reper2.github.io/acnh/assets/hour-music/10pm.mp3" type="audio/mpeg">
			</audio>
		</center>
	`)
}

// 11 PM
else if (hour == '23') {
	console.log(currmsg + '11 PM');
	$('body').append(`
		<audio id="music" controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hour-music/11pm.mp3" type="audio/mpeg">
		</audio>
	`)
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