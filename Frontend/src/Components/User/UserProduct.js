import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Apiservices, { BASE_URL_IMG } from "../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function UserProduct(){
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
   const [myData,setMyData]=useState()
   const {id}=useParams()
   useEffect(()=>{
    if(id!=undefined && id!="undefined" && id!="" && id!=null){
    var data1={
        Sub_Category_id:id
    }
    }
    else{
        var data1={}
    }
    Apiservices.getallproduct(data1)
    .then(
        (e)=>{
            console.log(e)
            setMyData(e.data.data)
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
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
        <div className="container my-2 ">
            <div className="row">         
            {myData?.map((el)=>(               
                <div className="col-md-4 text-dark" >                  
                    <Link to={"/user/single_product/"+el._id}>
                        <div className="card mb-3" style={{width: "18rem;"}}>
                            <img src={BASE_URL_IMG+el?.Product_Image} className="card-img-top" alt="..."  style={{height:"250px"}}/>
                            <div className="card-body">
                                <h1 className="card-title text-dark text-center">{el.Product_Name}</h1>
                                <p className="card-text text-dark fs-4"> {el.Description}</p>
                                <div className="d-flex justify-content-between">
                                <span className="text-dark">&#8377; {el?.Product_Price}</span>
                                {el?.Product_Quantity>0?
                                <span className="text-success">In-Stock</span>: <span className="text-danger">Out-of-Stock</span>}
                                </div>
                                <button className="btn btn-primary d-block mx-auto w-25">View</button>
                            </div>
                        </div>
                    </Link>
                </div>
                ))}
            </div>
            </div>
            </div>
        </>
    )
}