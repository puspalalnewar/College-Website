import React from 'react'
import './Campus.css';
import gallery_1 from '../../Assets/gallery-1.jpg'
import gallery_2 from '../../Assets/gallery-2.jpg'
import gallery_3 from '../../Assets/gallery-3.jpg'
import gallery_4 from '../../Assets/gallery-4.jpg'

const Camp = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <i className="fa-solid fa-arrow-right arrow-gap"></i></button>
    </div>
  )
}

export default Camp
