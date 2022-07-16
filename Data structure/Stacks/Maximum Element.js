'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
    let numStack=[]
    let answer=[]
    for (let i in operations)
    {
        if (operations[i][0]=='1')
        {
            numStack.push(parseInt(operations[i].slice(2)))
        }
        else if (operations[i][0]=='2')
        {
            numStack.pop()
        }
        else if (operations[i][0]=='3')
        {
            answer.push(Math.max(...numStack))
        }
    }
    return answer;
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let ops = [];

    for (let i = 0; i < n; i++) {
        const opsItem = readLine();
        ops.push(opsItem);
    }

    const res = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
