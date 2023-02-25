const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
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
    organization:{
        type:String
    },
    rating:{
        type:Number
    }
},{
    timestamps:true
});

const Buyer = mongoose.model('Buyer',buyerSchema);

module.exports = Buyer;