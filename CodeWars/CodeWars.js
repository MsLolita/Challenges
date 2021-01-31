'use strict'

// SpeedCode #2 - Array Madness
//
//function arrayMadness(a, b) {
//    return a.reduce((a, i) => a + i**2, 0) > b.reduce((a, i) => a + i**3, 0);
//}
//
//console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

// Powers of i
//
// Or pofi=n=>['1','i','-1','-i'][n%4]
//
// function pofi(n){
//     if (n % 2)
//         return (n - 3) % 4 ? 'i' : '-i'
//     else
//         return (n % 4) ? '-1' : '1';
// }
//
// console.log(pofi(284));

// Boggle Word Checker
//
// function checkWord(board, word) {
//     for (let y = 0; y < board.length; y++)
//         for (let x = 0; x < board[y].length; x++)
//             if (word[0] === board[y][x] && findNextLetter(board.map(arr => [...arr]), word.slice(1), y, x))
//                 return true;
//     return false;
// }
//
// function findNextLetter(board, word, y, x){
//     board[y][x] = '';
//     for (let j = y - 1; j - y !== 2; j++)
//         for (let i = x - 1; i - x !== 2; i++)
//             if (board[j] && board[j][i] === word[0] && word.length && findNextLetter(board.map(arr => [...arr]), word.slice(1), j, i))
//                 return true;
//     return !word;
// }
//
// console.log(checkWord([ [ 'T', 'T', 'M', 'D', 'A' ],
//     [ 'G', 'Y', 'I', 'N', 'N' ],
//     [ 'P', 'A', 'L', 'C', 'E' ],
//     [ 'I', 'A', 'U', 'L', 'G' ],
//     [ 'A', 'M', 'I', 'N', 'A' ] ], 'YTGPAUNGCLA'));

// Sum Mixed Array
//
// function sumMix(x){
//     return x.length ? +x.pop() + sumMix(x) : 0;
// }
//
// console.log(sumMix([1,4,2,9,9,3,4,8,7,6,6,4,4,7,9,9,9,4,9,7,1,2,0,2,1,1,5,8,4]));

// Recover a secret string from random triplets
//
// const recoverSecret = function codeIntriplets(triplets, message = [...new Set([].concat(...triplets))]) {
//     nextLetter: for (let letter of message){
//         for (let arr of triplets)
//             if (arr[1] === letter || arr[2] === letter)
//                 continue nextLetter;
//         return letter + codeIntriplets(triplets.map(arr => arr.filter(e => e !== letter)), message.filter(e => e !== letter));
//     }
//     return '';
// }
//
// console.log(recoverSecret([ [ 't', 's', 'f' ],
//     [ 'a', 's', 'u' ],
//     [ 'm', 'a', 'f' ],
//     [ 'a', 'i', 'n' ],
//     [ 's', 'u', 'n' ],
//     [ 'm', 'f', 'u' ],
//     [ 'a', 't', 'h' ],
//     [ 't', 'h', 'i' ],
//     [ 'h', 'i', 'f' ],
//     [ 'm', 'h', 'f' ],
//     [ 'a', 'u', 'n' ],
//     [ 'm', 'a', 't' ],
//     [ 'f', 'u', 'n' ],
//     [ 'h', 's', 'n' ],
//     [ 'a', 'i', 's' ],
//     [ 'm', 's', 'n' ],
//     [ 'm', 's', 'u' ] ]));

// Conway's Game Of Life
// function getGeneration(cells, generations){
//     let newGeneration = cells.map(arr => [...arr]);
//
//     for (; generations; generations--, newGeneration.deleteSquareOfZeros(), cells = newGeneration.map(arr => [...arr])){
//         newGeneration.addSquareOfZeros();
//         for (let y = 0; y !== newGeneration.length; y++)
//             for (let x = 0; x !== newGeneration[y].length; x++)
//                 switch (howMuchFriends(cells, y - 1, x - 1)) {
//                     case 2: break;
//                     case 3: newGeneration[y][x] = 1;
//                         break;
//                     default: newGeneration[y][x] = 0;
//                 }
//     }
//     return newGeneration;
// }
//
// function howMuchFriends(cells, y, x){
//     let amountFriends = 0;
//     for (let j = y - 1; j - y !== 2; j++)
//         for (let i = x - 1; i - x !== 2; i++)
//             if (cells && cells[j] && cells[j][i] && !(j === y && i === x))
//                 amountFriends += cells[j][i];
//     return amountFriends;
// }
//
// Array.prototype.addSquareOfZeros = function() {
//     for (let i = 2; i; i--){
//         this.reverse().map(arr => arr.reverse()).map(arr => arr.push(0));
//         this.push(Array.from({length: this[0].length}, _ => 0));
//     }
// }
//
// Array.prototype.deleteSquareOfZeros = function () {
//     for (let i = 2; i; i--){
//         if (!this.reverse().map(arr => arr.reverse() && arr[arr.length - 1]).includes(1))
//             this.map(arr => arr.pop()) && i++;
//         if (!this[this.length - 1].includes(1))
//             this.pop() && i++;
//     }
// }
//
// console.table(getGeneration([ [ 1, 1, 1, 0, 0, 0, 1, 0 ],
//     [ 1, 0, 0, 0, 0, 0, 0, 1 ],
//     [ 0, 1, 0, 0, 0, 1, 1, 1 ] ], 16))

