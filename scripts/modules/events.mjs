import * as time from "./time.mjs";

const
    /* HELP NEEDED!
    * Festivale's date is dynamic and never the same.
    * This makes it incredibly hard to create an event date variable for it.
    * If you would be kind enough to add it for me, I would really appreciate it.
    * Here's some very... complex code(s) that may be useful:
    * https://github.com/Reper2/acnh-apps/tree/master/Scripts
    **/

    /* HELP NEEDED!
    * Bunny Day's date is dynamic and never the same.
    * This makes it incredibly hard to create an event date variable for it.
    * If you would be kind enough to add it for me, I would really appreciate it.
    * Here's some very... complex code(s) that may be useful:
    * https://github.com/Reper2/acnh-apps/tree/master/Scripts
    **/

    // International Museum Day
    intlmusday =
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
                                                        time.D == '5-31',
                                                        /////////////////
                                                    /////////////////
                                                /////////////////
                                            /////////////////
                                        /////////////////
                                    /////////////////
                                /////////////////
                            /////////////////
                        /////////////////
                    /////////////////
                /////////////////
            /////////////////
        /////////////////                         ////////////////////////////////////////////////////////////////
    /////////////////                            ////////////////////////////////////////////////////////////////
    ///////                                     ////////////////////////////////////////////////////////////////


    // May Day Tour
    maydaytour =
    time.D == '4-29' ||
        time.D == '4-30' ||
            time.D == '5-1' ||
                time.D == '5-2' ||
                    time.D == '5-3' ||
                        time.D == '5-4' ||
                            time.D == '5-5' ||
                                time.D == '5-6' ||
                                    time.D == '5-7',
                                    ////////////////
                                ////////////////
                            ////////////////
                        ////////////////
                    ////////////////
                ////////////////
            ////////////////
        ////////////////                    ///////////////////////////////////////////////////////
    ////////////////                       ///////////////////////////////////////////////////////
    //////////////                        ///////////////////////////////////////////////////////


    // Wedding Season
    wedseas = time.M == '6',

    // Winter! (southern hemisphere, no northern)
    winter =
        time.M == '6' ||
            time.M == '7' ||
                time.m == '8',
                //////////////
            ////////////////
        ////////////////
    ////////


    /* HELP NEEDED!
    * The Sunday Night August Fireworks dates are quite complicated and never the same.
    * This makes it incredibly hard to create an event date variable for it.
    * If you would be kind enough to add it for me, I would really appreciate it.
    * Here's some very... complex code(s) that may be useful:
    * https://github.com/Reper2/acnh-apps/tree/master/Scripts
    **/

    // My Birthday
    bday = time.D == '10-1',

    // Halloween
    halloween = time.D == '10-31',

    /* HELP NEEDED!
    * Turkey Day's date is dynamic and never the same.
    * This makes it incredibly hard to create a event date variable for it.
    * If you would be kind enough to add it for me, I would really appreciate it.
    * Here's some very... complex code(s) that may be useful:
    * https://github.com/Reper2/acnh-apps/tree/master/Scripts
    **/

    // Toy Day
    toyday = time.D == '12-24',

    // New Years Event
    nye = time.D == '12-31',
    nye_1h = time.dh == '12-31 23',
    nye_30m = time.D_t == '12-31 23:30',
    nye_10m = time.D_t == '12-31 23:50',
    nye_5m = time.D_t == '12-31 23:55',
    nye_hny = time.D_t == '1-1 0:00',
    nye_midn = time.D_t == '1-1 0',
    
    reg =                                                        ///////
        !intlmusday &&                                            /////////									////////////
            !maydaytour &&                                         ///////////							  ///////////////
                !wedseas &&                                         /////////////					     /////////////////
                    !bday &&                                         ///////////////                     ///////////////////
                        !halloween &&                                 /////////////////                 /////////////////////
                            !toyday &&////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                !nye &&//////////////////////////////////////////////////////////////////////////////////////////////////////  //////
                                    !nye_midn;////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        ///////////                                                                    /////////////////////
                    //////////////                                                                      ///////////////////
                ////////////////                                                                         /////////////////
            ///////////////////                                          							      ///////////////
        /////////////////                                                                                   ////////////
    /////////

export {
    intlmusday, maydaytour, wedseas, winter, bday, halloween, toyday,
    nye, nye_1h, nye_30m, nye_10m, nye_5m, nye_hny, nye_midn,
    reg
};