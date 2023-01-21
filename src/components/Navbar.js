import React from "react";
import { NavLink } from "react-router-dom";
import { DateTime } from "luxon";
import { WrenchScrewdriverIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import facebook from '../logo/facebook.jpg'
import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'
const Navbar = () => {
  const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  return (
    <header>
      <div className="flex">
        <div className="bg-blue-500 w-1/3 p-3 flex items-center justify-center">
          <span>{dt}</span>
        </div>
        <div className="bg-paleBlue w-2/3 p-3 flex justify-end items-center md:pr-20">
          <div className='flex space-x-3'>
          <a href="#"><img className="circle" src={facebook} alt="facebook logo" /></a>
          <a href="#"><img className="circle" src={twitter} alt="twitter logo" /></a>
          <a href="#"><img className="circle" src={google} alt="google logo" /></a>
          <a href="#"><img className="circle" src={linkedin} alt="linkedin logo" /></a>
        </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center py-2 px-3 md:px-10 bg-white">
        <div className="md:flex md:flex-col items-baseline hidden ">
          <NavLink to="/" className="link flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
          <span className="md:text-2xl mx-2 text-blue-900 font-bold">Plumber</span>
          </NavLink>
          <p className="text-sm">Professional Plumber</p>
        </div>
        <div className="flex md:space-x-20 space-x-5">
          <div className="flex space-x-3 items-center">
             <span className="border border-blue-400 p-2">
                <EnvelopeIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold">Email us</p>
              <a href="mailto:" className="text-sm grey">@gmail.com</a>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
                <PhoneIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold">Call us on</p>
                <a href="tel:+" className="text-sm grey">+2348144580946</a>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-center md:justify-between md:container items-center  bg-paleBlue
       text-white mx-auto text-sm md:text-md font-bold xsm:text-xsm">
        <ul className="flex xsm:space-x-2 space-x-7 md:space-x-10  md:mx-3 py-6">
        <NavLink className="link" to="/">HOME</NavLink>
        <li><NavLink className="link" to="/about">ABOUT US</NavLink></li>
        <li><NavLink className="link" to="/result">SERVICES</NavLink></li>
        <li><NavLink className="link" to="/result">PROJECT</NavLink></li>
        <li><NavLink className="link" to="/message">CONTACT</NavLink></li>  
        </ul>
        <NavLink className="hidden md:block hover:opacity-90 active:bg-blue-700 bg-blue-500 px-3 py-6" to="/result">GET APPOINTMENT</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
