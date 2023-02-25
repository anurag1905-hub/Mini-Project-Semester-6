const Product = require('../models/Product');
const Seller = require('../models/Seller');
const { ObjectId } = require('mongodb');

module.exports.add = async function(req,res){
    try{
        let seller = await Seller.findById(req.body.seller);
        if(seller){
            let product = await Product.create(req.body);
            seller.products.push(product);
            seller.save();
            return res.status(200).json({
                data:product,
                message:"Product Added Successfully"
            });
         }
         else{
            return res.status(500).json({
                message:"Something went wrong."
            })
         }
    }   
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}

module.exports.remove = async function(req,res){
    try{
        let productId = req.body.id;
        let sellerId = req.body.sellerId;
        console.log(productId,sellerId);
        let seller = await Seller.findByIdAndUpdate(ObjectId(sellerId),{$pull:{products:productId}});
        if(seller){
            await Product.findByIdAndDelete(productId);
            return res.status(200).json({
                message:"Product Removed Successfully."
            })
        }
        else{
            return res.status(500).json({
                message:"Something went wrong."
            });
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}