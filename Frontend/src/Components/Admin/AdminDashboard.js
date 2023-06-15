import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function AdminDashboard(){
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const [total_categories,set_total_categories] = useState()
    const [total_Sub_categories,set_total_Sub_categories] = useState()
    const [total_Product,set_total_Product] = useState()
    const [total_Order,set_total_order] = useState()
    useEffect( ()=>{
        Apiservices.Dashboard().then(
            (e)=>{
                // console.log(e)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
                set_total_categories(e.data.total_categories)
                set_total_Sub_categories(e.data.total_Sub_categories)
                set_total_Product(e.data.total_Product)
                set_total_order(e.data.total_order)
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
            <div className="row adminbackgroundimg p-5">   

                  {/* Category Card */}
                <div className="col-md-5 mx-4 ">                  
                    <div className="card border mt-4 shadow zoom" style={{height: "25rem", borderRadius:"2%"}}>
                        <img src="/assets/images/Product.png" className="card-img-top  m-3" alt="..." style={{width:"70px"}}/>
                        <div className="card-body">
                            <h1 className="card-title ">Total categories</h1>
                            <h5 className="card-text mb-4">{total_categories}</h5>
                            <Link to="/admin/viewProduct"><a href="#" className="btn btn-outline-dark">View</a></Link>
                        </div>
                    </div>
                </div>

                  {/* Sub Category Card */}
                <div className="col-md-5 mx-4 ">                  
                    <div className="card border mt-4 shadow zoom" style={{height: "25rem", borderRadius:"2%"}}>
                        <img src="/assets/images/Product.png" className="card-img-top  m-3" alt="..." style={{width:"70px"}}/>
                        <div className="card-body">
                            <h1 className="card-title ">Total Sub categories</h1>
                            <h5 className="card-text mb-4">{total_Sub_categories}</h5>
                            <Link to="/admin/viewProduct"><a href="#" className="btn btn-outline-dark">View</a></Link>
                        </div>
                    </div>
                </div>

                  {/* Product Card */}
                <div className="col-md-5 mx-4 ">                  
                    <div className="card border mt-4 shadow zoom" style={{height: "25rem", borderRadius:"2%"}}>
                        <img src="/assets/images/Product.png" className="card-img-top  m-3" alt="..." style={{width:"70px"}}/>
                        <div className="card-body">
                            <h1 className="card-title ">Total Products</h1>
                            <h5 className="card-text mb-4">{total_Product}</h5>
                            <Link to="/admin/viewProduct"><a href="#" className="btn btn-outline-dark">View</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mx-4 ">                  
                    <div className="card border mt-4 shadow zoom" style={{height: "25rem", borderRadius:"2%"}}>
                        <img src="/assets/images/Product.png" className="card-img-top  m-3" alt="..." style={{width:"70px"}}/>
                        <div className="card-body">
                            <h1 className="card-title ">Total Orders</h1>
                            <h5 className="card-text mb-4">{total_Order}</h5>
                            <Link to="/admin/order"><a href="#" className="btn btn-outline-dark">View</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
    }

    