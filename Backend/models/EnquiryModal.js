const mongoose = require("mongoose")

const Enquiryschema = new mongoose.Schema({
    Customer_id : {type:String, default:0},
    email : {type:String, default:0},
    Product_Name : { type:String,default:null },
    Contact : {type:Number,default:0},
    Message : { type:String,default:null },
    status : {type:Boolean,default:true},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongoose.model('Enquiry',Enquiryschema)