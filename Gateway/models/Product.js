const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    costPerUnit:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Seller'
    }
},{
    timestamps:true
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;