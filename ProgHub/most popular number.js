'use strict'

function popularNumber(arr) {
    let popularElements = {}, max = [0, 0];
    arr.map(key => {
        popularElements[key] = (popularElements[key] || 0) + 1;

        if (popularElements[key] > max[1])
            max = [key, popularElements[key]];

    });

    return max[0];
}
let array = [1, 1, 3, 3, 2, 2, 2, 3, 1];

console.log(popularNumber(array));