const express = require('express') 

const app = express()
const path = require('path')

const port = 3000;

app.use(express.json())

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, './src/home.html'))
})

app.get('/home',(req, res) => {
    res.sendFile(path.join(__dirname, './src/home.html'))
})

app.get('/about',(req, res) => {
    res.sendFile(path.join(__dirname,"./src/about.html"));
})

app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname, "./src/contact.html"))
})

app.listen(port,() => {
    console.log(`Server is Running on http://localhost:${port}`);
})