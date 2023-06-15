export default function Login(){
    return(
        <>
        <li>
          <button type="button" data-toggle="modal" data-target="#exampleModal"> <span className="far fa-user"></span></button>
        </li>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document" >
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
        </>
    )
}