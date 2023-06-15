const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    Category_id : {type:mongoose.SchemaTypes.ObjectId, ref:'category', default:null},
    Sub_Category_id : {type:mongoose.SchemaTypes.ObjectId, ref:'subcategory', default:null},
    Product_Name : { type:String,default:null },
    Product_Code : { type:String,default:0 },
    Product_Image : {type:String,default:null},
    Description : { type:String,default:null },
    Product_Price : {type:Number,default:0},
    Product_Quantity : {type:Number,default:0},
    status : {type:Boolean,default:true},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongoose.model('product',productschema)