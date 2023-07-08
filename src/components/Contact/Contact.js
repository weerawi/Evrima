import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div   className='  body-contact h-screen flex justify-center items-center perspective perspective-none transform-style-preserve '>
      <div  className=" container-contact  ">
        <div className="front side">
          <div className="content">
            <h1>Contact Us</h1>
            <p>
            We value your feedback, questions, and inquiries. 
            Please don't hesitate to reach out to us using the contact information provided below. 
            Our dedicated team is here to assist you and provide the information you need.
            
            </p>
          </div>
        </div>
        <div  className="back side">
          <div className="content">
            <h1>Contact Me</h1>
            <form>
              <label>Your Name :</label>
              <input type="text" placeholder="Omar Khattab" />
              <label>Your E-mail :</label>
              <input type="text" placeholder="Example@mail.com" />
              <label>Your message :</label>
              <textarea placeholder="The Subject"></textarea>
              <input type="submit" value="Done" />
            </form>
          </div>
        </div>
        {/* <a target="_blank" href="http://codepen.io/Moslim/" className="white-mode">OTHER PENS</a> */}
      </div>  

    </div>
    
  );
};

export default Contact;
