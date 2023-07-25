import Link from 'next/link';
import React from 'react'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Profile", url: "/profile" },
    { id: 4, name: "Contact", url: "/contact" },
    { id: 5, name: "Logout", url: "/logout" },
    { id: 6, name: "login", url: "/login" },
];



const Menu = ( ) => {
 

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-white "> 
    {/* set always hidden and aftet medium size set menu bar visible   */}

        {data.map((item) =>{
            return(

                // /////   Menu navigation start    /////////////
                <React.Fragment key={item.id} >
                     

                        
                        <li className="cursor-pointer">
                            <Link href={item?.url}>{item.name}</Link>
                        </li>
                 
                </React.Fragment>

                // /////   Menu navigation end    /////////////
            )
        })}

    </ul>
  )
}

export default Menu