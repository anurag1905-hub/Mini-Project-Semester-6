const mongoose = require('mongoose');

const registrySchema = new mongoose.Schema({
    signing_public_key:{
        type:String
    },
    encryption_key:{
        type:String
    },
    subscriber_id:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    onModel:{
        type:String,
        required:true,
        enum:['Buyer','Seller']
    }
},{
    timestamps:true
});

const Registry = mongoose.model('Registry',registrySchema);

module.exports = Registry;