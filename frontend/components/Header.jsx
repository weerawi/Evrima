import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import MobileMenu from './MobileMenu';

import Drawer from '@material-ui/core/Drawer';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsFixed(true);
      } else {
        setIsScrolled(false);
        setIsFixed(false);
      }
    
       
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
    style={{
        backdropFilter: 'blur(6px)',
        background: !isScrolled || !isFixed ? 'rgb(0,0,0 )' : 'rgba(0,0,0, 0.3)',
        borderBottom: !isScrolled || !isFixed ? '1px solid rgba(255, 255, 255, 0.65)' : '1px solid rgba(255, 255, 255, 0.25) ',
        color:!isScrolled || !isFixed ? ' ' : '  rgba(255, 255, 255, 0.55) ',
        position: isFixed ? 'fixed' : 'relative',
        top: isFixed ? '0' : 'auto', 
        zIndex:100
      }}
     className={`w-full h-[50px] md:h-[80px] px-10 bg-cyan-900  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 `} 
    >
        

        <Link href='/'>
            <img src='evrimalogo.png' className='w-[40px] md:w-[60px]'/>
        </Link>


        <Menu/>

        <Drawer
            anchor="left" // Set the anchor to the left side
            open={mobileMenu}
            onClose={() => setMobileMenu(false)}
            // classes={{
            //   paper: classes.drawerPaper, // Use the defined styles for the paper
            // }}
          >
 
            <MobileMenu setMobileMenu={setMobileMenu}/>

        </Drawer>

        {/* Mobile icon start */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center
                items-center bg-red-400 hover:bg-red-900  cursor-pointer relative -mr-2 "> 
            {/*  ///////////////////////////////////////////////
            because of the using medium size to change menu visible , 
            toggle icon also hidden after medium  [  md:hidden ]
            ///////////////////////////////////////////////////
             */}
              {mobileMenu ? (
                  <VscChromeClose
                      className="text-[16px]"
                      onClick={() => setMobileMenu(false)}
                  />
              ) : (
                  <BiMenuAltRight
                      className="text-[20px]"
                      onClick={() => setMobileMenu(true)}
                  />
              )}
          </div>
          {/* Mobile icon end */}
        
    </div>
  )
}

export default Header