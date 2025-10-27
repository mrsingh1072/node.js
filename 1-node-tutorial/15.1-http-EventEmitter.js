//http evebts emmiter

const http = require('http');
const createServer = http.createServer();

createServer.on('request',(req,res)=>{
    res.end("ye to events emitter se create ho gya !")
})

createServer.listen(5000) //here createserver.emit li jagh .listen hai kuki :- This tells Node.js to start the server and listen for 
// incoming connections on the given port (e.g., 5000).

//server.emit(eventName)
//This is used if you want to manually trigger a custom event.
//We don’t manually emit 'request' for HTTP — Node.js does that internally whenever a client sends a request.