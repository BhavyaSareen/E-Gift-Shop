const Category = require('../models/categorymodel')
const Sub_Category = require('../models/Sub-CategoryModel')
const Product = require('../models/productmodel')
const Order=require("../models/Ordermodel")
Dashboard = async(req,res)=>{   
    totalcategory = 0
    totalsubcategory = 0
    totalproduct = 0
    totalOrder=0
    await Category .countDocuments()
    .then(Categorycount=>{
        totalcategory = Categorycount
    })
    .catch()

    await Sub_Category .countDocuments()
    .then(Sub_Categorycount=>{
        totalsubcategory = Sub_Categorycount 
    })
    .catch()

    await Product.countDocuments()
    .then(Productcount=>{
        totalproduct = Productcount
    })
    await Order.countDocuments()
    .then(Ordercount=>{
        totalorder = Ordercount
    })
    res.json({
        status:200,
        success:true,
        total_categories : totalcategory,
        total_Sub_categories : totalsubcategory,
        total_Product : totalproduct,
        total_order:totalorder
    })
}

module.exports={
    Dashboard
}

