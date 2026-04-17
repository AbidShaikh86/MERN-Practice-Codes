const http = require('http');

const todo = ["Full Stack Devloper", "Google", "40LPA"]
const demoNodemon = http.createServer((req, res) => {
    const { method, url } = req;

    // console.log(method , url);
    if (url === '/todos') {
        if (method === 'GET') {
            res.writeHead(200, { "content-type": "text/html" })
            // response.writeHead(200, { "content-type": "text/html" })
            res.write("<h1>this is a todo Page</h1>")
            res.write(todo.toString());
            res.end()
        }else if(method === 'POST'){
            let body = "";
            req.on("error",(err)=>{
                console.log(err);
            }).on("data",(chunk)=>{
                // console.log(chunk);
                body += chunk;
            }).on("end",() => {
                body = JSON.parse(body)
                // console.log(body);
                let newTodo = todo;
                newTodo.push(body.username)
                res.write(newTodo.toString())
                res.end()
            })
            res.end()
        }else{
            res.writeHead(501)
            res.end()
        }
    } else if (url === '/') {
        res.writeHead(404);
    }
    // res.end()

});

const PORT = 6969;

demoNodemon.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});