const Product = require("../db/Product.model");

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.getProduct = async (req, res, next) => {
    const { filters, type } = req.body        
    let products;

    console.log(type);

    if( type == 'BY_USER') {
        products = await recommendationByUser();
    } 
    else if (type == 'GLOBAL') {
        products = await recommendationGlobal();
    }
    
    res.json(products);
};

async function recommendationByUser() {
    return await Product.find().sort({price: 'asc'})
}

async function recommendationGlobal() {
    return await Product.find().sort({price: 'desc'})
}