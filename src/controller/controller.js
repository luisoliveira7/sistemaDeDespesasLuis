const model = require('../models/model');

function criar(req, res) {
    const dados = req.body;

    const novo = model.adicionar(dados);

    res.json(novo);
}

function listar(req, res) {
    const resultado = model.listar();
    res.json(resultado);
}

function buscar(req, res) {
    const id = Number(req.params.id);

    const resultado = model.buscar(id);

    if (!resultado) {
        return res.status(404).json({ error: "não encontrado" });
    }

    res.json(resultado);
}

function remover(req, res) {
    const id = Number(req.params.id);

    const deuCerto = model.remover(id);

    if (!deuCerto) {
        return res.status(404).json({ error: "não foi possível excluir" });
    }

    res.json({ message: "removido com sucesso" });
}

function atualizar(req, res) {
    const id = Number(req.params.id);
    const dados = req.body;

    const resultado = model.atualizar(id, dados);

    if (!resultado) {
        return res.status(404).json({ error: "não encontrado" });
    }

    res.json(resultado);
}

module.exports = {
    criar,
    listar,
    buscar,
    remover,
    atualizar
};