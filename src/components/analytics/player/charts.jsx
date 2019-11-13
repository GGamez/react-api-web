import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import backGame from './indice.png'

import Chart from "react-apexcharts";
const state = function() {
  return(
    {  options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: "series-1",
        data: []
      }
    ],
    series2: [
      {
        name: "series-1",
        data: []
      }
    ]
} ) 
  
}



  

  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '60px',
    display:'flex',
    justifyContent:'center'
  },
  paper1: {
    padding: theme.spacing(3),
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: '25px',
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'left',
   
    color: theme.palette.text.secondary,
  },
  gameContainer: {
    padding: theme.spacing(3),
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: '25px',
    display: 'flex',
    justifyContent: 'center',
    height:'800px',
    width:'800px',
    // backgroundImage: 'url('+backGame+')',
    color: theme.palette.text.secondary,
  },
  paper2: {
   
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '60px',
    width: '60%',
  },
 
}));





export default function CenteredChart({eiei, userId, pickerValue}) {


  const stato =  {

    options: {
      chart: {
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
      },
      labels: ['2011', '2012', '2013', '2014'],
      title: {
        text: ''
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      }
    },
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13],
    }]
  }
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded(!expanded);
  };


  let estado = {};
  let counter = 0;
  estado = state()
  let name = 'asdasd';
  let goldAvg = 0;
  let looses = 0;
 // console.log(estado)
  //let eoeo = {...eiei};
  eiei.map(matches => (
    
    Object.keys(matches).map((player) => { 
    //console.log(matches[player])
    if (matches[player].currentAccountId  == userId)
      {
        goldAvg += (matches[player].goldSpent)
        counter += 1;
        name = matches[player].summonerName
        //estado.series[0].data.push(matches[player].damageDealtToObjectives); 
        estado.series2[0].data.push(matches[player].goldSpent); 
        let avg = Math.floor(goldAvg/counter);
        console.log(goldAvg)
        estado.series[0].data.push(avg);
        estado.options.xaxis.categories.push(counter);
      }
      
     //console.log(matches[player][players].summonerId) 
    //Object.keys(matches[player]).map((players) => {
      
    //   if (matches[player][players]  == userId)
    //   {
    //     counter += 1;
    //     name += matches[player].champName
    //     estado.series[0].data.push(matches[player].damageDealtToObjectives); 
    //     estado.options.xaxis.categories.push(player);
    //   }
    //  // console.log(matches[player][players].summonerId)  
    //    })
      })
    ))

    
  
  return (
    <div>
   
   <row >
      <Grid style={{ justifyContent:'center', padding:'20px'}} container spacing={4}>
        <Grid item md={4} item xs={12}>
          <Paper className={classes.paper}><Chart
    options={estado.options}
    series={estado.series}
    type="line"
    /></Paper>
        </Grid>
        <Grid item md={4} item xs={12}>
          <Paper className={classes.paper}><Chart
    options={estado.options}
    series={estado.series2}
    type="line"
    /></Paper>
        </Grid>
        <Grid item md={4} item xs={12}>
          <Paper className={classes.paper}><Chart
    options={estado.options}
    series={estado.series2}
    type="line"
    /></Paper>
        </Grid>
        </Grid>
        </row>


        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          
        </Grid>
     
    </div>
  );
}
 










