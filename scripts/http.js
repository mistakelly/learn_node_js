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
const { json } = require('stream/consumers')

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

        if (req.method == 'POST') {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk
            }).on('end', () => {
                res.setHeader('Content-Type', 'application/json')
                res.statusCode = 200
                console.log('body', body)
                parsedObj = JSON.parse(body)

                res.end(JSON.stringify(parsedObj))
            })
        }
    })

    server.listen(3000, () => {
        process.stdout.write('listening on port 3000> ')
    })
})
