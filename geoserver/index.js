const fs = require('fs');
const path = require('path')
const mmdb = require('mmdb-lib');

const express = require('express')
const app = express()
const port = 3000


const db = fs.readFileSync('GeoLite2-City.mmdb');
const reader = new mmdb.Reader(db);

app.use(express.static("client/build"));

app.get('/location', (req, res, next) => {
    const { ip } = req.query;
    if (!ip) {
        res.statusMessage = "ip not given"
        res.statusCode = 400
        res.send("ip not given")
        return;
    }
    const response = reader.get(ip);
    if (!response) {
        res.statusMessage = "ip lookup failed"
        res.statusCode = 400
        res.send("ip lookup failed")
        return;
    }
    res.json(response);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


console.log(reader.get('67.193.229.5')); 