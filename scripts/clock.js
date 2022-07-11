const myTimer = function () {
    var clock = document.getElementById("clock");
    clock.innerHTML = new Date().toLocaleTimeString();
};

console.log('🕰️Added clock to page.');
setInterval(myTimer, 100);