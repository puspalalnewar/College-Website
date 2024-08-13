import React from 'react'
import './Programs.css'
import program_1 from '../../Assets/program-1.jpg'
import program_2 from '../../Assets/program-2.jpg'
import program_3 from '../../Assets/program-3.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <i className="fa-solid fa-user-graduate"></i>
          <p>Graduate Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
        <i className="fa-solid fa-graduation-cap"></i>
          <p>Master's Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <i className="fa-solid fa-user-graduate"></i>
          <p>Post Graduation Deg</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
