const express = require('express')

const app = express()

const port = 3000;

let todo = ['Abid Shaikh','Google','Senier Web Dev']

app.use(express.json())

app.get('/',(req, res) => {
    res.status(200).send('<h1>Hello world!</h1>')
})

app.get('/resume',(req, res) => {
    res.status(200).send(todo.toString())
})

app.post('/resume',(req, res) => {
    let newtodo = req.body.name;
    todo.push(newtodo);
    res.status(200).send(todo.toString());

    res.status(201).send({message : "Task Added Succesfully"})
})

app.delete('/resume',(req, res) => {
    const itemDelete = req.body.item;

    todo.find((element, index) => {
        if (itemDelete === element) {
            todo.splice(index, 1);
        }
    })
    res.status(201).send({message : `Item has been deleted ${req.body.item}`})
})

app.listen(port,() => {
    console.log(`Server is Running on http://localhost:${port}`);
    
})