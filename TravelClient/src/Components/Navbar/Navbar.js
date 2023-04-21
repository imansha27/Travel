import React, {useState} from 'react'
import './navar.scss'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar = () => {

      const [active, setActive] = useState('navBar')
      //Function to toggle navbar
      const showNav = () => {
            setActive('navBar activeNavbar')
      }

      //Function to remove navbar
      const removeNavbar = () => {
            setActive('navBar')
      }

      return (
            <section className='navBarSection'>
                  <header className="header flex">
                        <div className="logoDiv">
                              <a href="#" className="logo flex">
                                    <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
                              </a>
                        </div>

                        <div className={active}>
                              <ul className="navLists flex">
                                <Link to="/" >
                                    <li className="navItems">
                                          <a href="#" className="navLink">Home</a>
                                    </li>

                                </Link>
                               <Link to="/packages" >
                                    <li className="navItems">
                                          <a href="#" className="navLink">Packages</a>
                                    </li>
                                </Link>

                                <Link to="/location">
                                    <li className="navItems">
                                          <a href="#" className="navLink">Activities</a>
                                    </li>
                               </Link>

                               <Link to="/activities">
                                    <li className="navItems">
                                          <a href="#" className="navLink">Destinations</a>
                                    </li>
                               </Link>

                               <Link to="/transport">
                                    <li className="navItems">
                                          <a href="#" className="navLink">Transport</a>
                                    </li>
                               </Link>

                               <Link to="/aboutus">
                                    <li className="navItems">
                                          <a href="#" className="navLink">Hotels</a>
                                    </li>
                               </Link>

                               <Link to="/contactus">
                                    <li className="navItems">
                                          <a href="#" className="navLink">Contact</a>
                                    </li>
                               </Link>

                               <Link to="/login">

                                    <bitton className="btn">
                                          <a href="#">Login</a>
                                    </bitton>
                               </Link>
                              </ul>
                               
                               
                              <div onClick={removeNavbar} className="closeNavbar">
                                    <AiFillCloseCircle className="icon"/>
                              </div>
                        </div>

                        <div onClick={showNav} className="toggleNavbar">
                             < TbGridDots className="icon"/>
                        </div>
                  </header>

            </section>

      )
}

export default Navbar
