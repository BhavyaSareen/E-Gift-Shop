export default function UserPlaceOrder(){

    const obj=[
        {
            Field:"Products",
            Count:"1000"
        },
        {
            Field:"Orders",
            Count:"500"
        },
        {
            Field:"Users",
            Count:"300"
        },
        {
            Field:"Out of stock",
            Count:"30"
        }
    ]
    return(
        <>
            <div className="container mt-5 ">
            <div className="row">         
            {obj.map((el)=>(               
                <div className="col-md-6">                  
                    <div className="card mb-3 border-danger" style={{width: "18rem;"}}>
                        <div className="card-body">
                            <h5 className="card-title">{el.Field}</h5>
                            <p className="card-text">{el.Count}</p>
                            <a href="#" className="btn mt-2">view</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </>
    )
    }
