const { criarExpense } = require('./expense');

let expenses = [];

function adicionar(dados) {
    let id = 0;

    for (let e of expenses) {
        if (Number(e.id) > id) {
            id = Number(e.id);
        }
    }

    const novo = criarExpense(dados, id + 1);

    expenses.push(novo);

    return novo;
}

function listar() {
    return expenses;
}

function buscar(id) {
    for (let expense of expenses) {
        if (expense.id === id) {
            return expense;
        }
    }

    return null;
}

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

module.exports = {
    adicionar,
    listar,
    buscar,
    remover,
    atualizar
};