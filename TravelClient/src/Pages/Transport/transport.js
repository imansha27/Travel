import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './transport.scss'

import { Link } from 'react-router-dom'

import image from './../../Assests/img (15).jpg'
import image2 from './../../Assests/img (16).jpg'
import image3 from './../../Assests/img (17).jpg'



export const transport = () => {
    return (
      <>
      <Navbar/>

        <section className='transport container section'>
                  
          <div className="secTitle">
                <h2 data-aos="fade-right" className="title">
                              Our transport
                </h2><br></br>

            <div className="App">
                    <h3 data-aos="fade-right" className="">WE HAVE THREE METHODS OF TRAVELING FACILITIES. 
                              TOURSIST CAN USE HIGHWAY BUS , TRAIN OR A CAR 
                                RENTING SERVICE
                    </h3><br></br><br></br>

                <div data-aos="fade-left" className='images-row'>
                    <img src={image} className='image'></img> 
                    <img src={image2} className='image'></img>
                    <img src={image3} className='image'></img>
                </div><br></br>

                <div data-aos="fade-right" className="">
                   <a href="https://www.businfo.lk/highway-timetable"><button>BUS</button></a>
                   <a href="https://railway.gov.lk/web/index.php?lang=en"><button>TRAIN</button></a>
                   <a href="https://www.rentalcars.com/en/country/lk/?affiliateCode=msn_new_row&preflang=en&label=msn-2xBSwr_02hwn9QIcj40GdQ-75522740785123&adcamp=Regions%20-%20Sri%20Lanka&adco=cpc&utm_medium=cpc&utm_source=bing&utm_term=2xBSwr_02hwn9QIcj40GdQ&msclkid=52559fe131cb189df122fbc864d849a5"><button>RENT A CAR</button></a>
                </div>

              </div>

              
    
          </div>
        </section>

      <Footer/>
      </>
    )
}