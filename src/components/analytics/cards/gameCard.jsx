import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import backGame from '../player/indice.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    width:'320px',
    marginTop: '60px',
    marginLeft:'auto', marginRight:'auto',
    display:'block',
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded,] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
              className={classes.header}
              title="League"
              subheader="Última act: xx/xx/xx"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="config">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
          <a class="dropdown-item" style= {{borderRadius:'15px'}}> Teams  </a>
          <a class="dropdown-item" style= {{borderRadius:'15px'}} > Players </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" style= {{borderRadius:'15px'}} href="/search">Faq s</a>
              </CardContent>
            </Collapse>
    </Card>
    </div>
  );
}


