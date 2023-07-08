import React from 'react'

const AboutProfile = ({image,name,position}) => {
  return (
    <div class="space-y-4 text-center">
        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80 shadow-lg shadow-white transition-transform duration-300 transform-gpu hover:scale-90" 
        src={image} alt="man" loading="lazy" width="1000" height="667" />
        <div>
        <h4 class="text-2xl capitalize text-gray-300 font-medium">{name}</h4>
        <span class="block text-sm text-gray-100">{position}</span>
        </div>
    </div>
  )
}

export default AboutProfile
