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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    let answer=-Infinity
    for (let i=0;i<arr.length-2;i++)
    {
        for(let j=0;j<arr[i].length-2;j++)
        {
            let sum=0
            for(let k=i;k<=i+2;k++)
            {
                for(let n=j;n<=j+2;n++)
                {
                    if((n==j+1&&k==i+1)||k!=i+1)
                    sum+=arr[k][n]
                }
            }
            if (answer<sum)
            {
                answer=sum
            }
        }
    }
    return answer
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}