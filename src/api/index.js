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
export const fetchDailyData=async()=>{
try{
    const  data  = await axios.get('${url}/daily');
   
}catch(error){
        return error;
    }
}  