import { Link } from "react-router-dom"

export default function UserCategory(){

    const obj=[
        {
            image:"IMG-20230402-WA0399.jpg",
            Field:"Frames"
        },
        {
            image:"IMG-20230402-WA0342.jpg",
            Field:"Collage"
        },
        {
            image:"Clocks/Updated/cl21.3.jpg",
            Field:"Clock"
        },
        {
            image:"IMG-20230402-WA0459.jpg",
            Field:"Poster"
        },
        {
            image:"Wall Decor/w15.jpg",
            Field:"Wall Decors"
        },
        {
            image:"Miscellaneous/mi12.jpg",
            Field:"Miscellaneous"
        }
    ]
    return(
        <>
            <div className="container mt-5 ">
            <div className="row">         
            {obj.map((el)=>(               
                <div className="col-md-6">                  
                    <Link to='userproduct'><div className="card mb-3" style={{width: "18rem;"}}>
                        <img src={"/assets/images/"+`${el.image}`} className="card-img-top" alt="..."  style={{width: "500px"}}/>
                            <div className="card-body">
                                <h1 className="card-title text-dark text-center">{el.Field}</h1>
                                {/* <p className="card-text"> {el.Type}</p> */}
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                    </div></Link>
                </div>
                ))}
            </div>
            </div>
        </>
    )
    }                       
                      
                   
