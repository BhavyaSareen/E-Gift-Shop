import { useEffect, useState } from "react"
import Apiservices from "../../Apiservices"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function AddProducts(){
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const [Category_id,setCategory_id] = useState()
    const [Sub_Category_id,setSub_Category_id] = useState()
    const [Product_Name,setProduct_Name] = useState()
    const [Product_Code,setProduct_Code] = useState()
    const [Product_Image,setProduct_Image] = useState("")
    const [Product_Price,setProduct_Price] = useState()
    const [Product_Quantity,setProduct_Quantity] = useState()
    const [Description,setDescription] = useState()
    const navigate = useNavigate()
    const uploadimage = (e) =>{
        console.log(e.target.files[0])
        setProduct_Image(e.target.files[0])
    }

    const handleform=(e)=>{
        e.preventDefault()
        setLoading(true)
    let data= new FormData()
        data.append("Category_id",Category_id)
        data.append("Sub_Category_id",Sub_Category_id)
        data.append("Product_Name",Product_Name)
        data.append("Product_Code",Product_Code)
        data.append("Product_Image",Product_Image)
        data.append("Product_Price",Product_Price)
        data.append("Product_Quantity",Product_Quantity)
        data.append("Description",Description)
    
    Apiservices.addproduct(data).then(
        (x)=>{
            // console.log(x)
            if(x.data.success){
                toast.success(x.data.msg)
            navigate('/admin/viewProduct')
            }else{
                toast.error(x.data.msg)
            }
        }
    )
    .catch((error)=>{
        // console.log(error)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        toast.error("Something went Wrong!! Please try Later")
    })
}
// Category API is using for category names
const [Category,setcategory] = useState([])
useEffect(
    ()=>{
        Apiservices.getallcategory()
        .then(
            (x)=>{
                console.log(x)
                setcategory(x.data.data)
            }
        ).catch()

},[]
)
//Sub Category
const [sub_Category,setsubcategory] = useState([])
useEffect(
    ()=>{
        let data={
            Category_id:Category_id,
        }
        Apiservices.getallsubcategory(data)
        .then(
            (x)=>{
                console.log(x)
                setsubcategory(x.data.data)
            }
        ).catch()

},[Category_id]
)

    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container register-form">           
            <form onSubmit={handleform}>
                <div className="row justify-content-center my-4" >
                <div className="fields-grid col-md-10 justify-content-center border shadow ">
                <h1 className="text-center my-5">Add Product</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Choose Category</label><br/>
                        <select className=" mb-3 form-control" type="text"  required=""
                        value={Category_id} onChange={
                            (e)=>{
                                setCategory_id(e.target.value)
                            }
                        }>
                           <option selected disabled>Select Category</option>
                           {Category?.map((el,index)=>(
                            <option value={el?._id}>{el?.Category_Name}</option>
                            ))}
                                
                            {/* <option>Frames</option>
                            <option>Collage</option>
                            <option>Clocks</option>
                            <option>Posters</option> */}
                            </select>
                    </div>
                </div>     
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Choose Sub-Category</label><br/>
                        <select className=" mb-3 form-control" type="text" required=""
                        value={Sub_Category_id} onChange={
                            (e)=>{
                                setSub_Category_id(e.target.value)
                            }
                        }>
                            <option selected disabled>Select Category</option>
                           {sub_Category?.map((el,index)=>(
                            <option value={el?._id}>{el?.Sub_Category_Name}</option>
                            ))}
                            {/* <option>Frames</option>
                            <option>Collage</option>
                            <option>Clocks</option>
                            <option>Posters</option> */}
                            </select>
                    </div>
                </div>     
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Product Name</label>
                        <input type="text" placeholder="Product Name" name="Product Name" required=""
                        value={Product_Name} onChange={
                            (e)=>{
                                setProduct_Name(e.target.value)
                            }
                        }/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Product Code</label>
                        <input type="text" placeholder="Product Code" name="Product Code" required=""
                        value={Product_Code} onChange={
                            (e)=>{
                                setProduct_Code(e.target.value)
                            }
                        }/> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 my-3">
                        <label>Image</label>
                        <input type="file" name="image" required="" onChange={
                            (e)=>{
                                uploadimage(e)
                                // setProduct_Image(e.target.files[0])
                            }
                        }/> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 my-3">
                        <label>Price</label>
                        <input type="text" placeholder="price" name="price" required=""
                        value={Product_Price} onChange={
                            (e)=>{
                                setProduct_Price(e.target.value)
                            }
                        }/> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 my-3">
                        <label>Quantity</label>
                        <input type="text" placeholder="Quantity" name="quanity" required=""
                        value={Product_Quantity} onChange={
                            (e)=>{
                                setProduct_Quantity(e.target.value)
                            }
                        }/> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 my-3">
                        <label>Desciption</label>
                        <textarea className="form-control" name="Description" required 
                        value={Description}  onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setDescription(e.target.value)
                            }
                        }/>                    
                    </div>
                </div>
                <div className="row justify-content-center  ">
                    <div className="col-md-3 d-block mx-auto mb-3">
                    <button type="submit" className="btn subscrib-btnn">Add</button>
                    </div>
                </div>
                </div>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}