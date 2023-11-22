import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout'; 
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios'; 
import AuthContext from './store/auth-context';
import About from './components/About/About';  
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import { ProductPage } from './pages/ProductPage';
import { staticData } from './appDataSet';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const[error,setError] = useState(null);
  
  
  //  /////////////         use for reterieve link data result /////////////////////////


  const url = "http://localhost:5000/app";


  const fetchSearchResults = useCallback(async () => {
    if (searchInput.length === 0) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${url}?search=${searchInput}`
      );
      
      console.log(response.data)
      setSearchResults(response.data);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      }
      
    } catch (error) {
      
      console.error('Error fetching search results:', error);
      setError(error.message);
    }

    setIsLoading(false);
  } );


  // /////////////////////////////////////////////////////////////////////////////////////


  // const fetchSearchResults = useCallback(async () => {
  //   if (searchInput.length === 0) {
  //     setSearchResults([]);
  //     return;
  //   }
  
  //   setIsLoading(true);
  
  //   try {
  //     // Replace the axios call with the staticData import
  //     setSearchResults(staticData);
  //   } catch (error) {
  //     console.error('Error fetching search results:', error);
  //   }
  
  //   setIsLoading(false);
  // }, [searchInput]);



  useEffect(() => {
      fetchSearchResults();
  }, [searchInput]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setSearchInput(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
    
  const authCtx = useContext(AuthContext);

  return (

     <>
      {/* <LoadingScreen/> */}
      <Layout >
        
        <Switch>
          <Route path='/' exact>
            <HomePage 
              value={searchInput}
              onChange={handleSearchInputChange}  
              load={isLoading} 
              result={searchResults.slice(0, 200)}   // THIS INITALIZE THE MAXIMUM ITEMS VISBLE WHEN SEARCHING
              search={onSearch} />
            
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path='/auth'>
              <AuthPage />
            </Route>
          )}
          <Route path='/about'>
            {authCtx.isLoggedIn && <About />} 
          </Route>
          <Route path='/profile'>
            {authCtx.isLoggedIn && <ProfilePage />}
            {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>
          <Route path='/contact'>
            {authCtx.isLoggedIn && <ContactPage/>} 
          </Route>
          <Route path='/product/:productId'>
            <ProductPage />
          </Route>
          
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch> 
      </Layout>  
     </>

    
  );
}

export default App;
