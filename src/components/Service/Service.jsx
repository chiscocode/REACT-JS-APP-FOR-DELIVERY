import React from 'react'
import '../About/About.css'
import { Link } from "react-router-dom";
import Delivery from '../../img/logo/delivery.png';
import Air from '../../img/logo/Air.png';
import Ship from '../../img/logo/Ship.png';


function Service() {
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
                                    <h1 data-aos="fade-right">Our <span>Service</span></h1>
                                </div>
                                {/* <!--Hero form --> */}
                                <nav aria-label="breadcrumb" >
                                    <ul className="breadcrumb" >
                                        <li className="breadcrumb-item"><Link style={{textDecoration:'none',listStyle:'none',color:'#fff'}} to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link style={{textDecoration:'none',listStyle:'none',color:'#fff'}} to="/service">Our Service</Link></li> 
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

        {/* services */}
        <section className='mt-4 container'>
          <h5 className="text-center" style={{color:'#f15f22'}} data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Our Services</h5>
          <p className="text-center" style={{color:'#2c234d',fontSize: '3rem',fontWeight:'bold'}}data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">What we can do for you</p>

         


                        {/* <!-- start of the card --> */}
                <div className="row">
                        {/* <!-- product name --> */}
                        <div className="col-md-4">
                    <div className="card card1" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

                            <div className="card-body text-center pr-5 pl-5" >
                            <img  srcSet={Delivery} className=" mt-5 pt-5 mx-auto d-block" alt="" style={{height: '100px'}}/>
                                <h1 className='card-hero ' style={{color:'#2c234d'}}>Land Transport</h1>
                                <p className='card-detail mb-5 pb-5'>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                            </div>
                        </div>
                    </div>


                        <div className="col-md-4">
                    <div className="card card2" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">

                            <div className="card-body text-center pr-5 pl-5" >
                            <img srcSet={Ship} className=" mt-5 pt-5 mx-auto d-block" alt="" style={{height: '100px'}}/>
                                <h1 className='card-hero' style={{color:'#2c234d'}}>Ship Transport</h1>
                                <p className='card-detail mb-5 pb-5'>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                            </div>
                        </div>
                    </div>


                        <div className="col-md-4">
                    <div className="card card3" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">

                            <div className="card-body text-center pr-5 pl-5" >
                                <img srcSet={Air} className=" mt-5 pt-5 mx-auto d-block" alt="" style={{height: '100px'}}/>
                                <h1 className='card-hero' style={{color:'#2c234d'}}>Air Transport</h1>
                                <p className='card-detail mb-5 pb-5'>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                            </div>
                        </div>
                    </div>
                </div>

        </section>


    </div>
  )
}

export default Service