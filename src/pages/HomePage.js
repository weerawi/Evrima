import StartingPageContent from '../components/StartingPageContent';

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
