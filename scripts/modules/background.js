import * as events from "./events.js";
import * as exclude from "./exclude.js";
import * as con from "./console.js";
import * as time from "./time.js";

// International Museum Day backgrounds
if (events.intlmus) {
    $(document).ready(function () {
        const num_images = 39;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/intl-mus-day/" + String(num).padStart(3, '0'); + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log('🏛️' + con.curr, 'the International Museum Day period! This calls for some museum backgrounds!', con.bg + num);
    });
}

// May Day Tour backgrounds
if (events.maydaytour) {
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

        console.log('🏝️' + con.curr, 'the May Day Tour period! This calls for some May Day Tour backgrounds!', con.bg + num);
    });
}

// Wedding Season backgrounds
if (events.wedseas) {
    $(document).ready(function () {
        const num_images = 3;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/wed-seas/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log('💍' + con.curr, 'Wedding Season period! This calls for some Wedding Season backgrounds!', con.bg + num);
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

        console.log('🥳' + con.tdy, 'Reper2\'s birthday! This calls for some birthday backgrounds!', con.bg + num);
    });
}

// Halloween backgrounds
if (events.h) {
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

        console.log('🎃' + con.tdy, 'Halloween! This calls for some Halloween backgrounds!', con.bg + num);
    });
}

// Turkey Day backgrounds
if (events.turkey) {
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

        console.log('🦃' + con.tdy, 'Turkey Day! This calls for some Turkey Day backgrounds!', con.bg + num);
    });
}

// Toy Day backgrounds
if (events.toy) {
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

        console.log('🎅' + con.tdy, 'Toy Day! This calls for some Toy Day backgrounds!', con.bg + num);
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

        console.log('🎆' + con.tdy, 'New Years Eve! This calls for some New Years Eve backgrounds!', con.bg + num);
    });
}

// New Years Event - Happy New Year! background
if (events.nye_hny) {
    $(document).ready(function () {
        $('body').css({
            'background-image': 'url("https://reper2.github.io/acnh/assets/backgrounds/new-years-event/hny/hny.gif")',
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log(`🎆HAPPY NEW YEAR ${time.Y}!`);
    });
}

// New Years Event - New Years Eve! Midnight backgrounds
if (events.nye_midn) {
    $(document).ready(function () {
        const num_images = 1;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/new-years-event/nye-midn/" + String(num).padStart(3, '0') + ".jpg";
        var bgImg = `url(${link})`;

        $('body').css({
            'background-image': bgImg,
            'background-position': 'center center',
            'background-repeat': 'no-repeat no-repeat',
            'background-size': 'cover',
        });

        console.log('🎆Happy New Year! This calls for some firework backgrounds!', con.bg + num);
    });
}

// regular backgrounds
else if (exclude.isNotExcluded) {
    $(document).ready(function () {
        const num_images = 393;

        var num = Math.floor(Math.random() * num_images);
        var link = "https://reper2.github.io/acnh/assets/backgrounds/reg/" + String(num).padStart(3, '0') + ".jpg";
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