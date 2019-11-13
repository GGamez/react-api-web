// Home.js
import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radar from '../charts/radar';
import Colchart from '../charts/columns'
import backGame from './indice.png'
import GamesCard from '../cards/gameCard'
import Chart from "react-apexcharts";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Select from 'react-select';

const options = [
  { value: 'Objetivos', label: 'Objetivos' },
  { value: 'KDA', label: 'KDA' },
  { value: 'kills', label: 'kills' },
  { value: 'deaths', label: 'deaths' },
 
];

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
    ],
    language: ''
} ) 
  
}


  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 75,
    margin:'15px',
    display:'flex',
    textAlign:'center',
    "&:hover, &:focus": {
        backgroundColor: '#00000014'
    }

  },
  avatar: {
    
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
  gridContainer:{
    padding: theme.spacing(3),
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


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var arrayData = [{
  y: 400,
  quarters: [{
    x: 'Q1',
    y: 120
  }, {
    x: 'Q2',
    y: 90
  }, {
    x: 'Q3',
    y: 100
  }, {
    x: 'Q4',
    y: 90
  }]
}, {
  y: 430,
  quarters: [{
    x: 'Q1',
    y: 120
  }, {
    x: 'Q2',
    y: 110
  }, {
    x: 'Q3',
    y: 90
  }, {
    x: 'Q4',
    y: 110
  }]
}, {
  y: 448,
  quarters: [{
    x: 'Q1',
    y: 70
  }, {
    x: 'Q2',
    y: 100
  }, {
    x: 'Q3',
    y: 140
  }, {
    x: 'Q4',
    y: 138
  }]
}, {
  y: 470,
  quarters: [{
    x: 'Q1',
    y: 150
  }, {
    x: 'Q2',
    y: 60
  }, {
    x: 'Q3',
    y: 190
  }, {
    x: 'Q4',
    y: 70
  }]
}, {
  y: 540,
  quarters: [{
    x: 'Q1',
    y: 120
  }, {
    x: 'Q2',
    y: 120
  }, {
    x: 'Q3',
    y: 130
  }, {
    x: 'Q4',
    y: 170
  }]
}, {
  y: 580,
  quarters: [{
    x: 'Q1',
    y: 170
  }, {
    x: 'Q2',
    y: 130
  }, {
    x: 'Q3',
    y: 120
  }, {
    x: 'Q4',
    y: 160
  }]
}];


function makeData() {
  var dataSet = shuffleArray(arrayData)

  var dataYearSeries = [{
    x: "2011",
    y: dataSet[0].y,
    
    quarters: dataSet[0].quarters
  }, {
    x: "2012",
    y: dataSet[1].y,
  
    quarters: dataSet[1].quarters
  }, {
    x: "2013",
    y: dataSet[2].y,
   
    quarters: dataSet[2].quarters
  }, {
    x: "2014",
    y: dataSet[3].y,
 
    quarters: dataSet[3].quarters
  }, {
    x: "2015",
    y: dataSet[4].y,
   
    quarters: dataSet[4].quarters
  }, {
    x: "2016",
    y: dataSet[5].y,
   
    quarters: dataSet[5].quarters
  }];

  return dataYearSeries
}


export default function CenteredGrid({eiei, userId}) {


  const [stat = {
    selectedOption: 'kills',
  }] = useState();

  const handleChange = selectedOption => {
    stat.selectedOption = selectedOption;
    console.log(stat.selectedOption)
    return(selectedOption)
   
  };


  
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
  let name = 'player';
  let wins = 0;
  let looses = 0;
  let champs = [1,2,3,4,5,6]
 // console.log(estado)
  //let eoeo = {...eiei};
  eiei.map(matches => (Object.keys(matches).map((player) => { 
    //console.log(matches[player])
    if (matches[player].currentAccountId  == userId)
      {
        counter += 1;
        name = matches[player].summonerName
        estado.series[0].data.push(matches[player][stat.selectedOption]); 
        estado.series2[0].data.push(matches[player][stat.selectedOption]); 
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
    <div style={{justifyContent:'center'}} className='col'>

      <Paper style={{}} className={classes.paper}>
     
      <Grid item xs={12} md={12}>
      
          <Grid item xs={12} md={12}>

            <div className='row1'>
              
              <Grid className={classes.gridContainer} item xs={12} md={4}>
              <div style={{ textAlign:'center'}} className='col'> 

              <h1 > {name} </h1>
              <div className='row' style={{marginBottom:'20px'}}>
              <GamesCard/>

              
              </div>

              <Select
        value={handleChange()}
        onChange={handleChange}
        options={options}
      />
{/*       
              <img style= {{borderRadius:'15px', marginRight:'5px'}} class="img-responsive"/>
            
              <img style= {{borderRadius:'15px', marginLeft:'5px'}} class="img-responsive"/> */}
              </div>
              </Grid>
            
              <Grid  className={classes.gridContainer} item xs={12} md={4}>
              <Chart
                options={estado.options}
                series={estado.series}
                type="line"
              />

              <div style={{display: 'flex', position:'relative',
  flexDirection: 'row', flexWrap:'wrap', justifyContent:'center',}}>
                {champs.map(champ => {
                  return( <Card  className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar className={classes.avatar}
                        src ={backGame}>
                        </Avatar>
                      }
                    />
                </Card>)
})}
 

              </div>

              
              </Grid>

              <Grid  className={classes.gridContainer} item xs={12} md={4}>
          <Radar/>
          </Grid>
            </div>

          </Grid>

        
  
        </Grid>
        </Paper>
    </div>
  );
}
 