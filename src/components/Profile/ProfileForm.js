import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom'; 
import AuthContext from '../../store/auth-context'; 
import './profileform.css';

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!

      history.replace('/');
    });
  };

  return (
    <div className=' '>
 
      <div class="my-8 ">
  
        <div  style={{background :  'rgba(255, 255, 255, 0.25)' } } class=" rounded  shadow-lg shadow-white">

          <div class="text-center p-6  border-b">
            <img
              class="h-24 w-24 rounded-full mx-auto"
              src={localStorage.getItem("profilePic")}
              alt="Randy Robertson"
            />
            <p class="pt-2 text-lg font-semibold">{localStorage.getItem("name")}</p>
            <p class="text-sm text-gray-600">{localStorage.getItem("email")}</p>
            <div class="mt-5">
              <a
                href="#"
                class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
              >
                Button
              </a>
            </div>
          </div>

 
          <form className=" text-md   rounded-md m-3 p-3" onSubmit={submitHandler}>
            <div className=" mb-2">
              <label className="font-thin" htmlFor='new-password '>New Password</label>
              <input className=" bg-gray-100 rounded-md border-2 border-gray-400" type='password' id='new-password' minLength="7" ref={newPasswordInputRef}  />
            </div>
            <div className="mt-1">
              <button className="bg-cyan-900 text-white p-2 rounded-md mt-4 hover:bg-gray-500 cursor-pointer font-normal">Change Password</button>
            </div>
          </form>

          
        </div>

        
      </div>


    
     
    </div>
  );
};

export default ProfileForm;
