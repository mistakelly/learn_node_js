// // Import the required modules
// const http = require('http');
// const fs = require('fs');

// // Initialize a variable to hold the file data
// let data = '';

// // Create a read stream to read the contents of 'index.html'
// const readStream = fs.createReadStream('index.html', 'utf-8');

// // Read data from the file as it arrives (streaming)
// readStream.on('data', chunk => {
//     data += chunk;  // Accumulate the file chunks into the data variable
// }).on('end', () => {
//     // Once the file reading is complete, create the HTTP server
//     const server = http.createServer((req, res) => {
//         console.log(`${req.method} request received at ${req.url}`);  // Log the request method and URL

//         // Handle GET requests
//         if (req.method === 'GET') {
//             res.statusCode = 200;  // Set the response status code to 200 (OK)
//             res.setHeader('Content-Type', 'text/plain');  // Set the response content type to plain text
//             res.end(data);  // Send the file data as the response
//         }

//         // Handle POST requests
//         if (req.method === 'POST') {
//             let body = '';  // Initialize a variable to hold the POST request data

//             // Listen for incoming data chunks in the POST request
//             req.on('data', (chunk) => {
//                 body += chunk;  // Accumulate the chunks into the body variable
//             }).on('end', () => {
//                 res.setHeader('Content-Type', 'application/json');  // Set response content type to JSON
//                 res.statusCode = 200;  // Set status code to 200 (OK)

//                 // Log the received body
//                 console.log('body:', body);

//                 try {
//                     // Try parsing the body as JSON
//                     const parsedObj = JSON.parse(body);

//                     // Send the parsed object back as a JSON response
//                     res.end(JSON.stringify(parsedObj));
//                 } catch (err) {
//                     // If JSON parsing fails, send an error response
//                     res.statusCode = 400;  // Bad Request
//                     res.end(JSON.stringify({ error: 'Invalid JSON format' }));
//                 }
//             });
//         }

//     });

//     // Start the server and listen on port 3000
//     server.listen(3000, () => {
//         process.stdout.write('listening on port 3000> ');  // Output to the console that the server is listening
//     });
// });

// MAKING REQUEST AS THE CLIENT
const http = require('http');

// Importing path module (though it's not used here, it can be used for working with file and directory paths)
const path = require('path');

// Defining the options for the HTTP request
const options = {
    hostname: 'jsonplaceholder.typicode.com', // The server's hostname
    method: 'GET', // HTTP method for the request (GET request to fetch data)
    path: '/todos/', // The path of the resource we want to access
    port: 80, // The port used for HTTP requests (default is 80)
}

// Making the request as a client using http.request
const req = http.request(options, (res) => {
    let data = ''; // Variable to accumulate the response data

    // Listening for chunks of data
    res.on('data', (chunk) => {
        data += chunk; // Append each chunk to the data variable
    }).on('end', () => {
        // Once the response ends, log the complete response data
        console.log('response', data);
    });
});

// Handling request errors, if any occur during the HTTP request
req.on('error', (e) => {
    console.error('Request failed:', e); // Log the error message
});

// Send the request (this is necessary to initiate the HTTP request)
req.end();
