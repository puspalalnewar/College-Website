import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [stickey, setSteckey] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSteckey(true) : setSteckey(false);
    })
  }, []);

  return (
    <nav className={`container ${stickey ? 'dark-nav' : ""}`}>
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