// Most frequently used words in a text
// function topThreeWords(text) {
//     let frequently = new Object();
//     text.toLowerCase().replace(/(\w'?)+/g, word => (frequently[word] = ++frequently[word] || 1, word));
//     return Object.keys(frequently).sort((a, b) => frequently[b] - frequently[a]).slice(0, 3);
// }
// First version
// function topThreeWords(text) {
//     let frequently = new Object();
//     text.toLowerCase().split(/[^a-z']/g).forEach(word => frequently[word] = ++frequently[word] || 1);
//     return Object.entries(frequently).filter(([word]) => word.match(/[a-z]/))
//         .sort(([, a], [, b]) => b - a)
//         .slice(0, 3)
//         .map(([word]) => word);
// }
// console.log(topThreeWords("The poster caved among a doll among the jedi "))

// Next smaller number with the same digits
// function nextSmaller(n) {
//     const initialN = n = String(n);
//     let weirdElement = '', indexStartToChange;
//     for (let i = n.length -1; i; i--)
//         if (n[i] < n[+i - 1]){
//             weirdElement = n[+i - 1];
//             indexStartToChange = i - 1;
//             break;
//         }
//
//     const insteadWeirdEl = Math.max( ...n.slice(indexStartToChange +1).replace(new RegExp(`[${weirdElement}-9]`, "g"), '') );
//
//     n = n.split('');
//     n.splice(indexStartToChange, 0, insteadWeirdEl);
//     n.splice(n.lastIndexOf(`${insteadWeirdEl}`), 1);
//     n = Number(n.slice(0, indexStartToChange +1).join('') + n.slice(indexStartToChange +1).sort((a, b) => b - a).join(''));
//
//     return (weirdElement === '' || `${n}`.length !== initialN.length) ? -1 : n;
// }
//
// console.log(nextSmaller(709)); // -1
// console.log(nextSmaller(531)); // 513
// console.log(nextSmaller(2071)); // 2017
// console.log(nextSmaller(1253479)); // 1249753
// console.log(nextSmaller(777457)); // 775774

// Sum Strings as Numbers(we have all number unless number*e+24)
// function sumStrings(a, b) {
//     let sumResult = '', sumTemp = 0;
//
//     for (let i = 1; a.length || b.length; i++){
//         sumTemp = (+a[a.length - i] || 0) + (+b[b.length - i] || 0) + +(sumTemp > 9);
//         sumResult = (sumTemp > 9 ? `${sumTemp}`[1] : `${sumTemp}`) + sumResult;
//     }
//     return sumResult.replace(/^0+/, '');
// }
//
// console.log(sumStrings('50095301248058391139327916261','81055900096023504197206408605'));

// Permutations count
// function permutations(string) {
//     let maxPermutation = factorial(string.length);
//     let repeatLetters = {};
//     [...string].forEach(letter => repeatLetters[letter] = ++repeatLetters[letter] || 1 );
//     Object.values(repeatLetters).forEach(count => count > 1 ? maxPermutation = maxPermutation / factorial(count) : 0);
//
//     return permutationCalc(string, [], maxPermutation);
// }
//
// function permutationCalc(string, allCombinations, maxPermutation) {
//     const uniqueSurname = [...string].sort(() => Math.random() - 0.5)
//         .join('');
//     allCombinations.includes(uniqueSurname) || allCombinations.push(uniqueSurname) && maxPermutation--;
//     return maxPermutation ? permutationCalc(string, allCombinations, maxPermutation) : allCombinations;
// }
//
// function factorial(n){
//     return n ? n-- * factorial(n) : 1;
// }
//
// console.log(permutations("DCODE"));

