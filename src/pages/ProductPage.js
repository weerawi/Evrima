import React from 'react'
import { useLocation } from 'react-router-dom';

export const ProductPage = ( ) => {

  const location = useLocation();
  const { name, image, price, views } = location.state || {};

  return (
    <div className='h-[100vh]'>
      
      <div className=" py-12   ml-12 mr-12 ">

<div className="cursor-pointer 
shadow-[5px_5px_rgba(_228,_220,_207,_0.4),_10px_10px_rgba(_228,_220,_207,_0.3),_16px_15px_rgba(_228,_220,_207,_0.2),_20px_20px_rgba(_228,_220,_207,_0.1),_25px_25px_rgba(_228,_220,_207,_0.05)] 
hover:shadow-[7px_7px_rgba(_228,_220,_207,_0.4),_12px_12px_rgba(_228,_220,_207,_0.3),_17px_17px_rgba(_228,_220,_207,_0.2),_22px_22px_rgba(_228,_220,_207,_0.1),_27px_27px_rgba(_228,_220,_207,_0.05)]
bg-gray-300 opacity-60 hover:opacity-100 text-white my-2 mx-1 rounded-xl shadow-md p-4
hover:scale-105 transition-all duration-300"  >
  <span className="text-cyan-900  font-medium mr-1">{name}</span>
  <img src={image} alt="Product" className="w-full h-40 object-cover  my-4 border-2 rounded-xl" />
  <div className="flex justify-between">
    <div className="flex items-center">
      <span className="text-cyan-900 font-medium mr-1">{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v4.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 7.586V3a1 1 0 011-1zm-1 14a1 1 0 100-2 1 1 0 000 2zm9-6a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 010-2h2V11h-2a1 1 0 010-2h3a1 1 0 011 1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="text-gray-600">{views} views</span>
  </div>
  <div className="flex items-center justify-between mt-4">
    <span className="text-lg font-semibold">${price} price</span>
    <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg">
      More
    </button>
  </div>
  {/* <div>{id}</div>
  <div>{name}</div> */}
</div>





</div>
    </div>
  )
}
