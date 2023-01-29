import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  MapIcon, MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'
import facebook from '../logo/facebook.jpg'
import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'


const Footer = () => {
  return (
    <section className='bg-deepBlue flex flex-col pt-4 pb-3 md:pb-0'>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around items-center py-4'>
        <div className='flex flex-col space-y-1 items-center  text-white font-bold'>
          <h2 className='font-bold text-white'>Kasbass Nigeria Enterprises</h2>
          <address className='flex items-center justify-center'>
            <div className='flex flex-col items-center space-y-1 grey'>
              <span className='text-sm flex items-center'>
                <MapIcon className='text-blue-500 h-4 w-4 mx-1' />
                Surulere Lagos, Nigeria
                </span>
                <span className='text-sm flex items-center'>
                  <MapPinIcon className='text-blue-500 h-4 w-4 mx-1' />
                  18 Aborishade Road, Lawanson
                </span>
                <span className='text-sm flex items-center'>
                  <PhoneIcon className='text-blue-500 h-4 w-4 mx-1'/>
                  (+234) 814 760 3570
              </span>
              <div className='text-sm flex items-center'>
                  <EnvelopeIcon className='text-blue-500 h-4 w-4 mx-1'/>
                  <a href="mailto:kasbassnigenterprises@gmail.com">kasbassnigenterprises@gmail.com</a>
              </div>
            </div>
          </address>
        </div>
      <div className="flex flex-col items-center">
        <h2 className='font-bold text-white'>Useful Links</h2>
        <div className='flex flex-col items-center grey'>
          <NavLink className="link text-sm" to="/about">About Us</NavLink>
          <NavLink className="link text-sm" to="/message">Contact Us</NavLink>
          <NavLink className="link text-sm" to="/message">Services</NavLink>
          <NavLink className="link text-sm" to="/projects">Projects</NavLink>
          <NavLink className="link text-sm" to="/faqs">FAQS</NavLink>
        </div>
      </div>
      <form className='flex items-center flex-col md:space-y-2'>
        <h2 className='font-bold text-white'>Subscribe</h2>
        <p className='grey pb-1'>Get notify when the new work posted</p>
        <div className='flex items-center flex-shrink w-full md:w-60 lg:w-80 h-10 rounded-md cursor-pointer bg-blue-500 hover:opacity-90 active:bg-blue-700'>
        <input type="email" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' placeholder='Email Address'/>
        <PaperAirplaneIcon className="h-12 p-4 text-white" />
        </div>
      </form>
      </div>
      <div className='flex flex-col items-center justify-center space-y-1 `
      md:border-bottom-gray-200 py-2 connect'>
        <h2 className='font-bold text-white'>Follow Us</h2>
        <div className='flex space-x-3'>
          <a href="https://www.facebook.com/profile.php?id=100063464694068&mibextid=ZbWKwL"
            target="_blank" rel="noreferrer" >
            <img className="circle" src={facebook} alt="facebook logo" />
          </a>
          <a href="https://mobile.twitter.com/GasaliAbass" target="_blank" rel="noreferrer">
            <img className="circle" src={twitter} alt="twitter logo" />
          </a>
          <a href=" https://www.instagram.com/invites/contact/?i=mi29glvkp6z6&utm_content=gwkaofn" target="_blank" rel="noreferrer">
            <img className="circle" src={google} alt="google logo" />
          </a>
          <a href="https://www.linkedin.com/in/abass-kasali-369911247" target="_blank" rel="noreferrer">
            <img className="circle" src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
