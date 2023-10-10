import { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import AuthContext from '../../store/auth-context'; 
import './profileform.css';
import { DateRange } from '@material-ui/icons';

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);


  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const [birthday, setBirthday] = useState(localStorage.getItem("birthday") || "");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;


    // Update gender and birthday in localStorage
  localStorage.setItem("gender", gender);
  localStorage.setItem("birthday", birthday);
  



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

          <div class="text-center p-6 ">
            <img
              class="h-24 w-24 rounded-full mx-auto"
              src={localStorage.getItem("profilePic")}
              alt="profile image"
            />
            <p class="pt-2 text-lg font-semibold">{localStorage.getItem("name")}</p>
            <p class="text-sm text-gray-600">{localStorage.getItem("email")}</p>
            <p class="text-sm  ">{localStorage.getItem("gender")}</p>
            <p class="text-sm  ">{localStorage.getItem("birthday")}</p>
            <div class="mt-5"> 

              <form className=" text-md  border-t   m-3 p-3" onSubmit={submitHandler}>


              {/* <div className="mb-2">
                <label className="font-thin text-sm" htmlFor="gender">Gender</label>
                <input
                  className="h-8 bg-gray-100 rounded-md border-2 border-gray-400"
                  type="radio"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div> */}

              <div className="my-2">
              <label className="font-thin text-sm" htmlFor="gender">Gender</label>
                <div
                  style={{ background: 'rgba(255, 255, 255, 0.25)' }}
                  className="rounded shadow-sm shadow-white"
                >
                  <div className="text-center p-1 flex justify-between"> 
                    <div className="flex items-center mt-1">
                      <input
                        type="radio"
                        id="male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                      />
                      <label htmlFor="male" className="ml-2">
                        Male
                      </label>
                    </div>
                    <div className="flex items-center mt-1">
                      <input
                        type="radio"
                        id="female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleGenderChange}
                      />
                      <label htmlFor="female" className="ml-2">
                        Female
                      </label>
                    </div>
                    <div className="flex items-center mt-1">
                      <input
                        type="radio"
                        id="other"
                        value="other"
                        checked={gender === 'other'}
                        onChange={handleGenderChange}
                      />
                      <label htmlFor="other" className="ml-2">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-2">
                <label className="font-thin text-sm" htmlFor="birthday"><DateRange/>Birthday</label>
                <input
                  className="h-8 bg-gray-100 rounded-md border-2 border-gray-400"
                  type="date"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
                
              </div>


                <div className=" mb-2">
                  <label className="font-thin text-sm" htmlFor='new-password '>New Password</label>
                  <input className="h-8 bg-gray-100 rounded-md border-2 border-gray-400" type='password' id='new-password' minLength="7" ref={newPasswordInputRef}  />
                </div>
                <div className="mt-1">
                  <button className="border hover:text-gray-200 rounded-full py-2 px-4 text-xs font-semibold text-gray-700">Change Password</button>
                </div>
              </form>
 
            </div>
          </div>

 
          

          
        </div>

        
      </div>


    
     
    </div>
  );
};

export default ProfileForm;
