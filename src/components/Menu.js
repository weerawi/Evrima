import React, { useContext  } from 'react'
import AuthContext from '../store/auth-context';
import { Link, useHistory } from 'react-router-dom';

const Menu = ({color,scroll}) => {

   const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;  


  const handleLogout = () => {
    authCtx.logout();
    history.replace('/auth'); // Redirect to the login page after logout
  };

  return (
    <div>
         
      <nav>
        <ul style={ {color , 
            fontFamily: 'Courier New',
            letterSpacing: '2px' , } } className={`${scroll ? 'text-gray-400' : 'text-gray-800'}  hidden md:flex m-0 p-0 md:text-lg items-baseline  font-medium`}
          
           
            >
        <style>{`
            li {
              transition: color 0.3s ease; /* Add your desired transition properties */
            }

            li:hover {
              color: #ffffff; /* Change to the desired hover color */
            }
          `}</style>
          {!isLoggedIn  && (
            <li className={`mx-4 hover:text-gray-200   font-bold`} >
              <Link to='/auth'>Login</Link>
            </li> 
          )}
          {isLoggedIn && (
            <li className={`mx-4 hover:text-gray-200   font-bold`}>
              <Link to='/about'>About</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className={`mx-4 hover:text-gray-200   font-bold`}>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          
          {isLoggedIn && (
            <li className={`mx-4 hover:text-gray-200   font-bold`}>
              <Link to='/contact'>Contact</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='mx-4 hover:text-gray-200' >
              <button style={ {  
                fontFamily: 'Courier New',
                letterSpacing: '2px' , } } className={`bg-transparent    font-bold rounded-md cursor-pointer   p-2  `} onClick={handleLogout}>Logout</button>
            </li>
          )}  
        </ul> 
      </nav>

    </div>
  )
}

export default Menu