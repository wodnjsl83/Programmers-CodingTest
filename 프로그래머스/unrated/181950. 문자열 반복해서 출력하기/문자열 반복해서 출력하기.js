const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n))
});


// 또 다른 풀이
let str = "string";
let n = 5;
let answer = "";

for(let i = 0; i<5; i++){
    answer += str;
}
console.log(answer);
