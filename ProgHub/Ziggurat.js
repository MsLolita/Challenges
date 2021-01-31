'use strict'

function ziggurat(deep) {
    let dimension = deep *2 -1,
        stepOn = 1;
    for (let y = 1; y <= dimension ; y++){
        let row = '';
        for (let x = 1; x <= dimension; x++){
            squareMaker(true, x, y);

            row += (stepOn + ' ');

            squareMaker(false, x, y);
        }
    }
    function squareMaker(upOrDown, x, y) {
        for (let i = 1; i < deep; i++)
            if (x > i && y > i && x < dimension - i + 1 && y < dimension - i + 1)
                upOrDown ? stepOn++ : stepOn--;
    }
}

ziggurat(1);