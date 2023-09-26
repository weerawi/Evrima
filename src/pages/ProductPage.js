import { Button } from '@chakra-ui/react';
import React from 'react'
import { useLocation } from 'react-router-dom';
// import "./productPage.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AOS from "aos";
import "aos/dist/aos.css";  
AOS.init();


 
export const ProductPage = ( ) => {

    const location = useLocation();
    const { product } = location.state || {};
    const rating =  product.rating.slice(0,3);
    
    if (!product) {
      return null; // Handle the case where product details are not available yet
    }
//   const { name, image, price, views } = location.state || {};


   
   

  return (
    <div className='  h-[150vh] md:h-[100vh]    py-5 md:pb-1 pb-10 '>


        <div className='w-full   text-gray-800 '>
            
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] mt-12">
                    {/* PRODUCT LEFT SIDE IMAGE CAROUSAL */}
                    <div  data-aos="fade-right"
                         className="  items-center justify-center w-full md:w-auto flex md:flex-[.7] max-w-[700px] lg:max-w-full mx-auto lg:mx-0 ">
 
                                    {/*  {image}   */}
                      <img style={{
                        
                        backdropFilter: 'blur(25px)', 
                        background:  'rgba(139, 172, 170, 0.5)',
                        border :  '1px solid rgba(255, 255, 255, 0.45) ',   
                        backgroundSize: 'cover', 
                        }}
                         src={product.image_url} alt="Product" className="p-5 shadow-md shadow-white w-auto h-100 object-cover  my-4 border-2 rounded-xl" />
   
                    </div>

                    {/* PRODUCT RIGHT SIDE DETAILS */}
                    <div   data-aos="fade-left"  style={{
                        
                        backdropFilter: 'blur(25px)',
                        // background: `url(https://m.media-amazon.com/images/I/51dp6BGML8L._SL1280_.jpg)`,
                        background:  'rgba(139, 172, 170, 0.5)',
                        border :  '1px solid rgba(255, 255, 255, 0.45) ',   
                        backgroundSize: 'cover',
                        
                        }}  
                        className=" mx-5 flex-[.8]  md:px-0 px-4 sm:px-24 overflow-y-auto rounded-2xl my-auto py-10 shadow-md shadow-white">

                        <div className='flex flex-col '>
                            <div className=" px-5 flex justify-center  text-xl md:text-2xl font-bold mb-2 leading-tight">
                                {product.title}
                            </div>


                            {/* PRODUCT RETRIEVW DETAILS */}
                            <div className="my-5 px-10 md:px-20 lg:px-28 xl:px-36 flex font-semibold justify-between ">
                                <div>
                                     {product.rank}
                                </div>

                                <div>
                                    {product.category}
                                </div>
                            </div>

                            {/* PRODUCT PRICE */}
                            <div className=" flex justify-center  text-base md:text-lg font-bold mb-5">
                                {product.price}
                            </div>


                            {/* PRODUCT RATINGS */}
                            <div className="my-5 px-10 md:px-20 lg:px-28 xl:px-36 flex font-semibold justify-between ">
                                <div>
                                     {rating}

                                     <Stack spacing={1}> 
                                     <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                                    </Stack>


                                </div>

                                <div>
                                    {product.reviews}
                                </div>
                            </div>

                             

                              {/* direct to specific website new window when click the button */}
                            <div className=" flex justify-center font-semibold">
                                <Button onClick={() => window.open(product.link, '_blank')} className=' rounded-xl bg-cyan-700 py-2 px-3 border border-gray-400'> {product.website}</Button>
                            </div>




                        </div>
                        
  
                    </div>
                </div> 
          
        </div>
      
</div>
   
  
  )
}
