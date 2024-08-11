import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Camp from './Components/Campus/Camp'
import Testimonials from './Components/Testimonials/Testimonials'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = "Our Program" title = "What We Offer"/>
        <Programs />
        <About/>
        <Title subTitle = "Gallery" title = "Campus Photos"/>
        <Camp/>
        <Title subTitle = "Testimonials" title = "What Student Say"/>
        <Testimonials/>
        <Title subTitle = "Contact Us" title = "Get In Touch"/>
      </div>

    </div>
  )
}

export default App
