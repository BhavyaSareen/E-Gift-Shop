import { useState } from "react"
import Apiservices from "./Apiservices"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
export default function Register() {
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const [contact,setcontact] = useState()
    const [address,setaddress] = useState()
    const navigate = useNavigate()
    let data={
        name:name,
        email:email,
        password:password,
        contact:contact,
        address:address
    }
    const handleform = (e)=>{
        e.preventDefault()
        Apiservices.register(data).then(
            (e)=>{
                // console.log(e)
                if(e.data.success){
                    toast.success(e.data.msg, "Please Login")
                    setTimeout(() => {
                        navigate("/userlogin")
                    }, 1000);
                }
            }
        )
    }
    return (
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div> <div className={loading?"disabled-screen":""}>
            <div className="container border shadow my-4">
                <form onSubmit={handleform}>
                <div className="row justify-content-center my-5">
                    <h1>Registeration Form</h1>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <label>Name</label>
                    </div>
                    <div className="col-sm-11">
                        <input className="form-control" type="text" value={name} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setname(e.target.value)
                            }
                        } />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-sm-1">
                        <label>E-mail</label>
                    </div>
                    <div className="col-sm-11">
                        <input className="form-control" type="email" value={email} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setemail(e.target.value)
                            }
                        } />
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-sm-1">
                        <label>Password</label>
                    </div>
                    <div className="col-sm-11">
                        <input className="form-control" type="password" value={password} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setpassword(e.target.value)
                            }
                        } />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-sm-1">
                        <label>Contact</label>
                    </div>
                    <div className="col-sm-11">
                        <input className="form-control" type="number" value={contact} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setcontact(e.target.value)
                            }
                        }/>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-sm-1">
                        <label>Address</label>
                    </div>
                    <div className="col-sm-11">
                        <textarea className="form-control" value={address} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setaddress(e.target.value)
                            }
                        } />
                    </div>
                </div>
                <div className="row ">
                    <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                </div>
                </form>
            </div>
            </div>
            <ToastContainer/>
        </>
    )
}



