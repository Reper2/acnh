/*
 * tdy = today
 * Y = current year
 * M = current month
 * d = current date (w/out month)
 * D = current date (w/ month)
 * h = current hours
 * m = current minutes
 * 
 * t = current time
 * 
 * D_h = date and hours
 * D_t = date and time
*/

var tdy = new Date();

var Y = tdy.getFullYear();
var M = tdy.getMonth() + 1;
var d = tdy.getDate();
var D = M + '-' + d;
var h = tdy.getHours();
var m = tdy.getMinutes();

var t = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');

var D_h = D, h;
var D_t = D, t;

export { tdy, Y, M, d, D, h, m, t, D_h, D_t };