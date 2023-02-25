const Product = require('../models/Product');
const Product = require('../models/Product');
const Seller = require('../models/Seller');

module.exports.add = async function(req,res){
    try{
        let Product = await Product.create(req.body);
        let seller = await Seller.findById(req.body.sellerId);
        if(Product&&seller){
            seller.products.push(Product);
            seller.save();
            return res.status(200).json({
                data:Product,
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
        let productId = req.params.id;
        let sellerId = req.params.id;
        await Product.findByIdAndDelete(productId);
        let seller = await Seller.findByIdAndUpdate(sellerId,{$pull:{products:productId}});
        if(seller){
            return res.status(200).json({
                message:"Product Removed Successfully."
            })
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
        })
    }
}