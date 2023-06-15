export default function Miscellaneous(){
    const obj=[
        {img:"mi1.jpg"},
        {img:"mi2.1.jpg"},
        {img:"mi3.jpg"},
        {img:"mi4.jpg"},
        {img:"mi5.jpg"},
        {img:"mi1.jpg"},
        {img:"mi2.2.jpg"},
        {img:"mi3.jpg"}
        
    ]
    return(
        <>
        <div className="container my-2 ">
            <div className="row">         
            {obj.map((el)=>(               
                <div className="col-md-3">                  
                    <div class="card mt-4" style={{width: "18rem;"}}>
                    <img src={"/assets/images/Miscellaneous/Updated/"+`${el.img}`} className="card-img-top " alt="..." style={{width: "18rem;"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </>
    )
}