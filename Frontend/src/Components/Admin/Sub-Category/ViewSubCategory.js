import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function ViewSubCategory(){
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const imageUrl = "http://localhost:4000/"
    const [sub_category, setsub_category]=useState()
    useEffect(()=>{
        Apiservices.getallsubcategory().then(
            (x)=>{
                // console.log(x)
                setsub_category(x.data.data)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
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
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container table-responsive mt-3">
            <h1 className="text-center mb-5">View Sub-Category</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category name</th>
                            <th>Sub-Category name</th>
                            <th>Images</th>
                            <th>Description</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                        {sub_category?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.Category_id?.Category_Name}</td>
                                <td>{el?.Sub_Category_Name}</td>
                                <td>
                                    <img src={imageUrl+`${el?.Sub_Category_Image}`} style={{height:"100px"}}/>
                                </td>
                                <td>{el?.Description}</td>
                                <td>
                                    <button className="btn btn-outline-secondary" >                                        
                                        <Link to={"/admin/viewsubcategory/updatesubcategory/"+`${el?._id}`}>
                                            <img src={"/assets/images/edit.png"} style={{height:"20px"}}/></Link>
                                    </button>
                                </td>
                            </tr>
                        ))}  
                </table>
            </div>
            </div>
        </>
    )
}