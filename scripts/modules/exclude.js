import * as time from "./time.js"

var isNotExcluded =
    time.date !== '4-29' &&
    time.date !== '4-30' &&
    time.date !== '5-1' &&
    time.date !== '5-2' &&
    time.date !== '5-3' &&
    time.date !== '5-4' &&
    time.date !== '5-5' &&
    time.date !== '5-6' &&
    time.date !== '5-7' &&
    time.date !== '5-18' &&
    time.date !== '5-19' &&
    time.date !== '5-20' &&
    time.date !== '5-21' &&
    time.date !== '5-22' &&
    time.date !== '5-23' &&
    time.date !== '5-24' &&
    time.date !== '5-25' &&
    time.date !== '5-26' &&
    time.date !== '5-27' &&
    time.date !== '5-28' &&
    time.date !== '5-29' &&
    time.date !== '5-30' &&
    time.date !== '5-31' &&
    time.date !== '10-1' &&
    time.date !== '10-31' &&
    time.date !== '11-25' &&
    time.date !== '12-24' &&
    time.date !== '12-31' &&
    time.dateTime !== '12-31 11:55' &&
    time.dateTime !== '12-31 11:56' &&
    time.dateTime !== '12-31 11:57' &&
    time.dateTime !== '12-31 11:58' &&
    time.dateTime !== '12-31 11:59' &&
    time.dateTime !== '1-1 0:00' &&
    time.dateHour !== '1-1 0';

export default { isNotExcluded };