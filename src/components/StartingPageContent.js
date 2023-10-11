 
import Typed from 'react-typed';
import Card from './Card/Card';
import { useEffect, useRef, useState } from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Autosuggest from 'react-autosuggest';
import { Search, SearchOutlined } from '@material-ui/icons';

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
      style={{backgroundColor:'rgba(139, 172, 170, 0.4)'}}
         className="mt-4  w-full md:w-90   rounded-xl  md:px-10 px-2 text-center flex-row justify-center items-center p-5 bg-trasparent shadow-md shadow-gray-300 ">
         
         {/* search bar input */}
         <div className='items-center'> 
           
            <button
              onClick={handleSearch}
              className="bg-cyan-700 md:text-lg text-sm  text-gray-50 font-bold rounded-xl cursor-pointer my-3 border-2 border-gray-200 hover:bg-gray-200 p-2 hover:text-cyan-900"
            >
              Search
              <SearchOutlined   />
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
                    className={`cursor-pointer border-2 p-1 border-gray-200  bg-cyan-700  text-gray-200 hover:text-gray-100 hover:bg-cyan-900 rounded-lg text-left my-2 mx-4 ${
                      suggestion.title === selectedName ? ' ' : ''
                    }`}
                    key={suggestion.id}
                    onClick={() => handleNameClick(suggestion.title)}
                    style={{ fontFamily: 'Verdana' }}
                  ><SearchOutlined   />
                    {queryIndex !== -1 ? (
                      <>
                        {suggestion.title.substring(0, queryIndex)}
                        <span className="text-white font-extrabold">
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
                onKeyDown: (e) => {
                  if (e.key === 'Enter') {
                    handleSearch(); 
                  }
                }, 
                className: "md:w-10/12 w-full  mr-3 bg-gray-200 rounded-xl my-3 px-4 text-gray-950 text-xl md:text-2xl focus:outline-none border-2 border-gray-100 ",
                placeholder: 'Search your product here',
                style: { fontFamily: 'Garamond' } 
              }}
              shouldRenderSuggestions={(value) => value.trim().length > 1} 
              renderSuggestionsContainer={renderSuggestionsContainer}
            />


          </div>
  
        </div>
      </div>

     


      {/* Product Cards result */}
      <div className='px-5 ' ref={resultCardsRef}>
      
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