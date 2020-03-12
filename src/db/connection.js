const mongoose = require("mongoose");
const Product = require("./Product.model");

const connection = "mongodb://localhost:32768/reaction";

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;