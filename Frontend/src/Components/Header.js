export default function Header(){
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
         
      </div>
      {/* <!-- //banner --> */}
        </>
    )
}