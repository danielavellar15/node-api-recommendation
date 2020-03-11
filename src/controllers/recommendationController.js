exports.get = (req, res, next) => {
    const products = [{
        name: 'Camisa flamengo',
        price:'R$ 20,00'
    }]
    res.status(200).send(products);
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.getById = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};