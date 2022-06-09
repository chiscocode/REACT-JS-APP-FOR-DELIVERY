import React from 'react'
import './About.css'
import { Link } from "react-router-dom";


function About() {
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
                                    <h1 data-aos="fade-right">About <span>Us</span></h1>
                                </div>
                                {/* <!--Hero form --> */}
                                <nav aria-label="breadcrumb" >
                                    <ul className="breadcrumb" >
                                        <li className="breadcrumb-item"><Link style={{textDecoration:'none',listStyle:'none',color:'#fff'}} to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link style={{textDecoration:'none',listStyle:'none',color:'#fff'}} to="/about">About</Link></li> 
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
        


        {/* about us  */}

        <section className='about mt-4 pt-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h5 style={{color:'#f15f22'}}>About Us</h5>
                        <p style={{color:'#2c234d',fontSize: '3rem',fontWeight:'bold'}}>Safe Logistic & Transport Solutions That Saves Our Valuable Time!</p>
                        <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p><div className='mt-3 pt-3'><p>
                        Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p></div>
                        
                        <Link className="text-light" to="/about"><button className="button mb-3">Read More</button></Link>

                    </div>

                    <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                        <div className="about1"></div>    
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default About