const Subcategory = require('../models/Sub-CategoryModel')
const { getallcategory, getsinglecategory, updatecategory } = require('./Categorycontroller')

// Add Sub Category API
addsubcategory = (req, res) => {

    var validation = ""
    if (req.body.Sub_Category_Name == "") {
        validation += "Sub Category Name is required \n"
    }
    if (req.body.Description == "") {
        validation += "Description is required \n"
    }

    if (!!validation) {
        res.json({
            status: 409,
            success: false,
            msg: validation
        })
    }
    else {
        let subcategoryobject = new Subcategory()
        subcategoryobject.Sub_Category_Name = req.body.Sub_Category_Name
        subcategoryobject.Description = req.body.Description
        subcategoryobject.Category_id = req.body.Category_id
        if (req.file) {
            subcategoryobject.Sub_Category_Image = "Sub_Category/" + req.file.filename
        }

        subcategoryobject.save()
        res.json({
            status: 200,
            success: true,
            msg: "Category added",
            data: req.body
        })
    }
}


// Get all Sub Category API
getallsubcategory = (req, res) => {
    Subcategory.find(req.body)
        .populate('Category_id')
        .then(subcategorydata => {
            res.json({
                status: 200,
                success: true,
                msg: 'data loaded',
                data: subcategorydata
            })
        })
        .catch(err => {
            res.json({
                status: 500,
                success: false,
                msg: 'error occured',
                error: String(err)
            })
        })
}


// Get Single Sub Category API
getsinglesubcategory = (req, res) => {
    var validation = ""
    if (req.body._id == "") {
        validation += "Id is required"
    }
    if (!!validation) {
        res.json({
            status: 409,
            success: false,
            msg: validation
        })
    }
    else {
        Subcategory.findOne({ _id: req.body._id }).populate("Category_id")
            .exec()
            .then(subcategorydata => {
                res.json({
                    status: 200,
                    success: true,
                    msg: 'data loaded',
                    data: subcategorydata
                })
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    msg: 'error occured',
                    error: String(err)
                })
            }
            )
    }
}

// Update Sub Category API
updatesubcategory = (req, res) => {
    var validation = ""
    if (req.body._id == "") {
        validation += "Id is required"
    }
    if (req.body.Sub_Category_Name == "") {
        validation += "Sub Category Name is required"
    }
    if (req.body.Description == "") {
        validation += "Description is required"
    }
    if (!!validation) {
        res.json({
            status: 409,
            success: false,
            msg: validation
        })
    }
    else {
        Subcategory.findOne({ _id: req.body._id })
            .then(subcategorydata => {
                if (subcategorydata == "") {
                    res.json({
                        status: 409,
                        success: false,
                        msg: 'Data not found'
                    })
                }
                else {
                    //update
                    subcategorydata.Category_id = req.body.Category_id
                    subcategorydata.Sub_Category_Name = req.body.Sub_Category_Name
                    subcategorydata.Description = req.body.Description
                    if (req.file) {
                        subcategorydata.Sub_Category_Image = "Sub_Category/" + req.file.filename
                    }
                    subcategorydata.save()
                    res.json({
                        status: 200,
                        success: true,
                        msg: 'Record updated'
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    msg: 'error occured',
                    error: String(err)
                })
            }
            )
    }
}

module.exports = {
    addsubcategory,
    getallsubcategory,
    getsinglesubcategory,
    updatesubcategory
}