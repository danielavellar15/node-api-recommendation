const mongoose = require("mongoose");
const Products = require("./Products.model");

const connection = "mongodb://localhost:27017/reaction";

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;