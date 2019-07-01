produto=[];

exports.get = (req, res, next) => {

    res.status(200).send(produto);
};


exports.getById = (req, res, next) => {
    res.status(200).send(produto);
};



exports.post = (req, res, next) => {
    produto.push(req.body);
    res.status(201).send(produto);
};


exports.put = (req, res, next) => {
    
    res.status(200).send(req.body);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send([]);
};