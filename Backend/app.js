const express = require('express')
const app = express()
const port = 4000
const config = require('./config/db')
const cors= require('cors')
app.use(cors())

app.use(express.urlencoded({extended:true}))  //used in req.body in api
app.use(express.json({limit:'50mb'}))
app.use(express.static(__dirname+"/public"))

const adminroutes=require('./routes/adminroute')
app.use("/admin",adminroutes)

const seeder = require('./config/seeder')
seeder.adminseeder()



app.listen(port,()=>{
    console.log("port is "+ port)
})