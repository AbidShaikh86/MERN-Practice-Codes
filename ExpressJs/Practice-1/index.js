// const protocol = require('express')

// const app = protocol()

// app.use(protocol.json());

// const port = 3000;

// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Hello World!</h1>')
// })

// app.listen(port,() => {
//     console.log(`Server is Running on http://localhost:${port}`);
    
// })



























const ex = require('express')

const app = ex()

const port = 3000;

app.use(ex.json())

app.get('/',(req, res) => {
    res.status(200).send('<h1>Hello World!</h1>')
})

app.listen(port,() => {
    console.log(`Server is Running on http://localhost:${port}`);
    
})