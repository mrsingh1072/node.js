//npm -npm stands for Node Package Manager.
// It is a tool that comes automatically with Node.js and is used to:
// ✅ Install external libraries or modules (called packages)
// ✅ Manage your project dependencies
// ✅ Share your own packages with others

//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
// npm if <packageName>

//global dependency - use it in any project
// npm install -g <packageName>

//package.json - manifest file (stores important info about project/package)
/*
Three ways to create package json:-
1. manual approach (create package.json in the root, create properties etc)
2. npm init (step by step, press enter to skip)
3. npm init -y(everything default)
*/

const _=require('lodash')

const items=[1,[2],[3],[4]]

const flattitems=_.flattenDeep(items)

console.log(flattitems)