import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Apiservices, { BASE_URL_IMG } from "../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function UserSubCategory(){
    const [myData,setMyData]=useState()
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    useEffect(()=>{
        Apiservices.getallsubcategory()
        .then(
            (x)=>{
                setTimeout(()=>{
                    setLoading(false)
                },1500)
                console.log(x)
                setMyData(x.data.data)
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
            <div className="container mt-5 text-capitalize">
            <div className="row">         
            {myData?.map((el)=>(               
                <div className="col-md-6">                  
                    <Link to={"/user/userproducts/"+el._id}>
                        <div className="card mb-3" style={{width: "18rem;"}}>
                            <img src={BASE_URL_IMG+el?.Sub_Category_Image} className="card-img-top" alt="..."  style={{height:"250px"}}/>
                            <div className="card-body">
                                <h1 className="card-title text-dark text-center">{el.Sub_Category_Name}</h1>
                                <p className="card-text text-dark fs-4"> {el.Description}</p>
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
                 
