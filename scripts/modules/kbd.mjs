import * as path from './path.mjs';

$(document).keydown(function (k) {
    if (k.ctrlKey && k.key === '/') {
        console.warn('Ctrl+/ was pressed');
        window.location.href = path.sb + 'kbd';
    };

    if (k.altKey && k.key === 's') {
        console.warn('Alt+S was pressed');
        $('#audctrlBtn_show').trigger('click');
    };

    if (k.altKey && k.key === 'h') {
        console.warn('Alt+H was pressed');
        $('#audctrlBtn_hide').trigger('click');
    };

    if (k.ctrlKey && k.key === 'c') {
        console.warn('Ctrl+C was pressed');
        $('#copy').trigger('click');
    };

    if (k.altKey && k.key === 'c') {
        console.warn('Alt+C was pressed');
        window.location.href = '#copyright';
    };

    if (k.altKey && k.key === 'r') {
        console.warn('R was pressed');
        window.open('https://github.com/Reper2/acnh/blob/master/LICENSE');
    };

    if (k.key === 'f') {
        console.warn('F was pressed');
        window.location.href = '#footer';
    };

    if (k.ctrlKey && k.key === 'i') {
        console.warn('Ctrl+I was pressed');
        $('#install').trigger('click');
    };

    if (k.key === 'Backspace') {
        console.warn('Backspace was pressed');
        $('#back').trigger('click');
    };

    if (k.key === 'ArrowLeft') {
        console.warn('LeftArrow was pressed');
        $('.prev').trigger('click');
    };

    if (k.key === 'ArrowRight') {
        console.warn('RightArrow was pressed');
        $('.next').trigger('click');
    };

    if (k.key === 'Enter') {
        console.warn('Enter was pressed');
        $(document).trigger(copyLink());
    };

    if (k.key === 'Escape') {
        console.warn('Esc was pressed');
        $('.close').trigger('click');
    };

    if (k.ctrlKey && k.altKey && k.key === 'd') {
        console.warn('Ctrl+Alt+D was pressed');
        window.open(path.sb + 'scripts/modules/kbd.mjs');
    };

    if (k.key === 'p') {
        console.warn('P was pressed');
        window.open('/nintendo-album/#:~:text=Downloads-,ACNH%20Album,GB%2C%20thousands%20of%20files%5D,-Game');
    };

    if (!k.ctrlKey && !k.altKey && k.key === 'c') {
        console.warn('C was pressed');
        window.open('https://dodocodes.com/user/Reper2_acnh');
    };

    if (k.key === 'o') {
        console.warn('O was pressed');
        window.location.href = path.sb + 'sprinkle/';
    };

    if (k.key === 'a') {
        console.warn('A was pressed');
        window.open('/acnh-apps/');
    };

    if (k.key === 'n') {
        console.warn('N was pressed');
        window.open('https://nookazon.com/profile/2566680955');
    };

    if (k.key === 'g') {
        console.warn('G was pressed');
        window.open('https://github.com/Reper2/acnh');
    };

    if (k.key === 'd') {
        console.warn('D was pressed');
        window.location.href = path.sb + 'designs/';
    };

    if (!k.ctrlKey && !k.altKey && k.key === 'i') {
        console.warn('I was pressed');
        window.location.href = path.sb + 'island/';
    };

    if (!k.altKey && k.key === 'h') {
        console.warn('H was pressed');
        window.location.href = path.sb + 'hhn/'
    };
});