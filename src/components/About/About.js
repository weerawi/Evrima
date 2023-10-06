import React from 'react';
import {Image} from "../../constants/Images";
import AboutProfile from './AboutProfile';

const About = () => {
  return (
    <div className='w-full'  > 
      <div  className=" py-20  mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-gray-200 text-2xl   font-bold md:text-4xl">Our Team</h2>
          <p className="text-gray-300 font-medium lg:w-8/12 lg:mx-auto">Meet our exceptional team, driving innovation and excellence.</p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">

          <AboutProfile name={'chamuditha gunawardene'} image={Image.Chamuditha} position={"front end"}/>
          <AboutProfile name={'samitha nilupul'} image={Image.Samitha} position={"front end"}/>
          <AboutProfile name={'tharindu viond'} image={Image.Tharindu} position={"front end"}/>
          <AboutProfile name={'ushara prabash'} image={Image.Ushara} position={"front end"}/>
          <AboutProfile name={'imashi gamage'} image={Image.Imashi} position={"front end"}/>
           
        </div>
      </div>
    </div>
  );
};
// fhgdfchjwjd
export default About;
