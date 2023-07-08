
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

    <div className="flex  items-center justify-center h-auto pb-24 pt-12">
      <div style={{background :  'rgba(139, 172, 170, 0.5)' } } className={" mx-auto  w-11/12 max-w-[25rem] rounded-md   shadow-md p-10 text-center"}>
        <h1 class="text-center text-gray-800 font-bold text-2xl">{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form  onSubmit={submitHandler}>
          


          <div class="my-5 border-b text-center">
            <div style={{background :  'transparent' } }
              class="leading-none px-2 inline-block text-lg text-gray-200 tracking-wide font-medium transform translate-y-1/2"
            >
              With
            </div>
          </div>




          <div class="mt-6 flex flex-row  ">
              <button class="group h-10 bg-white mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div class="  flex items-center   justify-center">
                      <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="  w-5" alt="google logo"/>
                       
                  </div>
              </button>
              <button class="group h-10 bg-white mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div class="  flex items-center   justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="  w-5 text-gray-700" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                       
                  </div>
              </button>
              <button class="group h-10 bg-white mx-auto px-6 border-2 border-gray-300 rounded-full transition duration-300 
                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div class="  flex items-center   justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class="  w-5" alt="Facebook logo"/>
                       
                  </div>
              </button>
          </div>



          <div class="my-5 border-b text-center">
            <div style={{background :  'transparent' } }
              class="leading-none px-2 inline-block text-lg text-gray-200 tracking-wide font-medium transform translate-y-1/2"
            >
              Or 
            </div>
          </div>


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
