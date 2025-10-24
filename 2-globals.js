//Global - Globals in Node.js are objects, variables, and functions that are available everywhere in your code — without needing to import or 
// require them

console.log(__dirname); // prints the directory name of the current module
console.log(__filename); // prints the file name of the current module
//console.log(require); // function to include modules that exist in separate files
//console.log (module); // represents the current module
//console.log(process); // provides information about, and control over, the current Node.js process
setInterval(() => {
    console.log('hello world');
}, 1000); // prints 'hello world' every secondexport them. it will run repeatedly

setTimeout(() => {
    console.log('This will run after 2 seconds');
}, 2000); // prints the message after 2 seconds..it will reun only once