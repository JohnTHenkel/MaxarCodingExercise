const express = require('express');
const PORT = 8080
const app = express()

app.get('/data', (req,res) => {
    res.status(200).send("Hello, world!")
})

app.listen(PORT)
