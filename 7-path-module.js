const path = require('path');

console.log(path.sep); //seprate the file , ye ye folder or dictnories ke bich me kon sa symbol use hoga batata hai

console.log(path.join); // ye join kar deta alg alg file or folder ko un sb ko yha pe strng ke trh value denge

const base =path.basename(__filename); // ye file ka akhiriname batata hai
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt'); // ye absolute path batata hai
console.log(absolute);