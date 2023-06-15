import { useState } from "react"
import Apiservices from "../../Apiservices"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
export default function AddCategory(){

    const [Category_Name,setCategory_Name] = useState()
    const [Category_Image,setCategory_Image] = useState()
    const [Description,setDescription] = useState()
    const navigate = useNavigate()
    const uploadimage = (e) =>{
        setCategory_Image(e.target.files[0])
    }

    const formhandle=(x)=>{
        x.preventDefault()
        setLoading(true)
        let data=new FormData()
            data.append("Category_Name",Category_Name)
            data.append("Category_Image",Category_Image)
            data.append("Description",Description)
        
        Apiservices.addcategory(data)
        .then(
            (e)=>{
                // console.log(e)
                if(e.data.success){
                navigate('/admin/viewcategory')
                }
                else{
                    toast.error(e.data.msg)
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
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    return(
        <>
       <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container">           
                <div className="row justify-content-center my-5" >
                <div className="fields-grid col-md-9 justify-content-center border shadow">
                <h1 className="text-center my-5">Add Category</h1>
                 <form onSubmit={formhandle}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Name</label><br/>
                        <input className="form-control  mb-3" type="text" placeholder="Category Name" 
                        name="Product Name" required value={Category_Name} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setCategory_Name(e.target.value)
                            }
                        }/>
                    </div>
                </div>  
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <label>Image</label><br/>
                        <input type="file" name="image"  onChange={
                            (e)=>{
                                uploadimage(e)
                                // console.log(e.target.files[0])
                                // setCategory_Image(e.target.files[0])
                                // setCategory_Image(Category_Image)
                            }
                        }/>
                    </div>
                </div>  
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-3">
                        <label>Description</label><br/>
                        <textarea className="form-control mb-4" name="Description" required
                        value={Description} onChange={
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