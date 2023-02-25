const Product = require('../models/Product');
module.exports.search = async function(req,res){
    try{
        let searchTerm = req.params.searchTerm;
        console.log(searchTerm);

        let products = await Product.find({name:searchTerm})
        .populate({
            path:'Seller',
            options:{
                sort:{rating},
            }
        });

        return res.status(200).json({
            data:products
        });
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}