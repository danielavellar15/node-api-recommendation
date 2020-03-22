const Catalog = require("../db/Catalog.model");

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.getProduct = async (req, res, next) => {
    console.log("teste");

    const { filters, type, shopIds } = req.body        
    let catalog;

    const query = {
        "product.isDeleted": { $ne: true },
        "product.isVisible": true
    };

    if (shopIds) query.shopId = { $in: shopIds };

    
    if( type == 'BY_USER') {
        console.log(query)
        catalog = await recommendationByUser(query, filters);
        console.log(catalog);
    } 
    else if (type == 'GLOBAL') {
        catalog = await recommendationGlobal(query, filters);
    }
    
    res.json(catalog);
};

async function recommendationByUser(query, filters) {
    return Catalog.find(query);
}

async function recommendationGlobal(query, filters) {
    return Catalog.find(query);
}