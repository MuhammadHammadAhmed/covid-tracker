import React ,{useEffect,useState} from 'react';
import {fetchDailyData}from '../../api/';
import {Line} from 'react-chartjs-2';//, Bar
import  styles from './Charts.module.css';

const Charts=() =>{
    const [dailyData,setDailyData]= useState([]);

    useEffect(()=>{

        loadDailyData();
    })
    const loadDailyData =async()=>{
       const data=await fetchDailyData();

       setDailyData(data);
    }
   const lineChart= (
      dailyData.length?(
        <Line
        data={{
    labels:dailyData.map(({date})=> date),
    datasets: [{
        data:dailyData.map(({confirmed})=> confirmed),
        labels:'Infected',
        bordercolor :'#3333ff',
        fill: true
    },{
        data:dailyData.map(({deaths})=> deaths),
        labels:'Infected',
        bordercolor :'#red',
        backgroundColor:'rgba(255,0,0,0.5)',
        fill: true
    }],
}}

    


/>
      
   
): null);
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    
    )
}
export default Charts;