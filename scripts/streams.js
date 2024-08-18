// Import the fs module
const fs = require('fs');

// 1. fs.createReadStream() - Reads a file as a stream (efficient for large files)
const readStream = fs.createReadStream('file.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Stream finished reading the file.');
});

readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});
