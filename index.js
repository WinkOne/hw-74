const express = require('express');
const message = require('./app/message');

const app = express();

const port = 8001;

app.use(express.json());

app.use('/message', message);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`)
});


