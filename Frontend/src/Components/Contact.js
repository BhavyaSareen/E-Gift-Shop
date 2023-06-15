export default function Contact(){
    return(
        <>
       <div className="container register-form">           
            <form action="#" method="post">
                <div className="row justify-content-center my-5" >
                    <div className="col-md-6 mb-5"> 
                        <h1>Contact Information</h1>
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <h3>Address</h3>
                                <p>BIV/285, BXXIII-31, SHOP , BAZAR BEHRON, Punjab 144008</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <h3>phone Number</h3>
                                <p>9855559648</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <h3>E-Mail-Address</h3>
                                <p>sareenbrothers01@gmail.com</p>
                            </div>
                        </div>
                    </div>
                <div className="fields-grid col-md-6 justify-content-center border shadow ">
                <h1 className="text-center my-4">Contact Form</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* <label>Name</label><br/> */}
                        <input className="mb-2" type="text" placeholder="Your Name" name="Your Name" required=""/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* <label>Contact</label><br/> */}
                        <input className=" mb-2" type="number" placeholder="Your Contact"  name="number" required=""/> 
                    </div>
                </div> 
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* <label>Message</label><br/> */}
                        <input className="mb-5" type="text" placeholder="Your Message"  name="Message" required=""/> 
                    </div>
                </div>
                <div className="row justify-content-center  ">
                    <div className="col-md-5 d-block mx-auto mb-3">
                  <button type="submit" className="btn subscrib-btnn">Submit</button>
                    </div>
                </div>
                </div>
                </div>
            </form>
        </div>
        </>
    )
}