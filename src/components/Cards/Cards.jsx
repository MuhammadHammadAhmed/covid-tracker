import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import  styles from './Cards.module.css';

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
<Typography variant ="h5">{confirmed.value}</Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of active Cases of COVID-19</Typography>
    </CardContent>
</Grid>

<Grid item component ={Card}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Recoveries</Typography>
    <Typography variant ="h5">{recovered.value}</Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of recovered patientsfrom COVID-19</Typography>
    </CardContent>
</Grid>

<Grid item component ={Card}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Deaths</Typography>
    <Typography variant ="h5">{deaths.value}</Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of deats due to COVID-19</Typography>
    </CardContent>
</Grid>
</Grid>
        </div>
        
    
    )
}
export default Cards;
