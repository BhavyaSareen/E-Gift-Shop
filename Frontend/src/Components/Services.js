export default function Services(){
    return(
        <>
        {/* <!--service --> */}
      <section className="service py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Services</h3>
            <div className="row text-center">
               <div className="col-lg-4 col-md-6 abut-gride">
                  <span className="fas fa-truck"></span>
                  <h5>Shipping</h5>
                  <p className="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div className="col-lg-4 col-md-6 abut-gride">
                  <span className="fas fa-phone-volume"></span>  
                  <h5>Support</h5>
                  <p className="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div className="col-lg-4 col-md-6 abut-gride">
                  <span className="fas fa-undo"></span>
                  <h5> Return</h5>
                  <p className="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div className="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                  <span className="fas fa-money-bill-alt"></span>
                  <h5>Online Cash</h5>
                  <p className="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div className="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                  <span className="fas fa-exchange-alt"></span>
                  <h5>Exchange</h5>
                  <p className="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div className="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                  <span className="fas fa-thumbs-up"></span>
                  <h5>Quality</h5>
                  <p className="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
            </div>
         </div>
      </section>
      {/* <!--//service --> */}
      {/* <!--subscribe-address--> */}
      <section className="subscribe">
         <div className="container-fluid">
         <div className="row">
            <div className="col-lg-6 col-md-6 map-info-right px-0">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe>
            </div>
            <div className="col-lg-6 col-md-6 address-w3l-right text-center">
               <div className="address-gried ">
                  <span className="far fa-map"></span>
                  <p>25478 Road St.121<br/>USA New Hill
                  </p>
               </div>
               <div className="address-gried mt-3">
                  <span className="fas fa-phone-volume"></span>
                  <p> +(000)123 4565<br/>+(010)123 4565</p>
               </div>
               <div className=" address-gried mt-3">
                  <span className="far fa-envelope"></span>
                  <p><a href="mailto:info@example.com">info@example1.com</a>
                     <br/><a href="mailto:info@example.com">info@example2.com</a>
                  </p>
               </div>
            </div>
         </div>
		 </div>
      </section>
      {/* <!--//subscribe-address--> */}
      <section className="sub-below-address py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Get In Touch Us</h3>
            <div className="icons mt-4 text-center">
               <ul>
                  <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                  <li><a href="#"><span className="fas fa-envelope"></span></a></li>
                  <li><a href="#"><span className="fas fa-rss"></span></a></li>
                  <li><a href="#"><span className="fab fa-vk"></span></a></li>
               </ul>
               <p className="my-3">velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
               </p>
            </div>
            <div className="email-sub-agile">
               <form action="#" method="post">
                  <div className="form-group sub-info-mail">
                     <input type="email" className="form-control email-sub-agile" placeholder="Email"/>
                  </div>
                  <div className="text-center">
                     <button type="submit" className="btn subscrib-btnn">Subscribe</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
      {/* <!--//subscribe--> */}
        </>
    )
}