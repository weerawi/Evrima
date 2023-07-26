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



const MobileMenu = ({setMobileMenu} ) => {
 
  return (
    <ul className="text-black md:hidden font-bold mt-[50px]  left-0 w-[300px]  bg-white  "> 
    {/* set always hidden and aftet medium size set menu bar visible   */}

        {data.map((item) =>{
            return(

                // /////   Menu navigation start    /////////////
                <React.Fragment key={item.id} >
                     

                        
                        <li className="cursor-pointer">
                            <Link href={item?.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
                        </li>
                 
                </React.Fragment>

                // /////   Menu navigation end    /////////////
            )
        })}

    </ul>
  )
}

export default MobileMenu