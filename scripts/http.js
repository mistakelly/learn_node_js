const http = require('http')


const server = http.createServer((req, res) => {
    console.log(`req ${req}`)
    console.log(`res ${res}`)
})



server.listen(3000, ()=> {
    console.log('listening on port 3000')
})