import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async()=>{
try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
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
    console.log("Countries",countries);
    const cpountryList = countries.map(country =>( country.name));
    console.log("CountryList",cpountryList);

    
return cpountryList;
}catch(error){
   
    console.log(error);
   // return error;
}
}