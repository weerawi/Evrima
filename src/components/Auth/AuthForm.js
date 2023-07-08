
import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom'; 
import AuthContext from '../../store/auth-context'; 

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
            // alert(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (

    <div className="flex items-center justify-center h-[85vh]">
      <div style={{background :  'rgba(139, 172, 170, 0.5)' } } className={" mx-auto  w-11/12 max-w-[25rem] rounded-md   shadow-md p-10 text-center"}>
        <h1 class="text-center text-gray-800 font-bold text-2xl">{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form  onSubmit={submitHandler}>
          <div className=" mb-2">
            <label className='block text-gray-200 font-bold mb-2' htmlFor='email'>Your Email</label>
            <input className='w-full font-inherit bg-[#ccc] text-[#070A52] rounded-md border border-white p-1'type='email' id='email' required ref={emailInputRef}  />
          </div>
          <div className="  mb-2">
            <label className='block text-gray-200 font-bold mb-2' htmlFor='password'>Your Password</label>
            <input className='w-full font-inherit bg-[#ccc] text-[#070A52] rounded-md border border-white p-1' type='password'
            id='password'
            required
            ref={passwordInputRef}/>
          </div>
          <div className=" mt-6 flex flex-col items-center">
            {!isLoading && (
              <button className='cursor-pointer font-inherit text-white text-red-800  bg-[#ED2B2A] hover:bg-[#820000] border border-pink rounded-md py-2 px-10'>{isLogin ? 'Login' : 'Create Account'}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type='button'
              className="  mt-4 bg-transparent text-[#ED2B2A] border-none py-1 px-6 hover:text-[#820000]"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </div>
    </div>

      


  );
};

export default AuthForm;
