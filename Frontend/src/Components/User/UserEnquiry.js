import { useState } from "react"
import Apiservices from "../Apiservices"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
export default function UserEnquiry(){
    const [Product_Name, setProduct_Name] = useState()
    const [email, setemail] = useState()
    const [Contact, setContact] = useState()
    const [Message, setMessage] = useState()
    const navigate = useNavigate()
    const [loading,setLoading]=useState(false)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    
    const handleform=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data ={
            Product_Name:Product_Name,
            email:email,
            Contact:Contact,
            Message:Message
        }
        Apiservices.addenquiry(data).then(
            (e)=>{
                console.log(e)
                toast.success("Your enquiry has been sent")
                setTimeout(()=>{
                    navigate('/user')
                },2000)
            }
            
        ).catch((error)=>{
            // console.log(error)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            toast.error("Something went Wrong!! Please try Later")
        })
    }

    return(
        <>
        <div className="container ">           
            <form onSubmit={handleform}>
                <div className="d-flex justify-content-center my-5" >
                <div className="fields-grid col-md-8 justify-content-center border shadow" >
                <h1 className="text-center mt-5">Enquiry Form</h1>
                <h6 className="text-center my-3">We will get in touch with you shortly</h6>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <label>Product Name</label><br/>
                        <input className="mb-3 form-control" type="text" placeholder="Name" name="Name" required value={Product_Name} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setProduct_Name(e.target.value)
                            }
                        }/> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <label>Email</label><br/>
                        <input className="mb-3 form-control" type="email" placeholder="Your Email" name="Your Email" required value={email} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setemail(e.target.value)
                            }
                        }/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <label>Contact</label><br/>
                        <input className="mb-3 form-control" type="number" name="Your number" required value={Contact} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setContact(e.target.value)
                            }
                        }/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <label>Leave message</label><br/>
                        <textarea className="form-control" name="Your message" required value={Message} onChange={
                            (e)=>{
                                // console.log(e.target.value)
                                setMessage(e.target.value)
                            }
                        }/>
                    </div>
                </div>
                <div className="row justify-content-center  ">
                    <div className="col-md-3 d-block mx-auto mb-3">
                   <button type="submit" className="btn subscrib-btnn">Submit</button>
                    </div>
                </div>
                </div>
                </div>
            </form>
        </div>
        <ToastContainer/>
        </>
    )
}