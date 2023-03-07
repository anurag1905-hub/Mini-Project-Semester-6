const Product = require('../models/Product');
const Seller = require('../models/Seller');
const Buyer = require('../models/Buyer');
const { generateKeyPair } = require('crypto');

module.exports.subscribe = async function(req,res){
    try{
        if(req.body.isSeller){
            let seller = await Seller.create(req.body);
            seller.subscriber_url="http://localhost:8000";
            return res.status(200).json({
                data:seller,
                message:"Subscribed Successfully"
            });
        }
        else{
            let buyer = await Buyer.create(req.body);
            return res.status(200).json({
                data:buyer,
                message:"Subscribed Successfully"
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

module.exports.unsubscribe = async function(req,res){
    try{
        let Id = req.body.Id;
        let isSeller = JSON.parse(req.body.isSeller);

        //console.log(Id,isSeller);
        if(isSeller){
            let user = await Seller.findById(Id);
            if(user){
                // Remove the products of the seller
                await Product.deleteMany({seller:Id});
                
                // Remove the seller Info
                user.remove();

                return res.status(200).json({
                    message:"Unsubscribed successfully"
                });
            }
            else{
                return res.status(500).json({
                    message:"Seller doesn't exist"
                });
            }
        }
        else{
            let user = await Buyer.findById(Id);
            if(user){
                user.remove();
                return res.status(200).json({
                    message:"Unsubscribed successfully"
                });
            }
            else{
                return res.status(500).json({
                    message:"Buyer doesn't exist"
                });
            }
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}