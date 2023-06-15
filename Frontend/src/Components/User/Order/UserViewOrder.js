import { useEffect, useState } from "react"
import Apiservices, { BASE_URL_IMG } from "../../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"
import { Navigate } from "react-router-dom";

export default function UserViewOrder(){
   
   const [myData,setMyData]=useState()
   const [loading,setLoading]=useState(true)
   const override={
       "position":'absolute',
       "display":"block",
       "top":"64%",
       "zIndex":"1",
   }
   useEffect(()=>{
    let data_id={
        Customer_id:sessionStorage.getItem("user_id")
    }
    Apiservices.getallorder(data_id)
    .then(
        (x)=>{
            console.log(x)
            setMyData(x.data.data)
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
},[])
 const authenticate=sessionStorage.getItem("authenticate")
    const userType=sessionStorage.getItem("user_type")
    if(!authenticate){
        sessionStorage.setItem("message", "Please Login!!")
        return <Navigate replace to="/userlogin"/>
    }
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container table-responsive mt-5">
                <h1 className="text-center">Order Details</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Product name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                        {myData?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.Product_id?.Product_Name}</td>
                                <td>
                                    <img src={BASE_URL_IMG+el?.Product_id?.Product_Image}
                                    style={{height:"100px"}}/>
                                </td>
                                <td>&#8377;{el.Product_id?.Product_Price}</td>
                                <td>{el.Description}</td>
                                <td>{el?.orderStatus}</td>
                            </tr>
                        ))}  
                </table>
            </div>
            </div>
        </>
    )
}