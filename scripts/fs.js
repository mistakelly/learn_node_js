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



// 4. fs.writeFileSync() - Synchronously writes data to a file
try {
    fs.writeFileSync('output.txt', 'Hello, world!', 'utf8');
    console.log('File has been saved!');
} catch (err) {
    console.error(err);
}

// 5. fs.appendFile() - Asynchronously appends data to a file
fs.appendFile('output.txt', ' Hello again!', 'utf8', (err) => {
    if (err) throw err;
    console.log('Data appended to file!');
});

// 6. fs.appendFileSync() - Synchronously appends data to a file
try {
    fs.appendFileSync('output.txt', ' Hello again!', 'utf8');
    console.log('Data appended to file!');
} catch (err) {
    console.error(err);
}

