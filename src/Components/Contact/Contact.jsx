import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <i class="fa-solid fa-message"></i></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sint assumenda, explicabo incidunt eius aliquam fugiat. Explicabo doloremque quos iusto dolores unde veniam perferendis eaque quo aperiam, eius magni sunt.</p>
        <ul>
          <li><i class="fa-solid fa-envelope"></i>Contact@greatStack.dev</li>
          <li><i class="fa-solid fa-phone"></i>+1 123-567-9000</li>
          <li><i class="fa-solid fa-location-dot"></i>Alipurduar University, <br /> India</li>
        </ul>
      </div>
      <div className="contact-col">
          <form action="">
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Name</label>
            <input type="tel" name='phone' placeholder='Enter your phone no' required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" id="" placeholder='Enter your message' rows='6' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <i class="fa-solid fa-arrow-right "></i></button>
          </form>
      </div>
    </div>
  )
}

export default Contact
