import path from "./paths.js";
onload = () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register(`${path.root}sw.js`).then((reg) => {
            console.groupCollapsed("Service Worker Status (main)");
            if (reg.installing) {
                console.log("Service worker installing");
            }
            if (reg.waiting) {
                console.log("Service worker installed");
            }
            if (reg.active) {
                console.log("Service worker active");
            }
            console.log("Service Worker registration successful with scope:", reg.scope);
            console.groupEnd();
        }).catch((err) => console.error("Main Service Worker registration failed:", err));
        console.info("We send you notifications to let you know what events are currently happening in Animal Crossing: New Horizons and the special features you can enjoy on the website during those events.");
        Notification.requestPermission();
        console.warn("Permission to send notifications:", Notification.permission);
        if (Notification.permission === "granted") {
            navigator.serviceWorker.register(`${path.root}notifs.js`, { type: "module", scope: `${path.root}app` }).then((reg) => {
                console.groupCollapsed("Service Worker Status (notifs)");
                if (reg.installing) {
                    console.log("Service Worker installing...");
                }
                if (reg.waiting) {
                    console.log("Service Worker installed!");
                }
                if (reg.active) {
                    console.log("Service Worker active");
                }
                console.log("Service Worker registration successful with scope:", reg.scope);
                console.groupEnd();
            }).catch((err) => console.error("Notifs ServiceWorker registration failed:", err));
        }
    }
};
//# sourceMappingURL=sw-installer.js.map