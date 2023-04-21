import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

import "./contactus.scss"

import Aos from 'aos'

import 'aos/dist/aos.css'

import image1 from './../../Assests/g1.jpg'
import image2 from './../../Assests/g2.jpg'
import image3 from './../../Assests/g5.jpg'
import image4 from './../../Assests/guide4.jpg'
import image5 from './../../Assests/guide5.jpeg'
import image6 from './../../Assests/g4.jpg'

export const contactus = () => {
    return (
      <>
          <Navbar/>

          <section className='contactus container section'>
            
                 
                  <div className="secTitle">
                        <h2 data-aos="fade-right" className="title">
                              Our Guides and Connect with us
                        </h2>
                  </div>

                  {/*guides*/}
                  
                  <div className="secContent grid">
                                          <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image1} className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">Mr. A.D.D. Perera</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">mobile : 071 234 5678</span>
                                                      </span>
                                                </div>
                                           </div>             

                                    <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image2} className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">Mr. N. D. Silva</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">mobile : 077 456 3875</span>
                                                      </span>
                                                </div>
                                           </div>             


                                           <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image3} className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">Mr. G.K. de Silva</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">mobile : 071 365 8923</span>
                                                      </span>
                                                </div>
                                           </div>             


                                           <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image4} className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">Mr. D.H. Fernando</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">mobile : 077 195 2834</span>
                                                      </span>
                                                </div>
                                           </div>             


                                           <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image5} className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">Mr. A.A. Peris</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">mobile : 071 957 2345</span>
                                                      </span>
                                                </div>
                                           </div>             


                                           <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image6 } className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">Mr. C.M. Silva</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">mobile : 071 294 3678</span>
                                                      </span>
                                                </div>
                                           </div>             


                  </div>
{/*card end*/}

<br></br><br></br><br></br>
<hr/>

<br></br><br></br>
                  <div className=""><center>
                        <h3>
                              CONTACT US HERE
                        </h3><br></br>
                        <input type="text" placeholder="username"/> <br></br><br></br>
                        <input type="text" placeholder="email"/> <br></br><br></br>
                        <input type="text" placeholder="subject"/> <br></br><br></br>
                        <input type="text" placeholder="message" cols="50" rows="5"/> <br></br><br></br>

                        <button type="submit" className='button'>SEND MESSAGE</button></center>

                  </div>
    
          </section>

          <Footer/>
      </>
    )
}