import React,{useEffect,useState} from 'react';
/* can do concize*/
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

/* can do concize*/
 import {fetchData} from  './api/';
import styles from './App.module.css';


//const [country,setCountry]= useState('');
// const handleCountryChange= async(_country)=>{

  
//   setCountry(_country);
//   console.log(country);
// }
 
function App() {

  // const url='https://covid19.mathdro.id/api';
  const [covidData, setcovidData] = useState({});
  const [country,setCountry]= useState('');
  useEffect(()=>{
   
    loadData();

  },);

  const handleCountryChange= async(_country)=>{

  
    setCountry(_country);
    console.log("Selected Country",_country);
  }
  const loadData= async()=>{
    // const response = await fetch(url);
    // const data = await response.json;
    
    const data = await fetchData(country);
    setcovidData(data)
    

  }
  return(
    <div className={styles.container}>
      <Cards data ={covidData}/>
      <br></br>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={covidData}/>
    </div>
  );
}

export default App;
