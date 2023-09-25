// import Typed from 'react-typed';
// import Card from './Card/Card';
// import { useEffect, useRef, useState } from 'react'; 
// import AOS from "aos";
// import "aos/dist/aos.css"; 
// import { useDisclosure } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// AOS.init();

 

//  const StartingPageContent = (props) => {
//   const [searchCard, setSearchCard] = useState(false);
//   const [selectedName, setSelectedName] = useState(''); 
//   const [isTyping, setIsTyping] = useState(false);
//   const { isOpen, onOpen, onClose } = useDisclosure()
  

//   const history = useHistory(); 

//   // reference create to scroll to the result cards
//   const resultCardsRef = useRef(null);



//   useEffect(() => {
//     if (isTyping) {
//       onOpen(); // Open the modal when the user starts typing
//     } else {
//       onClose(); // Close the modal when the user stops typing
//     }
//   }, [isTyping, onOpen, onClose]);

//   const modalRef = useRef();
  
//   const handleOnClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose(); // Close the modal when clicking outside
//     }
//   };

//   const handleSearch = () => { 
//     props.search(props.value);
//     setSearchCard(true); 
//     setSelectedName('');  


//     // Scroll to the result cards
//     resultCardsRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//   });

//   };

//   const handleNameClick = (name) => {
//     setSelectedName(name);
//     props.change({ target: { value: name } }); 
//     onClose();  
//   };

  


//   return (
//     <div className={`overflow-hidden h-auto pb-20 flex-row pt-44 items-center   justify-center`}>



//       <div   className="mx-auto w-10/12 lg:w-90 mb-56  p-10 text-center   justify-center items-center my-5 mx-5  " >
//         <h2 className="  text-4xl md:text-6xl text-white ">Welcome to Evrima!</h2>
//         <div style={{color:'white'}}  >
//           <Typed 
//             strings={[
//               '  Search for products',
//               '  Search for categories',
//               '  Search for brands',
//             ]}
//             typeSpeed={40}
//             backSpeed={50}
//             attr="placeholder"
//             loop
//           >
//             <input
//               className="ml-2 bg-transparent text-white text-xl md:text-2xl"
//               type="text"  
//                disabled 
//             />
//           </Typed>
//           </div>
        
      

      

//       <div  
//       // style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
//          className="mx-auto w-10/12 lg:w-90   rounded-xl shadow-md px-10 text-center flex-row justify-center items-center   mx-5 bg-trasparent">
         
//          <div className='items-center'>

//             <input
//               className="ml-2 w-10/12 lg:w-90 mr-3 bg-gray-400 rounded-xl my-3 px-4 text-white text-xl md:text-2xl"
//               type="text"
//               value={props.value}
//               onChange={(e) => {
//                 props.change(e);
//                 setIsTyping(e.target.value.trim().length > 0); // Set isTyping state based on input value
//               }}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSearch(); 
//                 }
//               }}
//             /> 
//           <button
//             onClick={handleSearch}
//             className="bg-gray-100   text-cyan-700 font-bold rounded-xl cursor-pointer my-3 hover:bg-cyan-900 p-2 hover:text-cyan-100"
//           >
//             Search
//           </button>
//          </div>

//         {/* Filtered Product Cards search Bar */}
        

//         <div  ref={modalRef} className='relative overflow-x-hidden left-1/2 transform -translate-x-1/2 z-10 '>
          
//           {/* <SearchingBoxModal props={props} selectedName={selectedName} handleNameClick={handleNameClick} isOpen={isOpen} onClose={onClose} onClickOutside={handleOnClickOutside}/> */}
        
        
//           <div data-aos="fade-down" data-aos-duration="400" className="bg-gray-300 rounded-xl flex flex-col border border-gray-300">
//               {props.result
//                 .filter((product) => {
//                   const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
//                   const fullName = product.name.toLowerCase();
//                   return fullName.includes(searchTerm);
//                 })
//                 .map((product) => (
//                   <div
//                     className={`cursor-pointer hover:text-red-800 text-left my-2 mx-4 ${
//                       product.name === selectedName ? 'text-red-800' : ''
//                     }`}
//                     key={product.id}
//                     onClick={() => handleNameClick(product.name)}
//                   >
//                     {product.name}
//                   </div>
//                 ))}
//             </div>
         
//         </div>

        
//       </div>
//       </div>

//       {/* Filtered Product Cards */}
//       <div className='px-5' ref={resultCardsRef}  >
//           {searchCard && !props.load && (
//             <div  className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
//               {props.result
//                 .filter((product) => {
//                   const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
//                   const fullName = product.name.toLowerCase();
//                   return fullName.includes(searchTerm);
//                 })
//                 .map((product) => (
//                   <div  data-aos="zoom-in " data-aos-duration="800">
//                      <Card key={product.id} name={product.name} />
//                   </div>
                  
