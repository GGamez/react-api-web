import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import img from '../../../Images/stim_1.png'
import img2 from '../../../Images/raven/1.png'
import ConsoleHelper from '../../../helper/ConsoleHelper'

class results extends Component {
  render() {
 
    ConsoleHelper(authenticationService.currentUserValue) 
    return (
        <div style={{width:'60%'}} class="row wow fadeIn">
            <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop: '150px', flexDirection:'row'}}></div>
     

<div  class="col-sm">
                <h3 class="mb-3 font-weight-bold dark-grey-text">
                        <strong>n-Back</strong>
                       
                    <div class="view overlay rounded z-depth-1">
                        <img style={{marginTop:'30px', width:'200px', borderRadius:'15px'}} src={img} ></img>
                        <a  target="_blank">
                        
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    </h3>
                    <Link to={'/'} class="nav-link" >
                    <div>           
                    <a target="_blank" class="btn btn-primary btn-md">Go to results  
                    <i class="fas fa-play ml-2"></i>
                    </a>
                  
                    </div>
                </Link>
                </div>

                <div class="col-sm">
                <h3 class="mb-3 font-weight-bold dark-grey-text">
                        <strong>Raven</strong>
                    <div class="view overlay rounded z-depth-1">
                        <img style={{marginTop:'30px', width:'200px',borderRadius:'15px'}} src={img2} ></img>
                        <a   target="_blank">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                   
                    </h3>
                   
                   
                    <div>      
                    <Link to={'/'} class="nav-link" >
                    <div>           
                    <a target="_blank" class="btn btn-primary btn-md">Go to results     
                    <i class="fas fa-play ml-2"></i>
                    </a>
                  
                    </div>
                </Link>     
                    {/* <a href='https://vibrant-map-258516.appspot.com' target="_blank" class="btn btn-primary btn-md">Start Experiment    
                    <i class="fas fa-play ml-2"></i>
                    </a> */}
                  
                    </div>
                
                </div>
     
    
  </div>
      );
  }
}

export default results;