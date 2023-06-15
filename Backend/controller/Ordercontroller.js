const Order = require('../models/Ordermodel')

// Add Order API
addorder=(req,res)=>{

    var validation=""
    if(req.body.Customer_id==""){
        validation += "Customer Id is required \n"
    }
    if(req.body.Product_id==""){
        validation += "Product id is required \n"
    }   
    if(req.body.Description==""){
        validation += "Address is required \n"
    }

    if(!!validation){
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        let orderobject = new Order()
        orderobject.Customer_id = req.body.Customer_id
        orderobject.Product_id = req.body.Product_id
        orderobject.Description = req.body.Description
        orderobject.orderStatus='Pending'
        if(req.file){
            orderobject.Order_Image="Order/"+req.file.filename
        }
        orderobject.save()
        res.json({
            status:200,
            success:true,
            msg:"Order added",
            data:req.body
        })
    }   
}

// Get all order API
getallorder=(req,res)=>{
    Order.find(req.body).populate("Customer_id").populate("Product_id")
    .exec()
    .then(orderdata=>{
        res.json({
            status:200,
            success:true,
            msg:'data loaded',
            data:orderdata
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


// Get Single Order API
getsingleorder=(req,res)=>{
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
        Order.findOne({_id:req.body._id}).populate('Customer_id').populate("Product_id")
        .exec()
        .then(orderdata=>{
            res.json({
                status:200,
                success:true,
                msg:'data loaded',
                data:orderdata
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

//Update Order API
updateorder=(req,res)=>{
    var validation=""
    if(req.body._id=="")
    {
        validation +="Id is required \n"
    }
    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        //check whether data exists or not wrt particular id
        Order.findOne({_id:req.body._id})
        .then(orderdata=>{
            if(orderdata == null)
                {
                    res.json({
                        status:409,
                        success:false,
                        msg:'Data not found'
                    })
                }
                else{
                    //update 
                    orderdata.orderStatus = req.body.orderStatus
                    orderdata.Product_id = orderdata.Product_id
                    orderdata.Customer_id = orderdata.Customer_id
                    orderdata.Description = orderdata.Description
                    orderdata.save()
     
                    res.json({
                        status:200,
                        success:true,
                        msg:'Order updated'
                    })
                }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:"error",
                error:String(err)
            })
        })
    }
    }


module.exports={
    addorder,
    getallorder,
    getsingleorder,
    updateorder
}