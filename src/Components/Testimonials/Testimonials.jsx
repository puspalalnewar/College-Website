import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from '../../Assets/user-1.jpg'
import user_2 from '../../Assets/user-2.jpg'
import user_3 from '../../Assets/user-3.jpg'
import user_4 from '../../Assets/user-4.jpg'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;


  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <div className="design right-next" onClick={slideForward}>
        <i className="fa-solid fa-arrow-right "></i>
      </div>
      <div className="design design-back left-back" onClick={slideBackward}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>William Zampa</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit similique obcaecati nisi perferendis! Cumque harum beatae alias impedit ipsa! Perferendis vel voluptatibus ad corrupti, quis natus nobis blanditiis cupiditate.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>William Zampa</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit similique obcaecati nisi perferendis! Cumque harum beatae alias impedit ipsa! Perferendis vel voluptatibus ad corrupti, quis natus nobis blanditiis cupiditate.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>William Zampa</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit similique obcaecati nisi perferendis! Cumque harum beatae alias impedit ipsa! Perferendis vel voluptatibus ad corrupti, quis natus nobis blanditiis cupiditate.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>William Zampa</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit similique obcaecati nisi perferendis! Cumque harum beatae alias impedit ipsa! Perferendis vel voluptatibus ad corrupti, quis natus nobis blanditiis cupiditate.</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonials
