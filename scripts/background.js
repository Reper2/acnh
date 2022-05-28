var today = new Date();
var year = today.getFullYear();
var hour = today.getHours();
var date = (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes()
var dateTime = date + ' ' + time;
var dateHour = date + ' ' + hour;
var currmsg = 'It is currently ';
var tdymsg = 'Today is ';

// International Museum Day backgrounds
if (
    date == '5-18' ||
    date == '5-19' ||
    date == '5-20' ||
    date == '5-21' ||
    date == '5-22' ||
    date == '5-23' ||
    date == '5-24' ||
    date == '5-25' ||
    date == '5-26' ||
    date == '5-27' ||
    date == '5-28' ||
    date == '5-29' ||
    date == '5-30' ||
    date == '5-31'
) {
    $(document).ready(function () {
        const num_images = 39;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/intl-museum-day/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🏛️${currmsg} the International Museum Day period! This calls for some museum backgrounds! Background #${num}`);
    });
}

// May Day Tour backgrounds
if (
    date == '4-29' ||
    date == '4-30' ||
    date == '5-1' ||
    date == '5-2' ||
    date == '5-3' ||
    date == '5-4' ||
    date == '5-5' ||
    date == '5-6' ||
    date == '5-7'
) {
    $(document).ready(function () {
        const num_images = 13;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/may-day-tour/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🏝️${currmsg} the May Day Tour period! This calls for some May Day Tour backgrounds! Background #${num}`);
    });
}

// birthday backgrounds
if (date == '10-1') {
    $(document).ready(function () {
        const num_images = 12;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/bday/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🥳${tdymsg} Reper2's birthday! This calls for some birthday backgrounds! Background #${num}`);
    });
}

// Halloween backgrounds
if (date == '10-31') {
    $(document).ready(function () {
        const num_images = 1;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/halloween/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎃${tdymsg} Halloween! This calls for some Halloween backgrounds! Background #${num}`);
    });
}

// Turkey Day backgrounds
if (date == '11-25') {
    $(document).ready(function () {
        const num_images = 1;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/turkey-day/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🦃${tdymsg} Turkey Day! This calls for some Turkey Day backgrounds! Background #${num}`);
    });
}

// Toy Day backgrounds
if (date == '12-24') {
    $(document).ready(function () {
        const num_images = 2;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/toy-day/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎅${tdymsg} Toy Day! This calls for some Toy Day backgrounds! Background #${num}`);
    });
}

// New Years Event - New Years Eve! backgrounds
if (
    date == '12-31' &&
    // using dateTime to be safe
    dateTime == '12-31 11:55' ||
    dateTime == '12-31 11:56' ||
    dateTime == '12-31 11:57' ||
    dateTime == '12-31 11:58' ||
    dateTime == '12-31 11:59'
) {
    $(document).ready(function () {
        const num_images = 2;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/new-years-event/nye/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆${tdymsg} New Years Eve! This calls for some New Years Eve backgrounds! Background #${num}`);
    });
}

// New Years Event - Happy New Year! background
if (
    dateTime == '12-31 11:55' ||
    dateTime == '12-31 11:56' ||
    dateTime == '12-31 11:57' ||
    dateTime == '12-31 11:58' ||
    dateTime == '12-31 11:59' ||
    dateTime == '1-1 0:00'
    // starts 5 min before as it takes 3.2 min for everything to finish loading
) {
    $(document).ready(function () {
        $('body').css({
            'background-image': 'url("https://reper2.github.io/acnh/assets/backgrounds/new-years-event/happy-new-year/happy-new-year.gif")',
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆HAPPY NEW YEAR ${year}!`);
    });
}

// New Years Event - New Years Eve! Midnight backgrounds
if (dateHour == '1-1 0') {
    $(document).ready(function () {
        const num_images = 1;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/new-years-event/nye-midnight/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆Happy New Year! This calls for some firework backgrounds! Background #${num}`);
    });
}

// regular backgrounds
else if (
    // exclude all dates and times from above
    date !== '4-29' &&
    date !== '4-30' &&
    date !== '5-1' &&
    date !== '5-2' &&
    date !== '5-3' &&
    date !== '5-4' &&
    date !== '5-5' &&
    date !== '5-6' &&
    date !== '5-7' &&
    date !== '5-18' &&
    date !== '5-19' &&
    date !== '5-20' &&
    date !== '5-21' &&
    date !== '5-22' &&
    date !== '5-23' &&
    date !== '5-24' &&
    date !== '5-25' &&
    date !== '5-26' &&
    date !== '5-27' &&
    date !== '5-28' &&
    date !== '5-29' &&
    date !== '5-30' &&
    date !== '5-31' &&
    date !== '10-1' &&
    date !== '10-31' &&
    date !== '11-25' &&
    date !== '12-24' &&
    date !== '12-31' &&
    dateTime !== '12-31 11:55' &&
    dateTime !== '12-31 11:56' &&
    dateTime !== '12-31 11:57' &&
    dateTime !== '12-31 11:58' &&
    dateTime !== '12-31 11:59' &&
    dateTime !== '1-1 0:00' &&
    dateHour !== '1-1 0'
) {
    $(document).ready(function () {
        const num_images = 393;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/reg/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🔀Page background has been randomised to background #${num}} from refresh!`);
    });
}