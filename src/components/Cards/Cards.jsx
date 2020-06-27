import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import  styles from './Cards.module.css';

const Cards=(props) =>{
    console.log("CARDSPROP",props);
    return(
        <div className= {styles.Container}>
<Grid container spacing={3} justify='center'>
    <Grid item component ={Card}></Grid>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Infected</Typography>
<Typography variant ="h5">REAL DATA</Typography>
<Typography color ="textSecondary" >REAL DATE</Typography>
<Typography variant ="body2">The number of active Cases of COVID-19</Typography>
    </CardContent>
</Grid>
        </div>
        
    
    )
}
export default Cards;
