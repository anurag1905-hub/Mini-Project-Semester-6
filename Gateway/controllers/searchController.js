const Product = require('../models/Product');
module.exports.search = async function(req,res){
    try{
        let searchTerm = req.body.term;
        console.log(searchTerm);
        let results = []
        let products = await Product.find().or([{ name: searchTerm }, { category: searchTerm }])
        .populate({
            path:'seller',
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