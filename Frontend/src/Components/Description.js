export default function Desciption(){
    return(
        <>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{backgroundColor:"blue"}}>

                    </div>
                    <div className="col-md-6" >
                        <h1>Description</h1> 
                        <table className="table table-bordered">
                        <caption>Product Details</caption>
                            <tr>
                            <th>Color</th>
                            <th>Black</th>
                            </tr>
                            <tr>
                            <th>Size</th>
                            <th>Size</th>
                            </tr>
                            <tr>   
                            <th>Code</th>
                            <th>Code</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div> */}
            <section className="banner-bottom py-lg-5 py-3">
         <div className="container">
            <div className="inner-sec-shop pt-lg-4 pt-3">
               <div className="row">
                  <div className="col-lg-4 single-right-left ">
                     <div className="grid images_3_of_2">
                        <div className="flexslider1">
                           <ul className="slides">
                              <li data-thumb="images/f2.jpg">
                                 <div className="thumb-image"> <img src="/assets/images/Miscellaneous/Updated/mi4.jpg" data-imagezoom="true" className="img-fluid" alt=" "/> </div>
                              </li>
                              <li data-thumb="images/f1.jpg">
                                 <div className="thumb-image"> <img src="/assets/images/Miscellaneous/Updated/mi7.jpg" data-imagezoom="true" className="img-fluid" alt=" "/> </div>
                              </li>
                              <li data-thumb="images/f3.jpg">
                                 <div className="thumb-image"> <img src="/assets/images/Miscellaneous/Updated/mi9.jpg" data-imagezoom="true" className="img-fluid" alt=" "/> </div>
                              </li>
                           </ul>
                           <div className="clearfix"></div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-8 single-right-left simpleCart_shelfItem">
                     <h3>Wll Hangings</h3>
                     <p><span className="item_price">Rs.650</span>
                        <del>Rs.1,199</del>
                     </p>
                     <div className="rating1">
                        <ul className="stars">
                           <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                     <div className="description">
                        <h5>Check delivery, payment options and charges at your location</h5>
                        <form action="#" method="post">
                           <input className="form-control" type="text" name="Email" placeholder="Please enter..." required=""/>
                           <input type="submit" value="Check"/>
                        </form>
                     </div>
                     <div className="color-quality">
                        <div className="color-quality-right">
                           <h5>Size :</h5>
                           <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                              <option value="null">2 Feet</option>
                              <option value="null">3 Feet</option>
                              <option value="null">4 Feet</option>
                              <option value="null">5 Feet</option>
                           </select>
                        </div>
                     </div>
                     <div className="occasional">
                        <h5>Types :</h5>
                        <div className="colr ert">
                           <label className="radio"><input type="radio" name="radio" /><i></i> Wall Hanging</label>
                        </div>
                        <div className="colr">
                           <label className="radio"><input type="radio" name="radio"/><i></i>Key Holder</label>
                        </div>
                        <div className="colr">
                           <label className="radio"><input type="radio" name="radio"/><i></i>Wall Decors</label>
                        </div>
                        <div className="clearfix"> </div>
                     </div>
                     <div className="occasion-cart">
                        <div className="toys single-item singlepage">
                           <form action="#" method="post">
                              <input type="hidden" name="cmd" value="_cart"/>
                              <input type="hidden" name="add" value="1"/>
                              <input type="hidden" name="toys_item" value="Farenheit"/>
                              <input type="hidden" name="amount" value="575.00"/>
                              <button type="submit" className="toys-cart ptoys-cart add">
                              Add to Cart
                              </button>
                           </form>
                        </div>
                     </div>
                     <ul className="footer-social text-left mt-lg-4 mt-3">
                        <li>Share On : </li>
                        <li className="mx-1">
                           <a href="#">
                           <span className="fab fa-facebook-f"></span>
                           </a>
                        </li>
                        <li className="">
                           <a href="#">
                           <span className="fab fa-twitter"></span>
                           </a>
                        </li>
                        <li className="mx-1">
                           <a href="#">
                           <span className="fab fa-google-plus-g"></span>
                           </a>
                        </li>
                        <li className="">
                           <a href="#">
                           <span className="fab fa-linkedin-in"></span>
                           </a>
                        </li>
                        <li className="mx-1">
                           <a href="#">
                           <span className="fas fa-rss"></span>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="clearfix"> </div>
                  {/* <!--/tabs--> */}
                  <div className="responsive_tabs">
                     <div id="horizontalTab">
                        <ul className="resp-tabs-list">
                           <li>Description</li>
                           <li>Reviews</li>
                           <li>Information</li>
                        </ul>
                        <div className="resp-tabs-container">
                           {/* <!--/tab_one--> */}
                           <div className="tab1">
                              <div className="single_page">
                                 <h6>Lorem ipsum dolor sit amet</h6>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                    magna aliqua.
                                 </p>
                                 <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                    magna aliqua.
                                 </p>
                              </div>
                           </div>
                           {/* <!--//tab_one--> */}
                           <div className="tab2">
                              <div className="single_page">
                                 <div className="bootstrap-tab-text-grids">
                                    <div className="bootstrap-tab-text-grid">
                                       <div className="bootstrap-tab-text-grid-left">
                                          <img src="images/team1.jpg" alt=" " className="img-fluid"/>
                                       </div>
                                       <div className="bootstrap-tab-text-grid-right">
                                          <ul>
                                             <li><a href="#">Admin</a></li>
                                             <li><a href="#"><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</a></li>
                                          </ul>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
                                             quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                                             autem vel eum iure reprehenderit.
                                          </p>
                                       </div>
                                       <div className="clearfix"> </div>
                                    </div>
                                    <div className="add-review">
                                       <h4>add a review</h4>
                                       <form action="#" method="post">
                                          <div className="row">
                                             <div className="col-md-6">
                                                <input type="text" name="Name" required=""/>
                                             </div>
                                             <div className="col-md-6">
                                                <input type="email" name="Email" required=""/>
                                             </div>
                                          </div>
                                          <textarea name="Message" required=""></textarea>
                                          <input type="submit" value="SEND"/>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="tab3">
                              <div className="single_page">
                                 <h6>Teddy Bear(Blue)</h6>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                    magna aliqua.
                                 </p>
                                 <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
                                    blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
                                    magna aliqua.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!--//tabs--> */}
               </div>
            </div>
         </div>
      </section>

        </>
    )
}