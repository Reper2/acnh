var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var hour = today.getHours();
var date = month + '-' + today.getDate();
var time = hour + ':' + today.getMinutes();
var dateTime = date + ' ' + time;
var dateHour = date + ' ' + hour;

export {
    today,
    year,
    month,
    hour,
    date,
    time,
    dateTime,
    dateHour
};