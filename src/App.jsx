import ReactGA from 'react-ga';


import React, { Component } from 'react';
import './App.css';
import ConsoleHelper from './helper/ConsoleHelper'
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import MatchTeam from './components/analytics/tests/homeTest';

import MatchTeamt from './components/analytics/tests/nBack';
import MatchTeamto from './components/analytics/tests/raven';
import Stroop from './components/analytics/tests/stroop';

import MatchTeamti from './components/analytics/tests/nBackExpl';
import MatchTeamte from './components/analytics/tests/ravenExpl';
import Stroop_expl from './components/analytics/tests/stroopExpl';

import Results from './components/analytics/tests/results';
import ResultsN from './components/analytics/tests/results_nback';
import Search from './components/analytics/player/lol_extractor';
import Teams from './components/analytics/team/teamModel';
import Confirm from './components/Confirm';
import Loggin, { authenticationService } from './components/Loggin';
import Register, { authenticationServicie } from './components/Register';
import { Button, Nav, Navbar, NavDropdown, Dropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../node_modules/jquery'
import '../node_modules/bootstrap'

import buttonImage from './Images/bitmap.png'
import dadp from './Images/dadp.png'
import { flexbox } from '@material-ui/system';
import stroopExpl from './components/analytics/tests/stroopExpl';


function initializeReactGA() {
  ReactGA.initialize('UA-153106503-1');
  ReactGA.pageview('/');
}



class App extends Component {


componentDidMount(){
  initializeReactGA();
}


logout() {
    authenticationService.logout();
    //history.push('/login');
}
    // const state =  getMoviesFromApi();
    // ConsoleHelper(state)
    // {…}
    // ​
    // todos: Object [ {…}, {…} ]
    // ​
    // <prototype>: Object { … }
    //alert({state.assignments})<JsonToTable json={ state.data[2] } />
  
isLogged(logg) {
  ConsoleHelper(logg)
  if(logg == false){
    return(<div><Link to={'/loggin'} class="nav-link" > <p  style= {{borderRadius: '10px'}}  class= 'navbar-texto'><a style={{fontSize:'20px', fontWeight:'800'}}>L<a style={{fontSize:'16px', fontWeight:'800'}}>OGIN</a></a></p> </Link></div>)

  }else{
    return(<div><Link class="nav-link" ><p onClick= {this.logout} style= {{borderRadius: '10px'}}  class= 'navbar-texto'><a style={{fontSize:'20px', fontWeight:'800'}}>L<a style={{fontSize:'16px', fontWeight:'800'}}>OGOUT</a></a> </p></Link></div>)
  }
}
 
render(){

        ConsoleHelper(authenticationService.currentUserValue)  
  return (  

  // this.componentDidMount(this.state.inputValue)
  <Router baseName={'/'}>

    <nav style={{position:'fixed', top:'0', zIndex:'900'}} class="navbar navbar-expand-lg navbar-dark bg-inverse ">
    <div class="container-fluid">
    <div style = {{zIndex:19  }}>
    <div> 
      <button class="navbar-toggler collapsed"  style = {{borderColor:'#0070c0', zIndex:'21', position:'absolute', top:'10px'}} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span style={{backgroundColor:'#f7fcff', color:'black'}} class="navbar-toggler-icon"></span>
        </button></div>
    <div  id= 'brandNav'  style= {{ borderRadius: '5px',backgroundColor:'#2f3032', zIndex:'11'}}>
        <div className='navbar-brand' style= {{ borderRadius: '5px', zIndex:'11',backgroundColor:'#2f3032'}} >    
          <div 
            
            style={{   
            
            width:'260px', 
            
            // borderStyle:'solid', 
            // borderColor: '#0070c0', 
            // borderRadius:'4px',
            display:'flex', 
            justifyContent:'center',  
             
            }}>   
            <Link to={'/'} class="nav-link">
           <img style={{heigh:'100px', width:'200px', backgroundColor:'#ffffff00'}} src= {buttonImage}/>
                </Link>
          </div>          
          </div>
          </div>
   
        
          </div>
          </div> 
        <div style= {{backgroundColor:'#2f3032', position:'absolute', left:'50%', transform:'translate(-50%, 0)',  width:'auto', height:'60px', zIndex:'10'}} id="navbarNavDropdown" class="navbar-collapse collapse">
        <ul class="nav navbar-nav " style={{ flexDirection:'row'}}>
          <li class="nav-item" style={{ outline: 'none'}}><Link to={'/'} class="nav-link" > <p class= 'navbar-text'><a style={{fontSize:'14px'}}>HOME</a> </p> </Link></li>
          <li class="nav-item"> <Link to={'/contact'} class="nav-link" > <p class= 'navbar-text'><a style={{fontSize:'14px'}}>CONTACT</a> </p> </Link></li>
          <li class="nav-item"> <Link to={'/about'} class="nav-link" > <p class= 'navbar-text'><a style={{fontSize:'14px'}}>ABOUT</a> </p> </Link></li>         
          <li class="nav-item">  <Link to={'/loggin'} class="nav-link" ><p class= 'navbar-text'><a style={{fontSize:'14px'}}>TEST</a> </p> </Link></li>
              <li style={{position:'relative', marginRight:'20px'}} class="nav-item login" > {this.isLogged(authenticationService.currentUserValue)}   </li>     
              {/* <li class="nav-item"> <Link  class="nav-link" onClick={this.logout} > <p class= 'navbar-text'><a> Logout </a> </p> </Link></li> */}
            
            </ul>
          </div>
          
          
       </nav>

       <div class='body' style={{backgroundColor:'#f7fcff'}}>

       <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        {/* <Route path='/match-history-Team' component={MatchTeam} /> */}
        <Route path='/search' component={Search} />
        <Route path='/teams' component={Teams} />
        <Route path='/loggin' component={Loggin} />
        <Route path='/regist' component={Register} />
        <Route path='/cognitive-test' component={MatchTeam} />
        <Route path='/nback-expl' component={MatchTeamti} />
        <Route path='/raven-expl' component={MatchTeamte} />
        <Route path='/stroop-expl' component={Stroop_expl} />
        <Route path='/raven-test' component={MatchTeamto} />
        <Route path='/memory-test' component={MatchTeamt} />
        <Route path='/stroop-test' component={Stroop} />
        <Route path='/results' component={Results} />
        <Route path='/results-nback' component={ResultsN} />
        
        <Route path='/confirmation/:token' component={Confirm} />
    </Switch>
    
       </div>
      

       <footer style={{backgroundColor:'#00000000', position:'relative',  width:'100%', transition:'1s' }} id='intro'>
       <img style={{width:'100%', backgroundColor:'#00000000'}} src={dadp}></img>

<div class='row' style={{backgroundColor:'black'}}>

<div class='col' >
    <div style={{display:'flex', justifyContent:'center', margin:'auto', marginTop:'50px'}}>
<a style={{marginRight:'30px'}} target="_blank" title="follow me on instagram" href="https://www.instagram.com/ggdiggers"><img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" border='0'/></a>
<a target="_blank" title="follow me on Twitter" href="https://www.twitter.com/ggdiggers"><img alt="follow me on Twitter" src="https://c866088.ssl.cf3.rackcdn.com/assets/twitter30x30.png" border='0'/></a>

<a style={{marginLeft:'30px'}}  target="_blank" title="follow me on facebook" href="https://www.facebook.com/ggdiggers"><img alt="follow me on facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook40x40.png" border='0'/></a>

</div>

<div style={{display:'flex', justifyContent:'center', margin:'auto', marginTop:'30px'}}>
<p style= {{fontSize: '22px', color:'white'}}class="mb-4">
        <strong>info@ggdiggers.com</strong>
    </p>

    </div>
      
    </div>
<div  style={{marginBottom:'30px'}} class="card-body text-center px-5 ">

    <p style= {{fontSize: '22px', color:'white', }}class="mb-4">
        <strong>Mejora tu juego y controla la victoria con GG Diggers, <br/> expertos en análisis y rendimiento deportivo digital.</strong>
    </p>
    <div id='buttonComienzo' style={{disply:'flex', marginTop:'-30px'}}>
    <br/>
    <br/>
                    <a href="/loggin" class="btn btn-outline-white btn-lg">Comenzar análisis
                        <i class="fas fa-graduation-cap ml-2"></i>
                    </a>
                    </div>

</div>


   
</div>




</footer>
     
 
  </Router>
    
           
  )}

}

export default App;