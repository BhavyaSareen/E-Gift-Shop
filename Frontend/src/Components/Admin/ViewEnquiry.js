import { useEffect, useState } from "react"
import Apiservices from "../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function ViewEnquiry(){
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const [enquiry,setenquiry] = useState()
    useEffect(()=>{
    Apiservices.getallenquiry().then(
        (e)=>{
            console.log(e)
            setenquiry(e.data.data)
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
            <div className="container table-responsive ">
                <h1 className="text-center mb-4">Enquiry</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Email</th>
                            <th>Product name</th>
                            <th>Contact</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                        {enquiry?.map((el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                {/* <td>{el.Customer_id}</td> */}
                                <td>{el.email}</td>
                                <td>{el.Product_Name}</td>
                                <td>{el.Contact}</td>                              
                                <td>{el.Message}</td>
                            </tr>
                        ))}  
                </table>
            </div>
            </div>
        </>
    )
}