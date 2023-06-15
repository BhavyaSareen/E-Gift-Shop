export default function Walldecors(){
    const obj=[
        {img:"cl1.jpeg"},
        {img:"cl2.jpeg"},
        {img:"cl3.jpeg"},
        {img:"cl4.jpeg"},
        {img:"cl4.jpeg"}
    ]
    return(
        <>
        <div className="container my-2 ">
            <div className="row">         
            {obj.map((el)=>(               
                <div className="col-md-4">                  
                    <div class="card" style={{width: "18rem;"}}>
                    <img src={"/assets/images/"+`${el.img}`} className="card-img-top " alt="..." style={{width: "18rem;"}}/>
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