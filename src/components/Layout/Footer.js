// import React, { useEffect } from 'react';

 
// const Footer = () => {

//   useEffect(() => {
//     const preloader = document.querySelector("#preloader");
//     if (preloader) {
//       const removePreloader = () => {
//         preloader.remove();
//       };
  
//       window.addEventListener("load", removePreloader);
  
//       return () => {
//         window.removeEventListener("load", removePreloader);
//       };
//     }
//   }, []);

//   return (

//     <>

//       <div id="preloader" className='z-100' > 
//         <div class="flex items-center justify-center w-full h-full">
//           <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
            
//                 <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
//                   <path clip-rule='evenodd'
//                     d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
//                     fill='currentColor' fill-rule='evenodd' />
//                 </svg>

            
//             <div>Loading ...</div>
//           </div>
//         </div>
      
//        </div>
    
//     <footer  className="bg-cyan-900 py-4">
 
//       <div className=" relative">
//         <svg 
//           className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-cyan-900 "
//           preserveAspectRatio="none"
//           viewBox="0 0 1440 54"
//         >
//           <path
//             fill="currentColor"
//             d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
//           />
//         </svg>

//         <div className="bg-cyan-900">
//           <div className="max-w-2xl mx-auto text-white py-10">
//             <div className="text-center">
//               <h3 className="text-3xl mb-3"> Let's keep in touch!</h3>
//               <p>Unleash the Power of Discovery</p>
               
//             </div> 
//             <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-200">
//               <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Evrima Team 2023</p>
//               <div className="order-1 md:order-2">
//                 <span className="px-2">About us</span>
//                 <span className="px-2 border-l">Contact us</span>
//                 <span className="px-2 border-l">Privacy Policy</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </>

//   );
// };

// export default Footer;




import React, { useEffect, useState } from 'react';

const Footer = () => {
   

  return (
    <>
       

      <footer  className="bg-cyan-900 py-4">
 
      <div className=" relative">
        <svg 
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-cyan-900 "
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>

        <div className="bg-cyan-900">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
              <h3 className="text-3xl mb-3"> Let's keep in touch!</h3>
              <p>Unleash the Power of Discovery</p>
               
            </div> 
            <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-200">
              <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Evrima Team 2023</p>
              <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;



 

