import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import Footer from './Footer';
// import BG from "../../assets/bgimage.jpg";
import BGV from "../../assets/BGVideo3.mp4" 
  
const Layout = (props) => {
  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', 
    objectFit: 'cover',
    opacity: 0.85,
    zIndex: -1
  };
  return (
    <Fragment  >
      <MainNavigation /> 


      <main  style={{backgroundColor:'rgba(0, 0, 0, 0.6)'}}>
      <style>
      {`
        ::selection {
          color: red;
          background-color: cyan;
        }
      `}
    </style>
        <video  autoPlay muted loop style={videoStyle}>
          <source src={BGV} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
