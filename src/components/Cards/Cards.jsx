import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import  styles from './Cards.module.css';
import cx from 'classnames';

const Cards=({data:{confirmed,deaths,lastUpdate,recovered}}) =>{
    
    if(!confirmed){
        return ('Loading');
    }
    return(
        <div className={styles.Container}>
<Grid container spacing={3} justify='center'>
    <Grid item component ={Card} xs={12} md={3} className={cx(styles.Cards, styles.infected)}>
    <CardContent>
<Typography color ="textSecondary" putterbottom >Infected</Typography>
<Typography variant ="h5">  <CountUp
start={0} end={confirmed.value} duration = {2.5}  separator =","
/>
</Typography>
<Typography color ="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
<Typography variant ="body2">The number of active Cases of COVID-19</Typography>
    </CardContent>
</Grid>

<Grid item component ={Card}xs={12} md={3} className={cx(styles.Cards, styles.recovered)}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Recoveries</Typography>
    <Typography variant ="h5">
    <CountUp
start={0} end={recovered.value} duration = {2.5} separator =","
/>
    </Typography>
<Typography color ="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
<Typography variant ="body2">The number of recovered patients from COVID-19</Typography>
    </CardContent>
</Grid>

<Grid item component ={Card}xs={12} md={3} className={cx(styles.Cards, styles.deaths)}>
    <CardContent>
<Typography color ="textSecondary" putterBottom>Deaths</Typography>
    <Typography variant ="h5">
    <CountUp
start={0} end={deaths.value} duration = {2.75}  separator =","
/>
    </Typography>
<Typography color ="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
<Typography variant ="body2">The number of deats due to COVID-19</Typography>
    </CardContent>
</Grid>
</Grid>
        </div>
        
    
    )
}
export default Cards;
