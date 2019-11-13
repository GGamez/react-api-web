
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, hashHistory } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MatchTeam from './components/analytics/tests/homeTest';
import MatchTeamt from './components/analytics/tests/nBack';
import MatchTeamto from './components/analytics/tests/raven';
import MatchTeamti from './components/analytics/tests/nBackExpl';
import MatchTeamte from './components/analytics/tests/ravenExpl';
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
import { flexbox } from '@material-ui/system';
class App extends Component {

logout() {
    authenticationService.logout();
    //history.push('/login');
}
    // const state =  getMoviesFromApi();
    // console.log(state)
    // {…}
    // ​
    // todos: Object [ {…}, {…} ]
    // ​
    // <prototype>: Object { … }
    //alert({state.assignments})<JsonToTable json={ state.data[2] } />
  
isLogged(logg) {
  console.log(logg)
  if(logg == false){
    return(<div><Link to={'/loggin'} class="nav-link" > <p  style= {{backgroundColor: "#ffffff", borderRadius: '5px', borderStyle:'solid', borderWidth:'4px', borderColor:'#0070c0'}}  class= 'navbar-texto'><a> Log in </a> </p> </Link></div>)

  }else{
    return(<div><Link class="nav-link" ><p onClick= {this.logout} style= {{backgroundColor: "#ffffff", borderRadius: '5px', borderStyle:'solid', borderWidth:'4px', borderColor:'#0070c0'}}  class= 'navbar-texto'><a> Log out </a> </p></Link></div>)
  }
}
 
render(){

        console.log(authenticationService.currentUserValue)  
  return (  

  // this.componentDidMount(this.state.inputValue)
  <Router baseName={'/'}>

    <nav  class="navbar navbar-expand-lg navbar-dark bg-inverse ">
    <div class="container-fluid">
    <div style = {{ zIndex:19  }}>
    <div> 
      <button class="navbar-toggler"  style = {{borderColor:'#0070c0', zIndex:'21', marginTop:'20px'}} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span style={{backgroundColor:'', color:'black'}} class="navbar-toggler-icon"></span>
        </button></div>
    <div  id= 'brandNav'  style= {{ borderRadius: '5px',backgroundColor:'#ffffff00', zIndex:'11'}}>
        <div className='navbar-brand' style= {{ borderRadius: '5px', zIndex:'11'}} >    
          <div 
            id= 'navBrand'
            style={{   
            fontSize:'30px', 
            width:'260px', 
            borderStyle:'solid', 
            borderColor: '#0070c0', 
            borderRadius:'4px',
            display:'flex', 
            justifyContent:'center',  
            backgroundColor:'white', 
            }}>   
            <Link to={'/'} class="nav-link">
           <img style={{heigh:'100px', width:'180px'}} src= {buttonImage}/>
                </Link>
          </div>          
          </div>
          </div>
   
        
          </div>
          </div> 
        <div style= {{justifyContent:'center', borderRadius: '5px', right:'0px', backgroundColor:'#000000', position:'absolute', width:'100%', zIndex:'10'}} id="navbarNavDropdown" class="collapse navbar-collapse ">
        <ul class="navbar-nav " style={{ flexDirection:'row'}}>
          <li class="nav-item" style={{ outline: 'none'}}><Link to={'/'} class="nav-link" > <p class= 'navbar-text'><a> Home </a> </p> </Link></li>
          <li class="nav-item"> <Link to={'/contact'} class="nav-link" > <p class= 'navbar-text'><a> Contact </a> </p> </Link></li>
          <li class="nav-item"> <Link to={'/about'} class="nav-link" > <p class= 'navbar-text'><a> About </a> </p> </Link></li>         
           
              <li style={{position:'absolute', right:'0px'}} class="nav-item login" > {this.isLogged(authenticationService.currentUserValue)}   </li>     
              {/* <li class="nav-item"> <Link  class="nav-link" onClick={this.logout} > <p class= 'navbar-text'><a> Logout </a> </p> </Link></li> */}
            
            </ul>
          </div>
          
          
       </nav>

       <nav  class="navbar navbar-expand-lg navbar-dark bg-inverse " >
    <div  class="container-fluid">
       
        <div  style= {{justifyContent:'center',zIndex:'11'}} class="collapse navbar-collapse" id="navbarNavDropdown">
            <div className='navbar-nav navCol'>

                   
           
              <li class="nav-item">  <Link to={'/loggin'} class="nav-link" ><p class= 'navbar-text'><a> Test </a> </p> </Link></li>
        
            </div>
          </div>
          </div>
       </nav>
       
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
        <Route path='/raven-test' component={MatchTeamto} />
        <Route path='/memory-test' component={MatchTeamt} />
        
        <Route path='/confirmation/:token' component={Confirm} />
    </Switch>
 
  </Router>
    
           
  )}

}

export default App;