'use strict'

let MaxPower = class {
    constructor(arrayOfNums) {
        this.arrayOfNums = arrayOfNums;
    }

    maxPowerOfTwoNum() {
        let maxNum = 0;
        this.arrayOfNums.forEach((item, index, array) => {
            for (let value = index +1; value < array.length; ++value)
                if (maxNum < item * array[value])
                    maxNum = item * array[value];
        });
        return maxNum;
    }
};

console.log(new MaxPower([1, 3, 2, 2, 3, 0]).maxPowerOfTwoNum());