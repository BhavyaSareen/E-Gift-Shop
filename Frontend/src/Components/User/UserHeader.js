import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Apiservices from "../Apiservices";
export default function UserHeader(){
   const [myData,setMyData]=useState()
   useEffect(()=>{
      Apiservices.getallcategory()
     .then(
         (x)=>{
            //  console.log(x)
             setMyData(x.data.data)
         }
     )
   },[])
    return(
      <>
         <div className="header-outs" id="home">
         {/* <div className="header-bar"> */}
            <div className="container-fluid">
               <div className="hedder-up  row">
                  <div className="col-lg-2 col-md-2 logo-head">
                     <h1><a className="navbar-brand" href="index.html">E-Gift Shop</a></h1>
                  </div>
                  <div className="col-lg-3 col-md-3 ">
                  <div className="info-contact-agile">
                  <ul>
                     <li>
                        <span className="fas fa-phone-volume"></span>
                        <p className="text-white">9855559648</p>
                     </li>
                     <li>
                        <span className="fas fa-envelope"></span>
                        <p ><a className="text-white" href="mailto:info@example.com">sareenbrothers01@gmail.com</a></p>
                     </li>
                     <li>
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
                  <div className="col-lg-2 col-md-3 right-side-cart ">
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

                  <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <Link to="/user/usercategory"><a className="nav-link " href="#">All</a></Link>
                           {myData?.slice(0,5)?.map((el)=>(
                                <Link to={"/user/view_sub_cat/"+el?._id}><a className="nav-link " href="#">{el?.Category_Name}</a></Link>
                           ))}
                        </div>
                     </li>
                     <li className="nav-item">
                        <Link to="/user/userproduct"><a href="#" className="nav-link">Products</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/user/vieworder"><a href="contact.html" className="nav-link">View Orders</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/user/enquiry"><a href="contact.html" className="nav-link">Enquiry</a></Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/"><a href="contact.html" className="nav-link">Log Out</a></Link>
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