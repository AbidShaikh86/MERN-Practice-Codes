const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');

    res.write(`
        <html>
            <head>
                <title>my Second Node Server</title>
            </head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
        `);
});

const PORT = 6969;

server.listen(PORT,() => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})