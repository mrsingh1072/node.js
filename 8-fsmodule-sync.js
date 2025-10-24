//The fs (File System) module in Node.js allows you to work with files and folders —
//you can create, read, update, delete, rename, etc.
/* s (file system) module is of two types 1. Asynchronous 2. Synchronous  
1.Asynchronous:- Tasks execute independently, next task doesn’t wait (Non-blocking (doesn’t wait))
2. Synchronous:- Tasks execute one by one, each waits for the previous to finish (Blocking (waits))
*/
//async is faster than sync

const {readFileSync, writeFleaync, writeFileSync} = require('fs');

//here we read the file

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

//here we will write the file, if ile is not their we will create the file

writeFileSync('./content/result-sync.txt',`Here is the rsult if there is no file it will create file and store the value : ${first}, ${second}`);
