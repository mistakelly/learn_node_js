// Import the fs module
const fs = require('fs');

// 1. fs.readFile() - Asynchronously reads the contents of a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File data (async):', data);
});


// 2. fs.readFileSync() - Synchronously reads the contents of a file
try {
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log('File data (sync):', data);
} catch (err) {
    console.error(err);
}

// 3. fs.writeFile() - Asynchronously writes data to a file
fs.writeFile('output.txt', 'Hello, world!', 'utf8', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});