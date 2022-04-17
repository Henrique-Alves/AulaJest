const req = require('express/lib/request');
const res = require('express/lib/response');

const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send();
});


app.get('/user', (req, res) => {
    const user = [
        { name: 'Silvio', email: 'teste@teste.com.br' },
    ];
    res.status(200).json(user);
});

module.exports = app;