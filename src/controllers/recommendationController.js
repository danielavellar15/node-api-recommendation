const Products = require("../db/Products.model");

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.getProduct = async (req, res, next) => {
    console.log("teste");

    const { filters, type, shopIds } = req.body        
    let products;

    const query = {
        "isDeleted": { $ne: true },
        "isVisible": true
    };

    if (shopIds) query.shopId = { $in: shopIds };

    
    if( type == 'BY_USER') {
        console.log(query)
        products = await recommendationByUser(query, filters);
        console.log(products);
    } 
    else if (type == 'GLOBAL') {
        products = await recommendationGlobal(query, filters);
    }
    
    res.json(products);
};

async function recommendationByUser(query, filters) {
    return await Products.find(query).sort({title: 'asc'});
}

async function recommendationGlobal(query, filters) {
    return await Products.find(query).sort({title: 'desc'});
}