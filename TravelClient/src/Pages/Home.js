import React from 'react'
import Destination from '../Components/destination/Destination'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Pagetop from '../Components/Pagetop/Pagetop'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Pagetop/>
        </div>
        <div>
            <Destination/>
        </div>
        
        <Footer/>
    </div>
  )
}
