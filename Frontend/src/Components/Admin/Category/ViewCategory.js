import { Link } from "react-router-dom"
import Apiservices from "../../Apiservices"
import { useEffect, useState } from "react"
import {toast} from "react-toastify";
import { ClipLoader } from "react-spinners";

export default function ViewCategory(){
    const imageUrl = "http://localhost:4000/"
    const [Category,setcategory] = useState([])
    useEffect(
        ()=>{
            Apiservices.getallcategory()
            .then(
                (x)=>{
                    setTimeout(()=>{
                        setLoading(false)
                    },1500)
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
    const [loading,setLoading]=useState(true)
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
            <div className="container table-responsive mt-5">
            <h1 className="text-center mb-5">View Category</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category name</th>
                            <th>Images</th>
                            <th>Description</th>
                            {/* <th>Status</th> */}
                            <th>Edit</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                        {Category?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.Category_Name}</td>
                                <td>
                                    <img src={imageUrl+`${el?.Category_Image}`}
                                    style={{height:"100px"}}/>
                                </td>
                                <td>{el?.Description}</td>
                                {/* <td>{el?.status?"Active":"In-active"}</td> */}
                                <td>
                                    <button className="btn btn-outline-secondary" >
                                        <Link to={"/admin/viewcategory/updatecategory/"+`${el?._id}`}>
                                            <img src={"/assets/images/edit.png"} style={{height:"20px"}}/></Link>
                                    </button>
                                </td>
                                {/* <td>
                                        <button type="submit" className='btn btn-outline-danger mx-2' onClick={()=>{changeStatus(el?._id,el?.status)}}>Change Status</button>
                                    </td> */}
                            </tr>
                        ))}  
                </table>
            </div>
            </div>
        </>
    )
}