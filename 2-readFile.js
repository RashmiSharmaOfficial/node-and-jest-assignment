var fs = require("fs");
var readline = require("readline-sync")

//--------- reading file in asynchronous way -----------
// fs.readFile('input.txt', 'utf-8', function(err, data){
//     if(err)
//         console.log('there is an error', err);
//     else
//         console.log(data);
// })

/*

there is an error [Error: ENOENT: no such file or directory, open 'input.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'input.txt'
}
*/

data = fs.readFileSync('input.txt').toString()
// console.log(data);
console.log('No of words', data.trim().split(' ').length);

let count = 0;
for(let i = 0; i < data.length; i++){
  if(i != ' '){
    count += 1;
  }
}

console.log('number of characters ', count);

noLine = data.split("\n")
console.log('number of lines ', noLine.length);


// check if a word exist in the file or not
inpStr = readline.question("Enter the string you wanna search for?")
pos = data.indexOf(inpStr);
console.log(`${inpStr} exist at position ${pos}`);

// find number of occurences
occurence = 0;

while(pos > -1){
  occurence += 1;
  pos = data.indexOf(inpStr, ++pos);
}

console.log(`Number of times ${inpStr} exist ${occurence}`);