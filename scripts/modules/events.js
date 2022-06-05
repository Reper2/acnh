import * as time from "./time.js";

var intlmus =
    time.D == '5-18' ||
    time.D == '5-19' ||
    time.D == '5-20' ||
    time.D == '5-21' ||
    time.D == '5-22' ||
    time.D == '5-23' ||
    time.D == '5-24' ||
    time.D == '5-25' ||
    time.D == '5-26' ||
    time.D == '5-27' ||
    time.D == '5-28' ||
    time.D == '5-29' ||
    time.D == '5-30' ||
    time.D == '5-31';
var maydaytour =
    time.D == '4-29' ||
    time.D == '4-30' ||
    time.D == '5-1' ||
    time.D == '5-2' ||
    time.D == '5-3' ||
    time.D == '5-4' ||
    time.D == '5-5' ||
    time.D == '5-6' ||
    time.D == '5-7';
var wedseas = time.M == '6';
var bday = time.D == '10-1';
var h = time.D == '10-31';
var turkey = time.D == '11-25';
var toy = time.D == '12-24';

var nye = time.D == '12-31';
var nye_1h = time.dh == '12-31 23';
var nye_30m = time.D_t == '12-31 23:30';
var nye_10m = time.D_t == '12-31 23:50';
var nye_5m = time.D_t == '12-31 23:55';
var nye_hny = time.D_t == '1-1 0:00';
var nye_midn = time.D_t == '1-1 0';

export {
    intlmus, maydaytour, wedseas, bday, h, turkey, toy,
    nye, nye_1h, nye_30m, nye_10m, nye_5m, nye_hny, nye_midn
};