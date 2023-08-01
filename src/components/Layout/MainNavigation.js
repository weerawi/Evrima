import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react'; 
import AuthContext from '../../store/auth-context';
import React, { useEffect, useState } from 'react';
import {Image} from "../../constants/Images";

const MainNavigation = () => {

  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);


  const handleLogout = () => {
    authCtx.logout();
    history.replace('/auth'); // Redirect to the login page after logout
  };


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
    <header  

    style={{
      backdropFilter: 'blur(6px)',
      background: !isScrolled || !isFixed ? 'rgba(139, 172, 170, 0.3)' : 'transparent',
      borderBottom: !isScrolled || !isFixed ? '1px solid rgba(255, 255, 255, 0.65)' : '1px solid rgba(255, 255, 255, 0.25) ',
      color:!isScrolled || !isFixed ? ' ' : '  rgba(255, 255, 255, 0.55) ',
      position: isFixed ? 'fixed' : 'relative',
      top: isFixed ? '0' : 'auto', 
      zIndex:100
    }}
    className=" w-full h-24  flex justify-between items-center">
      <Link to='/' className='flex px-10'>
        {/* <div className=" ml-2 text-3xl text-white m-0">Evrima</div> */}
        <img src={Image.Evrima} className='w-[40px] md:w-[50px]  ' alt='logo' />
        
      </Link>
      <nav>
        <ul className='m-0 p-0 md:text-lg  text-gray-700 flex items-baseline  font-medium'>
          
          {!isLoggedIn  && (
            <li className={`mx-4 ${!isFixed ? 'hover:text-gray-900': 'hover:text-gray-500 text-gray-300'} font-bold`}>
              <Link to='/auth'>Login</Link>
            </li> 
          )}
          {isLoggedIn && (
            <li className={`mx-4 ${!isFixed ? 'hover:text-gray-900': 'hover:text-gray-500 text-gray-300'} font-bold`}>
              <Link to='/about'>About</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={`mx-4 ${!isFixed ? 'hover:text-gray-900': 'hover:text-gray-500 text-gray-300'} font-bold`}>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          
          {isLoggedIn && (
            <li className={`mx-4 ${!isFixed ? 'hover:text-gray-900': 'hover:text-gray-500 text-gray-300'} font-bold`}>
              <Link to='/contact'>Contact</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='mx-4'>
              <button className={`bg-transparent ${!isFixed ? 'hover:text-gray-900': 'hover:text-gray-500 text-gray-300'}  font-bold rounded-md cursor-pointer   p-2  `} onClick={handleLogout}>Logout</button>
            </li>
          )}  
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
