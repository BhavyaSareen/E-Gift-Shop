const Enquiry = require('../models/EnquiryModal')

// Add Enquiry API
addenquiry=(req,res)=>{

    var validation=""
    if(req.body.Customer_id==""){
        validation += "Customer Id is required \n"
    }
    if(req.body.Product_Name==""){
        validation += "Product Name is required \n"
    }   
    if(req.body.Contact==""){
        validation += "Contact is required \n"
    }
    if(req.body.Message==""){
        validation += "Message is required \n"
    }

    if(!!validation){
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        let enquiryobject = new Enquiry()
        enquiryobject.Customer_id = req.body.Customer_id
        enquiryobject.Product_Name = req.body.Product_Name
        enquiryobject.email = req.body.email
        enquiryobject.Contact = req.body.Contact
        enquiryobject.Message = req.body.Message
        enquiryobject.save()
        res.json({
            status:200,
            success:true,
            msg:"Order added",
            data:req.body
        })
    }   
}

// Get all enquiry API
getallenquiry=(req,res)=>{
    Enquiry.find(req.body) 
    .exec()
    .then(enquirydata=>{
        res.json({
            status:200,
            success:true,
            msg:'data loaded',
            data:enquirydata
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


// Get Single enquiry API
getsingleenquiry=(req,res)=>{
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
        Enquiry.findOne({_id:req.body._id}) 
        .exec()
        .then(enquirydata=>{
            res.json({
                status:200,
                success:true,
                msg:'data loaded',
                data:enquirydata
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

//Update Enquiry API
updateenquiry=(req,res)=>{
    var validation=""
    if(req.body._id=="")
    {
        validation +="Id is required \n"
    }
    if(req.body.Customer_id=="")
    {
        validation +="category Id is required \n"
    }
    if(req.body.Product_Name=="")
    {
        validation +="Product Name Id is required \n"
    }
    if(req.body.Contact=="")
    {
        validation +="Contact is required"
    }
    if(req.body.Message=="")
    {
        validation +="Message is required"
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
        Enquiry.findOne({_id:req.body._id})
        .then(enquirydata=>{
            if(enquirydata == null)
                {
                    res.json({
                        status:409,
                        success:false,
                        msg:'Data not found'
                    })
                }
                else{
                    //update 
                    enquirydata.Customer_id = req.body.Customer_id
                    enquirydata.Product_Name = req.body.Product_Name
                    enquirydata.Contact = req.body.Contact
                    enquirydata.Message = req.body.Message
                    enquirydata.save()
     
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
                msg:"error",
                error:String(err)
            })
        })
    }
    }


module.exports={
    addenquiry,
    getallenquiry,
    getsingleenquiry,
    updateenquiry
}