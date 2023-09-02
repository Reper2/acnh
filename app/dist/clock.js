"use strict";
const timer = () => {
    const clock = document.getElementById("clock");
    clock.innerHTML = new Date().toLocaleTimeString();
};
setInterval(timer, 100);
const current = new Date();
const future = new Date();
future.setTime(future.getTime() + 3600000);
future.setMinutes(0);
future.setSeconds(0);
const timeout = future.getTime() - current.getTime();
setTimeout(() => {
    window.location.reload();
    console.log("Page has been reloaded as it's a new hour! Changing music to the current hour's music.");
}, timeout);
//# sourceMappingURL=clock.js.map