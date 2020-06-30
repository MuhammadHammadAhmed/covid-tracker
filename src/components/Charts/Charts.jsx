import React ,{useEffect,useState} from 'react';
import {fetchDailyData}from '../../api/';
//import {Line, Bar} from 'react-chartjs-2';

const Charts=() =>{
    const [dailyData,setDailyData]= useState({});

    useEffect(()=>{

        loadDailyData();

    })
    const loadDailyData =async()=>{
    //    const data=await fetchDailyData();

     //   setDailyData(data);
        console.log("DAILY DATA",dailyData);
    }
//    const lineChart= (
//       dailyData[0]?(
//         <Line
//         data={{
//     labels:'' ,
//     datasets: [{},{}],
// }}

    


// />
      
   
// ): null);
    return(
        <h1>Charts</h1>
    
    )
}
export default Charts;