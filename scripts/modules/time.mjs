/*
 * tdy = today
 * Y = current year
 * M = current month
 * d = current date (without month)
 * D = current date (with month)
 * h = current hours
 * m = current minutes
 * s = current seconds
 * ms = current milliseconds (which is 3 digit if you didn't know)
 * 
 * t = current time
 * Y_M_d_t_s_ms__t = current time (with year, month, date, seconds, milliseconds)
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
var s = tdy.getSeconds();
var ms = tdy.getMilliseconds();

var t = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
var Y_M_d_t_s_ms__t = String(Y).padStart(4, '0') + '-' + String(M).padStart(2, '0') + '-' + String(d).padStart(2, '0') + ' ' + t + ':' + String(s).padStart(2, '0') + ':' + String(ms).padStart(3, '0');

var D_h = D, h;
var D_t = D, t;

export {
    tdy,
    Y, M, d, D, h, m, s, ms,
    t, Y_M_d_t_s_ms__t,
    D_h, D_t
};