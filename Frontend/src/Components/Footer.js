import { Link } from "react-router-dom";

export default function footer(){
    return(
      <>
      <footer className="py-lg-4 py-md-3 py-sm-3 py-3">
         <div className="container text-start">
         <section className="sub-below-address py-lg-4 py-md-3 py-sm-3 py-3">
            <div className="footer-icons mt-4 text-center">
               <ul>
                  <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                  <li><a href="#"><span className="fas fa-envelope"></span></a></li>
                  <li><a href="#"><span className="fas fa-rss"></span></a></li>
                  <li><a href="#"><span className="fab fa-vk"></span></a></li>
               </ul>               
            </div>            
         </section>
            <div className="row mb-5">
               <div className="col-md-3 text-light">
                  <h3 className="mb-2">About More</h3>
                  <h6 className="">We have what your soul is searching for, bring our products into your home and into your heart.</h6>
               </div>
               <div className="col-md-2">
                  <h3 className="text-white">Quick Links</h3>
                  <ul className="navbar-nav ">
                     <li className="nav-item">
                        <Link to="/about"><a href="contact.html" className="nav-link">About</a></Link>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <Link to="/photoframe"><a className="nav-link" href="product.html">Photo frames</a></Link>
                           <Link to="/clocks"><a className="nav-link " href="product.html">Clocks</a></Link>
                           <Link to="collage"><a className="nav-link " href="product.html">Collage</a></Link>
                           <Link to="posters"><a className="nav-link " href="product.html">Posters</a></Link>
                           <Link to="moulding"><a className="nav-link " href="product.html">Moulding</a></Link>
                           <Link to="walldecors"><a className="nav-link " href="product.html">Wall Decors</a></Link>
                           <Link to="Miscellaneous"><a className="nav-link " href="product.html">Miscellaneous</a></Link>
                        </div>
                     </li>
                     <li className="nav-item">
                        <Link to="/contact"><a href="contact.html" className="nav-link">Contact</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/adminLogin"><a href="contact.html" className="nav-link">Admin Login</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/userlogin"><a href="contact.html" className="nav-link">User Login</a></Link>
                     </li>                     
                     
                  </ul>
               </div>
               <div className="col-md-3">
                  <h3 className="text-white">Our Products</h3>
                  <ul className="list-group text-white">
                     <li className="">Photoframes</li>
                     <li className="">Collage</li>
                     <li className="">Clocks</li>
                     <li className="">Posters</li>
                     <li className="">Wall Decors</li>
                  </ul>
               </div>
               <div className="col-md-3 text-light">
                  <h3 className="mb-2">Contact Us</h3>
                  <h6 >BIV/285, BXXIII-31, SHOP , BAZAR BEHRON, Punjab 144008</h6>
                  <h6 >sareenbrothers01@gmail.com</h6>
                  <h6 >9855559648</h6>
                  
               </div>
            </div>
         </div>
   <div className="copy-agile-right text-center">
      <p> 
         2023 E-gift-Shop. | Design by BHAVYA SAREEN
      </p>
   </div>
</footer>
  </>
    )
}