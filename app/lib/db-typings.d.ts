/**
 * Provides typings for the core data.
 */
interface Core {
	/**
	 * Pre-url for fetching from the nintendo-album database.
	 */
	_pre: string;

	/**
	 * The id of the game the screenshot was taken in. Which is always acnh.
	 */
	_gameid: string;

	/**
	 * The file extension for all images. Switch uses jpg format.
	 */
	_ext: string;
}


/**
 * Provides typings for the music database.
 */
interface Music {
	/**
	 * Prefix for most if not all soundtrack urls that are fetched.
	 */
	_pre: string;

	/**
	 * Soundtracks for acnh events.
	 */
	ev: string[];

	/**
	 * Soundtracks for acnh hourly songs (sunny weather). On the website these are played during Summer (Southern Hemisphere).
	 */
	hr_sunny: string[];

	/**
	 * Soundtracks for acnh hourly songs (snowy weather). On the website these are played during Winter (Southern Hemisphere).
	 */
	hr_snowy: string[];
}

/**
 * Provides typings for the background database.
 */
interface Backgrounds {
	/**
	 * Regular backgrounds used on non-event dates.
	 */
	reg: string[];

	/**
	 * Backgrounds exclusively for the Festivale event.
	 */
	festivale: string[];

	/**
	 * Backgrounds exclusively for the Bunny Day event.
	 */
	bunnyDay: string[];

	/**
	 * Backgrounds exclusively for the May Day Tour event.
	 */
	mayDayTour: string[];

	/**
	 * Backgrounds exclusively for the International Museum Day event.
	 */
	intlMuseumDay: string[];

	/**
	 * Backgrounds exclusively for the Wedding Season event.
	 */
	weddingSeason: string[];

	/**
	 * Backgrounds exclusively for the Fireworks Show events.
	 */
	fwShow: string[];

	/**
	 * Backgrounds exclusively for my birthday.
	 */
	bday: string[];

	/**
	 * Backgrounds exclusively for Halloween.
	 */
	halloween: string[];

	/**
	 * Backgrounds exclusively for the Turkey Day event.
	 */
	turkeyDay: string[];

	/**
	 * Backgrounds exclusively for the Toy Day event.
	 */
	toyDay: string[];

	/**
	 * Backgrounds exclusively for the New Years Event.
	 */
	nye: string[];
}

interface NameIdPair {
	name: string[];
	id: string[];
}

/**
 * Main interface that represents the data structure for modals.
 */
interface Modal extends NameIdPair {
	img: string[];
}

/**
 * Interface that represents the data structure for custom design modals.
 */
interface Designs extends NameIdPair {
	name2: string[];
}

export { Core, Music, Backgrounds, NameIdPair, Modal, Designs };