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


// 13. fs.unlink() - Asynchronously deletes a file
fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});

// 14. fs.unlinkSync() - Synchronously deletes a file
try {
    fs.unlinkSync('file.txt');
    console.log('File deleted!');
} catch (err) {
    console.error(err);
}


// 15. fs.rmdir() - Asynchronously removes a directory
fs.rmdir('emptyDirectory', (err) => {
    if (err) throw err;
    console.log('Directory removed!');
});

// 16. fs.rmdirSync() - Synchronously removes a directory
try {
    fs.rmdirSync('emptyDirectory');
    console.log('Directory removed!');
} catch (err) {
    console.error(err);
}


// 17. fs.rename() - Asynchronously renames or moves a file/directory
fs.rename('oldName.txt', 'newName.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
});

// 18. fs.renameSync() - Synchronously renames or moves a file/directory
try {
    fs.renameSync('oldName.txt', 'newName.txt');
    console.log('File renamed!');
} catch (err) {
    console.error(err);
}


// Additional Methods

// 19. fs.createReadStream() - Creates a readable stream for a file
const readStream = fs.createReadStream('file.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log('Data chunk:', chunk);
});

// 20. fs.createWriteStream() - Creates a writable stream for a file
const writeStream = fs.createWriteStream('output.txt', 'utf8');
writeStream.write('Hello, world!', (err) => {
    if (err) throw err;
    console.log('Data written to file!');
});



// 21. fs.copyFile() - Asynchronously copies a file
fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('File copied!');
});

// 22. fs.copyFileSync() - Synchronously copies a file
try {
    fs.copyFileSync('source.txt', 'destination.txt');
    console.log('File copied!');
} catch (err) {
    console.error(err);
}

// 23. fs.fstat() - Asynchronously gets information about a file descriptor
const fd = fs.openSync('file.txt', 'r');
fs.fstat(fd, (err, stats) => {
    if (err) throw err;
    console.log('File stats:', stats);
});

// 24. fs.fstatSync() - Synchronously gets information about a file descriptor
try {
    const fd = fs.openSync('file.txt', 'r');
    const stats = fs.fstatSync(fd);
    console.log('File stats:', stats);
} catch (err) {
    console.error(err);
}