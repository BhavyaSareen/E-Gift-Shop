import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation,Pagination } from "swiper";




import { Link } from "react-router-dom";

export default function Home() {
   return (
      <>
      
         <div className="container-fluid">
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img className="d-block w-100" src="assets/images/Banner-3.jpg" alt="First slide"/>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images/Banner-2.jpg" alt="Second slide"/>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images/Banner-1.jpg" alt="Third slide"/>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="assets/images/Banner-4.jpg" alt="Fourth slide"/>
               </div>
            </div>
            {/* <a href="#" className="callbacks_nav callbacks1_nav prev">Previous</a>
               <a href="#" className="callbacks_nav callbacks1_nav next">Next</a> */}
            <a className="callbacks_nav callbacks1_nav prev"  href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only" >Previous</span>
            </a>
            <a className=" callbacks_nav callbacks1_nav next " href="#carouselExampleIndicators" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
            </a>
         </div>
         </div>

         {/* Latest Products */}
         <h3 className="title blog clr text-center mt-lg-5 mb-md-4 my-sm-4 ">Latest Products</h3>

         <section className="about py-lg-4 py-md-3 py-sm-3 " id="about">
         <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
            <div className="row banner-below-w3l">
               <div className="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers zoom">
                  <Link to="/posters"><img src="assets/images/Poster/Updated/p1.jpg" className="img-thumbnail" alt=""/></Link>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Posters</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers zoom">
                  <Link to="/photoframe"><img src="assets/images/Frames/Updated/f3.1.jpg" className="img-thumbnail" alt=""/></Link>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Photo Frames</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers zoom">
               <Link to="/collage"><img src="assets/images/Miscellaneous/Updated/mi11.jpg" className="img-thumbnail" alt=""/></Link>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Collage </h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers zoom">
               <Link to=""><img src="assets/images/Miscellaneous/Updated/mi7.jpg" className="img-thumbnail" alt=""/></Link>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Key Holder</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers zoom">
               <Link to="/clocks"><img src="assets/images/Clocks/Updated/cl16.4.jpg" className="img-thumbnail" alt=""/></Link>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Clock</h4>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers zoom">
               <Link to="/collage"><img src="assets/images/Collage/Updated/c17.1.jpg" className="img-thumbnail" alt=""/></Link>
                  <div className="banner-right-icon">
                     <h4 className="pt-3">Collage</h4>
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

      {/* Products */}
      <h1 className="title blog clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Products</h1>

      <section className=" py-lg-4 py-md-3 py-sm-3 py-3 container">

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="assets/images/Clocks/Updated/cl12.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Collage/Updated/c23.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Frames/Updated/f18.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Miscellaneous/Updated/mi10.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Miscellaneous/Updated/mi2.1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Poster/Updated/p7.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Wall Decor/Updated/w5.jpg"/></SwiperSlide>
        <SwiperSlide><img src="assets/images/Clocks/Updated/cl21.3.jpg"/></SwiperSlide>
      </Swiper>
      </section>



         <div className="container">
            <div className="row justify-content-center">
               <h1 className="">Company Profile</h1>
               <div className="col-md-12 my-3">
                  <p>Welcome to our online e-gift shop of photo frames and collages! We are a team of passionate individuals who believe in the power of photographs to preserve memories and create lasting impressions. Our mission is to help you frame and display your cherished moments with beautiful and unique photo frames and collages that will stand the test of time.</p>
               </div>
            </div>
            <div className="row justify-content-center mb-3">
               <Link to="readmore"><button className="btn btn-secondary">Read More</button></Link>
            </div>
         </div>


      </>
   )
}

