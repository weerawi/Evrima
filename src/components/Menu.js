import React, { useContext, useState } from 'react'
import AuthContext from '../store/auth-context';
import { Link, useHistory } from 'react-router-dom';

const Menu = () => {

   const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn; 
  const [isFixed, setIsFixed] = useState(false);


  const handleLogout = () => {
    authCtx.logout();
    history.replace('/auth'); // Redirect to the login page after logout
  };

  return (
    <div>
         
      <nav>
        <ul className='hidden md:flex  m-0 p-0 md:text-lg  text-gray-700 items-baseline  font-medium'>
          
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

    </div>
  )
}

export default Menu