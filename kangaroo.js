'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if( x1 >= x2 || x2 <= 0 || v1 < 1 || v2 < 1 || v2 > v1 ) {
        return 'NO';
    }
    let res = 'NO';
    let k1 = x1 + 0, k2 = x2 + 0;
    do {
        if (k1 === k2) {
            res = 'YES';
        } else {
            k1 += v1;
            k2 += v2;
        }
    } while (k1 < 10000 && k2 < 10000 && k1 != k2 && k1 < k2);
    return res;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const x1V1X2V2 = readLine().split(' ');
    const x1 = parseInt(x1V1X2V2[0], 10);
    const v1 = parseInt(x1V1X2V2[1], 10);
    const x2 = parseInt(x1V1X2V2[2], 10);
    const v2 = parseInt(x1V1X2V2[3], 10);
    let result = kangaroo(x1, v1, x2, v2);
    ws.write(result + "\n");
    ws.end();
}

function sum(a, b) {
    return a + b;
}

module.exports = {sum, kangaroo};