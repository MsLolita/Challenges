'use strict'

class Turing{
    allCombinations = [];
    constructor(surname) {
        [this.surname, this.surnameToSort] = [surname, [...surname]];
    }

    sequenceNumber(){
        const uniqueSurname = (this.surnameToSort).sort(() => Math.random() - 0.5)
                                                  .join('');
        if (!this.allCombinations.includes(uniqueSurname))
            this.allCombinations.push(uniqueSurname);

        if (this.allCombinations.length !== Turing.factorial((this.surname).length))
            this.sequenceNumber();
        return this.allCombinations.sort().indexOf(this.surname) +1;
    }

    static factorial(n) {
        return n ? n-- * this.factorial(n) : 1;
    }
}

console.log(new Turing('turing').sequenceNumber())
