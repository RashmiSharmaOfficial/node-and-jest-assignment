var fs = require("fs");
var fileData = "";

var readerStream = fs.createReadStream('input.txt', 'utf-8')

readerStream.on('data', function(readData){
    fileData = readData;
})

readerStream.on('end', function(){
    console.log('read data: ', fileData);
})

readerStream.on('error', function(err){
    console.log('read data: ', err);
})

// copying data of input.txt to output.txt
var writeStream = fs.createWriteStream('output.txt')
readerStream.on('data', (chunk)=>{
    writeStream.write(chunk);
})


