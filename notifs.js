/* eslint-disable no-undef */
import time from "./app/dist/time.js";
import ev from "./app/dist/events.js";

/*dev*/
// const logo = "/logo.png";
const logo = "/acnh/logo.png";
const winter = time.mo >= ev.winter.s && time.mo <= ev.winter.e;

onnotificationclick = () => clients.openWindow("https://reper2.github.io/acnh/");
switch (time.moDate()) {
	case ev.festivale:
		self.registration.showNotification("🌈🦚Festivale", {
			body: "Today is Festivale in acnh! Click to open our website and enjoy Festivale music and backgrounds.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "festivale"
		});
		break;
	case ev.bunnyDay:
		self.registration.showNotification("🐰🐣Bunny Day (Easter)", {
			body: "Today is Bunny Day in acnh! Click to open our website and enjoy Bunny Day music and backgrounds.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "bunnyday"
		});
		break;
	case ev.bday:
		self.registration.showNotification("🐰🐣🎂🥳Reper2's Birthday!", {
			body: "Today is Reper2's Birthday! Click to open our website and enjoy birthday music and backgrounds to celebrate his birthday. Reper2 is the creator of this website.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "bday"
		});
		break;
	case ev.halloween:
		self.registration.showNotification("🎃👻Halloween", {
			body: "Happy Halloween, today is also Halloween in acnh! Click to open our website and enjoy Halloween music and backgrounds.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "halloween"
		});
		break;
	case ev.turkeyDay:
		self.registration.showNotification("🦃🎁Turkey Day (Thanks Giving)", {
			body: "Today is Turkey Day in acnh! Click to open our website and enjoy Turkey Day music and backgrounds.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "turkeyday"
		});
		break;
	case ev.toyDay:
		self.registration.showNotification("🎄🎁Toy Day (⛪👼🏼Christmas)", {
			body: "Merry Christmas, today is also Toy Day in acnh! Click to open our website and enjoy Toy Day music and backgrounds.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "toyday"
		});
		break;
	case ev.nye.moDate:
		self.registration.showNotification("🎆🥂New Years Eve", {
			body: "It's New Years Eve! Build up your hype for tonight and click to open our website to enjoy New Years Event music and backgrounds! Also jump on acnh tonight to celebrate with your residents.",
			icon: logo,
			lang: "en",
			renotify: true,
			tag: "nye0"
		});
		break;
	default:
		if (time.mo == ev.mayDayTour.mo && time.date >= ev.mayDayTour.date.s && time.date <= ev.mayDayTour.date.e) {
			self.registration.showNotification("🏝️May Day Tour", {
				body: "It is currently the May Day Tour week! Click to open our website and enjoy May Day Tour backgrounds.",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "maydaytour"
			});
		} else if (time.mo == ev.intlMuseumDay.mo && time.date >= ev.intlMuseumDay.date.s && time.date <= ev.intlMuseumDay.date.e) {
			self.registration.showNotification("🌏🏦International Museum Day🐟🦋", {
				body: "It is currently the International Musuem Day period in acnh! Click to open our website and enjoy International Museum Day backgrounds.",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "toyday"
			});
		} else if (time.mo == ev.weddingSeason) {
			self.registration.showNotification("💒Wedding Season (also 🏳️‍🌈Pride Month)", {
				body: "It is currently Wedding Season in acnh! Click to open our website and enjoy Wedding Season backgrounds.",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "toyday"
			});
			self.registration.showNotification(title, options);
		} else if (time.day == ev.fwShow.day && time.mo == ev.fwShow.mo) {
			self.registration.showNotification("🧨🥂Fireworks Show", {
				body: "It is another Sunday night in August which means that the Fireworks Show will be starting at 7pm in acnh. Click to open our website and from 7pm enjoy Fireworks Show music and backgrounds.",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "fwshow"
			});
		} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min < ev.nye.min[0]) {
			self.registration.showNotification("🧨🥂1 Hour Left until the New Year!", {
				body: "There's just 1 hour left until next year, are you excited? Click to open our website and enjoy New Years music and backgrounds. Don't forget to celebrate with your villagers too!",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "nye1"
			});
		} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[0] && time.min < ev.nye.min[1]) {
			self.registration.showNotification("🧨🥂30 Min Left until the New Year!", {
				body: "There's just 30 minutes left until next year, are you excited? Click to open our website and enjoy New Years music and backgrounds. Don't forget to celebrate with your villagers too!",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "nye2"
			});
		} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[1] && time.min < ev.nye.min[2]) {
			self.registration.showNotification("🧨🥂10 Min Left until the New Year!", {
				body: "There's just 10 minutes left until next year, are you excited? Click to open our website and enjoy New Years music and backgrounds. Don't forget to celebrate with your villagers too!",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "nye3"
			});
		} else if (time.moDate() == ev.nye.moDate[0] && time.hr == ev.nye.hr[0] && time.min >= ev.nye.min[2]) {
			self.registration.showNotification("🧨🥂5 Min Left until the New Year!", {
				body: "There's just 5 minutes left until next year, are you excited? Click to open our website and enjoy New Years music and backgrounds. Don't forget to celebrate with your villagers too!",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "nye4"
			});
		} else if (time.moDate() == ev.nye.moDate[1] && (time.hr == ev.nye.hr[1] || time.hr == ev.nye.hr[2])) {
			self.registration.showNotification("🥂🎆Happy New Year!🎆", {
				body: "Happy New Year, have you made a New Years Resolution yet? Click to open our website and enjoy New Years music and backgrounds. Don't forget to celebrate with your villagers too!",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "nye5"
			});
		} else if (time.moDate() == ev.nye.moDate[1] && time.hr == ev.nye.hr[3]) {
			self.registration.showNotification("🥂🌙The Party's Still Going", {
				body: "How's the new year feel, still staying awake? Click to open our website and enjoy New Years music and backgrounds. The New Years celebration in acnh is still going!",
				icon: logo,
				lang: "en",
				renotify: true,
				tag: "nye6"
			});
		} else {
			if (winter) {
				self.registration.showNotification("❄️⛄Winter (Southern Hemisphere)", {
					body: "It is currently Winter in the Southern Hemisphere. Click to open our website and enjoy snow hourly songs. Sorry Northern Hemisphere players, this website doesn't yet have any technology to detect your hemisphere.",
					icon: logo,
					lang: "en",
					renotify: true,
					tag: "winter"
				});
			}
		}
}