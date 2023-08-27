/**
 * Function that gets the span element with id `clock` from the document and updates the displayed time every 100ms (1s).
 */
const timer = () => {
	const clock = <HTMLSpanElement>document.getElementById("clock");
	clock.innerHTML = new Date().toLocaleTimeString();
};
setInterval(timer, 100);

const current = new Date();
const future = new Date();
future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
future.setMinutes(0);
future.setSeconds(0);

/**
 * Creates a timeout to reload the page each hour so hourly music changes over.
 */
const timeout = future.getTime() - current.getTime();
setTimeout(
	() => {
		window.location.reload();
		console.log("Page has been reloaded as it's a new hour! Changing music to the current hour's music.");
	}, timeout
);