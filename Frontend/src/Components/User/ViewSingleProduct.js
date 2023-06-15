import { useEffect, useState } from "react"
import {  Link, useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners"
import Apiservices,{BASE_URL_IMG} from "../Apiservices";
export default function ViewSingleProduct(){
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const param=useParams()
    const id=param.id
    const [product,setProduct]=useState()
    const [image,setImage]=useState()
    const [price,setPrice]=useState()
    const [pid,setId]=useState()
    const [address,setAddress]=useState()
    const [category,setCategory]=useState()
    const [subcat,setSubCategory]=useState()
    const authenticate=sessionStorage.getItem("authenticate")
    const navigate=useNavigate()
    const [productId,setProductId]=useState()
    useEffect(()=>{
        let data={
            _id:id
        }
        Apiservices.getsingleproduct(data).then((data)=>{
            setTimeout(()=>{
                setLoading(false)
            },1000)
            if(data.data.success){
                // console.log(data)
                setProduct(data.data.data.Product_Name)
                setImage(data.data.data.Product_Image)
                setId(data.data.data._id)
                setPrice(data.data.data.Product_Price)
                setCategory(data.data.data.Category_Id?.categroy_Name)
                setProductId(data.data.data._id)
            }
            else{
                toast.error(data.data.message)
            }
        }).catch((error)=>{
            console.log(error)
            toast.error("Something went wrong!!Try Again Later")
            setTimeout(()=>{
                setLoading(false)
            })
        })
    },[id])
    const orderNow=(e)=>{
        e.preventDefault()
        if(!authenticate){
            navigate("/userlogin")
            sessionStorage.setItem('message','Please Login to order!!')
        }
        else{
            setLoading(true)
            let data={
                Product_id:pid,
                Customer_id:sessionStorage.getItem("user_id"),
                Description:address
            }
            Apiservices.addOrder(data).then((data)=>{
                if(data.data.success){
                    toast.success(data.data.msg)
                    setTimeout(()=>{
                        setLoading(false)
                    },1500)
                }
                else{
                    toast.error(data.data.msg)
                }
            }).catch((error)=>{
                // console.log(error)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
                toast.error("Something went Wrong!! Please try Later")
            })
        }
    }
    return(
        <>
       <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <section className="breadcrumb-section set-bg set-bg-brd" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>Product</h2>
                                <div className="breadcrumb-option">
                                    <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                    <span>Product</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2 my-3">
                        <div className="card" >
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={BASE_URL_IMG+image} className="card-img h-100"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h2 className="card-heading">{product}</h2>
                                        <ul className="p-4 myfont">
                                            <li>Category {category}</li>
                                            <li>Sub-Category {subcat}</li>
                                            <li>Price Rs. {price}</li>
                                        </ul>
                                        <form onSubmit={orderNow}>
                                        <input className="form-control mb-4" placeholder="Enter your Address" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                                        <button className="btn btn-secondary w-75 btn-lg " >Order Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </>
    )
}
