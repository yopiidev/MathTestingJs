const percom = require('percom');
const assert = require('assert');

const testMultipleOfThreeByBruteForce = () => {
    // motivation => https://twitter.com/trivia_hour/status/1560161285483876352
    const targetNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberSets = percom.per(targetNumbers, targetNumbers.length);
    const expected = numberSets.length;
    let actual = 0;
    
    for (let numberSet of numberSets) {
        const number = Number(numberSet.join(''));
        if (number % 3 == 0) {
            actual++;
        }
    }

    console.log('actual', actual);
    console.log('expected', expected);
    assert.equal(actual, expected);
}

testMultipleOfThreeByBruteForce();