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



// 7. fs.existsSync() - Checks if a file or directory exists synchronously
if (fs.existsSync('file.txt')) {
    console.log('File exists!');
} else {
    console.log('File does not exist!');
}


// 8. fs.access() - Tests the user's permissions for a file asynchronously
fs.access('file.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist');
    } else {
        console.log('File exists');
    }
});


// 9. fs.readdir() - Asynchronously reads the contents of a directory
fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Files in directory:', files);
});

// 10. fs.readdirSync() - Synchronously reads the contents of a directory
try {
    const files = fs.readdirSync('.');
    console.log('Files in directory:', files);
} catch (err) {
    console.error(err);
}


// 11. fs.mkdir() - Asynchronously creates a directory
fs.mkdir('newDirectory', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created!');
});

// 12. fs.mkdirSync() - Synchronously creates a directory
try {
    fs.mkdirSync('newDirectory', { recursive: true });
    console.log('Directory created!');
} catch (err) {
    console.error(err);
}