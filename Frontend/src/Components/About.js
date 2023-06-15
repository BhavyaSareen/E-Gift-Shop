export default function About(){
    return(
        <>
        {/* <!--About --> */}
      <section className="about py-lg-4 py-md-3 py-sm-3 ">
         <div className="container-fluid ">
            <div className="about-innergrid-agile text-center">
               <div className=" img-toy-w3l-top">
               </div>
            </div>
            {/* <h3 className="title  mb-lg-5 mb-md-4 mb-sm-4 mt-5">About Us</h3> */}
            <h5 className="display-4 mt-5 mx-5">About Us</h5><br/>
            <h1 className="display-5 mx-5">Frame your life's best moments with us!</h1>

            <div className="row mt-2">
               
               <div className="col-md-6 ml-5">
                  <p>Welcome to our online e-gift shop of photo frames and collages! We are a team of passionate
                      individuals who believe in the power of photographs to preserve memories and create lasting
                       impressions. Our mission is to help you frame and display your cherished moments with
                        beautiful and unique photo frames and collages that will stand the test of time.</p>
                  <p>We understand that every photo tells a story, and that's why we offer a wide range of frames
                      and collages to suit all tastes and preferences. From classic and elegant designs to modern
                       and funky styles, we have something for everyone. Our frames and collages are made with
                        high-quality materials and are built to last, ensuring that your memories will be preserved
                         for years to come.</p>
                  <p>At our online e-gift shop, we pride ourselves on excellent customer service. We are dedicated
                      to making your shopping experience as smooth and enjoyable as possible, from browsing our
                       website to receiving your order. We offer fast and reliable shipping, secure payment options,
                        and a hassle-free return policy.</p>
                  <p>Thank you for choosing our online e-gift shop of photo frames and collages to help you
                      create and display your memories. We are honored to be a part of your story and look
                       forward to serving you.</p>
               </div>
               <div className="col-md-5 mr-5" style={{backgroundColor:"black"}}>
                  <img src="assets/images/b1.jpg" style={{width:"600px", height:"410px"}}/>
               </div>
            </div>

            <div className="about-sub-inner text-center mt-lg-4 mt-3">
               <h4 className="mt-5">Why choose us?
               </h4>
               <div className="row">
                  <div className="col-lg-4 col-md-4 abut-gride">
                     <span className="fas fa-truck"></span>
                     <h5>Unique Designs</h5>
                     <p className="mt-3"> We take pride in offering unique and innovative designs that you won't find anywhere else. From classic and elegant to modern and funky, we have something to suit every style and preference.
                     </p>
                  </div>
                  <div className="col-lg-4 col-md-4 abut-gride">
                     <span className="fas fa-phone-volume"></span>  
                     <h5>Excellent Customer Service </h5>
                     <p className="mt-3">Our team is dedicated to providing excellent customer service and ensuring that your shopping experience is a smooth and enjoyable one. We are always available to answer your questions and help you with your order.
                     </p>
                  </div>
                  <div className="col-lg-4 col-md-4 abut-gride">
                     <span className="fas fa-undo"></span>
                     <h5> Fast and Reliable Shipping</h5>
                     <p className="mt-3">If you want to receive your order as soon as possible, which is why we offer fast and reliable shipping options. We ship our products globally, and we work with trusted carriers to ensure that your order arrives safely and on time.

                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!--//about --> */}
      {/* <!--Customers Review --> */}
      <section className="clients py-lg-4 py-md-3 py-sm-3 py-3" id="clients">
         <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Customers Review</h3>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                 <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid" style={{width:"100px"}}/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/tt1.jpg" alt="" className="image-fluid"/>
                                    <p className="mt-3"><span className="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                       ex in mollis iaculis. Suspendisse tincidunt
                                       velit sagittis vehicula. Duis posuere 
                                       velit sagittis vehicula. Duis posuere <span className="fas fa-quote-right"></span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                 <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid" style={{width:"100px"}}/>
                                    <p className="mt-3"><span className="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                       ex in mollis iaculis. Suspendisse tincidunt
                                       velit sagittis vehicula. Duis posuere 
                                       velit sagittis vehicula. Duis posuere <span className="fas fa-quote-right"></span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                    <p className="mt-3"><span className="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                       ex in mollis iaculis. Suspendisse tincidunt
                                       velit sagittis vehicula. Duis posuere 
                                       velit sagittis vehicula. Duis posuere <span className="fas fa-quote-right"></span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                    <p className="mt-3"><span className="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                       ex in mollis iaculis. Suspendisse tincidunt
                                       velit sagittis vehicula. Duis posuere 
                                       velit sagittis vehicula. Duis posuere <span className="fas fa-quote-right"></span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                    <p className="mt-3"><span className="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                       ex in mollis iaculis. Suspendisse tincidunt
                                       velit sagittis vehicula. Duis posuere 
                                       velit sagittis vehicula. Duis posuere <span className="fas fa-quote-right"></span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                    <img src="images/IMG-20230402-WA0243.jpg.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/IMG-20230402-WA0243.jpg" alt="" className="image-fluid"/>
                                    <p className="mt-3"><span className="fas fa-quote-left"></span> velit sagittis vehicula. Duis posuere 
                                       ex in mollis iaculis. Suspendisse tincidunt
                                       velit sagittis vehicula. Duis posuere 
                                       velit sagittis vehicula. Duis posuere <span className="fas fa-quote-right"></span>
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
               </a>
            </div>
         </div>
      </section>
      {/* <!--//Customers Review --> */}
      {/* <!--subscribe-address--> */}
      <section className="subscribe">
         <div className="container-fluid">
         <div className="row">
            <div className="col-lg-6 col-md-6 map-info-right px-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.7319675775816!2d75.56912861445696!3d31.338774581430023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b2a9183368b%3A0x5e28fed9c4493b08!2sSareen%20Brothers%20Gift%20Shop%20-%20Jalandhar!5e0!3m2!1sen!2sin!4v1680633525103!5m2!1sen!2sin" width="600" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
            </div>
            <div className="col-lg-6 col-md-6 address-w3l-right text-center">
               <div className="address-gried ">
                  <span className="far fa-map"></span>
                  <p>BIV/285, BXXIII-31, SHOP , BAZAR BEHRON, Punjab 144008<br/>Jalandhar
                  </p>
               </div>
               <div className="address-gried mt-3">
                  <span className="fas fa-phone-volume"></span>
                  <p> 9855559648<br/>+6284095825</p>
               </div>
               <div className=" address-gried mt-3">
                  <span className="far fa-envelope"></span>
                  <p><a href="mailto:info@example.com">sareenbrothers01@gmail.com</a>
                     <br/><a href="mailto:info@example.com">Bhavyasareen28@gmail.com</a>
                  </p>
               </div>
            </div>
         </div>
		 </div>
      </section>

      
      
        </>
    )
}