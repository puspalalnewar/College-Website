import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempore reprehenderit excepturi aspernatur nobis ea.</p>
        <button className='btn'>Explore More <i className="fa-solid fa-arrow-right arrow-gap"></i></button>
      </div>
    </div>
  )
}

export default Hero
