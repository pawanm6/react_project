import React, { useState } from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {MdOutlineMenu} from 'react-icons/md'
import {IoIosCloseCircleOutline } from 'react-icons/io'


export default function Navbar() {

const [active, setActive] = useState('navbar')
  
const shownav = ()=>{
    setActive('navbar activenavbar')
}

const removenav = ()=> {
    setActive('navbar')
}


  return (
    <div className='navbarsection'>
        <headar className='header flex'>
            <div className='logodiv'>
                <a href='/' className='logo flex'>
                    <h1><MdOutlineTravelExplore className='icon'/>
                        Travel
                    </h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navlist flex'>
                    <li className='navitem'> 
                        <a href='/' className='navlink'>Home</a>
                    </li>

                    <li className='navitem'> 
                        <a href='/' className='navlink'>Packegies</a>
                    </li>

                    <li className='navitem'> 
                        <a href='/' className='navlink'>Shop</a>
                    </li>

                    <li className='navitem'> 
                        <a href='/' className='navlink'>About</a>
                    </li>

                    <li className='navitem'> 
                        <a href='/' className='navlink'>pages</a>
                    </li>

                    <li className='navitem'> 
                        <a href='/' className='navlink'>News</a>
                    </li>

                    <li className='navitem'> 
                        <a href='/' className='navlink'>Contacts</a>
                    </li>
                    
                    <button className='btn'>
                        <a href='/'>Book Now</a>
                    </button>
                </ul>
                

                <div className='closenav' onClick={removenav}>  
                    <IoIosCloseCircleOutline  className='icon'/>              
                </div>
             </div>
                <div className='toggle' onClick={shownav}>
                     <MdOutlineMenu className='icon'/>
                </div>
            

        </headar>
    </div>
  )
}
