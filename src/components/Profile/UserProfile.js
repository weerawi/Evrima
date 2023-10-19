import { useEffect } from 'react';
import ProfileForm from './ProfileForm';

const UserProfile = () => {

  //to direct to the bottom of the page initially
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
}, []); // Empty dependency array means this effect runs once, similar to componentDidMount


  return (
    <div className="h-full  flex items-center justify-center">
      <div  style={{background :  'rgba(130, 172, 170, 0.7)' } } className="flex  my-12 p-8  rounded-md border-2 border-gray-400 w-1/2 min-w-[20rem] mx-auto ">
        <div class="mx-auto mb-8 w-2/3 min-w-[12rem] ">
          <h1 className='text-5xl flex justify-center'> User Profile</h1>
          <ProfileForm />
        </div>
        
      </div>
    </div>
    
  );
};

export default UserProfile;
