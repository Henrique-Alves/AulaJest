const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send();
});

app.listen(3001);