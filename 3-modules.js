//modules:- A module in Node.js is simply a reusable block of code that performs a specific task — and can be imported or exported between files.

//Types of Modules in Node.js
// 1.Core Modules :- Built-in modules that come with Node.js (fs, http, path, os)
// 2. Local Modules :- Your own custom modules (files you create) (require('./myModule'))
// 3. Third-party Modules :- Installed using npm (Node Package Manager) (express, mongoose, chalk)

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

module.exports={
    add,
    subtract};

// or another way to use module exports
// exports.add = (a,b)=>a+b;
// exports.subtract = (a,b) => a-b;
//console.log(module)