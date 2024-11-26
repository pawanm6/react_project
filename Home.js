import React, {useEffect} from 'react'
import './Home.css'
import video from '../../assest/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import { SiTripadvisor } from 'react-icons/si'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
  <section className='home'>
    <div className='overlay'></div>

    <video src={video} muted autoPlay loop type="video/mp4"></video>

    <div className='homecontent container'>
      <div className='textdiv'>
        <span data-aos="fade-up" className='smalltext'> Our Packages</span>
        <h1  data-aos="fade-up" className='hometitle'>Search your Holiday</h1>
      </div>

      <div  data-aos="fade-up" className='carddiv grid'>
        <div className='destinationinput'>
          <label htmlFor='city'>Search your Destination</label>
          <div className='input flex'>
            <input type='text' placeholder='Enter name here...'></input>
            <GrLocation className='icon'/>
          </div>
        </div>

        <div className='dateinput'>
          <label htmlFor='date'>Select your Date</label>
          <div className='input flex'>
            <input type='date'></input>
          </div>
        </div>

        <div className='priceinput'>
         <div className='label_total flex'>
          <label htmlFor='price'>Max Price:</label>
          <h3 className='total'>$5000</h3>
          </div>
          <div className='flex input'><input type='range' max={5000} min={1000}/></div>
        </div>

       <div className='searchoption flex'>
        <HiFilter/>
        <span>More filter</span>
       </div>


      </div>

      <div  data-aos="fade-up" className='homefooter flex'>
        <div className='righticon'>
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
        </div>
        <div className='lefticon'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
        </div>
      </div>


    </div>

  </section>
  )
}
