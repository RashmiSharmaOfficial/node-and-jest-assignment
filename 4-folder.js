var fs = require("fs");

//------- to create a folder ------------------
// fs.mkdirSync("NewFolder");
// console.log("new directory named newfolder is created");


//------- to delete file in the folder -------
const path = 'NewFolder/try.txt'
fs.unlink(path, function(err){
    if(err) throw err;

    console.log('File is deleted...');
})

// -------- to remove directory -------
fs.rmdirSync('NewFolder');
console.log('newfolder deleted');