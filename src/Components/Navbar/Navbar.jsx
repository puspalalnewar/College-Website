import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <div className='logo-box'>
        <i class="fa-solid fa-building-columns logo"></i>
        <p className='name'>Endusity</p>
        </div>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Anout Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
