//Events in Node.js are signals that something has happened.
//They are handled using the EventEmitter class with .on() to listen and .emit() to trigger events.

//Basic example

const EventEmitter = require('events');
const coustomEmitter=new EventEmitter();

coustomEmitter.on('response',() =>{
    console.log ("Data received sucesfully")
})

coustomEmitter.emit('response')

//Example with Arguents

//const EventEmitter = require('events');
const coustomEvent= new EventEmitter();

coustomEvent.on('response',(name , age)=>{
    console.log(`Data received with user ${name} and his age is ${age} year old`);
})

coustomEvent.emit('response','saurabh',20)