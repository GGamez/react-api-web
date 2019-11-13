import React, { Component } from 'react';
import Chart from '../charts/line_area'
import Radar from '../charts/radar'
import MhTeam from '../tables/mh_team'
import { makeStyles } from '@material-ui/core/styles';
import { MDBContainer, MDBRow, MDBCol , MDBTable, MDBTableBody, MDBTableHead, MDBDataTable  } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Colchart from '../charts/line_area'
import Toms from '../tables/team_matches'
import GamesCard from '../cards/gameCard'
import Tims from '../cards/teamMatch'
import { userLogged } from '../extractor/matchesTeam';
import Loggin, { authenticationService } from '../../Loggin';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';

import backGame from '../player/indice.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 75,
    margin:'15px',
    display:'flex',
    textAlign:'center',
    "&:hover, &:focus": {
        backgroundColor: '#00000014'
    }

  },
  header:{
    fontFamily:'berlin'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expand2: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen2: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    
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
}));


const getMatches = async function(tok) {
  let match = await userLogged(tok);
  //console.log(match)
  return(match)
}

const handleClick = function(event) {
  console.log(event.currentTarget)
}

export function setProgress(tom){
  if(!tom){
    console.log(tom)
  }else{
    return(tom.progress)
  }
}


class Teams extends Component {


  setProgress(tom){
    if(!tom){
      return
    }else{
      return(tom.progress)
    }
  }

  handleExpandClick = (tom) => {
    let progr = setProgress(tom);
    console.log(tom)
    this.setState({team:progr})
  };

  componentWillMount() {
     getMatches(this.state.currentUser.token).then(match => this.setState({teamList:match})).catch(e => console.log(e));
    console.log('WillMount')
  }
  componentDidMount(){
   console.log(this.state.teamList)
   
    console.log('DidMount')
  }

  constructor(props) {
    super(props);
    this.state = {
  
      currentUser: authenticationService.currentUserValue,
      teamList : [],
      progressTeam : [],
      team :[],
    }
  }
  
    useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        currentUser: authenticationService.currentUserValue,
        paper: {
          padding: theme.spacing(3),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '60px',
          
          justifyContent:'center'
        },
        gridContainer:{
            display: 'flex',
            
        },

       
      }));


  render() {

    let progress  = {}
    const classes = this.useStyles;

    //console.log(this.state.teamList[1])
      return (
        <Grid style={{
            margin: 0,
            width: '100%',
          }} container spacing={3}>
        <Grid item xs={12} md={3} style={{marginLeft: ''}} > 
        {this.state.teamList.map(teams => teams.players.map(players => {if (teams.team == "CRM"){return(<GamesCard/>)}}))}
</Grid>
      
      <Grid item xs={10} md={8} style={{ marginTop:'60px',marginLeft: '20px'}} >
<div className='row-8'>

<Paper className={classes.paper}>

<Grid item xs={12} md={12}>

    <Grid item xs={12} md={12}>

      <div className='row'>

        <Grid  className={classes.gridContainer} item xs={12} md={6}>
        <Colchart winns = {this.state.team}/>
        </Grid>

        <Grid  className={classes.gridContainer} item xs={12} md={6}>
    <Radar/>
    </Grid>
      </div>

    </Grid>

  

  </Grid>
  </Paper>

  
  
</div>

<li  style={{ display: 'flex', position:'relative',
  flexDirection: 'row', flexWrap:'wrap', justifyContent:'center', marginTop:'40px', height:'300px'}}  className='row-8'>
{this.state.teamList.map(enemigos =>{return (<div> <Card  className={classes.card}  onClick={() => {this.handleExpandClick(enemigos)}}>
  <CardHeader
    avatar={
      <Avatar className={classes.avatar}
      src ={backGame}>
      </Avatar>
    }
  />
  
</Card>
</div>)} )}
</li>
<div className='row-8'>

<Paper className={classes.paper}>

<Grid item xs={12} md={12}>

    <Grid item xs={12} md={12}>

      <MhTeam/>

    </Grid>

  

  </Grid>
  </Paper>
  
</div>
        </Grid>
        
        </Grid>
       
      );
    }
}    
export default Teams;