const mongoose = require("mongoose")

const Orderschema = new mongoose.Schema({
    Customer_id :  {type:mongoose.SchemaTypes.ObjectId, ref:'customer', default:null},
    Product_id :  {type:mongoose.SchemaTypes.ObjectId, ref:'product', default:null},
    Order_Image : {type:String,default:'no-image.jpg'},
    Description : { type:String,default:null },
    status : {type:Boolean,default:true},
    orderStatus: {type:String,default:"Pending"},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongoose.model('order',Orderschema)