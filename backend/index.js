const express = require('express');
const fs = require('fs');

const PORT = 8080
const app = express()

const data = fs.readFileSync('Wellington_21Q3_V0_AOI.geojson')
const jsonData = JSON.parse(data);

app.get('/data', (req,res) => {
    res.status(200).send(jsonData)
})

app.listen(PORT)
