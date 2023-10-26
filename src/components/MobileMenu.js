import React, { useContext, useState } from 'react'
import AuthContext from '../store/auth-context';
import { Link, useHistory } from 'react-router-dom';

const MobileMenu = ({setMobileMenu}) => {

   const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn; 
  const [isFixed, setIsFixed] = useState(false);


  const handleLogout = () => {
    authCtx.logout();
    history.replace('/auth'); // Redirect to the login page after logout
  };

  return (
    <div className='mt-16 mb-10'>
         
      <nav onClick={()=>{  setMobileMenu(false)}  }>
        <ul style={ {  
            fontFamily: 'Courier New',
            letterSpacing: '2px' , } } className='m-0 p-0 md:text-lg  text-gray-700 flex flex-col items-baseline  font-medium space-y-5'
        >
          
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
              <button style={ {  
                fontFamily: 'Courier New',
                letterSpacing: '2px' , } } className={` ${!isFixed ? 'hover:text-gray-900': 'hover:text-gray-500 text-gray-300'}  font-bold   `} 
              onClick={handleLogout}>Logout</button>
            </li>
          )}  
        </ul> 
      </nav>

    </div>
  )
}

export default MobileMenu