// Strings Mix
// function mix(s1, s2) {
//     [s1, s2] = [s1.replace(/[^a-z']/g, ''), s2.replace(/[^a-z']/g, '')]
//     const [countLettersS1, countLettersS2, countLetter] = [countLetters(s1), countLetters(s2), []];
//     for (let [item, itemToPush = item] of new Set([...(s1 + s2)])){
//         if ((countLettersS1[item] || 0) > (countLettersS2[item] || 0)){
//             addLetters(itemToPush, countLettersS1, item, countLetter, '1');
//         }
//         else if ((countLettersS1[item] || 0) < (countLettersS2[item] || 0)){
//             addLetters(itemToPush, countLettersS2, item, countLetter, '2');
//         }
//         else if (typeof countLettersS1[item] !== "undefined") { /*check on undefined*/
//             addLetters(itemToPush, countLettersS1, item, countLetter, '=');
//         }
//     }
//
//     return countLetter.sort((a, b) => a[0] > b[0] ? 1 : -1)
//         .sort((a, b) => (a[0] === b[0] &&  a[2] < b[2]) ? -1 : 1) // a.length === b.length &&
//         .sort((a, b) => b.length - a.length)
//         .join('/');
// }
//
// function addLetters(itemToPush, countLettersS, item, countLetter, type) {
//     while (itemToPush.length !== countLettersS[item]) itemToPush += item;
//     countLetter.push(`${type}:${itemToPush}`)
// }
//
// function countLetters(s){
//     let objOfLetters = {};
//     [...s].forEach(item =>
//         objOfLetters[item] = (objOfLetters[item] || 0) +1
//     );
//     return Object.fromEntries(Object.entries(objOfLetters)
//         .filter(([, value]) => value > 1 ));
// }}
//
// console.log(mix("JcfpbMsombEhucy(wyln0wash.mnvi", ",yqzv=waeq8ggve>zipc1uifl4nacl"));
// // "1:bb/1:hh/1:mm/1:nn/1:ss/1:ww/1:yy/2:aa/2:ee/2:gg/2:ii/2:ll/2:qq/2:vv/2:zz/=:cc"
//
// console.log(mix("JhemoXxdqbWelsxTlvpk&hpbi'huxr", "IjbudRovmiLpzyo4gjagCtvoc8tnux"))
// // "1:hhh/1:xxx/2:ooo/1:bb/1:ee/1:ll/1:pp/2:gg/2:jj/2:tt/2:uu/2:vv"

// Number of trailing zeros of N!
// somebody: return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
// function zeros (n) {
//     return (Math.floor(Math.log(n) / Math.log(5)) !== k ) && n > 4 ? Math.floor( n / Math.pow(5, k++) + zeros (n, k) ): Math.floor( n / Math.pow(5, k));
// }
// Work but time is out:
// function zeros (n) {
//     let amountFive = 0;
//     for (let i = 5; i <= n; i+=5){
//         // console.log(i);
//         let currentNum = i;
//         while (!(currentNum % 5)) { amountFive++; currentNum /= 5; }
//     }
//     return amountFive;
// }
//
// console.log(zeros(50));

// Snail
// snail = function(array) {
//     let snail = [], endOfPushing = 0;
//
//     if (![].concat(array).length)
//         return []
//     for(let y = 0, x = 0, turnIterate = 1, element = 1; element < array.length ** 2 +1;){
//         for(let amountToPush = 0; amountToPush < (array.length - endOfPushing); element++, amountToPush++){
//             if (turnIterate % 2 === 0){
//                 if (turnIterate % 4 === 0)
//                     y--;
//                 else y++;
//             } else {
//                 if ((turnIterate - 3) % 4 === 0)
//                     x--;
//                 else x++;
//             }
//             snail.push(array[y][x-1]);
//         }
//         ((++turnIterate) % 2 === 0) && endOfPushing++;
//     }
//     return snail;
// }
//
// console.log(snail([[1,2],[3,4]]))

// Extract the domain name from a URL
// function domainName(url){
//     return url.replace(/https?:\/\/|www./g, '')
//         .split('.')[0];
// }
//
// console.log(domainName('http://google.com'));
// console.log(domainName('http://www.zombie-bites.com'));
// Find in order missing letter
// function findMissingLetter(array) {
//     return String.fromCharCode(array.find((item, index) => item.charCodeAt(0)+1 !== array[index +1].charCodeAt(0) ).charCodeAt(0)+1);
// }
// console.log( findMissingLetter(["a","b","c","d","f"]) );

// Build a pile of Cubes
// function findNb(m, n = 0) {
//     m -= ++n ** 3;
//     return (m > 0) ? findNb(m, n) : m === 0 ? n : -1;
// }
//
// console.log(findNb(4183059834009));

