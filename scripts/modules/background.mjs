import * as events from './events.mjs';
import * as excluded from './excluded.mjs';
import * as con from './console.mjs';
import * as time from './time.mjs';

const
    body = document.getElementById('bg'),

    // dev
    //path = '/assets/backgrounds/',
    path = 'https://reper2.github.io/acnh/assets/backgrounds/',
    nyePath = `${path}new-years-event/`
;

body.style.backgroundPositionX = 'center';
body.style.backgroundPositionY = 'center';
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';
body.style.backgroundAttachment = 'fixed';
body.class = 'flex';

// International Museum Day backgrounds
if (events.intlmusday) {
    $(document).ready(function () {
        const num_images = 39;

        var
            num = Math.floor(Math.random() * num_images),
            link = `${path}intl-mus-day/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🏛️ ${con.cur} the International Museum Day period! This calls for some museum backgrounds! ${con.bg+num}`);
    });
}

// May Day Tour backgrounds
if (events.maydaytour) {
    $(document).ready(function () {
        const num_images = 13;

        var
            num = Math.floor(Math.random() * num_images),
            link = `${path}may-day-tour/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🏝️${con.cur} the May Day Tour period! This calls for some May Day Tour backgrounds! ${con.bg+num}`);
    });
}

// Wedding Season backgrounds
if (events.wedseas) {
    $(document).ready(function () {
        const num_images = 3;

        var
            num = Math.floor(Math.random() * num_images),
            link = `${path}wed-seas/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`💍${con.cur} Wedding Season period! This calls for some Wedding Season backgrounds! ${con.bg+num}`);
    });
}

// birthday backgrounds
if (events.bday) {
    $(document).ready(function () {
        const num_images = 12;

        var
            num = Math.floor(Math.random() * num_images),
            link = `${path}bday/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🥳${con.tdy} Reper2's birthday! This calls for some birthday backgrounds! ${con.bg+num}`);
    });
}

// Halloween backgrounds
if (events.halloween) {
    $(document).ready(function () {
        const num_images = 1;

        var 
            num = Math.floor(Math.random() * num_images),
            link = `${path}halloween/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🎃${con.tdy} Halloween! This calls for some Halloween backgrounds! ${con.bg+num}`);
    });
}

// Toy Day backgrounds
if (events.toyday) {
    $(document).ready(function () {
        const num_images = 2;

        var 
            num = Math.floor(Math.random() * num_images),
            link = `${path}toy-day/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🎅${con.tdy} Toy Day! This calls for some Toy Day backgrounds! ${con.bg+num}`);
    });
}

// New Years Event - New Years Eve! backgrounds
if (events.nye) {
    $(document).ready(function () {
        const num_images = 2;

        var 
            num = Math.floor(Math.random() * num_images),
            link = `${nyePath}nye/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🎆${con.tdy} New Years Eve! This calls for some New Years Eve backgrounds! ${con.bg+num}`);
    });
}

// New Years Event - Happy New Year! background
if (events.nye_hny) {
    $(document).ready(function () {
        body.style.backgroundImage = `url("${nyePath}happy-new-year.gif")`;

        console.log(`🎆HAPPY NEW YEAR ${time.Y}!`);
    });
}

// New Years Event - New Years Eve! Midnight backgrounds
if (events.nye_midn) {
    $(document).ready(function () {
        const num_images = 1;

        var
            num = Math.floor(Math.random() * num_images),
            link = `${nyePath}nye-midn/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🎆Happy New Year! This calls for some firework backgrounds! ${con.bg+num}`);
    });
}

// regular backgrounds
else if (excluded.default) {
    $(document).ready(function () {
        const num_images = 393;

        var
            num = Math.floor(Math.random() * num_images),
            link = `${path}reg/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`
        ;

        body.style.backgroundImage = bgImg;

        console.log(`🔀Page background has been randomised from refresh. ${con.bgnum+num}`);
    });
}