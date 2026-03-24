//sor jackson usei o Express para criar a API e uma função separada para criar o objeto da despesa
const express = require('express');
const { criarExpense } = require('./models/expense');

//daí eu configurei o Express para receber dados em JSON nas requisições.
const app = express();
app.use(express.json());

// usei um vetor para armazenar as despesas em memória, como o sor ja tinha mostrado na aula anterior
let expenses = [];

// cria uma nova despesa
function adicionar(dados) {
    let id = 0;

for (let opt of expenses) {
    if (id < Number(opt.id)) {
        id = Number(opt.id);
    }
}

    const novo = criarExpense(dados, id + 1);

    expenses.push(novo);

    return novo;
}

// listar
function listar() {
    return expenses;
}

// buscar por id
function buscar(id) {
    for (let expense of expenses) {
        if (expense.id === id) {
            return expense;
        }
    }

    return null;
}

// remover
function remover(id) {
    let novoVetor = [];
    let existe = false;

    for (let expense of expenses) {
        if (expense.id === id) {
            existe = true;
        } else {
            novoVetor.push(expense);
        }
    }

    expenses = novoVetor;

    return existe;
}

// atualizar
function atualizar(id, dados) {
    for (let expense of expenses) {
        if (expense.id === id) {

            expense.title = dados.title || expense.title;
            expense.amount = dados.amount || expense.amount;
            expense.category = dados.category || expense.category;
            expense.date = dados.date || expense.date;
            expense.description = dados.description || expense.description;

            return expense;
        }
    }

    return null;
}

// criar
app.post('/expenses', (req, res) => {
    const { title, amount, date } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title obrigatório" });
    }

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Valor inválido" });
    }

    if (!date || new Date(date) > new Date()) {
        return res.status(400).json({ error: "Data inválida" });
    }

    const novo = adicionar(req.body);

    res.status(201).json(novo);
});

// listar
app.get('/expenses', (req, res) => {
    res.json(listar());
});

// total
app.get('/expenses/summary/total', (req, res) => {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    res.json({ total });
});

// por categoria
app.get('/expenses/summary/category', (req, res) => {
    let categorias = {};

    for (let expense of expenses) {
        if (!categorias[expense.category]) {
            categorias[expense.category] = 0;
        }

        categorias[expense.category] += expense.amount;
    }

    res.json(categorias);
});

// buscar por id
app.get('/expenses/:id', (req, res) => {
    const id = req.params.id;

    const item = buscar(id);

    if (!item) {
        return res.status(404).json({ error: "Não encontrado" });
    }

    res.json(item);
});

// deletar
app.delete('/expenses/:id', (req, res) => {
    const id = req.params.id;

    const ok = remover(id);

    if (!ok) {
        return res.status(404).json({ error: "Não existe" });
    }

    res.json({ message: "Removido" });
});

// atualizar
app.put('/expenses/:id', (req, res) => {
    const id = req.params.id;

    const atualizado = atualizar(id, req.body);

    if (!atualizado) {
        return res.status(404).json({ error: "Não encontrado" });
    }

    res.json(atualizado);
});

// iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});