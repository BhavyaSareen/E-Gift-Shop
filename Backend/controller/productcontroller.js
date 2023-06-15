const Product = require('../models/productmodel')

// Add product API
addproduct=(req,res)=>{

    var validation=""
    if(req.body.Product_Name=="")
    {
        validation += "Product Name is required \n"
    }
    if(req.body.Product_Code=="")
    {
        validation += "Product Code is required \n"
    }
    if(req.body.Description=="")
    {
        validation += "Description is required \n"
    }

    if(!!validation){
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        let productobject = new Product()
        productobject.Product_Name = req.body.Product_Name
        productobject.Product_Code = req.body.Product_Code
        productobject.Product_Image = req.body.Product_Image
        productobject.Description = req.body.Description
        productobject.Product_Price = req.body.Product_Price
        productobject.Product_Quantity = req.body.Product_Quantity
        productobject.Category_id=req.body.Category_id
        productobject.Sub_Category_id=req.body.Sub_Category_id
        if(req.file){
            productobject.Product_Image="Product/"+req.file.filename
        }
        else{}
        productobject.save()
        res.json({
            status:200,
            success:true,
            msg:"Product added",
            data:req.body
        })
    }   
}


// Get all product API
getallproduct=(req,res)=>{
    Product.find(req.body) 
    .populate('Category_id')
    .populate('Sub_Category_id')
    .then(productdata=>{
        res.json({
            status:200,
            success:true,
            msg:'data loaded',
            data:productdata
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            msg:'error occured',
            error: String(err)
        })
    })
}


// Get Single product API
getsingleproduct=(req,res)=>{
    var validation=""
    if (req.body._id== ""){
        validation += "Id is required"
    }
    if(!!validation){
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        Product.findOne({_id:req.body._id}) 
        .exec()
        .then(productdata=>{
            res.json({
                status:200,
                success:true,
                msg:'data loaded',
                data:productdata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:'error occured',
                error: String(err)
            })
        }
        )
    }
}

// Update product API
updateproduct=(req,res)=>{
    console.log(req.body)
    var validation=""
    if (req.body._id== ""){
        validation += "Id is required"
    }
    if (req.body.Product_Name== ""){
        validation += "Product Name is required"
    }
    if (req.body.Product_Code== ""){
        validation += "Product Code is required"
    }
    if (req.body.Description== ""){
        validation += "Description is required"
    }
    if(!!validation){
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        Product.findOne({_id:req.body._id})
        .exec()
        .then(productdata=>{
            if(productdata == ""){
                res.json({
                    status:409,
                    success:false,
                    msg:'Data not found'
                })
            }
            else{
                //update
                productdata.Product_Name=req.body.Product_Name
                productdata.Product_Code=req.body.Product_Code
                productdata.Description=req.body.Description
                productdata.Product_Price = req.body.Product_Price
                productdata.Product_Quantity = req.body.Product_Quantity
                productdata.Category_id=req.body.Category_id
                productdata.Sub_Category_id=req.body.Sub_Category_id
                if(req.file){
                    productdata.Product_Image="Product/"+req.file.filename
                }
            
                productdata.save()
                res.json({
                    status:200,
                    success:true,
                    msg:'Record updated'
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:'error occured',
                error: String(err)
            })
        }
        )
    }
}

module.exports={
    addproduct,
    getallproduct,
    getsingleproduct,
    updateproduct
}