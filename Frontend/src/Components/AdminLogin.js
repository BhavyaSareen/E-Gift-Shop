import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Apiservices from "./Apiservices";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";
export default function AdminLogin() {
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const[email,setemail] = useState()
    const[password,setpassword] = useState()
    const navigate = useNavigate()
    const formhandle=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data={
            email:email,
            password:password
        }
        Apiservices.login(data)
        .then(
            (x)=>{
                console.log(x)
                if(x.data.success){
                    sessionStorage.setItem("token",x.data.token)
                    sessionStorage.setItem("authenticate",true)
                    if(x.data.data.usertype==1){
                    toast.success(x.data.msg)
                        setTimeout(() => {
                            navigate("/admin")
                        }, 2000);
                    }
                    else{
                        toast.error("Invalid User")
                    }
                   
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
        .catch(
            (error)=>{
                console.log(error)
                toast.error("Something went wrong!!")

            }
        )  
}

    return (
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container register-form ">
                <div className="row mt-5">
                    <div className="col-md-6 ">
                        <img src="assets/images/hero-img.png" className="img-fluid" alt="Responsive image" />
                    </div>

                    <div className="col-md-5 ml-5">
                        <form  method="post" className="justify-content-center border shadow" onSubmit={formhandle}>
                            <div className="row">
                                <div className="col-md-2 " >
                                    <img src="assets/images/admin.png" className="img-fluid mt-5 ml-5 " alt="Responsive image" />
                                </div>
                                <div className="col-md-8 ">
                                    <h1 className="text-center py-5 ">Admin login</h1>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <label>Email</label>
                                    <input className="mb-5" type="email" placeholder="Your Email" name="Your Email" required=""
                                     value={email} onChange={(e)=>{
                                        // console.log(e)
                                        // console.log(e.target.value)
                                        setemail(e.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <label>Password</label>
                                    <input type="password" placeholder="password" name="password" required="" 
                                    value={password} onChange={(e)=>{
                                        // console.log(e)
                                        // console.log(e.target.value)
                                        setpassword(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className="row justify-content-center  ">
                                <div className="col-md-3 d-block mx-auto mb-3">
                                    <button type="submit" className="btn subscrib-btnn">Login</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            </div>
            
            <ToastContainer/>
            
        </>
    )
}