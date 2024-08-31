const http = require('http');

const simulateRequests = (port, numRequests) => {
    let completedRequests = 0;
    let failedRequests = 0;

    for (let i = 0; i < numRequests; i++) {
        const req = http.get(`http://localhost:${port}/file`, (res) => {
            res.on('data', (chunk) => { });  // Discarding response body
            res.on('end', () => {
                completedRequests++;
                if (completedRequests + failedRequests === numRequests) {
                    console.log(
                        `Completed: ${completedRequests}, Failed: ${failedRequests}`
                    );
                }
            });
        });

        req.on('error', (err) => {
            failedRequests++;
            console.error(`Request failed: ${err.message}`);
            if (completedRequests + failedRequests === numRequests) {
                console.log(
                    `Completed: ${completedRequests}, Failed: ${failedRequests}`
                );
            }
        });
    }
};

// Simulate 500 requests to the async server
simulateRequests(3002, 1000);
