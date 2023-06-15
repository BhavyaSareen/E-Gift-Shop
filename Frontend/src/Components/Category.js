import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Apiservices from "./Apiservices"

export default function Category(){
    const imageUrl = "http://localhost:4000/"
    const [Category,setcategory] = useState([])
    const navigate = useNavigate()
    useEffect(
        ()=>{
            Apiservices.getallcategory()
            .then(
                (x)=>{
                    console.log(x)
                    setcategory(x.data.data)
                }
            ).catch()

    },[]
    )
    const func=(e)=>{
        console.log(e)
        navigate('/user/userproducts')
    }

    return(     
        <>
        <div className="container my-5 p-5 ">
            <div className="row ">   
                {Category?.map((el)=>(
                <div className="col-md-4">  
                <Link to={"/user/view_sub_cat/"+el?._id}>

                <div>         
                    <div className="card border mt-4 shadow zoom" style={{height: "26rem", borderRadius:"2%"}} >
                        <img src="/assets/images/Product.png" className="card-img-top m-3" alt="..." style={{width:"70px"}}/>
                        <div className="card-body">
                            <h1 className="card-title text-dark">{el?.Category_Name}</h1>
                            <h5 className="card-text mb-4"><img src={imageUrl+`${el?.Category_Image}`} style={{height:"100px"}}/></h5>
                        </div>
                    </div>  
                    </div>     
                </Link>

                </div>
                ))}                       
            </div>
            </div>
        </>
    )
}