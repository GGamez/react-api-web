import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import {setProgress} from '../team/teamModel';
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



export default function RecipeReviewCard(team) {

  
  const classes = useStyles();
  const [expanded, setExpanded,] = React.useState(false);
  
  let tom = {...team.team}
  console.log(tom)
  
  const handleExpandClick = (tom) => {
    let progr = setProgress(tom);
    console.log(progr)

  };

  



  return (
    

    // style={{backgroundColor:'#000000a2'}}
      <div >
    <Card  className={classes.card}  onClick={handleExpandClick}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}
                src ={backGame}>
                </Avatar>
              }
            />
            
    </Card>
    </div>
  );
}