// Delete replies elements if they replies more than N times
// function deleteNth(arr,n){
//     let amountOfEl = new Object();
//     return arr.filter(item => (amountOfEl[item] = (++amountOfEl[item] || 0)) < n);
// }
//
// console.log(deleteNth([1,2,3,1,2,1,2,3],2) );

// Reverse words if length > 4 in string
// function spinWords(sentence){
//     return sentence.split(' ').map(item => item.length > 4 ? [...item].reverse().join('') : item).join(' ');
// }
//
// console.log(spinWords("Just kidding there is still one more"));

// Bouncing Ball
// function bouncingBall(h,  bounce,  window, count = -1) {
//     h *= bounce;
//     if (!~count && (window > h || !(0 > bounce && bounce < 1)))
//         return -1;
//     else count += 2;
//     return window < h ? bouncingBall(h,  bounce,  window, count) : count;
// }
//
// console.log(bouncingBall(30.0, 0.66, 1.5));

//Convert digit into binary form(1011010111)
// function toBinary(n){
//     let binaryForm = n % 2;
//     n = Math.floor(n / 2);
//     return n ? binaryForm + toBinary(n) * 10 : binaryForm;
// }
//
// console.log( toBinary(324) );

let square_sums_row = function(n) {
    let sortArray = [], sequenceSquare = [];
    sortArray = pushInArray(sortArray, n);

    for (let k of sortArray){
        console.log('start 1.' + k);

        sequenceSquare.push(k);
        console.log(sequenceSquare, 'k');
        sortArray.splice(k -1, 1);
        for (let j of sortArray){
            //console.log('start 2')
            for (let i of sortArray){
                if (Number.isInteger( Math.sqrt(sequenceSquare[sequenceSquare.length -1] + i ) ) ){
                    sortArray = sortArray.filter(item => item !== i);
                    console.log(sequenceSquare, 'sequenceSquare')
                    //console.log(sequenceSquare[sequenceSquare.length -1] + i, i)
                    sequenceSquare.push(i);
                }

                if (!sortArray.length){
                    console.log(sequenceSquare, 'sajdlaks')
                    return sequenceSquare;
                }
            }
            //console.log('end 2')
        }
        console.log(sequenceSquare, '----------------------------')
        //sequenceSquare = sequenceSquare.slice(0, k-1);
        sortArray = pushInArray(sortArray, n);
        console.log(sequenceSquare)
        console.log('end 1.' + k)
    }

    console.log(sequenceSquare, '     pre - last', sortArray ,' adasdasdasd');

    // return !sortArray.length ? square_sums_row(n) : sortArray;
}

function pushInArray(sortArray, n){
    return Array.from({length: n}, (_,i) => i+1)
}

// unique elements with order
// let uniqueInOrder = (iterable) => [...iterable].filter((item, index, array) => item !== array[index +1]);
//
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// return amount of symbols which repeat
// function duplicateCount(text, amountDuplicate = 0){
//     let whatRepeat = {};
//     text.toLowerCase().split('').map(item => {
//         whatRepeat[item] = (whatRepeat[item] || 0) +1;
//         return whatRepeat[item] === 2 && amountDuplicate++;
//     });
//     return amountDuplicate;
// }
//
// console.log(duplicateCount('Indivisibilities'));

// isPrime
// const isPrime = num => {
//   for (let i = 2; i <= num ** .5; i++) {
//     if (!(num % i)) return false;
//   }
//   return num > 1;
// }
//
// function isPrime(num, i = 1) {
//     return (++i !== num && (num % i) === 0 || num <= 1) ? false : ( i === num ? true : isPrime(num, i) );
// }
// console.log(isPrime(10000000));

// valid Pin-code
// function validatePIN (pin) {
//     return (pin.length == 4 || pin.length == 6) && pin.match(/[0-9]/g) != null;
// }
// console.log(validatePIN(`234 `));

// fizzBuzz (somebody make: solution= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y))
// function solution(number){
//     return (--number && number > 0 ) ? ( ( (number % 3 === 0 || number % 5 === 0)) ? number : 0 ) + solution(number) : number < 0 ? 0 : number;
// }
// console.log(solution(10));

//Find Dividers
// function getDivisorsCnt(n, total = 0){
//     for (let i = 1; i <= n; total += !Boolean(n % i++));
//         return total;
// }
// console.log(getDivisorsCnt(10));
// 99 = 9*9 = 81 = 8*1 = 8 - 2 times
// function persistence(num) {
//     return `${num}`.length > 1 ? 1 + persistence([...`${num}`].reduce((con, item) => con * +item)) : 0;
// }
// console.log(persistence(999));
