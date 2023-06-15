const mongoose = require('mongoose')

const customerschema= new mongoose.Schema({
    name : {type:String, default:null},
    email : {type:String, default:null},
    password : {type:String, default:null},
    contact : {type:String, deault:0},
    address : {type:String,default:null},
    userId : {type:mongoose.SchemaTypes.ObjectId, ref:'user', default:null},
    status : {type:Boolean,default:true},
    created_at : {type:Date,default:Date.now()}
})

module.exports = new mongoose.model('customer',customerschema)

  