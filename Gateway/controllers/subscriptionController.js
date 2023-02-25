const Product = require('../models/Product');
module.exports.subscribe = async function(req,res){
    try{
        let searchTerm = req.params.searchTerm;
        console.log(searchTerm);
        return res.status(200).json({
            message:"Success"
        });
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}