import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function ViewProducts(){
    const imageUrl = "http://localhost:4000/"
    const [product,setproduct] = useState()
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    useEffect(()=>{
        Apiservices.getallproduct()
        .then(
            (e)=>{
                console.log(e)
                setproduct(e.data.data)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
            }
        )
        .catch((error)=>{
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
            <div className="container table-responsive my-4">
                <h1 className="text-center mb-3">View Product</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Category Name</th>
                            <th>Sub-Category Name</th>
                            <th>Product name</th>
                            <th>Product_code</th>
                            <th>Images</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                        {product?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.Category_id?.Category_Name}</td>
                                <td>{el?.Sub_Category_id?.Sub_Category_Name}</td>
                                <td>{el?.Product_Name}</td>
                                <td>{el?.Product_Code}</td>
                                <td>
                                    <img src={imageUrl+`${el?.Product_Image}`}
                                    style={{height:"100px"}}/>
                                </td>
                                <td>{el?.Product_Price}</td>
                                <td>{el?.Product_Quantity}</td>
                                <td>
                                    <button className="btn btn-outline-secondary" >
                                        <Link to={"/admin/viewProduct/updateproduct/"+`${el?._id}`}>
                                            <img src={"/assets/images/edit.png"} style={{height:"20px"}}/></Link>
                                    </button>
                                </td>
                                {/* <td>
                                    <button className="btn btn-outline-dark" >
                                    <img src={"/assets/images/delete.png"} style={{height:"20px"}}/>                                        
                                    </button>
                                </td> */}
                            </tr>
                        ))}  
                </table>
            </div>
            </div>
        </>
    )
}