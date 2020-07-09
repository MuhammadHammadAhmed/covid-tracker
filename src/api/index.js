import axios from 'axios';
//import  list  from  './country-totals.json';

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
   // console.log("Countriesin API",countries);
    const countryList = countries.map(country =>( country.name));
    console.log("CountryList post API",countryList);

    
return countryList;
}catch(error){
   
    console.log(error);
   // return error;
}
}
export const fetchcountryTotals= async(setCountryTotals)=>{
    const newURl= 'https://api.thevirustracker.com/free-api?countryTotals=ALL';
    try{
        const {data} = await axios.get(newURl);
    const countryitems=data.countryitems[0];
        console.log("newAPI",typeof(data.countryitems),countryitems);

        
        var list=[];
        var x;
        for (x in countryitems) {
            console.log("countryItems",countryitems[x].title);
            var country={
                name:countryitems[x].title,
                code:countryitems[x].code
            }
            list.push(country);
          }
     console.log("CList",list);
     setCountryTotals(list);
    return list;
    }catch(error){
       
        console.log(error);
       // return error;
    }
    }
    export const fetchGlobalStats= async()=>{
        const newURl= 'https://api.thevirustracker.https://api.thevirustracker.com/free-api?global=stats/free-api?countryTotals=ALL';
        try{
            const data = await axios.get(newURl);
        const countryitems=data.countryitems[0];
            console.log("newAPI",typeof(data.countryitems),countryitems);
    
            
            var list=[];
            var x;
            for (x in countryitems) {
                console.log("countryItems",countryitems[x].title);
                var country={
                    name:countryitems[x].title,
                    code:countryitems[x].code
                }
                list.push(country);
              }
         console.log("CList",list);
        return list;
        }catch(error){
           
            console.log(error);
        }
        }