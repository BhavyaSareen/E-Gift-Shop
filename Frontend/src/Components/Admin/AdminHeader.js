import { Link } from "react-router-dom";

export default function AdminHeader(){
    return(
        <>
            <div className="header-outs adminbackgroundimg" id="home">
         {/* <div className="header-bar"> */}
         <div className="container-fluid">
               <div className=" row">
                  <div className="col-lg-2 col-md-2 col-sm-2 logo-head">
                     <h1><a className="navbar-brand text-dark font-weight-bold" href="index.html">E-Gift Shop</a></h1>
                  </div>
                  <div className="col-lg-3 col-md-3 ">
                  <div className="info-contact-agile">
                  <ul>
                     <li>
                        <span className="fas fa-phone-volume"></span>
                        <p className="text-dark font-weight-bold ">9855559648</p>
                     </li>
                     <li>
                        <span className="fas fa-envelope"></span>
                        <p><a className="text-dark font-weight-bold" href="mailto:info@example.com">sareenbrothers01@gmail.com</a></p>
                    
                     </li>
                  </ul>
               </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-3 ">
                     <form className="form-inline my-lg-0">
                        <input className="form-control mr-sm-1" type="search" placeholder="Search" />
                        <button className="btn" type="submit">Search</button>
                     </form>
                  </div> */}
                  <div className="col-lg-4 col-md-4 right-side-cart  ">
                     <div className="cart-icons d-flex justify-content-end">
                        <ul>
                           <li>
                              <span className="far fa-heart"></span>
                           </li>
                           <li>
                              <button type="button" data-toggle="modal" data-target="#exampleModal">
                                 <span className="far fa-user"></span>
                              </button>
                           </li>
                           <li className="toyscart toyscart2 cart cart box_1">
                              <form action="#" method="post" className="last">
                                 <input type="hidden" name="cmd" value="_cart" />
                                 <input type="hidden" name="display" value="1" />
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
                     <li className="nav-item">
                        <Link to="/admin"><a href="about.html" className="nav-link">Dashboard</a></Link>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <Link to="/admin/addcategory"><a className="nav-link" href="product.html">Add Category</a></Link>
                           <Link to="/admin/viewcategory"><a className="nav-link " href="product.html">View Category</a></Link>
                        </div>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sub-Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <Link to="/admin/addsubcategory"><a className="nav-link" href="product.html">Add Sub-Category</a></Link>
                           <Link to="/admin/viewsubcategory"><a className="nav-link " href="product.html">View Sub-Category</a></Link>
                        </div>
                     </li>
                     
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <Link to="/admin/addProduct"><a className="nav-link " href="product.html">Add Products</a></Link>
                           <Link to="/admin/viewProduct"><a className="nav-link" href="product.html">View Products</a></Link>
                        </div>
                     </li>
                     <li className="nav-item">
                        <Link to="/admin/order"><a href="contact.html" className="nav-link">Orders</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/admin/enquiry"><a href="contact.html" className="nav-link">Enquiry</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/adminlogin"><a href="contact.html" className="nav-link">Log Out</a></Link>
                     </li>
                     
                  </ul>
               </div>
            </nav>
         {/* </div> */}
         {/* <!-- Slideshow 4 --> */}
         
      </div>
        </>
    )
}