import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cf70bdcf-7b73-4e72-a431-a2707f8a3dac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
          <form action="" onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Name</label>
            <input type="tel" name='phone' placeholder='Enter your phone no' required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" id="" placeholder='Enter your message' rows='6' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <i class="fa-solid fa-arrow-right "></i></button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}
 
export default Contact
