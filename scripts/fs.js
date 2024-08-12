// Import the fs module
const fs = require('fs');

// 1. fs.readFile() - Asynchronously reads the contents of a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File data (async):', data);
});