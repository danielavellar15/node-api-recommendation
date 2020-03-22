const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    // any: mongoose.Schema.Types.Mixed
    // _id: mongoose.Schema.Types.ObjectId,
    // ancestors: [String],
    // attributeLabel: String,
    // title: String,
    // optionTitle: String,
    // price: mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean,
    // isVisible: Boolean,
    // updatedAt: Date,
    // createdAt: Date,
    // weight: Number,
    // metafields: [mongoose.Schema.Types.Mixed],
    // shopId: mongoose.Schema.Types.ObjectId,
    // isTaxable: Boolean,
    // type: String

},  function(docs){
    console.log(docs);
 });
const Products = mongoose.model("Products", productsSchema, "Products");

module.exports = Products;