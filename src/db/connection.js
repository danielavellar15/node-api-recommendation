const mongoose = require("mongoose");
const Products = require("./Products.model");
const Catalog = require("./Catalog.model");

const connection = "mongodb://reaction_mongo_1:27017/reaction";

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;