import * as events from './events.mjs';
import * as con from './console.mjs';
import * as time from './time.mjs';
import * as path from './path.mjs';

const body = document.getElementById('bg');

// May Day Tour backgrounds
if (events.maydaytour) {
    $(document).ready(function () {
        const num_images = 13;
        var
            num = Math.floor(Math.random() * num_images),
            link = path.bg + 'may-day-tour/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🏝️' + con.cur + 'the May Day Tour period! This calls for some May Day Tour backgrounds!' + con.bg + num);
    });
}

// International Museum Day backgrounds
if (events.intlmusday) {
    $(document).ready(function () {
        const num_images = 39;
        var
            num = Math.floor(Math.random() * num_images),
            link = path.bg + 'intl-mus-day/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🏛️' + con.cur + 'the International Museum Day period! This calls for some museum backgrounds!' + con.bg + num);
    });
}

// Wedding Season backgrounds
if (events.wedseas) {
    $(document).ready(function () {
        const num_images = 3;
        var
            num = Math.floor(Math.random() * num_images),
            link = path.bg + 'wed-seas/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('💍' + con.cur + 'Wedding Season period! This calls for some Wedding Season backgrounds!' + con.bg + num);
    });
}

// birthday backgrounds
if (events.bday) {
    $(document).ready(function () {
        const num_images = 12;
        var
            num = Math.floor(Math.random() * num_images),
            link = path.bg + 'bday/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🥳' + con.tdy + "Reper2's birthday! This calls for some birthday backgrounds!" + con.bg + num);
    });
}

// Halloween backgrounds
if (events.halloween) {
    $(document).ready(function () {
        const num_images = 1;
        var 
            num = Math.floor(Math.random() * num_images),
            link = path.bg + 'halloween/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🎃' + con.tdy + 'Halloween! This calls for some Halloween backgrounds!' + con.bg + num);
    });
}

// Toy Day backgrounds
if (events.toyday) {
    $(document).ready(function () {
        const num_images = 2;
        var 
            num = Math.floor(Math.random() * num_images),
            link = path.bg + 'toy-day/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🎁' + con.tdy + 'Toy Day! This calls for some Toy Day backgrounds!' + con.bg + num);
    });
}

// New Years Event - New Years Eve! backgrounds
if (events.nye) {
    $(document).ready(function () {
        const num_images = 2;
        var 
            num = Math.floor(Math.random() * num_images),
            link = path.bg_n + 'nye/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🎆' + con.tdy + 'New Years Eve! This calls for some New Years Eve backgrounds!' + con.bg + num);
    });
}

// New Years Event - Happy New Year! background
if (events.nye_hny) {
    $(document).ready(function () {
        body.style.backgroundImage = `url("${path.bg_n}happy-new-year.gif")`;
        console.log(`🎆HAPPY NEW YEAR ${time.Y}!!!`);
    });
}

// New Years Event - New Years Eve! Midnight backgrounds
if (events.nye_midn) {
    $(document).ready(function () {
        const num_images = 1;
        var
            num = Math.floor(Math.random() * num_images),
            link = path.bg_n + 'nye-midn/' + String(num).padStart(3, '0') + '.jpg',
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🎆' + 'Happy New Year! This calls for some firework backgrounds!' + con.bg + num);
    });
}

// regular backgrounds
else if (events.reg) {
    $(document).ready(function () {
        const num_images = 487;
        var
            num = Math.floor(Math.random() * num_images),
            link = `${path.bg}reg/${String(num).padStart(3, '0')}.jpg`,
            bgImg = `url(${link})`;
        body.style.backgroundImage = bgImg;
        console.log('🔀Page was reloaded causing the background to be re-randomised.' + con.bg + num);
    });
}