import React, { useEffect } from "react";
import './Home.css';
import Phone from '../../img/logo/phone.png';
import Order from '../../img/logo/order.png';
import Delivery from '../../img/logo/delivery.png';
import Air from '../../img/logo/Air.png';
import Ship from '../../img/logo/Ship.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

// import { faRocket } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
        <div className='showcase'>
          {/* <!--? slider Area Start--> */}
        <div className="slider-area ">
            <div className="slider-active">
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-9" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div className="hero__caption">
                                    <h1 data-aos="fade-right">Safe & Reliable <span>Logistic</span> Solutions!</h1>
                                </div>
                                {/* <!--Hero form --> */}
                                <form action="#" className="search-box">
                                    <div className="input-form">
                                        <input type="text" placeholder="Your Tracking ID"/>
                                    </div>
                                    <div className="search-form">
                                        <Link to="#" style={{textDecoration:'none'}}>Track & Trace</Link>
                                    </div>	
                                </form>	
                                {/* <!-- Hero Pera --> */}
                                <div className="hero-pera">
                                    <p data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">For order status inquiry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider Area End--> */}


        

        </div>
        <span   style={{backgroundColor:'#f9f9f9'}}>

        <section className="container">
        <div className="row mt-4 text-center">
                <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    
                        
                                <img  srcSet={Phone} className="mx-auto d-block" alt="" style={{height: '100px'}}/>
                                <h4>Call Center</h4>
                                <p>Feel free to give us a call on
                                  <br/>+12413 103 3248</p>
                            
                    
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    
                        
                                <img srcSet={Order} alt="" className="mx-auto d-block" style={{height: '100px'}}/>
                                <h4>We Pick Order</h4>
                                <p>Once you have placed your order, our sales agent<br/> processes them and our rider promptly picks up the order.</p>
                           
                    </div>
                
                <div className="col-md-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                    
                        
                              <img srcSet={Delivery} className="mx-auto d-block" alt="" style={{height: '100px'}}/>
                                <h4>We Deliver</h4>
                                <p>Our rider will ensure to get to your location as fast as you placed your order.</p>
                            
                    </div>
                
            </div>
        </section>
        </span>

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

export default Home