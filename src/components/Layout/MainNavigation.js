import { Link } from 'react-router-dom'; 
import React, { useEffect, useState } from 'react';
import {Image} from "../../constants/Images"; 
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import { Drawer, makeStyles } from '@material-ui/core';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

// use for drawer comming left slide
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
}));

const MainNavigation = () => {

 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const classes = useStyles();

   

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

  const colorStyle = {
    color:!isScrolled || !isFixed ? ' ' : '  rgba(255, 255, 255, 0.55) ',// Set the color based on isScrolled and isFixed states
  };
  

  return (
    <header  

    style={{
      backdropFilter: 'blur(6px)',
      background: !isScrolled || !isFixed ? 'rgba(139, 172, 170, 0.3)' : ' ',
      borderBottom: !isScrolled || !isFixed ? '1px solid rgba(255, 255, 255, 0.65)' : '1px solid rgba(255, 255, 255, 0.25) ',
      transition: "background 0.5s ease-in-out",
      position: isFixed ? 'fixed' : 'relative',
      top: isFixed ? '0' : 'auto', 
      height: '4.5rem',
      zIndex:100
    }}
    className="   w-full flex  justify-between items-center">

    <Link to='/' className='flex flex-col px-10'>
      
      <div className=" ml-2 text-xl md:text-2xl hover:text-white font-semibold text-gray-300   m-0" 
      style = {{ 
        fontFamily: 'Courier',
         letterSpacing: '5px' ,
         transition: 'color 0.2s ease-in-out '}} >Evrima</div>
      {/* <img src={Image.Evrima} className='w-[40px] md:w-[50px]  ' alt='logo' /> */}
    </Link>

    <Menu color={colorStyle} scroll={isScrolled}/>

    <Drawer
      anchor="left" // Set the anchor to the left side
      open={mobileMenu}
      onClose={() => setMobileMenu(false)}
      classes={{
        paper: classes.drawerPaper, // Use the defined styles for the paper
      }}
       
      >
        <MobileMenu setMobileMenu={setMobileMenu}/>

    </Drawer>
  
     {/* Mobile icon start */}
     <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center
        items-center bg-cyan-100 hover:bg-black/[0.5] hover:text-cyan-100 cursor-pointer relative mr-5 "> 
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
                  className="text-[20px] "
                  onClick={() => setMobileMenu(true)}
              />
          )}
      </div>
      {/* Mobile icon end */}

             
    </header>
  );
};

export default MainNavigation;
