import { useEffect, useState } from "react"
import Apiservices from "../../Apiservices"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import {toast} from "react-toastify"
export default function AddSubCategory(){
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const[Sub_Category_Name,setSub_Category_Name]= useState([])
    const[Category_id,setCategory_id]= useState([])
    const[Sub_Category_Image,setSub_Category_Image]= useState([])
    const[Description,setDescription]= useState([])
    const navigate = useNavigate()

    //Category API is using for category names
    const [Category,setcategory] = useState([])
    useEffect(
        ()=>{
            Apiservices.getallcategory()
            .then(
                (x)=>{
                    console.log(x)
                    setcategory(x.data.data)
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

    //It is used to upload image
    const uploadimage = (e) =>{
        setSub_Category_Image(e.target.files[0])
    }

    
    const formhandle=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data=new FormData()
        data.append("Sub_Category_Name",Sub_Category_Name)
        data.append("Category_id",Category_id)
        data.append("Sub_Category_Image",Sub_Category_Image)
        data.append("Description",Description)

        Apiservices.addsubcategory(data).then(
            (x)=>{
                console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                    navigate('/admin/viewsubcategory')
                }else{
                    toast.error(x.data.msg)
                }
            }
        ).catch((error)=>{
            // console.log(error)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            toast.error("Something went Wrong!! Please try Later")
        })
    }

    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container">                     
                <div className="row justify-content-center my-5" >
                <div className="fields-grid col-md-9 justify-content-center border shadow">

                <h1 className="text-center my-5">Add Sub-Category</h1>
                 <form onSubmit={formhandle}>
                
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                        <label >Category</label><br/>
                        <select className=" mb-3 form-control" type="text" required onChange={e=>{setCategory_id(e.target.value)}}>

                            <option value="" selected disabled>Select Category</option>
                            {Category?.map((el,index)=>(
                                <option value={el?._id}>{el?.Category_Name}</option>
                            ))}
                        </select>
                    </div>                
                </div>  

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Name</label><br/>
                        <input className="form-control mb-3" type="text" placeholder="Sub-Category Name" 
                        name="Product Name" required value={Sub_Category_Name} onChange={
                            (e)=>{
                                // console.log(e.target.value)
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
                                uploadimage(e)
                            }
                        }/>
                    </div>
                </div>  

                <div className="row justify-content-center">
                    <div className="col-md-8 mt-3">
                        <label>Description</label><br/>
                        <textarea className="form-control mb-4" name="Description" required 
                        value={Description}  onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setDescription(e.target.value)
                            }
                        }/> 
                    </div>
                </div>      

                <div className="row justify-content-center  ">
                    <div className="col-md-4 d-block mx-auto mb-3">
                        <button type="submit" className="btn subscrib-btnn">+ Add</button>
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