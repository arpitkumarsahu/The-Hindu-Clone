import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaTelegram,FaEnvelope,FaMobile } from "react-icons/fa";




const top = {
    display: 'flex'
}


const Header = ()=> {
  return (
    <div>
        <div style={top}>
        <FaFacebookF /> <FaTwitter/>  <FaLinkedinIn/> <FaInstagram/> <FaTelegram/> <FaEnvelope/> <FaMobile/> <p>e-paper</p>
        </div>
        
      
    </div>
  )
}

export default Header
