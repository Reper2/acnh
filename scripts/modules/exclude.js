import * as time from "./time.js"

var isNotExcluded =
    time.M !== '6' &&
    time.D !== '4-29' &&
    time.D !== '4-30' &&
    time.D !== '5-1' &&
    time.D !== '5-2' &&
    time.D !== '5-3' &&
    time.D !== '5-4' &&
    time.D !== '5-5' &&
    time.D !== '5-6' &&
    time.D !== '5-7' &&
    time.D !== '5-18' &&
    time.D !== '5-19' &&
    time.D !== '5-20' &&
    time.D !== '5-21' &&
    time.D !== '5-22' &&
    time.D !== '5-23' &&
    time.D !== '5-24' &&
    time.D !== '5-25' &&
    time.D !== '5-26' &&
    time.D !== '5-27' &&
    time.D !== '5-28' &&
    time.D !== '5-29' &&
    time.D !== '5-30' &&
    time.D !== '5-31' &&
    time.D !== '10-1' &&
    time.D !== '10-31' &&
    time.D !== '11-25' &&
    time.D !== '12-24' &&
    time.D !== '12-31' &&
    time.D_t !== '12-31 11:55' &&
    time.D_t !== '12-31 11:56' &&
    time.D_t !== '12-31 11:57' &&
    time.D_t !== '12-31 11:58' &&
    time.D_t !== '12-31 11:59' &&
    time.D_h !== '1-1 0';

export default isNotExcluded;