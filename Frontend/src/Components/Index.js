export default function Index(){
    return(
        <>
        <div className="header-outs" id="home">
         <div className="header-bar">
            <div className="info-top-grid">
               <div className="info-contact-agile">
                  <ul>
                     <li>
                        <span className="fas fa-phone-volume"></span>
                        <p>+(000)123 4565 32</p>
                     </li>
                     <li>
                        <span className="fas fa-envelope"></span>
                        <p><a href="mailto:info@example.com">info@example1.com</a></p>
                     </li>
                     <li>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="container-fluid">
               <div className="hedder-up row">
                  <div className="col-lg-3 col-md-3 logo-head">
                     <h1><a className="navbar-brand" href="index.html">Toys-Shop</a></h1>
                  </div>
                  <div className="col-lg-5 col-md-6 search-right">
                     <form className="form-inline my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                        <button className="btn" type="submit">Search</button>
                     </form>
                  </div>
                  <div className="col-lg-4 col-md-3 right-side-cart">
                     <div className="cart-icons">
                        <ul>
                           <li>
                              <span className="far fa-heart"></span>
                           </li>
                           <li>
                              <button type="button" data-toggle="modal" data-target="#exampleModal"> <span className="far fa-user"></span></button>
                           </li>
                           <li className="toyscart toyscart2 cart cart box_1">
                              <form action="#" method="post" className="last">
                                 <input type="hidden" name="cmd" value="_cart"/>
                                 <input type="hidden" name="display" value="1"/>
                                 <button className="top_toys_cart" type="submit" name="submit" value="">
                                 <span className="fas fa-cart-arrow-down"></span>
                                 </button>
                              </form>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                     <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                        <a href="about.html" className="nav-link">About</a>
                     </li>
                     <li className="nav-item">
                        <a href="service.html" className="nav-link">Service</a>
                     </li>
                     <li className="nav-item">
                        <a href="shop.html" className="nav-link">Shop Now</a>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <a className="nav-link" href="icon.html">404 Page</a>
                           <a className="nav-link " href="typography.html">Typography</a>
                        </div>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Product
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <a className="nav-link" href="product.html">Kids Toys</a>
                           <a className="nav-link " href="product.html">Dolls</a>
                           <a className="nav-link " href="product.html">Key Toys</a>
                           <a className="nav-link " href="product.html">Boys Toys</a>
                        </div>
                     </li>
                     <li className="nav-item">
                        <a href="contact.html" className="nav-link">Contact</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         {/* <!-- Slideshow 4 --> */}
         <div className="slider text-center">
            <div className="callbacks_container">
               <ul className="rslides" id="slider4">
                  <li>
                     <div className="slider-img one-img">
                        <div className="container">
                           <div className="slider-info ">
                              <h5>Pick The Best Toy For <br/>Your Kid</h5>
                              <div className="bottom-info">
                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor</p>
                              </div>
                              <div className="outs_more-buttn">
                                 <a href="about.html">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="slider-img two-img">
                        <div className="container">
                           <div className="slider-info ">
                              <h5>Sort Toys And Teddy bears<br/>For Kids</h5>
                              <div className="bottom-info">
                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor</p>
                              </div>
                              <div className="outs_more-buttn">
                                 <a href="about.html">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="slider-img three-img">
                        <div className="container">
                           <div className="slider-info">
                              <h5>Best Toys And Dolls<br/> For Kids</h5>
                              <div className="bottom-info">
                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor</p>
                              </div>
                              <div className="outs_more-buttn">
                                 <a href="about.html">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
            {/* <!-- This is here just to demonstrate the callbacks --> */}
            {/* <!-- <ul className="events">
               <li>Example 4 callback events</li>
               </ul>--> */}
            <div className="clearfix"></div>
         </div>
      </div>
      {/* <!-- //banner --> */}
      {/* <!-- about --> */}
      <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
         <div className="container py-lg-5 py-md-5 py-sm-4 py-4">
            <h3 className="title text-center mb-lg-5 mb-md-4  mb-sm-4 mb-3">Best Products</h3>
            <div className="row banner-below-w3l">
               <div className="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">
                  <img src="assets/images/a1.jpg" className="img-thumbnail" alt=""/>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Baby Toys</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">
                  <img src="assets/images/a2.jpg" className="img-thumbnail" alt=""/>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Lite-Brite</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">
                  <img src="assets/images/a3.jpg" className="img-thumbnail" alt=""/>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Key Toys</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers">
                  <img src="assets/images/a4.jpg" className="img-thumbnail" alt=""/>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Play Toys</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers">
                  <img src="assets/images/a5.jpg" className="img-thumbnail" alt=""/>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Gift Toys</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers">
                  <img src="assets/images/a6.jpg" className="img-thumbnail" alt=""/>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Soft Toys</h4>
                  </div>
               </div>
               {/* <div className="toys-grids-upper">
                  <div className="about-toys-off">
                     <h2>Get Up to <span>70% Off </span>On Selected Toys</h2>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
      {/* <!-- //about --> */}
      {/* <!--new Arrivals --> */}
      <section className="blog py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">New Arrivals</h3>
            <div className="slid-img">
               <ul id="flexiselDemo1">
                  <li>
                     <div className="agileinfo_port_grid">
                        <img src="assets/images/a1.jpg" alt=" " className="img-fluid" />
                        <div className="banner-right-icon">
                           <h4 className="pt-3">Soft Toys</h4>
                        </div>
                        <div className="outs_more-buttn">
                           <a href="shop.html">Shop Now</a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="agileinfo_port_grid">
                        <img src="assets/images/a2.jpg" alt=" " className="img-fluid" />
                        <div className="banner-right-icon">
                           <h4 className="pt-3">Soft Toys</h4>
                        </div>
                        <div className="outs_more-buttn">
                           <a href="shop.html">Shop Now</a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="agileinfo_port_grid">
                        <img src="assets/images/a3.jpg" alt=" " className="img-fluid" />
                        <div className="banner-right-icon">
                           <h4 className="pt-3">Soft Toys</h4>
                        </div>
                        <div className="outs_more-buttn">
                           <a href="shop.html">Shop Now</a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="agileinfo_port_grid ">
                        <img src="assets/images/a4.jpg" alt=" " className="img-fluid" />
                        <div className="banner-right-icon">
                           <h4 className="pt-3">Soft Toys</h4>
                        </div>
                        <div className="outs_more-buttn">
                           <a href="shop.html">Shop Now</a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="agileinfo_port_grid">
                        <img src="assets/images/a5.jpg" alt=" " className="img-fluid" />
                        <div className="banner-right-icon">
                           <h4 className="pt-3">Soft Toys</h4>
                        </div>
                        <div className="outs_more-buttn">
                           <a href="shop.html">Shop Now</a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="agileinfo_port_grid ">
                        <img src="assets/images/a6.jpg" alt=" " className="img-fluid" />
                        <div className="banner-right-icon">
                           <h4 className="pt-3">Soft Toys</h4>
                        </div>
                        <div className="outs_more-buttn">
                           <a href="shop.html">Shop Now</a>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>
      {/* <!--//new Arrivals --> */}
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
                                    <img src="assets/images/t1.jpg" alt="" className="image-fluid"/>
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
                                    <img src="assets/images/t2.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/tt2.jpg" alt="" className="image-fluid"/>
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
                                    <img src="assets/images/t1.jpg" alt="" className="image-fluid"/>
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
                                    <img src="assets/images/t3.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
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
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-lg-6 clients-w3layouts-row">
                           <div className="least-w3layouts-text-gap">
                              <div className="row">
                                 <div className="col-md-4 col-sm-4 news-img">
                                    <img src="assets/images/t2.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/tt2.jpg" alt="" className="image-fluid"/>
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
                                    <img src="assets/images/t3.jpg" alt="" className="image-fluid"/>
                                 </div>
                                 <div className="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span className="mt-2">Duis posuere</span>
                                 </div>
                                 <div className="mt-3 news-agile-text">
                                    <img src="assets/images/tt1.jpg" alt="" className="image-fluid"/>
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
      {/* <!-- Product-view --> */}
      <section className="product py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Latest Toys</h3>
            <div className=" img-toy-w3l-top">
            </div>
            <div className="mt-lg-4 mt-3 product-info-img">
               <p>velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
               </p>
               <div className="clients_more-buttn">
                  <a href="shop.html">Shop Now</a>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6 img-toy-w3l-left">
                  <div className="toys-img-one">
                  </div>
                  <div className="mt-lg-4 mt-3 product-info-img">
                     <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                     </p>
                     <div className="clients_more-buttn">
                        <a href="shop.html">Shop Now</a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 img-toy-agile-right">
                  <div className="toys-img-one-two">
                  </div>
                  <div className="mt-lg-4 mt-3 product-info-img">
                     <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                     </p>
                     <div className="clients_more-buttn">
                        <a href="shop.html">Shop Now</a>
                     </div>
                  </div>
                  <div className="toys-img-one-three">
                  </div>
                  <div className="mt-lg-4 mt-3 product-info-img">
                     <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                     </p>
                     <div className="clients_more-buttn">
                        <a href="shop.html">Shop Now</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!--//Product-view--> */}
      {/* <!--//Product-view--> */}
      <section className="premium py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Premium Toys</h3>
            <div className="row">
               <div className="col-lg-6 agileits-toys-left"></div>
               <div className="col-lg-6 agileits-toys-right">
                  <div className="sub-agile-info-toys">
                     <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                     </p>
                     <div className="clients_more-buttn">
                        <a href="shop.html" className="mb-0">Shop Now</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row mt-lg-4 mt-md-4 mt-3">
               <div className="col-lg-6 agileits-toys-right">
                  <div className="sub-agile-info-toys">
                     <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                     </p>
                     <div className="clients_more-buttn ">
                        <a href="shop.html" className="mb-0">Shop Now</a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 agileits-toys-left"></div>
            </div>
         </div>
      </section>
      {/* <!--Product-about--> */}
      <section className="about py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">About Toys</h3>
            <div className="about-products-w3layouts">
               <p>velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
               </p>
               <p className="my-lg-4 my-md-3 my-3">velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
               </p>
               <p>velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
               </p>
            </div>
         </div>
      </section>
      {/* <!--//Product-about--> */}
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
      {/* <!-- footer --> */}
      <footer className="py-lg-4 py-md-3 py-sm-3 py-3 text-center">
         <div className="copy-agile-right">
            <p> 
               © 2018 Toys-Shop. All Rights Reserved | Design by <a href="http://www.W3Layouts.com" target="_blank">W3Layouts</a>
            </p>
         </div>
      </footer>
      {/* <!-- //footer --> */}
      {/* <!-- Modal 1--> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <div className="register-form">
                     <form action="#" method="post">
                        <div className="fields-grid">
                           <div className="styled-input">
                              <input type="text" placeholder="Your Name" name="Your Name" required=""/>
                           </div>
                           <div className="styled-input">
                              <input type="email" placeholder="Your Email" name="Your Email" required=""/>
                           </div>
                           <div className="styled-input">
                              <input type="password" placeholder="password" name="password" required=""/>
                           </div>
                           <button type="submit" className="btn subscrib-btnn">Login</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- //Modal 1--> */}
        </>
    )
}
    