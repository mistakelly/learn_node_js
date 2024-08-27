const http = require('http');
const fs = require('fs');

const serverSync = http.createServer((req, res) => {
    if (req.url === '/file') {
        console.log('Start reading file (sync)...');
        const start = Date.now();
        const fileContent = fs.readFileSync('file.txt', 'utf8'); // Synchronous file read
        const end = Date.now();
        console.log(`File read completed in ${end - start} ms`);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(fileContent);  // Sends file content back to client
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

serverSync.listen(3001, () => {
    console.log('Sync Server running on port 3001');
});
