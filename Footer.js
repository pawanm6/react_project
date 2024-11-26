import React,{useEffect} from 'react'
import './Footer.css'
import video from '../../assest/video.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return (
    <section className='footer'>
      <div className='videodiv'>
      <video src={video} muted autoPlay loop type="video/mp4"/>
      </div>

      <div className='setcontent container'>
        <div data-aos="fade-up" className='contactdiv flex'>
          <div className='text'>
            <small>Keep in Touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputdiv flex'>
            <input type='text'data-aos="fade-up" placeholder='Enter Email Address'></input>
            <button data-aos="fade-up" className='btn flex' type='submit'> 
              Send<FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footercard flex'>
          <div className='footerintro flex'>
            <div className='logodiv'>
              <a href='/' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>Travel
              </a>
            </div>

            <div data-aos="fade-up" className='footerpera'>
            The epiton of romance, Bora Bora is one of the best travel destianation in the world. This place is known for its luxurious stays and adventurous activities
            </div>

            <div data-aos="fade-up" className='footersocial flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
              
            </div>
          </div>

          <div className='footerlinks grid'>
            <div data-aos="fade-up" data-aos-duration='3000'  className='linkgrp'>
              <span className='grptitle'>Our Agancies</span>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Services
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Insurance
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Agancy
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Tourism
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Payment
              </li>
      
            </div>

            {/* grp2 */}
            <div data-aos="fade-up" data-aos-duration='4000' className='linkgrp'>
              <span className='grptitle'>Partners</span>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Bookings
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Rent Cars
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> hostel World
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Trivago
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Trip Advisor
              </li>
      
            </div>

            {/* grp3 */}
            <div data-aos="fade-up" data-aos-duration='5000' className='linkgrp'>
              <span className='grptitle'>Last minutes</span>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> London
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> California
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Indonesia
              </li>
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Europe 
              </li>      
              <li className='footerlist flex'>
                <FiChevronRight className='icon'/> Oceania
              </li>
      
            </div>
          </div>

          <div  className='footerdiv flex'>
            <small>Best Travel Website Theme </small>
            <small>COPYRIGHTS-RESERVE-PAWAN</small>
          </div>
        </div>
      </div>
    </section>
  )
}
