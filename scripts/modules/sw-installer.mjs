import * as path from './path.mjs';

// The whole purpose of this is... https://developer.chrome.com/blog/autoplay/
alert("Welcome to Reper2's ACNH Website!\nPress Ctrl+/ for a list of keyboard shortcuts.");

// Register a service worker after the load event
addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(`${path.sb}sw.js`).then(function (registration) {
            // Registration was successful
            console.log('Main ServiceWorker registration successful with scope: ', registration.scope);
            if (registration.installing) {
                console.log('Main Service worker installing');
            } else if (registration.waiting) {
                console.log('Main Service worker installed');
            } else if (registration.active) {
                console.log('Main Service worker active');
            }
        }).catch(function (err) {
            // Registration failed
            console.error('Main ServiceWorker registration failed: ', err);
        });

        navigator.serviceWorker.register(`${path.sb}scripts/notifications.js`).then(function (registration) {
            // Registration was successful
            console.log('Notification ServiceWorker registration successful with scope: ', registration.scope);
            if (registration.installing) {
                console.log('Notification Service worker installing');
            } else if (registration.waiting) {
                console.log('Notification Service worker installed');
            } else if (registration.active) {
                console.log('Notification Service worker active');
            }
        }).catch(function (err) {
            // Registration failed
            console.error('Notification ServiceWorker registration failed: ', err);
        });
    }

    // only execute if app is not already installed
    if (!matchMedia('(display-mode: standalone)').matches) {
        const
            installDiv = document.getElementById('install'),
            installBtn = document.createElement('button'),
            installTooltip = document.createElement('span');

        installDiv.className = 'tooltip';

        installBtn.innerHTML = 'Install App';

        installTooltip.className = 'tooltiptext';
        installTooltip.id = 'install-tooltip';
        installTooltip.innerHTML = 'Install the app! (Ctrl+I)<br>&bullet; Available from your home screen or desktop.<br>&bullet; Works offline or with poor network connection.<br>&bullet; Able to send you notifications about events or new content.';

        installBtn.appendChild(installTooltip);
        installDiv.appendChild(installBtn);

        console.log('💾Added install button to page. Hover over the button for information.');
    };
});

Notification.requestPermission();
const install = document.getElementById('install');
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

install.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        };
    };
});

onappinstalled = event => {
    var msg = 'Thank you for installing the app!';
    alert(msg);
    console.log(`🙏🏼${msg}`);
    console.log('Reload to remove the install button.');
};