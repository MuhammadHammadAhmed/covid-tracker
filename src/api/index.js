import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async(country)=>{
try {
    let changedUrl = url;
if(country){
    changedUrl=`${url}/countries/${country}`;
    console.log("ChangedURL",changedUrl);
}
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changedUrl);
    const modifiedData={confirmed,recovered, deaths,lastUpdate};// because  of same key and values 

    return modifiedData;
} catch (error) {
    return error;
    
}
}
export const fetchDailyData= async()=>{
try{
    const  {data}  = await axios.get(`${url}/daily`);

    const modifiedData= data.map(dailyData => ({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate
    }));
    return modifiedData;
}catch(error){
        return error;
    }
}  
export const fetchcountries= async()=>{
try{
    const {data:{countries}}= await axios.get(`${url}/countries`);
    console.log("Countriesin API",countries);
    const countryList = countries.map(country =>( country.name));
    console.log("CountryListpost API",countryList);

    
return countryList;
}catch(error){
   
    console.log(error);
   // return error;
}
}