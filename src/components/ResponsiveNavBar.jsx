import React from 'react';
import Logo from '../img/logo/logo.png';
import { Link } from "react-router-dom";



function ResponsiveNavBar() {
  return (
    <div >
      {/* <!-- Top Bar --> */}
<section id="top-bar" className="p-3 bg-orange">
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-light">
          <i className="fas fa-phone"></i> (617)-555-5555
        </div>
        <div className="col-md-4 text-light">
          <i className="fas fa-envelope-open"></i> contact@btrealestate.co
        </div>
        <div className="col-md-4">
          
        </div>
      </div>
    </div>
  </section>
  <div style={{background:'white', height:'1px'}}/>
  {/* end of top nav */}
      <nav className="navbar navbar-expand-lg bg-orange sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{color:'white'}}><img srcSet={Logo} className="mr-3" alt="" style={{height: '50px'}}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"><i className="bi bi-menu-button-wide-fill"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto" >
                            
            </ul>

            <ul className="navbar-nav ml-auto fonte" >
              <li className="nav-item mr-3">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="nav-link text-light" to="/about">About</Link>
              </li>

              <li className="nav-item mr-3">
                <Link className="nav-link text-light" to="/service">Service</Link>
              </li>

              <li className="nav-item mr-3">
                <Link className="nav-link text-light" to="/contact">Contact</Link>
              </li>

              
              
            </ul>

            <ul className="navbar-nav ml-auto mt-2 fonte" >

            <li className="nav-item mr-3">
                <Link className="nav-link text-light" to="/contact"><button className="button mb-3">Request a Quote</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>
  )
}


export default ResponsiveNavBar