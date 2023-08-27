import { fetchDB } from "./core.js";
import Modal from "./modal.js";
import path from "./paths.js";
function getSlicedElems(arr, ...slices) {
    const newArr = [];
    for (const range of slices) {
        if (range.length == 2) {
            const _s = range[0];
            const _e = range[1];
            if (_s >= 0 && _s <= arr.length && _e >= 0 && _e <= arr.length) {
                const slice = arr.slice(_s, _e + 1);
                newArr.push(...slice);
            }
            else {
                _s < 0 ? console.error(_s, "< 0")
                    : _s > arr.length ? console.error(_s, ">", arr.length)
                        : console.error("TypeError or UnknownError with value of `_s`.");
                _e < 0 ? console.error(_e, "< 0")
                    : _e > arr.length ? console.error(_e, ">", arr.length)
                        : console.error("TypeError or UnknownError with value of `_e`.");
                console.error("Failed to slice. Ensure `_s` (start index) and `_e` (end index) are positive integers and less than", arr.length);
            }
        }
        else if (range.length == 1) {
            const _i = range[0];
            if (_i >= 0 && _i <= arr.length) {
                const slice = arr.slice(_i, _i + 1);
                newArr.push(...slice);
            }
            else {
                _i < 0 ? console.error(_i, "< 0")
                    : _i > arr.length ? console.error(_i, ">", arr.length)
                        : console.error("Possible TypeError: `_i` is not of type `number`");
                console.error("Failed to slice. Ensure `_i` (index) is a positive integer and less than", arr.length);
            }
        }
        else {
            range.length <= 0 ? console.error(range.length, "<= 0")
                : range.length > 2 ? console.error(range.length, "> 2")
                    : console.error("Possible TypeError: `range` of `slices` is not of type `number[]`");
            console.error("Failed to slice. Ensure `range` has 1-2 numbers in the slice pair.");
        }
    }
    return newArr;
}
function popSet(obj, slices) {
    return {
        name: getSlicedElems(obj.name, ...slices),
        name2: getSlicedElems(obj.name2, ...slices),
        id: getSlicedElems(obj.id, ...slices)
    };
}
const s = {
    clothing: [[0, 7], [9, 13], [15], [17, 20]],
    utils: [[6], [22, 23], [27]],
    street: [[0, 1], [5], [7, 10], [12, 14], [17, 18], [24, 26], [28]],
    clover: [[2, 3], [11], [20], [29], [31]],
    zelda: [[4], [15, 16], [19], [21]]
};
const sets = {};
const des = {
    _: await fetchDB("designs"),
    pro: await fetchDB("designs-pro"),
    qr: await fetchDB("designs-qr")
};
$(() => {
    const _full = `${location.protocol}//${location.host}`;
    const cleanURL = location.search == "?ogname=1" ? location.href.replace("?ogname=1", "") : location.search == "?ogname=0" ? location.href.replace("?ogname=0", "") : location.href;
    switch (cleanURL) {
        case `${_full + path.dessets}clothing`:
            sets.clothing = popSet(des.pro, s.clothing);
            new Modal({ o: sets.clothing, l: sets.clothing.id.length, d: sets.clothing }).constructII(sets.clothing, path.despro);
            break;
        case `${_full + path.dessets}utils`:
            sets.utils = popSet(des._, s.utils);
            new Modal({ o: sets.utils, l: sets.utils.id.length, d: sets.utils }).constructII(sets.utils, path.des);
            break;
        case `${_full + path.dessets}street`:
            sets.street = popSet(des._, s.street);
            new Modal({ o: sets.street, l: sets.street.id.length, d: sets.street }).constructII(sets.street, path.des);
            break;
        case `${_full + path.dessets}clover`:
            sets.clover = popSet(des._, s.clover);
            new Modal({ o: sets.clover, l: sets.clover.id.length, d: sets.clover }).constructII(sets.clover, path.des);
            break;
        case `${_full + path.dessets}zelda`:
            sets.zelda = popSet(des._, s.zelda);
            new Modal({ o: sets.zelda, l: sets.zelda.id.length, d: sets.zelda }).constructII(sets.zelda, path.des);
            break;
    }
});
//# sourceMappingURL=designs-sets.js.map