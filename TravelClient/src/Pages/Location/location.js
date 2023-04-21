import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./location.scss" 

import { Link } from 'react-router-dom'

import image from './../../Assests/fishing1.jpg'
import image2 from './../../Assests/fishing2.webp'
import image3 from './../../Assests/fishing3.jpg'
import image4 from './../../Assests/food1.jpg'
import image5 from './../../Assests/food3.jpg'
import image7 from './../../Assests/food4.jpg'
import image8 from './../../Assests/cycl1.jpg'
import image9 from './../../Assests/cycl2.jpg'
import image10 from './../../Assests/cycl3.jpg'
import image11 from './../../Assests/sur1.jpg'
import image12 from './../../Assests/sur2.jpg'
import image13 from './../../Assests/sur3.jpg'
import image14 from './../../Assests/climate4.jpg'
import image15 from './../../Assests/climate2.jpg'
import image16 from './../../Assests/climate3.jpg'

export const location = () => {
    return (
      <>
          <Navbar/>

          <section className='location container section'>
                  
                  <div className="secTitle">
                        <h2 data-aos="fade-right" className="title">
                              Popular Activities
                        </h2><br></br>

                        <div className='cards'>
                          <div>
                            <h3>Fishing</h3><br></br>
                            <div data-aos="fade-left" className='images-row'>
                                     <img src={image} className='image'></img> 
                                     <img src={image2} className='image'></img>
                                     <img src={image3} className='image'></img>
                            </div><br></br>
                            <p>Sri Lanka is endowed with an enormous stock of fishing resources - almost incalculable - thanks 
                              to its territorial waters covering an expanse of 21,500sq. km., the UN-Mandated Exclusive Economic 
                              Zone of 517 000sq.km., 260 000ha of freshwater bodies, 158 000ha of lagoons & estuaries, 71 000ha of 
                              mangrove zones, mudflats & salt marshes, and the growing aquaculture industry of the country. 
                              Total marine fish catch amounted to 415,490Mt   The inland and aquaculture fish production in 2019 was 90,340Mt. 
                              The total export volume of seafood and fishery products was 28,771Mt which brought in US$81.3 million in foreign 
                              exchange earnings.</p>
                          </div><br></br>
                          <div data-aos="fade-right" className="">
                            <a href="https://fishingbooker.com/destinations/country/lk"><button>MORE</button></a><br></br><br></br>
                            <hr/><br></br>
                          </div>  

                          <div >
                            <h3>Traditional Food</h3><br></br>
                            <div data-aos="fade-left" className='images-row'>
                                     <img src={image4} className='image'></img> 
                                     <img src={image5} className='image'></img>
                                     <img src={image7} className='image'></img>
                            </div><br></br>
                            <p>The Teardrop of India or Pearl of the Indian Ocean are among many nicknames for Sri Lanka. 
                               But a more accurate description of the gorgeous nation might be the Island of Rice and Curry.
                               Making liberal use of local fruit, such as coconut and jackfruit, seafood and an arsenal of spices, Sri Lankan cooking delivers an abundance of incredible dishes.
                               Here are some you should not miss.<br></br><br></br>
                               <h5>Common Ingredients in Traditional Foods in Sri Lanka</h5>
                                   Spices: <p1>Black Pepper, Cardamom, Cinnamon, Cloves, Coriander, Cumin, Fennel, Fenugreek, Mace, Nutmeg, Turmeric<br></br></p1>
                                   Herbs: <p2>Cayenne Pepper, Curry Leaf, Garlic, Goraka, Ginger, Lemongrass, Lime, Shallot, Tabasco Pepper, Tamarind<br></br></p2>
                                   Grains: <p3>Millet, Olu Haal (Water Lily Seed), Red Rice (common varieties are: Kekulu, Pachchaperumal, Kaluheenati, Madathawalu), White Rice (common varieties are: Samba, Kekulu, Suwandel)</p3>
                                  </p>
                          </div><br></br>
                          <div data-aos="fade-right" className="">
                            <a href="https://www.ubereats.com/lk"><button>MORE</button></a><br></br><br></br>
                          <hr/><br></br>
                          </div>


                          <div>
                            <h3>Village Cycling</h3><br></br>
                            <div data-aos="fade-left" className='images-row'>
                                     <img src={image8} className='image'></img> 
                                     <img src={image9} className='image'></img>
                                     <img src={image10} className='image'></img>
                            </div><br></br>
                            <p>Cycling in Sri Lanka is a fantastic way to discover the incredible depth behind this island nation’s tropical exterior. 
                              As you pedal along peaceful roads, you’ll see tea plantations rubbing shoulders with wild jungle, historic temples lying 
                              in stunning valleys, colourful birds sitting atop garden walls – around every corner is something new. With towering mountains, 
                              azure seas, postcard beaches and cloud forests, two-wheeling here is a magical experience.
                              All the cycle routes in Sri Lanka will gently persuade you to ride further, to see what marvels are coming up next. 
                              Head to the heart of the island, just north of the mountains to see the Sigiriya fortress, a staggering blend of architecture 
                              and geology. Spin your wheels northwards to explore the farmland, paddies and plains, or explore the south, challenging yourself
                               on the hills of Udawalawe National Park, where elephants roam.  </p>
                          </div><br></br>
                          <div data-aos="fade-right" className="">
                            <a href="https://www.getyourguide.com/sri-lanka-l169048/bike-tours-tc7/?cmp=bing&campaign_id=434111532&adgroup_id=1251244854682616&target_id=dat-2330002578451843%3Aaud-806416224%3Aloc-36&match_type=b&ad_id=78202963710337&msclkid=882602ad198e161317cf669f508ae984&loc_physical_ms=147906&feed_item_id=&keyword=getyourguide.com&partner_id=CD951&utm_medium=paid_search&utm_source=bing&utm_campaign=ct%3Ddsa%7Cln%3D29%3Aen%7Ctc%3Dus&utm_term=getyourguide.com&gclsrc=3p.ds"><button>MORE</button></a><br></br><br></br>
                          <hr/><br></br>
                          </div>


                          <div >
                            <h3>Surfing</h3><br></br>
                            <div data-aos="fade-left" className='images-row'>
                                     <img src={image11} className='image'></img> 
                                     <img src={image12} className='image'></img>
                                     <img src={image13} className='image'></img>
                            </div><br></br>
                            <p>Surfing in Sri Lanka is one of the popular sports in Sri Lanka among foreign tourists despite not being popular among the 
                              Sri Lankan locals. Surfing in Sri Lanka dates back to early 1960s.[1] The country has many beaches for surfing, especially in the 
                              southern and eastern regions. Places such as Arugam Bay, Hikkaduwa, Weligama, Mirissa and Unawatuna are popular surf spots in 
                              Sri Lanka and among tourists.[2] The Tourism in Sri Lanka is also very closely related to the sport of surfing and the Sri Lanka 
                              Tourism Promotion Bureau considers the sport of surfing as one of the measures of attracting tourists.</p>
                              <h5>Surfing Spots</h5>
                              <p2>Arugam Bay<br></br>Misissa<br></br>Hikkaduwa</p2>
                          </div><br></br>
                          <div data-aos="fade-right" className="">
                            <a href="https://thesurfatlas.com/sri-lanka-surf/"><button>MORE</button></a><br></br><br></br>
                          <hr/><br></br>
                          </div>


                          <div>
                            <h3>Climate Experiences</h3><br></br>
                            <div data-aos="fade-left" className='images-row'>
                                     <img src={image14} className='image'></img> 
                                     <img src={image15} className='image'></img>
                                     <img src={image16} className='image'></img>
                            </div><br></br>
                            <p>The weather and climate in Sri Lanka are affected by two different monsoon patterns, which is somewhat unusual for an island so small, 
                              and the short dry seasons between monsoons still experience some rain. Regardless of when you visit Sri Lanka, you’ll be hot most 
                              of the time and probably caught by a rain shower more than once!
                               Ocean breezes keep beaches tolerable, but leaving the coast for too long becomes a harsh lesson in tropical humidity. If you can’t 
                               handle the sticky heat, head to the hilly Central Province in Sri Lanka’s interior for cultural treats and cooler evenings.
                               For all the top places to go in Sri Lanka, January and February are peak of dry season and the busiest months to visit.
                                Trincomalee on the northeast coast of Sri Lanka is an exception: the best time to visit is between March and July.</p>
                          </div><div data-aos="fade-right" className="">
                            <a href="https://www.tripsavvy.com/weather-and-climate-in-sri-lanka-4802510"><button>MORE</button></a><br></br><br></br>
                          <hr/><br></br>
                          </div>

                        </div>
                  </div>

          </section>

          <Footer/>
      </>
    )
}
