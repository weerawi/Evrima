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
              <input type="text" placeholder="Your Name" />
              <label>Your E-mail :</label>
              <input type="text" placeholder="xample@gmail.com" />
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





// import React, { useState } from 'react';
// import './contact.css';
// import {db} from "../../store/firebaseConfig";
// const Contact = () => {


//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [message,setMessage] = useState("");

//   const hadnleSubmit = (e) => {
//     e.preventDefault();

//     db.collection('contacts')
//     .add({
//       name:name,
//       email:email,
//       message:message,
//     })
//     .then(()=>{
//       alert("Message has been submitted ");
//     })
//     .catch((error)=>{
//       alert(error.message);
//     })

//     setName("");
//     setEmail("");
//     setMessage("");
//   };


//   return (
//     <div   className='  body-contact h-screen flex justify-center items-center perspective perspective-none transform-style-preserve '>
//       <div  className=" container-contact  ">
//         <div className="front side">
//           <div className="content">
//             <h1>Contact Us</h1>
//             <p>
//             We value your feedback, questions, and inquiries. 
//             Please don't hesitate to reach out to us using the contact information provided below. 
//             Our dedicated team is here to assist you and provide the information you need.
            
//             </p>
//           </div>
//         </div>
//         <div  className="back side">
//           <div className="content">
//             <h1>Contact Me</h1>
//             <form onSubmit={hadnleSubmit}>


//               <label>Your Name :</label>
//               <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name"  />


//               <label>Your E-mail :</label>
//               <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@gmail.com" />


//               <label>Your message :</label>
//               <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="The Subject"></textarea>


//               <input  type="submit" value="Done" />
//             </form>
//           </div>
//         </div>
//         {/* <a target="_blank" href="http://codepen.io/Moslim/" className="white-mode">OTHER PENS</a> */}
//       </div>  

//     </div>
    
//   );
// };

// export default Contact;
