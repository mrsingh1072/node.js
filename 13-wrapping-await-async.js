/*
===========================================================
This code reads two text files ('first.txt' and 'second.txt') 
asynchronously using a Promise-based wrapper, then writes 
their combined content into 'result-async.txt'.

Key Points:
- `getText(path)` wraps `readFile` in a Promise for async/await usage.
- `async` function `start()` reads both files sequentially using `await`.
- Errors are handled with a single `try/catch`.
- Demonstrates async file operations without nested callbacks (avoids callback hell).

Example:
first.txt = "Hello", second.txt = "World"
result-async.txt = "here is the result : Hello, World"
===========================================================
*/

const {readFile}=require('fs');

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const start = async () => {
    try{
        const first = await getText('./content/first.txt')
        const second = await getText ('./content/second.txt')
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()