var current = new Date();
var future = new Date();
future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
future.setMinutes(0);
future.setSeconds(0);

var timeout = (future.getTime() - current.getTime());
setTimeout(function() { window.location.reload(true); console.log('Page has been refreshed as it\'s a new hour! Changing music to the current hour\'s music.') }, timeout);