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
