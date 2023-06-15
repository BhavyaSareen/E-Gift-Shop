const User = require('../models/usermodel')
const bcrypt = require('bcrypt')
const saltround = 10

exports.adminseeder = (req,res)=>{
    User.findOne({email:'Bhavyasareen@gmail.com'})
    .then(userdata=>{
        if(userdata == null){
            //insert
            let userobj = new User()
            userobj.email = 'Bhavyasareen@gmail.com'
            userobj.password = bcrypt.hashSync("28",saltround)
            userobj.name = "Bhavya"
            userobj.usertype = 1
            userobj.save()
            console.log("Admin registered")
        }
        else{
            console.log('admin already exists')
        }
    })
}