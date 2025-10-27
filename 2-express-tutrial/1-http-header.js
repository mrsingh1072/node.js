//writeHead() is a method of the HTTP response object (res) in Node.js.
//It’s used to set the HTTP status code and response headers before sending data to the client.
const http = require('http')

const server= http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Home page </h1>')
    res.end()
})

server.listen(5000)