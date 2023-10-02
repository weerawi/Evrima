import { Button } from '@chakra-ui/react';
import React from 'react'
import { useLocation } from 'react-router-dom';
import "./productPage.css";
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
    <div className='   h-[160vh]  md:h-[100vh]  py-10 '>

 
        <div className='details'>
            

            <div className="relative flex-row   md:flex md:space-x-5 space-y-20 xl:max-w-3xl lg:max-w-2xl  md:max-w-xl   mx-auto mt-10 ">
                

                <div  data-aos="fade-right"
                        className="  items-center justify-center w-full md:w-auto flex md:flex-[.7] max-w-[700px] lg:max-w-full mx-auto lg:mx-0 ">

                                 
                    <img style={{
                    
                    backdropFilter: 'blur(25px)', 
                    // background:  'rgba(139, 172, 170, 0.5)',
                    backgroundImage: 'linear-gradient(0deg, rgba(40, 44, 52, 1) 0%, rgba(17, 0, 32, .5) 100%)',

                    border :  '1px solid rgba(255, 255, 255, 0.45) ',   
                    backgroundSize: 'cover', 
                    }}
                        src={product.image_url} alt="Product" className="p-5 shadow-md shadow-white w-auto h-100 object-cover  my-4 border-2 rounded-xl" />

                </div>
                
                
                
                <div  className="  card flex-[0.7] md:flex-[1] border border-gray-400 bg-gray-800 text-white p-8 rounded-lg shadow-white shadow-md">
                    <div class='  flex flex-col w-full'>

                        <div className="bg    ">
                            <h1 >{product.price}</h1>
                        </div>


                        <div className='flex justify-center  '>
                           <h2>{product.title}</h2> 
                        </div>


                        <div className="my-5 flex justify-end "> 
                            <p>category: {product.category}</p>
                        </div>  
                        
                        <p class='mb-7 text-cyan-600'>Evrima will give you nothing,but save your time on us.</p>
                         
                        <div class='mt-7 flex font-semibold justify-between items-center  text-gray-100 rounded-md'>

                            {/* ratings */}
                            <div >   
                                <div  class="pl-10">
                                     {rating}
                                </div>
                                     <Stack spacing={1}> 
                                     <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                                    </Stack> 
                            </div>


                            {/* category */}
                            <div class="duration"> 
                                <p>{product.reviews}</p>
                            </div>
                        </div>
                        <hr />
                         

                        
                              {/* direct to specific website new window when click the button */}
                        <div className="mt-5 flex justify-center font-semibold">
                            <Button onClick={() => window.open(product.link, '_blank')} className=' rounded-xl bg-cyan-700 hover:bg-cyan-900 py-2 px-3 border border-gray-400'> {product.website}</Button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>



      
</div>
   
  
  )
}


 