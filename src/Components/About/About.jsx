import React from 'react'
import './About.css'
import about_img from '../../Assets/about-img.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <div>
          <i class="fa-solid fa-play"></i>
        </div>

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturning Tomorrow's Leader's Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem doloribus repellendus debitis beatae commodi ad. Eaque facere animi molestias architecto ea quas magnam itaque aut placeat similique. Enim sapiente dolore magnam consequatur, ex tempore provident?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci atque quaerat, sequi iusto tempora velit libero sint aperiam sunt modi facilis deleniti nisi veritatis.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, veniam. Necessitatibus ea similique illo numquam dolorum est consectetur vero vel!</p>
      </div>
    </div>
  )
}

export default About
