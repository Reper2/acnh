import * as timeSys from "./time.js";

var intlmuseumday =
    timeSys.date == '5-18' ||
    timeSys.date == '5-19' ||
    timeSys.date == '5-20' ||
    timeSys.date == '5-21' ||
    timeSys.date == '5-22' ||
    timeSys.date == '5-23' ||
    timeSys.date == '5-24' ||
    timeSys.date == '5-25' ||
    timeSys.date == '5-26' ||
    timeSys.date == '5-27' ||
    timeSys.date == '5-28' ||
    timeSys.date == '5-29' ||
    timeSys.date == '5-30' ||
    timeSys.date == '5-31';
var mayday =
    timeSys.date == '4-29' ||
    timeSys.date == '4-30' ||
    timeSys.date == '5-1' ||
    timeSys.date == '5-2' ||
    timeSys.date == '5-3' ||
    timeSys.date == '5-4' ||
    timeSys.date == '5-5' ||
    timeSys.date == '5-6' ||
    timeSys.date == '5-7';
var weddingseason = timeSys.month == '6';
var bday = timeSys.date == '10-1';
var halloween = timeSys.date == '10-31';
var turkeyday = timeSys.date == '11-25';
var toyday = timeSys.date == '12-24';
var nye = timeSys.date == '12-31';
var nye_1h = timeSys.dateHour == '12-31 23';
var nye_30m = timeSys.dateTime == '12-31 23:30';
var nye_10m = timeSys.dateTime == '12-31 23:50';
var nye_5m = timeSys.dateTime == '12-31 23:55';
var nye_happynewyear1 = timeSys.dateTime == '1-1 0:00';
var nye_happynewyear2 =
    // starts 5 min before as it takes 3.2 min for everything to finish loading and if the user hasn't already got the file cached
    timeSys.dateTime == '12-31 11:55' ||
    timeSys.dateTime == '12-31 11:56' ||
    timeSys.dateTime == '12-31 11:57' ||
    timeSys.dateTime == '12-31 11:58' ||
    timeSys.dateTime == '12-31 11:59' ||
    nye_happynewyear1;
var nye_midnight = timeSys.dateHour == '1-1 0';

export default {
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