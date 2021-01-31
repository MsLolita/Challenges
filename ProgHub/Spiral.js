'use strict'

class Spiral {
    constructor(dimension) {
        this.dimension = dimension;
    }

    inSquare() {
        let spiralMatrix = [ [] ];

        for(let i = 0; i < this.dimension -1; i++){
            let row = [];
            for(let j = 0; j < this.dimension -1; j++){
                row.push(0);
            }
            spiralMatrix.push( row );
        }

        let endOfPushing = 0;
        for(let y = 0, x = 0, turnIterate = 1, element = 1; element < this.dimension ** 2 +1;){
            for(let amountToPush = 0; amountToPush < (this.dimension - endOfPushing) ; element++, amountToPush++){
                if (turnIterate % 2 === 0){
                    if (turnIterate % 4 === 0)
                        y--;
                    else y++;
                } else {
                    if ((turnIterate - 3) % 4 === 0)
                        x--;
                    else x++;
                }
                spiralMatrix[y].splice(x -1,1, element);
            }
            ((++turnIterate) % 2 === 0) && endOfPushing++;
        }
        for(let i = 0; i < this.dimension; i++){
            let row = '';
            for(let j = 0; j < this.dimension ; j++){
                row += spiralMatrix[i][j] >= 100 ? spiralMatrix[i][j] + ' ' : ((spiralMatrix[i][j] >= 10) ? ( spiralMatrix[i][j] + '  ' ) : spiralMatrix[i][j] + '   ');
            }
            console.log(row);
        }
        //return spiralMatrix;
    }
}

console.log(new Spiral(4).inSquare());
