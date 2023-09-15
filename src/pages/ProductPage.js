import React from 'react'
import { useLocation } from 'react-router-dom';
import "./productPage.css";
 



export const ProductPage = ( ) => {

  const location = useLocation();
  const { name, image, price, views } = location.state || {};

  return (
    <div className='h-[100vh]  '>


<div className='w-full text-black md:py-20'>
            
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] mt-12">
                    {/* PRODUCT LEFT SIDE IMAGE CAROUSAL */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">


                      <img src={image} alt="Product" className="w-auto h-80 object-cover  my-4 border-2 rounded-xl" />

                      {/* <div className="productCard">

                        <div class="flex items-center px-5 py-5" >
                            <div class="card p-0">
                                <div class="card-image"> 

                                      
                                        <img src={image} alt="Product" className="w-full h-40 object-cover  my-4 border-2 rounded-xl" />
                                </div>
                                <div class="card-content d-flex flex-column align-items-center">
                                    <h4 class="pt-2">{name}</h4> 
                                    <h2>$ {price}</h2>



                                
                                  
                                    {price && (
                                      <div className="flex justify-between px-5">
                                          <p className="text-base align-items-center font-medium line-through">
                                              ${price}
                                          </p>
                                          
                                            <p className="ml-auto text-base font-medium align-items-center text-green-500">
                                                off
                                            </p>
                                          
                                      </div>
                                    )}
                                </div>
                            </div>
                        </div>
                      </div> */}
                        
                    </div>

                    {/* PRODUCT RIGHT SIDE DETAILS */}
                    <div className=" flex-[1] py-3 md:px-0 px-4 sm:px-24 overflow-y-auto">
                        <div className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                            {name}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-base md:text-lg font-semibold mb-5">
                            subtitle
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 md:text-xl text-lg font-bold">
                                ${price}
                            </p>
                            (
                                <div className="flex gap-3 px-12 md:text-base text-sm">
                                    <p className="align-items-center font-medium line-through">
                                        ${price}
                                    </p>
                                    <p className="ml-auto font-medium align-items-center text-green-500">
                                        price% off
                                    </p>
                                </div>
                            )
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>

                            <div id="sizeGrid" className="grid grid-cols-3 gap-2">
                                size
                            </div>

                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>

                            <button
                                className="mt-5 w-full py-4 rounded-full bg-cyan-950 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                                
                            >
                                Add to Cart
                            </button>

                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                                Whishlist
                            </button>

                            <div>
                                <div className="text-lg font-bold mb-5">
                                    Product Details
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div> 
          
        </div>
      



      
  </div>
  )
}
