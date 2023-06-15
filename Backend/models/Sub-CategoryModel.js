const mongoose = require("mongoose")

const subcategoryschema = new mongoose.Schema({
    Sub_Category_Name : { type:String,default:null },
    Sub_Category_Image : {type:String,default:null},
    Description : { type:String,default:null },
    Category_id : {type:mongoose.SchemaTypes.ObjectId, ref:'category', default:null},
    status : {type:Boolean,default:true},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongoose.model('subcategory',subcategoryschema)