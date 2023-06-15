import { useEffect, useState } from "react"
import Apiservices,{BASE_URL_IMG} from "../Apiservices"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners";
export default function ViewOrders(){
    const [order,setorder] = useState()
    useEffect(()=>{
        Apiservices.getallorder().then(
            (e)=>{
                console.log(e)
                setorder(e.data.data)
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
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const updateOrder=(id,status)=>{
       setLoading(true)
        let data={
            _id:id,
            orderStatus:status
        }
        Apiservices.updateOrder(data).then((x)=>{
            if(x.data.success){
                toast.success(x.data.msg)
                setTimeout(()=>{
                    setLoading(false)
                },1000)
                setTimeout(()=>{
                    window.location.reload()
                },900)
            }
            else{
                setTimeout(()=>{
                    setLoading(false)
                },1500)
                toast.error(x.data.msg)
            }
        })
    }
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container table-responsive mt-3">
                <h1 className="text-center mb-3">Orders</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            {/* <th>Customer_id</th> */}
                            <th>Product name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        {order?.map((el,index)=>(
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
                                <td>
                                    {el?.orderStatus=='Pending'?
                                    <div className="btn btn-group">
                                    <button className="btn btn-success" onClick={()=>{updateOrder(el?._id, "Approve")}}>
                                        <i className="fa fa-thumbs-up"></i>
                                    </button>
                                    <button className="btn btn-danger" onClick={()=>{updateOrder(el?._id,"Rejected")}}>
                                        <i className="fa fa-solid fa-thumbs-down"></i>
                                    </button>
                                    </div>:el?.orderStatus=='Approve'?
                                    <button className="btn btn-success" onClick={()=>{updateOrder(el?._id,"Packed")}}>Packed</button>:el?.orderStatus=='Packed'?
                                    <button className="btn btn-success" onClick={()=>{updateOrder(el?._id,"Shipped")}}>Shipped</button>:el?.orderStatus=='Shipped'?
                                    <button className="btn btn-success" onClick={()=>{updateOrder(el?._id,"Delivered")}}>Delivered</button>:
                                    el?.orderStatus
                                    }
                                </td>
                            </tr>
                        ))}  
                </table>
            </div>
            </div>
        </>
    )
}