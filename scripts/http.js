const http = require('http')


// const server = http.createServer((req, res) => {

//     if (res.statusCode == 200){
//         console.log('valid response')
//     }else{
//         console.log('error')
//     }

//     res.setHeader('content-Type', 'Applicatieewfwaon/json')
//     res.end('hello world from http module')
// })



// server.listen(3000, ()=> {
//     console.log('listening on port 3000')
// })




const fs = require('fs')

const readStream = fs.createReadStream('index.html', 'utf-8')

let data = ''

readStream.on('data', chunk => {
    data += chunk
}).on('end', () => {
    const server = http.createServer((req, res) => {
        console.log(`${req.method} request received at ${req.url}`);

        if (req.method == 'GET') {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')

            res.end(data)
        }
    })

    server.listen(3000, () => {
        process.stdout.write('listening on port 3000> ')
    })
})
