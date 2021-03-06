import React, { useState,useEffect } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchcountries} from '../../api/';
import  styles from './CountryPicker.module.css';

const CountryPicker=({handleCountryChange}) =>{
const [countriesList,setCountriesList]= useState([]);
useEffect(()=>{
    const loadCountries=async()=>{
        const countrydata=await fetchcountries();
        setCountriesList(countrydata);
    }
    loadCountries();
//console.log("Countries List",countriesList);
},[]);
console.log("CountriesList in load Country Picker",countriesList);
    return(
        <FormControl className={styles.formControl}>
             <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}> 
           
                <option value="global">Global</option>
                
                {countriesList.map((country, i) => <option key={i} value={country}>{country}</option>)}

                
                </NativeSelect></FormControl>
    
    )
}
export default CountryPicker;