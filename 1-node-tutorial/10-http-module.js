//http module:- The HTTP module in Node.js allows you to create a web server that can listen for requests (from the browser or API clients)
//  and send responses.

const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('welcome to Trimurti Transport world')
        res.end()
        return;
    }
    if(req.url==='/about'){
        res.write('you are on the about page , so you can enjoy here')
        res.end()
        return;
    }
    res.end(`
        <h1>Opps!</h1>
        <p> we can't seem to find your the page you are looking for </p>
        <a href="/">back home</a>
        `)
})
server.listen(5000)