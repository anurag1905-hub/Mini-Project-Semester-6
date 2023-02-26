const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    },
    district:{
        type:String,
    },
    pincode:{
        type:String,
    },
    phone:{
        type:String,
        required:true
    },
    rating:{
        type:Number
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }],
    userType:{
        type:String
    },
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
    subscriber_url:{
        type:String,
        default:"http://localhost:8000"
    },
    unique_key_id:{
        type:'Registry'
    }
},{
    timestamps:true
});

const Seller = mongoose.model('Seller',sellerSchema);

module.exports = Seller;