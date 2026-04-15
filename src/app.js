const express = require('express');
const controller = require('../controller/controller');

const app = express();

app.use(express.json());

app.post('/expenses', controller.criar);
app.get('/expenses', controller.listar);
app.get('/expenses/:id', controller.buscar);
app.delete('/expenses/:id', controller.remover);
app.put('/expenses/:id', controller.atualizar);

module.exports = app;