const functions = require("firebase-functions");

const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express()
app.use(cors())

const data = fs.readFileSync(path.resolve('./Wellington_21Q3_V0_AOI.geojson'))
const jsonData = JSON.parse(data);

app.get('/data', (req,res) => {
    res.status(200).send(jsonData)
})

exports.app = functions.https.onRequest(app)
