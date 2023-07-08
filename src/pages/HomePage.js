import StartingPageContent from '../components/StartingPage/StartingPageContent';

const HomePage = (props) => {
  return <StartingPageContent 
  value={props.value} 
  change={props.onChange} 
  load={props.load} 
  result={props.result}
  search={props.search}
   />;
};

export default HomePage;
