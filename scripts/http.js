const http = require('http')


const server = http.createServer((req, res) => {

    if (res.statusCode == 200){
        console.log('valid response')
    }else{
        console.log('error')
    }

    res.setHeader('content-Type', 'Applicatieewfwaon/json')
    res.end('hello world from http module')
})



server.listen(3000, ()=> {
    console.log('listening on port 3000')
})