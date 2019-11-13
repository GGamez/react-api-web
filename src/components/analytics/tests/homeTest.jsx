import React, { Component } from 'react';
import backGame from '../player/indice.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MatchTeamt from './nBack';
import MatchTeamte from './ravenExpl';
import Loggin, { authenticationService } from '../../Loggin';
//import Raven from './raven';


class homeTest extends Component {

    
  render() {
    
    let user = authenticationService.currentUserValue;
    console.log(user)
    return (
        
        
            <div>
            
            <div class="row wow fadeIn">
            <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop: '50px', flexDirection:'row'}}>
            <p style= {{fontSize: '20px'}}>
                      <strong>Bienvenido  {user.usuario._id}</strong>
                  </p>
                  </div>
             

                <div class="col-sm">
                <h3 class="mb-3 font-weight-bold dark-grey-text">
                        <strong>n-Back</strong>
                       
                    <div class="view overlay rounded z-depth-1">
                        <img style={{marginTop:'30px', borderRadius:'15px'}} src={backGame} class="img-fluid" alt=""></img>
                        <a  target="_blank">
                        
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    </h3>
                    <Link to={'/nback-expl'} class="nav-link" >
                    <div>           
                    <a target="_blank" class="btn btn-primary btn-md">Start Experiment    
                    <i class="fas fa-play ml-2"></i>
                    </a>
                  
                    </div>
                </Link>
                </div>

                <div class="col-sm">
                <h3 class="mb-3 font-weight-bold dark-grey-text">
                        <strong>Raven</strong>
                    <div class="view overlay rounded z-depth-1">
                        <img style={{marginTop:'30px', borderRadius:'15px'}} src={backGame} class="img-fluid" alt=""></img>
                        <a   target="_blank">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                   
                    </h3>
                   
                   
                    <div>      
                    <Link to={'/raven-expl'} class="nav-link" >
                    <div>           
                    <a target="_blank" class="btn btn-primary btn-md">Start Experiment    
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


         


            <div class="row mt-3 wow fadeIn">

            <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                  
                  </div>                 

            </div>


            <div class="row wow fadeIn">

            <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                  
                  </div> 

            </div>
           

            {/* <hr class="mb-5"></hr>


            <nav class="d-flex justify-content-center wow fadeIn">
                <ul class="pagination pg-blue">


                    <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>

                    <li class="page-item active">
                        <a class="page-link" href="#">1
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">5</a>
                    </li>

                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav> */}


<Router>
<Switch>
        <Route path='/memory-test' component={MatchTeamt} />
        <Route path='/raven-test' component={MatchTeamte} />
    </Switch>
 
  </Router>

</div>
    
 
    );
  }
}

export default homeTest;