import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import  styles from './Cards.module.css';
import CountUp from 'react-countup'
const Cards=({data:{confirmed,deaths,lastUpdate,recovered}}) =>{
    console.log("Confirmed",confirmed);
    if(!confirmed){
        return ('Loading');
    }
    return(
        <div className={styles.Container}>
<Grid container spacing={3} justify='center'>
    <Grid item component ={Card}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Infected</Typography>
<Typography variant ="h5">  <CountUp
start={0} end={confirmed.value} duration = {2.75}
/>
</Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of active Cases of COVID-19</Typography>
    </CardContent>
</Grid>

<Grid item component ={Card}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Recoveries</Typography>
    <Typography variant ="h5">
    <CountUp
start={0} end={recovered.value} duration = {2.75}
/>
    </Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of recovered patientsfrom COVID-19</Typography>
    </CardContent>
</Grid>

<Grid item component ={Card}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Deaths</Typography>
    <Typography variant ="h5">
    <CountUp
start={0} end={deaths.value} duration = {2.75}
/>
    </Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of deats due to COVID-19</Typography>
    </CardContent>
</Grid>
</Grid>
        </div>
        
    
    )
}
export default Cards;