//                 ))}
//             </div>
//           )}
//           {searchCard && props.load && <p className='text-xl justify-center align-center text-white'>Loading search results..</p>}
//         </div>
//     </div>
//   );
// };

// export default StartingPageContent;


 


import Typed from 'react-typed';
import Card from './Card/Card';
import { useEffect, useRef, useState } from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
AOS.init();

 

 const StartingPageContent = (props) => {
  const [searchCard, setSearchCard] = useState(false);
  const [selectedName, setSelectedName] = useState(''); 
  const [isTyping, setIsTyping] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  const history = useHistory(); 

  // reference create to scroll to the result cards
  const resultCardsRef = useRef(null);



  useEffect(() => {
    if (isTyping) {
      onOpen(); // Open the modal when the user starts typing
    } else {
      onClose(); // Close the modal when the user stops typing
    }
  }, [isTyping, onOpen, onClose]);

  const modalRef = useRef();
  
  const handleOnClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Close the modal when clicking outside
    }
  };

  const handleSearch = () => { 
    props.search(props.value);
    setSearchCard(true); 
    setSelectedName('');  


    // Scroll to the result cards
    resultCardsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  });

  };

  const handleNameClick = (name) => {
    setSelectedName(name);
    props.change({ target: { value: name } }); 
    onClose();  
  };

  


  return (
    <div className={`overflow-hidden h-auto pb-20 flex-row pt-44 items-center   justify-center`}>



      <div   className="mx-auto w-10/12 lg:w-90 mb-56  p-10 text-center   justify-center items-center my-5 mx-5  " >
        <h2 className="  text-4xl md:text-6xl text-white ">Welcome to Evrima!</h2>
        <div style={{color:'white'}}  >
          <Typed 
            strings={[
              '  Search for products',
              '  Search for categories',
              '  Search for brands',
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input
              className="ml-2 bg-transparent text-white text-xl md:text-2xl"
              type="text"  
               disabled 
            />
          </Typed>
          </div>
        
      

      

      <div  
      // style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
         className="mx-auto w-10/12 lg:w-90   rounded-xl shadow-md px-10 text-center flex-row justify-center items-center   mx-5 bg-trasparent">
         
         <div className='items-center'>

            <input
              className="ml-2 w-10/12 lg:w-90 mr-3 bg-gray-400 rounded-xl my-3 px-4 text-white text-xl md:text-2xl"
              type="text"
              value={props.value}
              onChange={(e) => {
                props.change(e);
                setIsTyping(e.target.value.trim().length > 0); // Set isTyping state based on input value
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(); 
                }
              }}
            /> 
          <button
            onClick={handleSearch}
            className="bg-gray-100   text-cyan-700 font-bold rounded-xl cursor-pointer my-3 hover:bg-cyan-900 p-2 hover:text-cyan-100"
          >
            Search
          </button>
         </div>

        {/* Filtered Product Cards search Bar */}
        

        <div  ref={modalRef} className='relative overflow-x-hidden left-1/2 transform -translate-x-1/2 z-10 '>
          
          {/* <SearchingBoxModal props={props} selectedName={selectedName} handleNameClick={handleNameClick} isOpen={isOpen} onClose={onClose} onClickOutside={handleOnClickOutside}/> */}
        
        
          <div data-aos="fade-down" data-aos-duration="400" className="bg-gray-300 rounded-xl flex flex-col border border-gray-300">
              {props.result
                .filter((product) => {
                  const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
                  const fullName = product.title.toLowerCase();
                  return fullName.includes(searchTerm);
                })
                .map((product) => (
                  <div
                    className={`cursor-pointer hover:text-red-800 text-left my-2 mx-4 ${
                      product.title === selectedName ? 'text-red-800' : ''
                    }`}
                    key={product.id}
                    onClick={() => handleNameClick(product.title)}
                  >
                    {product.title}
                  </div>
                ))}
            </div>
         
        </div>

        
      </div>
      </div>

      {/* Filtered Product Cards */}
      <div className='px-5' ref={resultCardsRef}  >
          {searchCard && !props.load && (
            <div  className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
              {props.result
                .filter((product) => {
                  const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
                  const fullName = product.title.toLowerCase();
                  return fullName.includes(searchTerm);
                })
                .map((product) => (
                  <div  data-aos="zoom-in " data-aos-duration="800">
                     <Card key={product.id} product={product}  />
                  </div>
                  
                ))}
            </div>
          )}
          {searchCard && props.load && <p className='text-xl justify-center align-center text-white'>Loading search results..</p>}
        </div>
    </div>
  );
};

export default StartingPageContent;