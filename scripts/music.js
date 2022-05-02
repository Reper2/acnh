var today = new Date();
var hour = today.getHours();
var date = (today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes()
var dateTime = date+' '+time;
var dateHour = date+' '+hour;

/* On special days such as Bunny Day or Toy Day, their soundtracks will play as you browse the website.
On any other day, the hourly songs will play just like in the game. */

/* Bunny Day */
if (date == '4-17' ) {
    console.log('Today is Bunny Day!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/bunny-day.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* My Birthday */
if (date == '10-1' ) {
    console.log('Today is Reper2\'s birthday!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/birthday.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* Halloween */
if (date == '10-31' ) {
    console.log('Today is Halloween!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/halloween.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* Turkey Day */
if (date == '11-25' ) {
    console.log('Today is Turkey Day!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/turkey-day.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* Toy Day */
if (date == '12-25' ) {
    console.log('Today is Toy Day!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/toy-day.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 1 Hour Until New Years */
if (dateHour == '12-31 23' ) {
    console.log('1 hour left until New Years!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/nye-1h-left.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 30 Minutes Until New Years */
if (dateTime == '12-31 23:30' ) {
    console.log('30 minutes left until New Years!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/nye-30m-left.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 10 Minutes Until New Years */
if (dateTime == '12-31 23:50' ) {
    console.log('10 minutes left until New Years!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/nye-10m-left.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 5 Minutes Until New Years */
if (dateTime == '12-31 23:55' ) {
    console.log('5 minutes left until New Years!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/nye-5m-left.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* Happy New Year */
if (dateTime == '1-1 0:00' ) {
    console.log('Happy New Year!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/nye-happy-new-year.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* New Years Midnight */
if (dateTime == '1-1 0:01' ) {
    console.log('Happy New Year!');
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/event-music/nye-midnight.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* Midnight */
else if (hour == '0' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/12am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 1 AM */
else if (hour == '1' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/1am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 2 AM */
else if (hour == '2' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/2am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 3 AM */
else if (hour == '3' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/3am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 4 AM */
else if (hour == '4' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/4am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 5 AM */
else if (hour == '5' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/5am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 6 AM */
else if (hour == '6' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/6am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 7 AM */
else if (hour == '7' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/7am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 8 AM */
else if (hour == '8' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/8am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 9 AM */
else if (hour == '9' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/9am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 10 AM */
else if (hour == '10' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/10am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 11 AM */
else if (hour == '11' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/11am.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* Noon */
else if (hour == '12' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/12pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 1 PM */
else if (hour == '13' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/1pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 2 PM */
else if (hour == '14' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/2pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 3 PM */
else if (hour == '15' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/3pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 4 PM */
else if (hour == '16' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/4pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 5 PM */
else if (hour == '17' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/5pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 6 PM */
else if (hour == '18' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/6pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 7 PM */
else if (hour == '19' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/7pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 8 PM */
else if (hour == '20' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/8pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 9 PM */
else if (hour == '21' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/9pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 10 PM */
else if (hour == '22' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/10pm.mp3" type="audio/mpeg">
		</audio>
	`)
}

/* 11 PM */
else if (hour == '23' ) {
    $('body').append(`
		<audio controls autoplay loop style="display: none">
			<source src="https://reper2.github.io/acnh/assets/hourly-music/11pm.mp3" type="audio/mpeg">
		</audio>
	`)
}