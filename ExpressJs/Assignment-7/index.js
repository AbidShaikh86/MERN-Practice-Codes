const express = require('express');
const userRouter = require('./routes/user')

const port = 3000

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
    res.status(200).send('<h1>Kya haal chaal bhai log</h1>')
})

app.use('/user',userRouter)



app.listen(port,() => {
    console.log(`Server is Running on http://localhost:${port}`);
})