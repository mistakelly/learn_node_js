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



// Create a readline interface (using readline with streams)
const rl = readline.createInterface({
    input: readStream,
    output: process.stdout // Remove this to prevent automatic output
});

// Listen for the 'line' event
rl.on('line', (line) => {
    console.log('Line received:', line);
});


// Process the data in chunks
readStream.on('data', (chunk) => {
    console.log('Processing chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished processing the file.');
});

readStream.on('error', (err) => {
    console.error('Error:', err);
});
