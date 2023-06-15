import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Apiservices from "./Apiservices";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
export default function UserLogin(){
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const[email,setemail] = useState("user3@gmail.com")
    const[password,setpassword] = useState("user3")
    const navigate = useNavigate()

    const handleform=(e)=>{
        e.preventDefault()

        let data={
            email:email,
            password:password
        }
        Apiservices.login(data).then(
            (x)=>{
                console.log(x)
                if(x.data.success){
                sessionStorage.setItem("token",x.data.token)
                sessionStorage.setItem("authenticate",true)
                sessionStorage.setItem("user_id",x.data.data._id)
                if(x.data.data.usertype==2)
                {
                    toast.success(x.data.msg)
                    setTimeout(() => {
                        navigate('/user')
                    }, 2000);
                }
                else{
                    toast.error("User is not customer")
                }
            }
            else{
                toast.error(x.data.msg)
            }
            }
        ).catch()
    }
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container register-form ">           
                <form onSubmit={handleform}>
                    <div className="row justify-content-center mt-5" >
                    <div className="fields-grid col-md-6 justify-content-center border shadow">
                    <h1 className="text-center my-4">User login</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" required="" value={email} onChange={
                                (e)=>{
                                    setemail(e.target.value)
                                }
                            }/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <label>Password</label>
                            <input type="password" placeholder="password" required="" value={password} onChange={
                                (e)=>{
                                    setpassword(e.target.value)
                                }
                            }/> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-3 d-block mx-auto mb-3">
                        <button type="submit" className="btn subscrib-btnn">Login</button>
                        </div>
                    </div>
                    <div className="row text-center ">
                        <div className="col-md-12 mb-5">
                            <h5 className="text-dark">Don't have an account?<Link to="/register"><a className="text-danger">Register</a></Link></h5>
                        </div>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}