export default function Gallery(){
    return(
        <>
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
        </>
    )
}