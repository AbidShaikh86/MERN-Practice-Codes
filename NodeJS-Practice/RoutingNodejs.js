const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {

    if(req.url === '/form'){
        res.write(`<html><body>
            <form action="/submitted-form" method="post">
                <label for="text-name">Enter Your Name: </label><input type="text" id="text-name" placeholder="Enter Your Name"/><br/>
                <label for="gender">Enter Your Name: </label><input type="radio" name="gender" id="gender">Male <input type="radio" name="gender" id="gender/">Male<br/>
                <button type="submit">Submit</button>
            </form>
            </body></html>
            `);
        return res.end()
    }else if(req.url === "/submitted-form" && req.method === "POST"){
        res.statusCode == 302;
        fs.writeFileSync('user-name.txt', 'Abid Shaikh');
        res.setHeader('location', '/redirected')
        return res.end()
    }else if(req.url === "/redirected"){
        res.write('thnak you for submitting')
    }
    res.write("<h1>No page Found!</h1>")
})

const PORT = 6969;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});