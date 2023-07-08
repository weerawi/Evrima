import React from 'react';

const Footer = () => {
  return (
    <footer  className="bg-cyan-900 py-4">
      <div className=" relative">
        <svg 
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-cyan-900 "
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>

        <div className="bg-cyan-900">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
              <h3 className="text-3xl mb-3"> Let's keep in touch!</h3>
              <p>Unleash the Power of Discovery</p>
              {/* <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                    alt="Google Play Store"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-cyan-200">Download on</p>
                    <p className="text-sm md:text-base">Google Play Store</p>
                  </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                    alt="Apple Store"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-cyan-200">Download on</p>
                    <p className="text-sm md:text-base">Apple Store</p>
                  </div>
                </div>
              </div>*/}
            </div> 
            <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-200">
              <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Evrima Team 2023</p>
              <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
