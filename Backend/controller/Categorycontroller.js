const Category = require('../models/categorymodel')

// Add Category API
addcategory=(req,res)=>{
    // console.log(req.body)
    var validation=""
    if(req.body.Category_Name=="")
    {
        validation += "Category Name is required \n"
    }
    if(req.body.Description=="")
    {
        validation += "Description is required \n"
    }

    if(!!validation){
        res.json({
            status:409,success:false,msg:validation
        })
    }
    else{
        let categoryobject = new Category()
        categoryobject.Category_Name = req.body.Category_Name
        categoryobject.Description = req.body.Description
        
        if(req.file){
            categoryobject.Category_Image="category/"+req.file.filename
        }
        categoryobject.save()
        res.json({
            status:200,
            success:true,
            msg:"Category added",
            data:req.body
        })
    }
    
}

// Get all Category API
getallcategory=(req,res)=>{
        Category.find(req.body)
        .then(categorydata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':categorydata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg : 'Error Occur',
                error : String(err)
            })
        })
}

// Get single Category API
getsinglecategory=(req,res)=>{
    var validation=""
    if(req.body._id=="")
    {
        validation += 'id is required'
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
        Category.findOne({_id:req.body._id})
        .then(categorydata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':categorydata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg : 'Error Occur',
                error : String(err)
            })
        })
    }
}

//Update category API
updatecategory=(req,res)=>{
    console.log(req.body)
    var validation=""
    if(req.body._id=="")
    {
        validation +="Id is required \n"
    }
    if(req.body.Category_Name=="")
    {
        validation +="category Name is required \n"
    }
    if(req.body.Description=="")
    {
        validation +="Descripton is required"
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
        Category.findOne({_id:req.body._id})
        .then(categorydata=>{
            console.log(categorydata)
            if(categorydata == null)
                {
                    res.json({
                        status:409,
                        success:false,
                        msg:'Data not found'
                    })
                }
                else{
                    //update 
                    categorydata.Category_Name = req.body.Category_Name
                    categorydata.Description = req.body.Description
                    if(req.file){
                        categorydata.Category_Image="category/"+req.file.filename
                    }
                    categorydata.save()
     
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
    addcategory,
    getallcategory,
    getsinglecategory,
    updatecategory
}
