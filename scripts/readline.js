// Import the readline module
const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,  // Set input stream to stdin (user input)
    output: process.stdout // Set output stream to stdout (console output)
});

// Methods we used in this example:

// 1. rl.question(query, callback)
// 2. rl.setPrompt(prompt)
// 3. rl.prompt()
// 4. rl.on(event, callback)
// 5. rl.close()
// 6. rl.pause()
// 7. rl.resume()
// 8. rl.on('SIGINT', callback)

// 1. rl.question(query, callback)
// Asks the user a question and calls the callback with the answer.
// Example:
// rl.question('What is your name? ', (data) => {
//     console.log('User entered:', data);
//     rl.close();
// });
