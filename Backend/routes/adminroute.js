const router = require('express').Router()

const Categorycontroller = require('../controller/Categorycontroller')
const subcategorycontroller = require('../controller/Sub-CategoryController')
const productcontroller = require('../controller/productcontroller')
const ordercontroller = require('../controller/Ordercontroller')
const enquirycontroller = require('../controller/EnquiryController')
const usercontroller = require('../controller/usercontroller')
const Dashboard = require('../controller/Dashboard')


//Requiring multer for multimedia
const multer = require('multer')

//Requiring multer in category part
const CategoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/category')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(file)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})
const categoryupload = multer({ storage: CategoryStorage })

//Requiring multer in sub-category part
const Sub_CategoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/Sub_Category')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(file)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})
const Sub_Categoryupload = multer({ storage: Sub_CategoryStorage })

//Requiring multer in product part
const ProductStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/Product')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(file)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})
const Productupload = multer({ storage: ProductStorage })

//Requiring multer in Order part
const OrderStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/Order')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(file)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})
const Orderupload = multer({ storage: OrderStorage })




//User routes start
router.post('/register', usercontroller.register)
router.post('/getallregister', usercontroller.getallregister)
router.post('/login', usercontroller.login)

//Dashboard
router.post('/Dashboard',Dashboard.Dashboard)

//category routes start
router.post('/addcategory', categoryupload.single('Category_Image'), Categorycontroller.addcategory)
router.post('/getallcategory', Categorycontroller.getallcategory)
router.post('/getsinglecategory', Categorycontroller.getsinglecategory)
router.post('/updatecategory',categoryupload.single('Category_Image'), Categorycontroller.updatecategory)

//Sub category routes start
router.post('/addsubcategory', Sub_Categoryupload.single('Sub_Category_Image'), subcategorycontroller.addsubcategory)
router.post('/getallsubcategory', subcategorycontroller.getallsubcategory)
router.post('/getsinglesubcategory', subcategorycontroller.getsinglesubcategory)
router.post('/updatesubcategory',Sub_Categoryupload.single('Sub_Category_Image'), subcategorycontroller.updatesubcategory)

//Product routes start
router.post('/addproduct', Productupload.single('Product_Image'), productcontroller.addproduct)
router.post('/getallproduct', productcontroller.getallproduct)
router.post('/getsingleproduct', productcontroller.getsingleproduct)
router.post('/updateproduct', Productupload.single('Product_Image'), productcontroller.updateproduct)

//Order routes start
router.post('/addorder',Orderupload.single('Order_Image'), ordercontroller.addorder)
router.post('/getallorder', ordercontroller.getallorder)
router.post('/getsingleorder', ordercontroller.getsingleorder)
router.post('/updateorder', ordercontroller.updateorder)

//Enquiry routes start
router.post('/addenquiry', enquirycontroller.addenquiry)
router.post('/getallenquiry', enquirycontroller.getallenquiry)
router.post('/getsingleenquiry', enquirycontroller.getsingleenquiry)
router.post('/updateenquiry', enquirycontroller.updateenquiry)




module.exports = router