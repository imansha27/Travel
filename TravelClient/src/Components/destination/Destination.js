import React, {useEffect} from 'react'
import './destination.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assests/img (1).jpg'
import img2 from '../../Assests/img (2).jpg'
import img3 from '../../Assests/img (3).jpg'
import img4 from '../../Assests/img (4).jpg'
import img5 from '../../Assests/img (5).jpg'
import img6 from '../../Assests/img (6).jpg'
import img7 from '../../Assests/img (7).jpg'
import img8 from '../../Assests/img (8).jpg'
import img9 from '../../Assests/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
      {
            id: 1,
            imgSrc: img,
            destTitle: 'KANDY',
            location: 'Central Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'One of the most scenic cities in Sri Lanka and lies in the midst of hills. It is the Capital of the Central Province. It is both an administrative ad religious city. Kandy is the second largest city in the country and is frequently visited by Buddhists especially of the Theravada School.'
      },
      {
            id:2,
            imgSrc: img2,
            destTitle: 'NUWARA ELIYA',
            location: 'Central Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Nuwara Eliya meaning "city on the plain or "city of light" is a town in the central highlands of Sri Lanka. It is one of the major tea producing areas in the world. The tallest mountain in Sri Lanka "Pidurutalagala" oversees this beautiful city. It is the most visited hill country.'
      },
      {
            id:3,
            imgSrc: img3,
            destTitle: 'TRINCOMALEE',
            location: 'Eastern Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Trincomalee is a port city on the east coast of Sri Lanka and , which divides the inner and outer harbours.It is an anglicized version of the Tamil word Tirukonamalai  it is a hill situated in the end of a natural land formation that resembles an arc and one of the main where Tamil is spoken. '
      },
      {
            id:4,
            imgSrc: img4,
            destTitle: 'GALLE',
            location: 'Southern Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Galle is situated in the southwestern tip of Sri Lanka; it is one of the countrys integral cities. Galle has a colorful history and beauty that renders many speechless.The city is filled with Dutch-colonial buildings people come from faraway places to see.The air is filled with the sweet smell of spices and the salty winds give it a authentic recognition.'
      },
      {
            id:5,
            imgSrc: img5,
            destTitle: 'ANURADHAPURA',
            location: 'North Central Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Anuradhapura is one of the ancient cities in Sri Lanka, well known for its ruins depicting early Sri Lankan civilization. It is very famous among Buddhists pilgrims. Anuradhapura was earlier the capital of the Island and most of the Kings who ruled Sri Lanka resided in this vast city. The city is now named as a world heritage site by UNESCO'
      },
      {
            id:6,
            imgSrc: img6,
            destTitle: 'JAFFNA',
            location: 'Nothern Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Also known as Yaalpanam among Tamils. Located on the northern-most part of Sri Lanka. One of the oldest places of inhabition in South-east Asia.Mostly populated by Tamils along with a handful of Sri Lankan Muslims. It is one of the most populated cities of Sri Lanka. Sri Lankan Tamil is the main language spoken in Jaffna with a little bit of sinhala.'
      },
      {
            id:7,
            imgSrc: img7,
            destTitle: 'MIRISSA',
            location: 'Southern Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Mirissa is a small heaven located in the South Coast of Sri Lanka, only about 200km away from the Equator. The small town is ever-famous for it is natural beaches which are mostly untouched by any man-made modernization, which makes it well-loved and very sought after when it comes to holidays and vacations, even—honeymoons.'
      },
      {
            id:8,
            imgSrc: img8,
            destTitle: 'SIGIRIYA',
            location: 'North Central Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'Sigiriya also known as The Lion Rock Sri Lanka is a rock fortress and a palace which is 169 KM From Colombo located in the Matale district of Sri Lanka. This ruin is surrounded by gardens, ponds and other structures. Sigiriya was built by King Kassapa and it is included as a World Heritage site. Sigiriya is the best preserved city centre in Asia.'
      },
      {
            id:9,
            imgSrc: img9,
            destTitle: 'UDAWALAWE',
            location: 'North Central Province',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'If you are intending to visit Sri Lanka or are already in Sri Lanka and are looking for good places or parks to visit, then here is one simple answer.The flawless Udawalawe.It is filled with huge parks that were built to provide an alternate experience of wildlife.The travelling there has cheap fees if we make comparison to the brilliant experience it gives to its visitors'
      },
]
const Destination = () => {

            useEffect(() => {
            Aos.init({duration:2000})
      }, [])

      return (
            <section className='main container section'>
                  
                  <div className="secTitle">
                        <h3 data-aos="fade-right" className="title">
                              Popular Destinations
                        </h3>
                  </div>

                  <div className="secContent grid">

                        {
                              Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {

                                    return (
                                          <div key={id} data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                <div className="imageDiv">
                                                      <img src={imgSrc} alt={destTitle} />
                                                </div>
                                                
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">{destTitle}</h4>
                                                      <span className="continent flex">
                                                            <HiOutlineLocationMarker className='icon' />
                                                            <span className="name">{location}</span>
                                                      </span>

                                                      

                                                      <div className="desc">
                                                            <p>{description}</p>

                                                      </div>
                                                      <a href="http://localhost:3000/activities" className="title">
                                                      <button className='btn flex'>
                                                            MORE DETAILS 
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button></a>
                                                </div>
                                          </div>
                                    )
                                    
                              })
                        }

                  </div>
           </section>

      )
}

export default Destination;
