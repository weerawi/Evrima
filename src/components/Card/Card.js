import {  useHistory } from 'react-router-dom';
import  { useState } from 'react'
import { Link } from '@chakra-ui/react';
import "./Card.css";


const Card = (props) => {

  const history = useHistory(); 

  const handleButtonClick = () => {
    history.push(`/product/${props.product.id}`,{ product: props.product } );
  };
 
  const truncatedName = props.product.title.slice(0, 30); 
  const rating = props.product.rating.slice(0,3);

  return (

    <div className=" my-6  ml-12 mr-12  "> 
 
      <div className="flex justify-center items-center h-full  ">

        <div className="productCard  "  onClick={handleButtonClick}>

            <div class="flex items-center px-5 py-5" >
                <div class="card p-0">
                    <div class="card-image">
                        {/* <img src="/girl-blouse-design.jpg" /> */}

                            {/* {props.image} */}
                            <img src={props.product.image_url} alt="Product" className="w-full h-40 object-cover  my-4  rounded-xl " />
                    </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">{truncatedName}</h4> 
                        <h2>{props.product.price}</h2>

                        <div className='flex flex-row justify-between mt-1'>
                          <h4 >{rating}</h4>
                          <h4 >{props.product.website}</h4>
                        </div>



                    {/* //////////  if any discount has this part will be visible otherwise not ////////// */}
                      
                        {props.price && (
                          <div className="flex justify-between px-5">
                              <p className="text-base align-items-center font-medium line-through">
                                  ${props.price}
                              </p>
                              
                                <p className="ml-auto text-base font-medium align-items-center text-green-500">
                                    off
                                </p>
                              
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

      </div>

      



    </div>
 

  )
}

export default Card






