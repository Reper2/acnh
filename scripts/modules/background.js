import * as events from "./events.js";
import * as exclude from "./exclude.js";
import * as con from "./console.js";
import * as timeSys from "./time.js";

// International Museum Day backgrounds
if (events.intlmuseumday) {
    $(document).ready(function () {
        const num_images = 39;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/intl-museum-day/" + String(num).padStart(3, '0'); + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log('🏛️' + con.curr, 'the International Museum Day period! This calls for some museum backgrounds!', con.bgnum + num);
    });
}

// May Day Tour backgrounds
if (events.mayday) {
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

        console.log('🏝️' + con.curr, 'the May Day Tour period! This calls for some May Day Tour backgrounds!', con.bgnum + num);
    });
}

// Wedding Season backgrounds
if (events.weddingseason) {
    $(document).ready(function () {
        const num_images = 3;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/wedding-season/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log('💍' + con.curr, 'Wedding Season period! This calls for some Wedding Season backgrounds!', con.bgnum + num);
    });
}

// birthday backgrounds
if (events.bday) {
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

        console.log('🥳' + con.tdy, 'Reper2\'s birthday! This calls for some birthday backgrounds!', con.bgnum + num);
    });
}

// Halloween backgrounds
if (events.halloween) {
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

        console.log('🎃' + con.tdy, 'Halloween! This calls for some Halloween backgrounds!', con.bgnum + num);
    });
}

// Turkey Day backgrounds
if (events.turkeyday) {
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

        console.log('🦃' + con.tdy, 'Turkey Day! This calls for some Turkey Day backgrounds!', con.bgnum + num);
    });
}

// Toy Day backgrounds
if (events.toyday) {
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

        console.log('🎅' + con.tdy, 'Toy Day! This calls for some Toy Day backgrounds!', con.bgnum + num);
    });
}

// New Years Event - New Years Eve! backgrounds
if (events.nye) {
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

        console.log('🎆' + con.tdy, 'New Years Eve! This calls for some New Years Eve backgrounds!', con.bgnum + num);
    });
}

// New Years Event - Happy New Year! background
if (events.nye_happynewyear2) {
    $(document).ready(function () {
        $('body').css({
            'background-image': 'url("https://reper2.github.io/acnh/assets/backgrounds/new-years-event/happy-new-year/happy-new-year.gif")',
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆HAPPY NEW YEAR ${timeSys.year}!`);
    });
}

// New Years Event - New Years Eve! Midnight backgrounds
if (events.nye_midnight) {
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

        console.log('🎆Happy New Year! This calls for some firework backgrounds!', con.bgnum + num);
    });
}

// regular backgrounds
else if (exclude.isNotExcluded) {
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

        console.log('🔀Page background has been randomised from refresh.', con.bgnum + num);
    });
}