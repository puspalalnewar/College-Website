import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [stickey, setSteckey] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSteckey(true) : setSteckey(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${stickey ? 'dark-nav' : ""}`}>
      <div className='logo-box'>
        <i className="fa-solid fa-building-columns logo"></i>
        <p className='name'>Endusity</p>
      </div>
      <ul className={mobileMenu ? "" : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-150} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <i className="fa-solid fa-bars menu-icon" onClick={toggleMenu}></i>
    </nav>
  )
}

export default Navbar
