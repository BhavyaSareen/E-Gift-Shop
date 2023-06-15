import { Link, NavLink } from "react-router-dom";
import Apiservices from "./Apiservices";
import { useEffect, useState } from "react";
export default function Headers() {
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
   return (
      <>
         
            <nav className="navbar navbar-expand-lg navbar-light header-outs adminbackgroundimg text-center container-fluid d-flex">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="logo-head ml-5 ">
                  <h1>
                     <a className="navbar-brand text-dark font-weight-bold" href="index.html">
                        E-Gift Shop
                     </a>
                  </h1>
               </div>
               <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                     <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                           Home <span className="sr-only">(current)</span>
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                           About
                        </NavLink>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <NavLink to="/usercategory"><a className="nav-link " href="#">All</a></NavLink>
                           {myData?.slice(0,5)?.map((el)=>(
                                <Link to={"/view_sub_cat/"+el?._id}><a className="nav-link " href="#">{el?.Category_Name}</a></Link>
                           ))}
                        </div>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/userproduct"><a href="#" className="nav-link">Products</a></NavLink>
                     </li>
                     {/* <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                           Contact
                        </NavLink>
                     </li> */}
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Login
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <NavLink to="/adminlogin" className="nav-link">
                              Admin Login
                           </NavLink>
                           <NavLink to="/userlogin" className="nav-link">
                           User Login
                        </NavLink>
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
            {/* </div> */}
         {/* </div> */}
       </>
   )
}