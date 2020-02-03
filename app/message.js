const express = require('express');
const fs = require('fs');

const router = express.Router();

const array = [];


router.get('/', (req, res) => {
    fs.readdir('./messages', (err, data) => {
        if (err) throw err;
        data.forEach(file => {
            const dataFile = fs.readFileSync('./messages/' + file);
            array.push(JSON.parse(dataFile));
        });
        res.send(array.slice(-5));
    });
});

router.post('/', (req, res) => {
    req.body.datetime = new Date().toISOString();
    fs.writeFileSync('./messages/' + req.body.datetime + '.txt', JSON.stringify(req.body));
    res.send(req.body);
});

module.exports = router;