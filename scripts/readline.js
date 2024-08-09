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



// 2. rl.setPrompt(prompt)
// Sets the prompt text that will be displayed when rl.prompt() is called.
// Example:
// rl.setPrompt('shell> '); // Set prompt text to "shell>"

// 3. rl.prompt()
// Displays the prompt set by rl.setPrompt() and waits for user input.
// Example:
// rl.prompt(); // Shows the prompt to the user

// 4. rl.on(event, callback)
// Listens for events, such as 'line' (when the user enters input) or 'SIGINT' (Ctrl+C).
// Example:
// rl.on('line', (input) => {
//     console.log(`You entered: ${input}`);
//     rl.prompt(); // Show the prompt again after user input
// });

rl.setPrompt('shell> '); // Set the prompt text
rl.prompt();  // Display the prompt for the first time

// Listen for the 'line' event, which is triggered after the user hits Enter
rl.on('line', (input) => {
    console.log(`You entered: ${input}`);  // Print the input the user typed

    // If the user types 'exit', close the interface
    if (input.trim().toLowerCase() === 'exit') {
        console.log('Goodbye!');
        process.exit(); // Exit the program
    } else {
        rl.prompt(); // Display the prompt again for further input
    }
});


// 2. rl.setPrompt(prompt)
// Sets the prompt text that will be displayed when rl.prompt() is called.
// Example:
// rl.setPrompt('shell> '); // Set prompt text to "shell>"

// 3. rl.prompt()
// Displays the prompt set by rl.setPrompt() and waits for user input.
// Example:
// rl.prompt(); // Shows the prompt to the user

// 4. rl.on(event, callback)
// Listens for events, such as 'line' (when the user enters input) or 'SIGINT' (Ctrl+C).
// Example:
// rl.on('line', (input) => {
//     console.log(`You entered: ${input}`);
//     rl.prompt(); // Show the prompt again after user input
// });

rl.setPrompt('shell> '); // Set the prompt text
rl.prompt();  // Display the prompt for the first time

// Listen for the 'line' event, which is triggered after the user hits Enter
rl.on('line', (input) => {
    console.log(`You entered: ${input}`);  // Print the input the user typed

    // If the user types 'exit', close the interface
    if (input.trim().toLowerCase() === 'exit') {
        console.log('Goodbye!');
        process.exit(); // Exit the program
    } else {
        rl.prompt(); // Display the prompt again for further input
    }
});

// Listen for the 'SIGINT' event (Ctrl+C pressed) to handle graceful exit
rl.on('SIGINT', () => {
    console.log('User pressed Ctrl+C');
    rl.close();  // Close the interface when Ctrl+C is pressed
});
