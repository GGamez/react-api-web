import React, { Component } from 'react';
import backGame from '../player/indice.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MatchTeamt from './nBack';
import MatchTeamte from './ravenExpl';
import Loggin, { authenticationService } from '../../Loggin';
//import Raven from './raven';
import img from '../../../Images/stim_1.png'
import dado2 from '../../../Images/dado2.png'
import dadolone from '../../../Images/dadolone.png'
import dadolone2 from '../../../Images/dadolone2.png'


import img2 from '../../../Images/raven/1.png'
import results from '../../../Images/Analitics.png'
import '../../../App.css';
import ConsoleHelper from '../../../helper/ConsoleHelper'
import axios from 'axios';


class homeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:false,
            experimento:'',

           
            }
        this.gentags = React.createRef();   

        }
      


    toggleHover (){
        ConsoleHelper(this.state.hover)
      }

   
      onWheel = (e) => {
        e.preventDefault()
        var container = this.refs.gentags;
        var containerScrollPosition = this.refs.gentags.scrollLeft;
        console.log(container)
       
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY*7,
            behaviour: 'smooth' //if you want smooth scrolling
        })
    }
    

  render() {

    let user = authenticationService.currentUserValue;
    ConsoleHelper(user)
    return (
        <div style={{ position:'relative', height:'1200px'}} >

        <div style={{ position:'absolute'}} >

            <div style={{backgroundColor:'#2f3032', minWidth:'100%', height:'100%',  minHeight:'90%', borderWidth:'0px', position:'fixed', top:'0'}} >
         
     

<main ref='headero'   class="mt-5 pt-5 " style={{backgroundColor:'#2f3032', minWidth:'100%', height:'100%',  minHeight:'90%', borderWidth:'0px', position:'absolute', top:'0'}} >
        
        
        <div id='carj6' ref='header' style={{position:'absolute', width:'95%', height:'70%', display:'flex', top:'5%', left:'50%', transform:'translate(-50%,0)',  borderRadius:'30px 30px 0 0'}} >
  
  

            <section ref={this.myDivToFocus} style={{position:'relative', backgroundColor:'#ffffff', width:'100%', borderRadius:'30px 30px 0 0'}}  id="intro">
                
            <div style={{position:'absolute', left:'50%', transform:'translate(-50%,0)', width:'20%', height:'100%',backgroundColor:'blue', justifyContent:'center'}}>
            <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop: '50px'}}>
            <p style= {{fontSize: '20px', backgroundColor:'white', padding:'15px', zIndex:'200'}}>
                      <strong>Bienvenido  {user.usuario._id}</strong>
                  </p>
                  
                  </div>
        
                  <div style={{display:'flex', justifyContent:'center', margin:'auto'}}>
                  <Link to= {'/results'}>   <img id='imgresults' alt="alternative text" title="Ir a los resultados" src = {results} style={{height:'60px'}}/></Link>
                  </div>
            </div>

            
                <div style={{position:'relative', float:'right', width:'40%', height:'50%', backgroundColor:'black'}}>

                <div class="hs" ref="gentags" onWheel={this.onWheel} >

<div class="itemo"  style={{ position:'relative'}}>
               
                       <strong>Raven</strong>
                   <div>
                       <img style={{display:'flex', objectFit:'cover', height:'100%', width:'100%'}} src={img} ></img>
                       <a   target="_blank">
                           
                       </a>
                   </div>

                   <div>      
                   <Link to={'/raven-expl'} class="nav-link"  style={{position:'absolute', bottom:'0'}} >
                   <div>           
                   <a target="_blank" class="btn btn-outline-white btn-lg">Start Experiment    
                   <i class="fas fa-play ml-2"></i>
                   </a>
                 
                   </div>
               </Link>     
                   {/* <a href='https://vibrant-map-258516.appspot.com' target="_blank" class="btn btn-primary btn-md">Start Experiment    
                   <i class="fas fa-play ml-2"></i>
                   </a> */}
                 
                   </div>
                   
               
               </div>

                
           <div class="itemo"  style={{ position:'relative'}}  >
       
       <strong>Stroop</strong>
      
   <div style={{ width:'100%'}} >
       <img style={{display:'flex', objectFit:'cover', height:'100%', width:'100%'}} src={img} ></img>
       <a  target="_blank">           
       </a>
   </div>
   <Link to={'/stroop-expl'} class="nav-link" style={{position:'absolute', bottom:'0'}} >
   <div>           
   <a target="_blank" class="btn btn-outline-white btn-lg">Start Experiment    
   </a>
   </div>
</Link>
</div>




<div class="itemo" style={{ position:'relative'}} >
    
    <strong>n-Back</strong>
   
<div style={{ width:'100%'}}>
    <img style={{display:'flex', objectFit:'cover', height:'100%', width:'100%'}}  src={img} ></img>
    <a  target="_blank">
    
        <div></div>
    </a>
</div>

<Link to={'/nback-expl'} class="nav-link" style={{position:'absolute', bottom:'0'}}>
<div>           
<a target="_blank" class="btn btn-outline-white btn-lg">Start Experiment    
<i class="fas fa-play ml-2"></i>
</a>

</div>
</Link>
</div>
<div class="itemo" style={{ position:'relative'}} >
    
    <strong>n-Back</strong>
   
<div style={{ width:'100%'}}>
    <img style={{display:'flex', objectFit:'cover', height:'100%', width:'100%'}}  src={img} ></img>
    <a  target="_blank">
    
        <div></div>
    </a>
</div>

<Link to={'/nback-expl'} class="nav-link" style={{position:'absolute', bottom:'0'}}>
<div>           
<a target="_blank" class="btn btn-outline-white btn-lg">Start Experiment    
<i class="fas fa-play ml-2"></i>
</a>

</div>
</Link>
</div>
           </div>
                </div>

                <div style={{position:'absolute', right:'0px', bottom:'0px', width:'40%', height:'50%', backgroundColor:'black'}}>





                </div>

            </section>
        </div>   

<div style={{position:'absolute', bottom:'0px', left:'50%', transform:'translate(-50%,0)', display:'inline-flex', width:'95%', height:'23%'}}>
        <div style={{width:'50%',  left:'0'}}>
        <img   style={{width:'99%', backgroundColor:'white', objectFit:'cover'}} src={dadolone2}></img>
        </div>
        <div style={{width:'50%',  float:'right'}}>
        <img   style={{width:'99%', backgroundColor:'white',  float:'right'}} src={dadolone}></img>
        </div>
        </div>

    </main>

   
</div>
</div>  
</div>
    );
  }
}

export default homeTest;