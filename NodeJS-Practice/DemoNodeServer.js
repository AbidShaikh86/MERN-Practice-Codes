const http = require('http');

const demoServer = http.createServer((req, res) => {
    console.log(res);
    
});

const PORT = 6969

// demoServer.listen(PORT,() => console.log(`Server Chal raha hai http://localhost:${PORT}`));
demoServer.listen(PORT);
