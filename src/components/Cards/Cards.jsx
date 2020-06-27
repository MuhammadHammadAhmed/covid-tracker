import React from 'react'
import {card,CardContent,Typography,Grid} from '@material-ui/core';
import  styles from './Cards.module.css';

const Cards=(props) =>{
    console.log("CARDSPROP",props);
    return(
        <div className= {styles.Container}>
<Grid container spacing={3} justify='center'>
    <Grid item component ={Card}></Grid>
    <CardContent>
<Typography color ="textSecondary" putterBottom>
    Infected
</Typography>
<Typography variant ="h5">REAL DATA</Typography>
    </CardContent>
</Grid>
        </div>
        
    
    )
}
export default Cards;
<Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>