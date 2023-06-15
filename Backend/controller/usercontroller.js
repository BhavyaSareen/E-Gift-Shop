const User = require('../models/usermodel')
const Customer = require('../models/customermodel')
const bcrypt = require('bcrypt')
const saltround = 10
const jwt = require('jsonwebtoken')
const secretkey = "Myshop28#@"

//register API
register = (req,res)=>{
    console.log(req.body)
    var validation=""
    if(req.body.name == ""){
        validation +="Name is required"
    }
    if(req.body.email ==""){
        validation +="Email is required"
    }
    if(req.body.password ==""){
        validation +="Password is required"
    }

    if(!!validation){
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        User.findOne({email:req.body.email})//checking duplicacy
        .then(userdata=>{//retrieval of data
            
            if(userdata==null){
                //if userdata is null(empty) then insert
                let userobject = new User()
                userobject.name=req.body.name
                userobject.email=req.body.email
                userobject.password=bcrypt.hashSync(req.body.password, saltround)//encrypting the password in user table
                userobject.save()
                .then(userdata=>{
                    let customerobj = new Customer()
                    customerobj.name = req.body.name
                    customerobj.email = req.body.email
                    customerobj.password = req.body.password
                    customerobj.contact = req.body.contact
                    customerobj.address = req.body.address
                    customerobj.userId = userdata._id                
                    customerobj.save()
                    res.json({
                        status:200,
                        success:true,
                        msg:'User registered'
                    })
                })
              
            }
            else{
                res.json({
                    status:409,
                    success:false,
                    msg:'User already exist'
                })
            }
        })
        
    }
}

//Get all register API
getallregister=(req,res)=>{
    User.find(req.body).exec()
    .then(registerdata=>{
        res.json({
            status:200,
            success:true,
            msg:'data loaded',
            data:registerdata
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            msg:'error occured',
            error:String(err)
        })
    })
}

//Login API
login=(req,res)=>{
    validator = ""
    if(req.body.email == ""){
        validator += "Email is required"
    }
    if(req.body.password == ""){
        validator += "password is required"
    }
    if(!!validator)
    {
        res.json({
            status: 409,
            success:false,
            msg:validator
        })
    }
    else{
        //check existance of email
        User.findOne({email:req.body.email})
        .then(userdata=>{
            if(userdata==null)
            {
                res.json({
                    status:404,
                    success:false,
                    msg:'User not found'
                })
            }
            else{
                //If user exist then compare password with user password
                bcrypt.compare(req.body.password,userdata.password,(err,data)=>{
                    if(err){
                        res.json({
                            status:409,
                            success:false,
                            msg:'Invalid password'
                        })
                    }
                    else{
                            payload = {
                            _id : userdata._id,
                            name : userdata.name,
                            email : userdata.email,
                            usertype : userdata.usertype,
                        }
                        token = jwt.sign(payload,secretkey)
                        //here we can also use expire time
                        res.json({
                            status:200,
                            success:true,
                            msg:'login successfully',
                            data:userdata,
                            token:token
                        })
                    }
                })
                
            }
        })
        .catch()
    }
}

module.exports={
    register,
    getallregister,
    login
}