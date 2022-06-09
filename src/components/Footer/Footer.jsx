import React, { useEffect } from "react";
import './Footer.css';
import Logo from '../../img/logo/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";



function Footer() {
    const today = new Date();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='footer mt-5 pt-5' >
        <div className="container">
            
                <div className="row">
                    <div className="col-md-8" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h3 >We Understand The Importance<br/> Approaching Each Work!</h3>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <Link className="text-light" to="/contact"><button className="button mb-3">Request a Quote</button></Link>

                    </div>
                </div>
                <div style={{background:'white', height:'1px'}}/>
                <div className="row mt-4">
                    <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <Link to="/"><img srcSet={Logo} alt="" style={{height: '50px'}} /></Link>
                        <div className='mt-3 pt-3' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><p>
                        Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p></div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <p className=" mt-2 font-weight-bold text-uppercase" >OPEN HOUR</p>
                        <p>Monday 7am-10pm</p>
                        <p>Tuesday 7am-10pm</p>
                        <p>Wenesday 7am-10pm</p>
                        <p>Thursday 7am-10pm</p>
                        <p>Friday 7am-10pm</p>
                        <p>Saturday 7am-10pm</p>
                    </div>
                    <div className="col-md-4 " data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <p className=" mt-2 font-weight-bold text-uppercase quicklink">QUICK LINKS</p>
                        <p><Link to='/' style={{color:'#fff',textDecoration:'none'}}>Home</Link></p>
                        <p><Link to='/about' style={{color:'#fff',textDecoration:'none'}}>About</Link></p>
                        <p> <Link to='/service' style={{color:'#fff',textDecoration:'none'}}>Serices</Link></p>
                        <p> <Link to='/contact' style={{color:'#fff',textDecoration:'none'}}>Contact</Link></p>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p > Copyright &copy; {today.getFullYear()} All rights reserved</p>
                </div>

            
        </div>

    </div>
  )
}

export default Footer