import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Apiservices from "../../Apiservices"
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"

export default function UpdateCategory() {
    const [Category_Name, setCategory_Name] = useState([])
    const [Description, setDescription] = useState([])
    const [Image, setImage] = useState([])
    const navigate = useNavigate()
    const param = useParams()
    const _id = param.id

    useEffect(
        () => {
            Apiservices.getsinglecategory(_id).then(
                (e) => {
                    console.log(e)
                    setTimeout(()=>{
                        setLoading(false)
                    },1500)
                    setCategory_Name(e.data.data.Category_Name)
                    setDescription(e.data.data.Description)
                    setImage(e.data.data.Image)
                }
            ).catch((error)=>{
                // console.log(error)
                setTimeout(()=>{
                    setLoading(false)
                },1500)
                toast.error("Something went Wrong!! Please try Later")
            })
        }, []
    )
    const handleform = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = new FormData()
        data.append("Category_Name", Category_Name)
        data.append("Category_Image", Image)
        data.append("Description", Description)
        data.append("_id", _id)

        Apiservices.updatecategory(data).then(

            navigate('/admin/viewcategory')
        ).catch((error)=>{
            // console.log(error)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            toast.error("Something went Wrong!! Please try Later")
        })
    }
    const [loading,setLoading]=useState(true)
    const override={
        "position":'absolute',
        "display":"block",
        "top":"64%",
        "zIndex":"1",
    }
    return (
        <><div className={loading?"disabled-screen":""}>
        <div className="d-flex justify-content-center">
            <ClipLoader loading={loading} cssOverride={override} size={120}/>
        </div>
            <div className="container">

                <div className="row justify-content-center my-5" >
                    <div className="fields-grid col-md-9 justify-content-center border shadow">

                        <h1 className="text-center my-5">Update Category</h1>
                        <form onSubmit={handleform}>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <label>Name</label><br />
                                    <input className="form-control mb-3" type="text" placeholder="Category Name" required value={Category_Name} onChange={
                                            (e) => {
                                                // console.log(e.target.value)
                                                setCategory_Name(e.target.value)
                                            }
                                        } />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <label>Image</label><br />
                                    <input type="file" required="" onChange={
                                        (e) => {
                                            // console.log(e.target.files[0])
                                            setImage(e.target.files[0])
                                        }
                                    } />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 mt-3">
                                    <label>Description</label><br />
                                    <textarea className="form-control mb-4" required
                                        value={Description} onChange={
                                            (e) => {
                                                // console.log(e.target.value)
                                                setDescription(e.target.value)
                                            }
                                        } />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 d-block mx-auto mb-3">
                                    <button type="submit" className="btn subscrib-btnn">+ Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}