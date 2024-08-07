/**
 * Demonstrates various ways to interact with the Node.js process and handle user input/output.
 * This includes:
 * - Retrieving process information.
 * - Working with command line arguments.
 * - Handling uncaught exceptions.
 * - Reading input from stdin.
 * - Writing output to stdout with and without newlines.
 */

// Process Information
console.log('Process Information:');
console.log('Process ID (pid):', process.pid);           // The process ID
console.log('Platform:', process.platform);              // The platform Node.js is running on
console.log('Node.js Version:', process.version);        // The current Node.js version
console.log('Command Line Arguments:', process.argv);    // Command line arguments



// Example of using command line arguments (argv)
// If the second argument is 'kelly', print a message
if (process.argv[2] == 'kelly') {
    console.log('Yes, this is the second argument (argv) oooo');
}

// Handling Uncaught Exceptions
/**
 * You can listen for uncaught exceptions to handle errors gracefully.
 */
process.on('uncaughtException', (error) => {
    console.log('Oh no, an uncaught error occurred:');
    console.error(error);
});


// Simulate an uncaught error by throwing it
setTimeout(() => {
    throw new Error('This is an uncaught exception!');
}, 1000);



// Getting Input from the User via stdin
/**
 * This section demonstrates reading input from the user through stdin.
 * process.stdin.resume() and process.stdin.setEncoding('utf8') are used to read input in real-time.
 * The data event is triggered when user input is received.
 */
process.stdout.write('What is your name? ');  // Prompt for input

process.stdin.on('data', (data) => {
    // Check the type of the 'data' received from stdin
    console.log('Data type:', typeof data);          // Shows 'Buffer'
    console.log('Is Buffer:', Buffer.isBuffer(data)); // Checks if data is a Buffer

    // Print the raw data received (Buffer)
    console.log('Raw Data:', data);

    // Convert the Buffer to a string and print it
    process.stdout.write(`Data: ${data.toString()}`); // Convert Buffer to string and output it

    process.exit(0);  // Exit after receiving input
});

// Simulate User Input (For Testing)
/**
 * Here we simulate user input by writing data directly to stdin.
 */
process.stdout.write('What is your name? ');

// Simulate the input 'Kelvin'
process.stdin.write('Kelvin\n');  // Simulating typing 'Kelvin' and pressing Enter

process.stdin.on('data', (data) => {
    console.log('Simulated Input (Buffer):', data);
    console.log('Converted to String:', data.toString()); // Convert Buffer to string and print
    process.exit(0);  // Exit after simulated input
});


// Writing Output Without Newlines (Using process.stdout.write)
/**
 * The following examples demonstrate how to use process.stdout.write to output data without automatically adding newlines.
 * This can be useful when creating custom outputs, such as progress bars or interactive prompts.
 */
process.stdout.write('Hello, world!');  // Prints "Hello, world!" without a newline
process.stdout.write('Progress: 50%');   // Prints progress without a newline, useful for overwriting
setTimeout(() => {
    process.stdout.write('\rProgress: 60%'); // Overwrites the same line with new progress
}, 1000);

// Custom Input Handling (Buffer to String Conversion)
/**
 * In this part, we check if the input contains a newline and manually convert the Buffer to a string.
 */
process.stdout.write('What is your name? ');

process.stdin.on('data', (data) => {
    const input = data.toString('utf8').trim();  // Convert Buffer to string and remove extra spaces/newlines
    console.log('Contains newline:', input.includes('\n'));  // Check if input contains a newline

    console.log('Converted to string:', input);  // Print the string after conversion

    process.exit(0);  // Exit after processing the input
});
