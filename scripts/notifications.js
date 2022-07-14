var
    tdy = new Date(),
    Y = tdy.getFullYear(),
    M = tdy.getMonth() + 1,
    d = tdy.getDate(),
    D = M + '-' + d,
    h = tdy.getHours(),
    m = tdy.getMinutes(),
    t = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0'),
    D_h = D, h,
    D_t = D, t;
const
    // dev
    //sb = '/',
    sb = '/acnh/',
    maydaytour =
        D == '4-29' ||
            D == '4-30' ||
                D == '5-1' ||
                    D == '5-2' ||
                        D == '5-3' ||
                            D == '5-4' ||
                                D == '5-5' ||
                                    D == '5-6' ||
                                        D == '5-7',
    intlmusday =
        D == '5-18' ||
            D == '5-19' ||
                D == '5-20' ||
                    D == '5-21' ||
                        D == '5-22' ||
                            D == '5-23' ||
                                D == '5-24' ||
                                    D == '5-25' ||
                                        D == '5-26' ||
                                            D == '5-27' ||
                                                D == '5-28' ||
                                                    D == '5-29' ||
                                                        D == '5-30' ||
                                                            D == '5-31',
    wedseas = M == '6',
    winter =
        M == '6' ||
            M == '7' ||
                m == '8',
    bday = D == '10-1',
    halloween = D == '10-31',
    toyday = D == '12-24',
    nye = D == '12-31',
    nye_1h = D_h == '12-31 23',
    nye_30m = D_t == '12-31 23:30',
    nye_10m = D_t == '12-31 23:50',
    nye_5m = D_t == '12-31 23:55',
    nye_hny = D_t == '1-1 0:00',
    nye_midn = D_t == '1-1 0',
    conCur = 'It is currently',
    conTdy = 'Today is';

if (maydaytour) {
    const
        title = '🏝️May Day Tour',
        options = {
            body: conCur + ' the May Day Tour period! Come and enjoy some May Day Tour backgrounds until the end of the month!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'maydaytour',
            vibrate: [429, 430, 431, 501, 502, 503, 504, 505, 507]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (intlmusday) {
    const
        title = '🏛️International Museum Day',
        options = {
            body: conCur + ' the International Museum Day period! Come and enjoy some International Museum Day backgrounds until the end of the month!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'intlmusday',
            vibrate: [518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (wedseas) {
    const
        title = '💍Wedding Season',
        options = {
            body: conCur + ' the Wedding Season period! Come and enjoy some Wedding Season backgrounds until the end of the month!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'wedseas',
            vibrate: [6]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (winter) {
    const
        title = '❄️Winter',
        options = {
            body: conCur + ' Winter in the Southern Hemisphere! Come and enjoy Winter hourly music until the end of August!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'wedseas',
            vibrate: [6, 7, 8]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (bday) {
    const
        title = "🥳Happy Birthday Reper2!",
        options = {
            body: conTdy + " Reper2's birthday! Come and celebrate Reper2's birthday with K.K. Birthday music and birthday backgrounds!",
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'bday',
            vibrate: [1001]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (halloween) {
    const
        title = '🎃Happy Halloween!',
        options = {
            body: conTdy + ' Halloween! Come and enjoy Halloween music and backgrounds!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'halloween',
            vibrate: [1031]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (toyday) {
    const
        title = '🎁Merry Christmas!',
        options = {
            body: conTdy + ' Toy Day! Come and celebrate Toy Day with Toy Day music and backgrounds!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'toyday',
            vibrate: [1225]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye) {
    const
        title = '🎆New Years Event',
        options = {
            body: conTdy + " New Years Eve! Today there'll be New Years backgrounds and then tonight... new years music and different New Years backgrounds!",
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye',
            vibrate: [1231]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye_1h) {
    const
        title = '🎆1 Hour Left!',
        options = {
            body: "Are you excited? We're excited. Just 1 hour until the new year! Come and enjoy the classical jazz of the 1 Hour Left music!",
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye_1h',
            vibrate: [1231, 2300]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye_30m) {
    const
        title = '🎆30 Minutes Left!',
        options = {
            body: "It's getting closer! The new year is now just 30 minutes away! Come and enjoy the classical jazz of the 30 Minutes Left music!",
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye_30m',
            vibrate: [1231, 2330]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye_10m) {
    const
        title = '🎆10 Minutes Left!',
        options = {
            body: 'Just 10 minutes away now! The new year is so close! Come and enjoy the classical jazz of the 10 Minutes Left music!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye_10m',
            vibrate: [1231, 2350]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye_5m) {
    const
        title = '🎆5 Minutes Left!',
        options = {
            body: 'Only 5 minutes! The new year is just SO CLOSE now! Come and enjoy the classical jazz of the 5 Minutes Left music!',
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye_5m',
            vibrate: [1231, 2355]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye_hny) {
    const
        title = `🎆HAPPY NEW YEAR ${Y}!!!`,
        options = {
            body: "It's finally the new year!!!",
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye_hny',
            vibrate: [1231, 2400]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};

if (nye_midn) {
    const
        title = "🎆It's the new year!",
        options = {
            body: `It's finally ${Y}! Come and celebrate the new year with New Years Event music and backgrounds!`,
            icon: sb + 'logo.png',
            lang: 'en',
            //tag: 'nye_midn',
            vibrate: [101, 0]
        };
    self.registration.showNotification(title, options);
    onnotificationclick = event => clients.openWindow('https://reper2.github.io/acnh/');
};