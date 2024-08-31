const http = require('http');
const fs = require('fs');
// http.globalAgent.maxSockets = 5000; // Increase to a higher limit

const serverAsync = http.createServer((req, res) => {
    if (req.url === '/file') {
        console.log('Start streaming file (async)...');
        const start = Date.now();

        // Create a readable stream and pipe it directly to the response
        const readStream = fs.createReadStream('index.html');

        readStream.on('open', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            readStream.pipe(res); // Stream file data directly to response
        });

        readStream.on('error', (err) => {
            console.error('Error reading file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        });

        readStream.on('end', () => {
            const end = Date.now();
            console.log(`File streamed successfully in ${end - start} ms`);
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

serverAsync.listen(3002, () => {
    console.log('Async Server running on port 3002');
});
