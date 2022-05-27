var today = new Date();
var hour = today.getHours();
var date = (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes()
var dateTime = date + ' ' + time;
var dateHour = date + ' ' + hour;

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

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/may-day-tour/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🏝️It is currently the May Day Tour period! This calls for some May Day Tour backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
    });
}

// birthday backgrounds
if (date == '10-1') {
    $(document).ready(function () {
        const num_images = 12;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/birthday/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🥳Today is Reper2's birthday! This calls for some birthday backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
    });
}

// Halloween backgrounds
if (date == '10-31') {
    $(document).ready(function () {
        const num_images = 1;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/halloween/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎃Today is Halloween! This calls for some Halloween backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
    });
}

// Turkey Day backgrounds
if (date == '11-25') {
    $(document).ready(function () {
        const num_images = 1;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/turkey-day/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎃Today is Halloween! This calls for some Halloween backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
    });
}

// Toy Day backgrounds
if (date == '12-24') {
    $(document).ready(function () {
        const num_images = 2;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/toy-day/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎅Today is Toy Day! This calls for some Toy Day backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
    });
}

// New Years Event - New Years Eve! backgrounds
if (date == '12-31') {
    $(document).ready(function () {
        const num_images = 2;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/new-years-event/nye/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆It is New Years Eve! This calls for some New Years Eve backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
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
        var link = "https://reper2.github.io/acnh/assets/backgrounds/new-years-event/happy-new-year/happy-new-year.gif";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆Happy New Year! This calls for some firework backgrounds!`);
        console.log('background image url is ' + link);
    });
}

// New Years Event - New Years Eve! Midnight backgrounds
if (dateHour == '1-1 0') {
    $(document).ready(function () {
        const num_images = 1;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/new-years-event/nye-midnight/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆Happy New Year! This calls for some firework backgrounds!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
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
        const num_images = 358;

        var randomNumber = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/regular/" + String(randomNumber).padStart(3, '0') + ".jpg";
        var bgImg = 'url(' + link + ')';

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🔀Page background has been randomised to background #${randomNumber} from refresh!`);
        console.log('random number is ' + randomNumber);
        console.log('background image url is ' + link);
    });
}