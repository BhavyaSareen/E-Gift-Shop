import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Apiservices, { BASE_URL_IMG } from "../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function ViewSubCategoryUser(){
    const [myData,setMyData]=useState()
    const {id}=useParams()
    useEffect(()=>{
        let data={
            Category_id:id
        }
        Apiservices.getallsubcategory(data)
        .then(
            (x)=>{
                console.log(x)
                setMyData(x.data.data)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
            }
        )
    },[])
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
                      
                   
