import React from 'react'
// import Footer from '../../Components/Footer/Footer'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsExclamationCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';

import './userpackages.scss'

import Aos from 'aos'

import 'aos/dist/aos.css'

import image1 from './../../Assests/four1.jpg'
import image2 from './../../Assests/seven1.jpg'
import image3 from './../../Assests/fifteen.jpg'
import image4 from './../../Assests/twenty.png'
import image5 from './../../Assests/twentyfive.jpg'
import image6 from './../../Assests/thirtyone.jpg'

export const userpackages = () => {


  return (
    <>
       

        <section className='userpackage container section'>
                  
                  <div className="secTitle">
                        <h2 data-aos="fade-right" className="title">
                              Our Packages
                        </h2>
                  </div>

                  <h3><BsExclamationCircleFill className= "icon"/>  Each Package can be used only for One person (All above 12 years are concidered as one person)</h3>
                  <br></br>

                  <div className="secContent grid">
                                          <div data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
 {/*card one start*/}                          
                                          <div className="imageDiv">
                                          <img src={image1} className='image'></img>
                                          </div>
                       
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">4 Day Package</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">Valied for 3 Nights 4 days</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>Price</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>100$</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                            <p>Facilities</p><br></br>
                                                                  <hr/><br></br>
                                                               <ul>
                                                               <li><AiOutlineCheck className= "icon"/>Pay for travel destination by activating a Package</li>                                     
                                                               </ul>
                                                               

                                                      </div>
                                                      <Link to={{
                                                                  pathname: '/payment',
                                                                  state: {id: 1, name: '4 Day Package',price:'100'}
                                                            }} >
                                                       <button className='btn flex'>
                                                             Activate
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button> 
                                                      </Link>
                                                </div>
                                           </div>      
{/*card one end*/}
                                          <div data-aos="fade-up"
                                                className="singleDestination">

<div className="imageDiv">
                                          <img src={image2} className='image'></img>
                                          </div>

                                          <div className="cardInfo">
                                                      <h4 className="destTitle">7 Day Package</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">6 Nights and 7 Days</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>Price</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>300$</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                         <p>Facilities</p><br></br>
                                                                  <hr/><br></br>
                                                               <ul>
                                                               <li><AiOutlineCheck className= "icon"/>Pay for travel destination by activating a Package</li> 
                                                               </ul>

                                                      </div>
                                                      <Link to={{
                                                                  pathname: '/payment',
                                                                  state: {id: 2, name: '7 Day Package',price:'300'}
                                                            }} >
                                                      <button className='btn flex'>
                                                             Activate
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button>
                                                      </Link>
                                                </div>
                                          </div>     
{/*card3*/}     
<div data-aos="fade-up"
                                                className="singleDestination">

                                                      <div className="imageDiv">
                                          <img src={image3} className='image'></img>
                                          </div>

                                          <div className="cardInfo">
                                                      <h4 className="destTitle">15 Day Package</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">14 Nights and 15 Days</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>Price</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>700$</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                         <p>Facilities</p><br></br>
                                                                  <hr/><br></br>
                                                               <ul>
                                                               <li><AiOutlineCheck className= "icon"/>Pay for travel destination by activating a Package</li> 
                                                               </ul>

                                                      </div>
                                                      <Link to={{
                                                                  pathname: '/payment',
                                                                  state: {id: 3, name: '15 Day Package',price:'700'}
                                                            }} >
                                                      <button className='btn flex'>
                                                             Activate
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button>
                                                      </Link>
                                                </div>
                                          </div>     
                                          {/*vard4*/}
                                          <div data-aos="fade-up"
                                                className="singleDestination">
                                                      <div className="imageDiv">
                                          <img src={image4} className='image'></img>
                                          </div>

                                          <div className="cardInfo">
                                                      <h4 className="destTitle">20 Day Package</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">19 Nigths and 20 Days</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>Price</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>1500$</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                          <p>Facilities</p><br></br>
                                                                  <hr/><br></br>
                                                               <ul>
                                                               <li><AiOutlineCheck className= "icon"/>Pay for travel destination by activating a Package</li> 
                                                               </ul>

                                                      </div>
                                                      <Link to={{
                                                                  pathname: '/payment',
                                                                  state: {id: 4, name: '20 Day Package',price:'1500'}
                                                            }} >
                                                      <button className='btn flex'>
                                                             Activate
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button>
                                                      </Link>
                                                </div>
                                          </div>     

                                          {/*card5*/}

                                          <div data-aos="fade-up"
                                                className="singleDestination">

                                          <div className="imageDiv">
                                          <img src={image5} className='image'></img>
                                          </div>

                                          <div className="cardInfo">
                                                      <h4 className="destTitle">25 Day Package</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">24 Nights and 25 Days</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>Price</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>2000$</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                            <p>Facilities</p><br></br>
                                                                  <hr/><br></br>
                                                               <ul>
                                                               <li><AiOutlineCheck className= "icon"/>Pay for travel destination by activating a Package</li> 
                                                               </ul>

                                                      </div>
                                                      <Link to={{
                                                                  pathname: '/payment',
                                                                  state: {id: 5, name: '25 Day Package',price:'2000'}
                                                            }} >
                                                      <button className='btn flex'>
                                                             Activate
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button>
                                                      </Link>
                                                </div>
                                          </div>     

                                          {/*card6*/}

                                          <div data-aos="fade-up"
                                                className="singleDestination">

                                          <div className="imageDiv">
                                          <img src={image6} className='image'></img>
                                          </div>

                                          <div className="cardInfo">
                                                      <h4 className="destTitle">31 Day Package</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">30 Nights and 31 Days</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>Price</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>2500$</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                          <p>Facilities</p><br></br>
                                                                  <hr/><br></br>
                                                               <ul>
                                                               <li><AiOutlineCheck className= "icon"/>Pay for travel destination by activating a Package</li> 
                                                               </ul>

                                                      </div>
                                                       <Link to={{
                                                                  pathname: '/payment',
                                                                  state: {id: 6, name: '31 Day Package',price:'2500'}
                                                            }} > 
                                                      
                                                      <button className='btn flex'>
                                                             Activate
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button>
                                                      </Link>
                                                </div>
                                          </div>     
                                          {/*end of cards*/}                                     

                  </div>

                  
           </section>
   



        {/* <Footer/>  */}
    </>
    
    
  )
}