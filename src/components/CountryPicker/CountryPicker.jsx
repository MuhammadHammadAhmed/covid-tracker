import React, { useState,useEffect } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchcountries} from '../../api/';
import  styles from './CountryPicker.module.css';

const CountryPicker=() =>{
const [countriesList,setCountriesList]= useState([]);
useEffect(()=>{
    const loadCountries=async()=>{
        const countrydata=await fetchcountries();
        setCountriesList(countrydata);
    }
    loadCountries();
//console.log("Countries List",countriesList);
},[]);
console.log("CountriesList1",countriesList);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {/* {countriesList.map((country,i)=><option key={i} value={country}>{country}</option>)} */}
                {countriesList.map((country, i) => <option key={i} value={country}>{country}</option>)}

                
                </NativeSelect></FormControl>
    
    )
}
export default CountryPicker;