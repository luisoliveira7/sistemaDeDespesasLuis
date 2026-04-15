const controller = require('../controller/controller');

function criar(req, res) {
    const create = controller.criar(req, res);
    return res.json(create);
}

function listar(req, res) {
    const getall = controller.listar(req, res);
    return res.json(getall);
}

function buscar(req, res) {
    const id = req.params.id;
    const getid = controller.buscar(req, res);
    return res.json(getid);
}

function remover(req, res) {
    const id = req.params.id;
    const deletar = controller.remover(req, res);
    return res.json(deletar);
}

module.exports = {
    criar,
    listar,
    buscar,
    remover
};