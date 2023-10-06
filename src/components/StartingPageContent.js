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
import Autosuggest from 'react-autosuggest';

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

  

  // suggesion function
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : props.result.filter(product =>
      product.title.toLowerCase().includes(inputValue)
    );
  };
  

  // Define a function to render the suggestions container
  const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <div {...containerProps} className="custom-suggestions-container max-h-96 overflow-y-auto">
        {children}
      </div>
    );
  };



  return (
    <div className={`overflow-hidden h-auto pb-20 flex-row pt-44 items-center justify-center`}>

      <div   className="mx-auto md:w-10/12 w-full mb-56  p-10 text-center   justify-center items-center my-5  " >
        <h2 className="  text-4xl md:text-6xl text-white ">Welcome to Evrima!</h2>
        <div style={{color:'white'}}  >
          <Typed 
            strings={[
              '  Search for products',
              '  Search for categories', 
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
      style={{backgroundColor:'rgba(0,0,0, 0.5)'}}
         className="  w-full md:w-90   rounded-xl shadow-md md:px-10 px-2 text-center flex-row justify-center items-center p-5 bg-trasparent ">
         
         {/* search bar input */}
         <div className='items-center'> 
           
            <button
              onClick={handleSearch}
              className="bg-gray-100 md:text-lg text-sm  text-cyan-700 font-bold rounded-xl cursor-pointer my-3 hover:bg-cyan-900 p-2 hover:text-cyan-100"
            >
              Search
            </button>

            <Autosuggest
              suggestions={getSuggestions(props.value)}
              onSuggestionsFetchRequested={({ value }) => {
                props.change({ target: { value } });
              }}
              onSuggestionsClearRequested={() => {}}
              getSuggestionValue={suggestion => suggestion.title}
              renderSuggestion={suggestion => {
                const query = props.value.trim(); // Get the trimmed value of the input
                const suggestionTitle = suggestion.title.toLowerCase();
                const queryIndex = suggestionTitle.indexOf(query.toLowerCase());

                return (
                  <div
                    className={`cursor-pointer border-2 p-1 border-gray-400 bg-gray-300  hover:bg-gray-200 hover:text-red-700 rounded-lg text-left my-2 mx-4 ${
                      suggestion.title === selectedName ? 'text-red-800' : ''
                    }`}
                    key={suggestion.id}
                    onClick={() => handleNameClick(suggestion.title)}
                  >
                    {queryIndex !== -1 ? (
                      <>
                        {suggestion.title.substring(0, queryIndex)}
                        <span className="text-red-800 font-bold">
                          {suggestion.title.substring(queryIndex, queryIndex + query.length)}
                        </span>
                        {suggestion.title.substring(queryIndex + query.length)}
                      </>
                    ) : (
                      suggestion.title
                    )}
                  </div>
                );
              }}
              inputProps={{
                value: props.value,
                onChange: (e, { newValue }) => {
                  props.change({ target: { value: newValue } });
                },
                onBlur: (e, { highlightedSuggestion }) => {
                  if (highlightedSuggestion) {
                    // If there was a highlighted suggestion, do something with it
                    console.log(`Selected suggestion: ${highlightedSuggestion.title}`);
                    alert(`Selected suggestion: ${highlightedSuggestion.title}`);
                    // You can perform additional actions here
                  } else {
                    // If there was no highlighted suggestion, you can handle it here
                    console.log("No suggestion was highlighted");
                    alert("No suggestion was highlighted");
                    // You can perform additional actions here
                  }
                } ,
                onKeyDown: (e) => {
                  if (e.key === 'Enter') {
                    handleSearch(); 
                  }
                }, 
                className: "md:w-10/12 w-full  mr-3 bg-gray-400 rounded-xl my-3 px-4 text-white text-xl md:text-2xl focus:outline-none"
              }}
              shouldRenderSuggestions={(value) => value.trim().length > 1} 
              renderSuggestionsContainer={renderSuggestionsContainer}
            />


          </div>
  
        </div>
      </div>

     


      {/* Product Cards result */}
      <div className='px-5' ref={resultCardsRef}>
        {searchCard && !props.load && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {props.result
              .filter((product) => {
                const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
                const fullName = product.title.toLowerCase();
                return fullName.includes(searchTerm);
              })
              .sort((a, b) => b.rank - a.rank) // Sort by rank in descending order
              .slice(0, 10) // Get top ten results
              .map((product) => (
                <div key={product.id} data-aos="zoom-in" data-aos-duration="800">
                  <Card product={product} />
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





///////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////////////////////////////////

/////////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////////