function criarExpense(dados, id) {
    return {
        id: String(id),
        title: dados.title,
        amount: dados.amount,
        category: dados.category,
        date: dados.date,
        description: dados.description,
        createdAt: new Date()
    };
}

module.exports = { criarExpense };