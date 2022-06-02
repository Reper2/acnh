import * as time from "./time.js";

var intlmuseumday =
    time.date == '5-18' ||
    time.date == '5-19' ||
    time.date == '5-20' ||
    time.date == '5-21' ||
    time.date == '5-22' ||
    time.date == '5-23' ||
    time.date == '5-24' ||
    time.date == '5-25' ||
    time.date == '5-26' ||
    time.date == '5-27' ||
    time.date == '5-28' ||
    time.date == '5-29' ||
    time.date == '5-30' ||
    time.date == '5-31';
var mayday =
    time.date == '4-29' ||
    time.date == '4-30' ||
    time.date == '5-1' ||
    time.date == '5-2' ||
    time.date == '5-3' ||
    time.date == '5-4' ||
    time.date == '5-5' ||
    time.date == '5-6' ||
    time.date == '5-7';
var weddingseason = time.month == '6';
var bday = time.date == '10-1';
var halloween = time.date == '10-31';
var turkeyday = time.date == '11-25';
var toyday = time.date == '12-24';
var nye = time.date == '12-31';
var nye_1h = time.dateHour == '12-31 23';
var nye_30m = time.dateTime == '12-31 23:30';
var nye_10m = time.dateTime == '12-31 23:50';
var nye_5m = time.dateTime == '12-31 23:55';
var nye_happynewyear1 = time.dateTime == '1-1 0:00';
var nye_happynewyear2 =
    // starts 5 min before as it takes 3.2 min for everything to finish loading and if the user hasn't already got the file cached
    time.dateTime == '12-31 11:55' ||
    time.dateTime == '12-31 11:56' ||
    time.dateTime == '12-31 11:57' ||
    time.dateTime == '12-31 11:58' ||
    time.dateTime == '12-31 11:59' ||
    nye_happynewyear1;
var nye_midnight = time.dateHour == '1-1 0';

export {
    intlmuseumday,
    mayday,
    weddingseason,
    bday,
    halloween,
    turkeyday,
    toyday,
    nye,
    nye_1h,
    nye_30m,
    nye_10m,
    nye_5m,
    nye_happynewyear1,
    nye_happynewyear2,
    nye_midnight
};