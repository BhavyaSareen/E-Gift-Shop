const mongoose = require("mongoose")

const categoryschema = new mongoose.Schema({
    Category_Name : { type:String,default:null },
    Category_Image : {type:String,default:'no-image.jpg'},
    Description : { type:String,default:null },
    status : {type:Boolean,default:true},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongoose.model('category',categoryschema)