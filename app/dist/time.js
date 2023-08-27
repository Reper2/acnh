export const tdy = new Date();
const time = {
    yr: tdy.getFullYear(),
    mo: tdy.getMonth() + 1,
    date: tdy.getDate(),
    moDate: function () { return this.mo + "-" + this.date; },
    day: tdy.getDay() + 1,
    hr: tdy.getHours(),
    min: tdy.getMinutes()
};
export default time;
//# sourceMappingURL=time.js.map