import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Apiservices from "../../Apiservices"
import { useEffect } from "react"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"
export default function UpdateSubCategory(){
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const[Category_id,setCategory_id]= useState([])
    const[Sub_Category_Name,setSub_Category_Name]= useState([])
    const[Sub_Category_Image,setSub_Category_Image]= useState([])
    const[Description,setDescription]= useState([])
    const navigate = useNavigate()

    const param= useParams()
    const _id= param.id

    //It is used for prefilled data
    useEffect(
        ()=>{
            Apiservices.getsinglesubcategory(_id).then(
                (e)=>{
                    console.log(e)
                    setTimeout(()=>{
                        setLoading(false)
                    },1500)
                    setCategory_id(e.data.data.Category_id._id)
                    setSub_Category_Name(e.data.data.Sub_Category_Name)
                    setDescription(e.data.data.Description)
                    setSub_Category_Image(e.data.data.Sub_Category_Image)
                }
            ).catch((error)=>{
                // console.log(error)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
                toast.error("Something went Wrong!! Please try Later")
            })
        },[]
    )

    //It is used to update
    const handleform=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data=new FormData()
        data.append("Category_id",Category_id)
        data.append("Sub_Category_Name",Sub_Category_Name)
        data.append("Sub_Category_Image",Sub_Category_Image)
        data.append("Description",Description)
        data.append("_id",_id)
        
        console.log(data)
        Apiservices.updatesubcategory(data).then(
            (x)=>{
                console.log(x)
            navigate('/admin/viewsubcategory')
            }           
        ).catch((error)=>{
            // console.log(error)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            toast.error("Something went Wrong!! Please try Later")
        })
    }

    // Category API is using for sub-category names
    const [Category,setcategory] = useState([])
    useEffect(
        ()=>{
            setTimeout(()=>{
                setLoading(false)
            },1500)
            Apiservices.getallcategory()
            .then(
                (x)=>{
                    console.log(x)
                    setcategory(x.data.data)
                }
            ).catch()

    },[]
    )


    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container">           
           
                <div className="row justify-content-center my-5" >
                <div className="fields-grid col-md-9 justify-content-center border shadow">

                <h1 className="text-center my-5">Update Sub-Category</h1>
                 <form onSubmit={handleform}>
                
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                        <label >Category</label><br/>
                        <select className=" mb-3 form-control" type="text" value={Category_id} onChange={
                            (e)=>{setCategory_id(e.target.value)}
                            }>
                            <option value="" disabled>Select Category</option>
                            {Category?.map((el,index)=>(
                                <option value={el?._id} selected={Category_id==el?._id}>{el?.Category_Name}</option>
                            ))}
                        </select>
                    </div>
                </div>     

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Sub Category Name</label><br/>
                        <input className="form-control mb-3" type="text" placeholder="Sub-Category Name" 
                         required="" value={Sub_Category_Name} onChange={
                            (e)=>{
                                setSub_Category_Name(e.target.value)
                            }
                        }/>
                    </div>
                </div>  
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Image</label><br/>
                        <input type="file" required="" onChange={
                            (e)=>{
                                console.log(e)
                                //  uploadimage(e)
                                setSub_Category_Image(e.target.files[0])
                            }
                        }/>
                    </div>
                </div>  
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-3">
                        <label>Description</label><br/>
                        <textarea className="form-control mb-4" name="Description" required=""
                        value={Description} onChange={
                            (e)=>{
                                setDescription(e.target.value)
                            }
                        }/> 
                    </div>
                </div>               
                <div className="row justify-content-center  ">
                    <div className="col-md-4 d-block mx-auto mb-3">
                    <button type="submit" className="btn subscrib-btnn">Update</button>
                    </div>
                </div>              
                </form>
                </div>
                </div>           
        </div>
        </div>
        </>
    )
}