import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
        <div className='aboutshowcase'>
          {/* <!--? slider Area Start--> */}
        <div className="slider-area ">
            <div className="slider-active">
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-9" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div className="hero__caption">
                                    <h1 data-aos="fade-right">Contact <span>Us</span></h1>
                                </div>
                                {/* <!--Hero form --> */}
                                <nav aria-label="breadcrumb" >
                                    <ul className="breadcrumb" >
                                        <li className="breadcrumb-item"><Link style={{textDecoration:'none',listStyle:'none',color:'#fff'}} to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link style={{textDecoration:'none',listStyle:'none',color:'#fff'}} to="/contact">Contact Us</Link></li> 
                                    </ul>
                                </nav>
                                {/* <!-- Hero Pera --> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* <!-- slider Area End--> */}
        <div className="container">
            <h3 className='mt-5' style={{color:'#2c234d'}}>Request a Quote</h3>
            <div className="row">
                <div className="col-md-6">
                        {/* <!-- Wrapper container --> */}
                            <div className="py-4">

                    {/* <!-- Bootstrap 5 starter form --> */}
                    <form id="contactForm" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

                        {/* <!-- Name input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="name">Name</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                        </div>

                        {/* <!-- Email address input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="emailAddress">Email Address</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="mb-3">
                        <label className="form-label" for="message">Message</label>
                        <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}}/>
                        </div>

                        {/* <!-- Form submit button --> */}
                        <div class="d-grid">
                        <button class="btn btn-primary btn-md" type="submit">Submit</button>
                        </div>
                            
                        </form>
                    </div>

                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <div className="about1"></div> 
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default Contact