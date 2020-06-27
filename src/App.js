import React,{useEffect,useState} from 'react';
/* can do concize*/
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
/* can do concize*/
 import {fetchData} from  './api/';
import styles from './App.module.css';
// import { useState, useEffect } from 'react';

 
function App() {

  // const url='https://covid19.mathdro.id/api';
  const [covidData, setcovidData] = useState({});
  useEffect(()=>{
    console.log("Before Load Data");
    loadData();

  },[]);

  const loadData= async()=>{
    // const response = await fetch(url);
    // const data = await response.json;
    
    const data = await fetchData();
    setcovidData(data)
    console.log("DATA",data);
    

  }
  return(
    <div className={styles.ontainer}>
      <Cards data ={covidData}/>
      <CountryPicker/>
      <Charts/>
    </div>
  );
}

export default App;
