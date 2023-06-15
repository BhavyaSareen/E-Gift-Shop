import { useEffect, useState } from "react"
import Apiservices from "./Apiservices"

export default function Clock(){
    const imageUrl = "http://localhost:4000/"
    const [sub_category, setsub_category]=useState()
    useEffect(()=>{
        Apiservices.getallsubcategory().then(
            (x)=>{
                console.log(x)
                setsub_category(x.data.data)
            }
        ).catch()
    },[]
    )
    return(
        <>
        {/* <div className="container my-2 ">
        <div><h1 className="text-center">Clocks</h1></div>
            <div className="row">         
            {obj.map((el)=>(               
                <div className="col-md-3 ">                  
                    <div class="card mt-4" style={{width: "18rem;"}}>
                    <img src={"/assets/images/clocks/Updated/"+`${el.img}`} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div> */}



        {/* <!-- banner --> */}
      <div className="inner_page-banner one-img">
      </div>
      {/* <!--//banner --> */}
      {/* <!-- short --> */}
      <div className="using-border py-3">
         <div className="inner_breadcrumb  ml-4">
            <ul className="short_ls">
               <li>
                  <a href="index.html">Home</a>
                  <span>/ /</span>
               </li>
               <li>
                  <a href="index.html">Products</a>
                  <span>/ /</span>
               </li>
               <li>Clocks</li>
            </ul>
         </div>
      </div>
      
      {/* <!-- //short--> */}
      {/* <!--show Now-->   */}
         <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Clocks</h3>
            <div className="row col-lg-10 ">              
                    {sub_category?.map((el)=>(                   
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two ">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0173.jpg" className="img-thumbnail img-fluid max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">{el?.Sub_Category_Name}</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$575.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li>
                                             <a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li>
                                             <a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li>
                                             <a href="#"><i className="fas fa-star" ></i></a>
                                          </li>
                                          <li>
                                             <a href="#"><i className="far fa-star-half-o"></i></a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys(barbie)"/>
                                          <input type="hidden" name="amount" value="575.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     ))}
                     {/* <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0174.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toy(todos)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$480.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fas fa-star"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fas fa-star" ></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="far fa-star-half-o" ></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toy(todos)"/>
                                          <input type="hidden" name="amount" value="480.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0175.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toys (Grey)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$265.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys (Grey)"/>
                                          <input type="hidden" name="amount" value="265.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0164.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toys (Grey)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$67.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys (Grey)"/>
                                          <input type="hidden" name="amount" value="67.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0165.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toys(red)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$340.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys(red)"/>
                                          <input type="hidden" name="amount" value="340.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0166.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toys(blue)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$160.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys(blue)"/>
                                          <input type="hidden" name="amount" value="160.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0193.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toy(todos)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$480.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toy(todos)"/>
                                          <input type="hidden" name="amount" value="480.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0175.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toys (blue)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$265.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys (blue)"/>
                                          <input type="hidden" name="amount" value="265.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 product-men women_two">
                        <div className="product-toys-info">
                           <div className="men-pro-item">
                              <div className="men-thumb-item">
                                 <img src="assets/images/IMG-20230402-WA0262.jpg" className="img-thumbnail max__height" alt=""/>
                                 <div className="men-cart-pro">
                                    <div className="inner-men-cart-pro">
                                       <a href="single.html" className="link-product-add-cart">Know More</a>
                                    </div>
                                 </div>
                                 <span className="product-new-top">New</span>
                              </div>
                              <div className="item-info-product">
                                 <div className="info-product-price">
                                    <div className="grid_meta">
                                       <div className="product_price">
                                          <h4>
                                             <a href="single.html">toys (Grey)</a>
                                          </h4>
                                          <div className="grid-price mt-2">
                                             <span className="money ">$67.00</span>
                                          </div>
                                       </div>
                                       <ul className="stars">
                                          <li>
                                             <a href="#">
                                             <i className="fas fa-star"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="toys single-item hvr-outline-out">
                                       <form action="#" method="post">
                                          <input type="hidden" name="cmd" value="_cart"/>
                                          <input type="hidden" name="add" value="1"/>
                                          <input type="hidden" name="toys_item" value="toys (Grey)"/>
                                          <input type="hidden" name="amount" value="67.00"/>
                                          <button type="submit" className="toys-cart ptoys-cart">
                                          <i className="fas fa-cart-plus"></i>
                                          </button>
                                       </form>
                                    </div>
                                 </div>
                                 <div className="clearfix"></div>
                              </div>
                           </div>
                        </div>
                     </div> */}
            </div>
         </div>
      
      {/* <!-- //show Now--> */}
        
        </>
    )
}