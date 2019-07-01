//venda{id, valor, lista[produto(id, quantidade)]}
var itemDeVenda = [];

exports.get = (req, res, next) => {
    res.status(200).send(itemDeVenda);
    res.status(200).send("Venda retornada com sucesso!");
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    for (i in itemDeVenda) {
        if (itemDeVenda[i].id == id) {
            res.json(itemDeVenda[i]);
            res.status(200).send("Venda retornada com sucesso!");
        } else {
            res.status(200).send("Venda não encontrada!");
        }
    }

};

exports.post = (req, res, next) => {
    itemDeVenda.push(req.body)
    res.status(200).send('Venda gravada com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    for (i in itemDeVenda) {
        if (itemDeVenda[i].id == id) {
            itemDeVenda[i] = req.body;
            res.status(200).send(`Venda atualizada om sucesso! ${id}`);
        } else {
            res.status(200).send("Venda não encontrada!");
        }
    }

};

exports.post = (req, res, next) => {
    itemDeVenda.push(req.body)
    res.status(200).send('Venda gravada com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    for (i in itemDeVenda) {
        if (itemDeVenda[i].id == id) {
            itemDeVenda[i] = req.body;
            res.status(200).send(`Venda atualizada com sucesso! ${id}`);
        } else {
            res.status(200).send("Venda não encontrada!");
        }
    }

};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    for (i in itemDeVenda) {
        if (itemDeVenda[i].id == id) {
            itemDeVenda.splice(itemDeVenda[i], 1);
            res.status(200).send(`Venda deletada com sucesso! ${id}`);
        } else {
            res.status(200).send("Venda não encontrada!");
        }
    }

};