//writeHead() is a method of the HTTP response object (res) in Node.js.
//It’s used to set the HTTP status code and response headers before sending data to the client.
const http = require('http')
const {readFileSync}=require('fs')

//to get all files
const homepage=readFileSync('./index.html')

const server= http.createServer((req,res)=>{
    //console.log(req.method)
    const url=req.url

    //home page

    if(url === '/'){
        console.log(req.url)
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homepage) //here insted of writing all content we give the file and they will server to the user
    res.end()
    }

    //about page
    else if (url === '/about'){
        console.log(req.url)
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>This is about page </h1>')
    res.end()
    }

    //not found 404
    else{
        console.log(req.url)
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>page not found </h1>')
    res.end()
    }
    
})

server.listen(5000)