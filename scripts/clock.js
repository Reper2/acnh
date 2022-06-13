const myTimer = function () {
    var clock = document.getElementById("clock");
    clock.innerHTML = new Date().toLocaleTimeString();
};

setInterval(myTimer, 100);