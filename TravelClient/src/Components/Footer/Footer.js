import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../Assests/video.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter} from 'react-icons/ai'
import { AiFillYoutube} from 'react-icons/ai'
import { AiFillInstagram  } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

      useEffect(() => {
            Aos.init({duration:2000})
      }, [])

      return (
            <section className='footer'>
                  <div className="videoDiv">
                        <video src={video2} muted autoPlay loop type="video/mp4"></video>

                  </div>

                  <div className="secContent container">

                        <div className="contactDiv flex">

                              <div data-aos="fade-up" className="text">
                                    <small>KEEP IN TOUCH</small>
                                    <h2>Travel with us</h2>
                              </div>

                              <div className="inputDiv flex">
                                    <input data-aos="fade-up" type="text" placeholder="Enter your comments" />
                                    <button ata-aos="fade-up" className='btn flex' type='submit'>
                                          SEND <FiSend className="icon"/>
                                    </button>
                              </div>
                        </div>

                        <div className="footerCard flex">

                              <div className="footerIntro flex">
                                    <div className="logoDiv">
                                            <a href="#" className='logo flex'>
                                                <MdOutlineTravelExplore className="icon"/>Travel.
                                          </a>
                                    </div>

                                    <div ata-aos="fade-up" className="footerParagraph">
                                    We are also proud to offer an innovative payment solution using NFC tapping money paying cards. With our payment system, you can easily and securely pay for your travel expenses, without the hassle of carrying cash or dealing with credit card fees. Our team is dedicated to providing excellent customer service, and we are always here to answer any questions you may have.
                                    </div>
                                    <div ata-aos="fade-up" className="footerSocials flex">
                                          <AiOutlineTwitter className="icon" />
                                          <AiFillYoutube className="icon" />
                                          <AiFillInstagram className="icon" />
                                          <FaTripadvisor className="icon" />
                                    </div>
                              </div>
                              
                              <div className="footerLinks grid">

                                             {/* Group one */}
                                    <div data-aos="fade-up" data-aos-duration="4000"
                                          className="linkGroup">
                                          <span className="groupTitle">
                                                OUR AGENCY
                                          </span>
                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Services
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                               Insurance
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Agency
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Tourism
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Payment
                                          </li>
                                          
                                    </div>
                                                  {/* Group two */}
                                    <div data-aos="fade-up" data-aos-duration="3000"
                                          className="linkGroup">
                                          <span className="groupTitle">
                                                SERVICE
                                          </span>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                NFC Card
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                               Transport
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Guides
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Hotels
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Money Exchanging
                                          </li>
                                          
                                    </div>

                                    {/* Group three */}
                                    <div data-aos="fade-up" data-aos-duration="5000"
                                          className="linkGroup">
                                          <span className="groupTitle">
                                                ACTIVITIES
                                          </span>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Fishing
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                               Traditional Food
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Village Cycling
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Surfing
                                          </li>

                                          <li className="footerList flex">

                                                < FiChevronRight className="icon" />
                                                Climate Experiences
                                          </li>
                                          
                                    </div>
                              </div>

                              
                              <div className="footerDiv flex">
                                    <small>BEST  TRAVEL WEBSITE THEME</small>
                                    <small>COPYRIGHT RESERVED-WEBTRAVEL 2023</small>
                              </div>
                              
                        </div>

                  </div>         
             </section>

      )
}

export default Footer
