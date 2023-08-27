export const tdy = new Date();
const time = {
	/**
	 * Gets the year, using local time.
	 */
	yr: tdy.getFullYear(),

	/**
	 * Gets the month, using local time.
	 */
	mo: tdy.getMonth() + 1,

	/**
	 * Gets the day-of-the-month, using local time.
	 */
	date: tdy.getDate(),

	/**
	 * Gets the date (month + day-of-the-month) in format MM-DD, using local time.
	 */
	moDate: function (): string { return this.mo + "-" + this.date; },

	/**
	 * Gets the day of the week, using local time.
	 */
	day: tdy.getDay() + 1,

	/**
	 * Gets the hours in a date, using local time.
	 */
	hr: tdy.getHours(),

	/**
	 * Gets the minutes of a Date object, using local time.
	 */
	min: tdy.getMinutes()
};
export default time;