// Home.js
import '../App.css';
import React, { Component } from 'react';
import Loggin, { authenticationService } from './Loggin';

import { async } from 'rxjs/internal/scheduler/async';
import raven from '../Images/raven/1.png';
import g1 from '../Images/g1.png';
import g2 from '../Images/g2.png';
import g3 from '../Images/g3.png';
import g4 from '../Images/g4.png';
import dado from '../Images/dado.png';
import dado2 from '../Images/dado2.png';

import info from '../Images/info.png';
import statics from '../Images/statics.png';
import buttonImage from '../Images/bitmap2.png';

import exes from '../Images/exes.png';
import infos from '../Images/infos.png';
import InstagramEmbed from 'react-instagram-embed';
import ConsoleHelper from '../helper/ConsoleHelper';


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  const stimuli =  

  [ {
      name: 'stimuli_1',
      position: 0,
      image: require('../Images/stim_1.png')
  },
  {
      name: 'stimuli_2',
      position: 1,
      image: require('../Images/stim_2.png')
  },
  {
      name: 'stimuli_3',
      position: 2,
      image: require('../Images/stim_3.png')
  },
  {
      name: 'stimuli_4',
      position: 3,
      image: require('../Images/stim_4.png')
  },
  ]

class Home extends Component {





    constructor(props) {
        super(props);
        this.state = {
          nback: '',
          currentUser: authenticationService.currentUserValue,
          isf: true,
          counter: 0,
          counter2: 1,
          counter3: 2,
          out:true,
          out2:true,
          out3:true,
          width:'0%',
          width2:'0%',
          widthInfo:'0',
          opacity:'0'
        }
        this.myDivToFocus = React.createRef()
      }

      componentDidMount() {
        var h1 = parseInt(this.refs.header.offsetHeight);
        var h2 = parseInt(this.refs.headero.offsetHeight);
        var h3 = parseInt(this.refs.headeri.offsetHeight);
        window.addEventListener('scroll', this._calcScroll3.bind(this, h3));
        window.addEventListener('scroll', this._calcScroll.bind(this, h1));
        window.addEventListener('scroll', this._calcScroll2.bind(this, h2));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this._calcScroll);
        window.removeEventListener('scroll', this._calcScroll2);
        window.removeEventListener('scroll', this._calcScroll3);

    }
    
    _calcScroll(h1, h2) {
        var _window = window;
        var heightDiff = parseInt(h1);
        var heightDiff2 = parseInt(h2);
        var scrollPos = _window.scrollY;
        if (scrollPos > heightDiff+400) {
            // here this means user has scrolled past your header, 
            // you may rerender by setting State or do whatever
            this.setState({
                width:'50%',
                widthInfo:'1'

            });
        }        
        else {
            // here the user has scrolled back to header's territory, 
            // it's optional here for you to remove the element on navbar as stated in the question or not
            this.setState({
                width:'0%',
                widthInfo:'0'

            });
        }
    }

    _calcScroll3(h3) {
        var _window = window;
        var heightDiff = parseInt(h3) ;
       
        var scrollPos = _window.scrollY;
        if (scrollPos > heightDiff+2200) {
            // here this means user has scrolled past your header, 
            // you may rerender by setting State or do whatever
            this.setState({
                width2:'60%',
               
            });
        }     
        else {
            // here the user has scrolled back to header's territory, 
            // it's optional here for you to remove the element on navbar as stated in the question or not
            this.setState({
                width2:'0%',
            });
        }
    }

    _calcScroll2(h2) {
        var _window = window;
        var heightDiff = parseInt(h2);
       
        var scrollPos = _window.scrollY;
        if (scrollPos > heightDiff+2200) {
            // here this means user has scrolled past your header, 
            // you may rerender by setting State or do whatever
            this.setState({
                opacity:'1'
               
            });
        }     
        else {
            // here the user has scrolled back to header's territory, 
            // it's optional here for you to remove the element on navbar as stated in the question or not
            this.setState({
                opacity:'0'
            });
        }
    }
    

image() {
    return(<img onMouseOver= {this.nbackImages} onMouseOut= {this.out} style={{display: 'flex', height:'90px', width:'90px', margin:'auto'}} src={stimuli[this.state.counter].image}></img>)
}

out = () => {
    this.setState({out:true})
}
out2 = () => {
    this.setState({out2:true})
}
out3 = () => {
    this.setState({out3:true})
}

nbackImages = async() => {

    this.setState({out:false})

    for (var i = 0; i <= 3; i ++){

        if(this.state.out == false){
            if(this.state.counter == 0){
                this.setState({counter: this.state.counter + 1})
                await sleep(70)
            }else if (this.state.counter == 3 || i == 3){
                this.setState({counter: 0})
                i = 0;
                await sleep(60)
            }else{
                this.setState({counter: this.state.counter + 1})
                await sleep(40)
            }
        }else{
            this.setState({counter: this.state.counter})
            await sleep(50)
        }
    }
       
        
}

nbackImages2 = async() => {

    this.setState({out2:false})

    for (var i = 0; i <= 3; i ++){

        if(this.state.out2 == false){
            if(this.state.counter2 == 0){
                this.setState({counter2: this.state.counter2 + 1})
                await sleep(40)
            }else if (this.state.counter2 == 3 || i == 3){
                this.setState({counter2: 0})
                i = 0;
                await sleep(30)
            }else{
                this.setState({counter2: this.state.counter2 + 1})
                await sleep(70)
            }
        }else{
            this.setState({counter2: this.state.counter2})
            await sleep(50)
        }
    }
       
        
}

nbackImages3 = async() => {

    this.setState({out3:false})

    for (var i = 0; i <= 3; i ++){

        if(this.state.out3 == false){
            if(this.state.counter3 == 0){
                this.setState({counter3: this.state.counter3 + 1})
                await sleep(70)
            }else if (this.state.counter3 == 3 || i == 3){
                this.setState({counter3: 0})
                i = 0;
                await sleep(20)
            }else{
                this.setState({counter3: this.state.counter3 + 1})
                await sleep(30)
            }
        }else{
            this.setState({counter3: this.state.counter3})
            await sleep(50)
        }
    }
       
        
}

resolve = async() => {

    this.setState({counter:this.state.counter2, counter3:this.state.counter2})
    await sleep(1500)
    this.myDivToFocus.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "nearest",
        inline: 'center'
     })
    
}


  render() {
    
    let user = ''
    ConsoleHelper(authenticationService.currentUserValue) 
    return (

      
        
        <div style={{ overflowX:'hidden'}}>
      
           

     <div class='parall' style={{position:'relative'}}>
        <main ref='headero'  id='carj5' class="mt-5 pt-5 " style={{position:'relative', backgroundColor:'#2f3032', minWidth:'100%', borderWidth:'0px', margin:'50px 0 50px 0', borderRadius:'30px 30px 0 0'}} >
        
        
        <div id='' ref='header' style={{position:'relative', width:'95%', display:'flex', margin:'auto', borderRadius:'30px 30px 0 0', height:'90%'}} >
  
  

            <section ref={this.myDivToFocus} style={{backgroundColor:'#ffffff', width:'100%', borderRadius:'30px 30px 0 0'}}  id="intro">

  
                <div id='introse' class="card-body text-center py-5 px-5 my-5">
  
                    <h1  style= {{fontSize: '100px', color:'black', marginTop:'40px'}} class="mb-4">
                        <strong>NoCode</strong> <spam  style= {{fontSize: '80px', color:'grey', marginTop:'40px'}}>ws</spam>
                    </h1>
                    <p style= {{fontSize: '26px'}}>
                        <strong>Análisis y estadística para deportes electrónicos y jugadores</strong>
                    </p>
                   
                    <div style={{marginTop:'120px', marginBottom:'40px'}}  id='buttonComienzo'>
                    <a href="/loggin" class="btn btn-outline-white btn-lg">Comenzar análisis
                        <i class="fas fa-graduation-cap ml-2"></i>
                    </a>
                    </div>

                    
                </div>
                    
                
               

            </section>

           
        
        {/* <div style={{height:'auto ', width:'300px', marginRight:'90px', borderRadius:'10px', backgroundColor:'white', }} class="card-body text-center py-5 px-5 my-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            </div>
                 
            </div>
            <div style={{height:'auto ', width:'300px',borderRadius:'10px', backgroundColor:'white',  }} class="card-body text-center py-5 px-5 my-5">
            <div>
 
            </div> 
            </div>
            <div style={{height:'auto ', width:'300px', marginLeft:'90px',borderRadius:'10px', backgroundColor:'white',  }} class="card-body text-center py-5 px-5 my-5">

            <div>

            </div> 
            
            </div> */}




        </div>   

<div style={{display:'flex', margin:'auto', width:'95%', marginTop:'15px', justifyContent:'center'}}>
        <div style={{width:'50%',  float:'left'}}>
        <img   style={{width:'99%', backgroundColor:'white', paddingTop:'30px'}} src={dado}></img>
        </div>
        <div style={{width:'50%',  float:'right'}}>
        <img   style={{width:'99%', backgroundColor:'white', paddingTop:'30px',  float:'right'}} src={dado2}></img>
        </div>
        </div>
{/* 
<div class="row wow fadeIn" class="row wow fadeIn" style={{width:'100%', flexDirection:'row', marginTop:'60px', backgroundColor:'#f7fcff'}}>

<div onMouseOver= {this.nbackImages} onMouseOut= {this.out} style={{marginRight:'90px'}} class='box'>

<img  class='title' src={stimuli[this.state.counter].image}/>
</div>
<div style={{marginTop:'-60px'}} onMouseOver= {this.nbackImages2} onMouseOut= {this.out2} class='box'>

<img class='title' src={stimuli[this.state.counter2].image}></img>
</div>
<div onMouseOver= {this.nbackImages3} onMouseOut= {this.out3}  style={{marginLeft:'90px'}} class='box'>
<div class='wave -one'></div>
<div class='wave -two'></div>
<div class='wave -three'></div>
<div>
<img class='title' src={stimuli[this.state.counter3].image}></img>
</div>
</div>

            
           

            
        </div>      
        <div style={{height:'auto ', width:'40% !important',borderRadius:'10px', backgroundColor:'#f7fcff', padding:'20px'}} >
            <p style={{textAlign:'center', fontSize:'26px'}}> Conseguir que coincidan es posible.</p>
            <p style={{textAlign:'center', fontSize:'26px'}}> Adáptate, elige la mejor estrategia.</p>
            <div style={{margin:'auto', display:'flex', marginTop:'40px'}} id='buttonComienzo'>
                    <a onClick={this.resolve} class="btn btn-outline-white btn-lg">Quiero un GG
                        <i class="fas fa-graduation-cap ml-2"></i>
                    </a>
                    </div>
            </div>       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

     */}
    </main>
    </div>

    <div class='parall' style={{backgroundColor:'white', justifyContent:'centrer', position:'relative', marginTop:''}}>


<div class='parall' style={{backgroundColor:'white', justifyContent:'centrer', position:'relative' }}>

<div style={{position:'relative', display:'flex',  backgroundColor:'white',  width:'100%', justifyContent:'center'}}>
<div style={{position:'relative', marginTop:'auto', marginBottom:'auto',  fontSize:'60px', textAlign:'center', width:'50%', fontWeight:'900', padding:'150px', marginRight:'-5%',}}>
<img style={{heigh:'auto', width:'500px', backgroundColor:'#ffffff00'}} src= {buttonImage}/>
<div style={{position:'relative', marginTop:'10px', float:'left',fontSize:'36px', textAlign:'center', color:'#2f303269',  width:'100%', fontWeight:'900'}}>
Análisis de rendimiento y competiciones <br/> 
<a style={{color:'#0070C0'}}>e<a style={{color:'black'}}>Sports</a></a>
</div>
</div>
<div style={{position:'relative', display:'flex', float:'right', fontSize:'60px', textAlign:'center',  width:'50%', fontWeight:'900', padding:'150px', marginLeft:'-5%'}}>
Una herramienta con la que puedes medir tus habilidades y progreso como jugador. 
</div>
</div>

</div>



<div class='parall' style={{backgroundColor:'white', justifyContent:'centrer' }}>

<div style={{position:'absolute', display:'flex', left:'0',  width:'60%',marginTop:'0px',  flexDirection:'column', justifyContent:'center'}}>


<div style={{position:'relative', float:'right',fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
    <div class="col" ontouchstart="this.classList.toggle('hover');"  style={{position:'relative', margin:'auto',  fontSize:'52px', textAlign:'center', width:'500px', fontWeight:'900'}}>
    	<div class="container">
    	    <div class="front" style={{}}>
                <div class="inner" style={{position:'relative', marginTop:'90px', float:'right',fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    <div style={{position:'relative', marginTop:'90px', fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Capacidades<hr/>
                    <div style={{position:'relative', float:'right',fontSize:'28px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Psicología para medir<br/>
                    memoria, atención, reflejos...<br/> 
                    ¡Descubre nuestras pruebas!
                        </div>
                    </div>
                </div>
    	    </div>
    	    <div class="back">
    	    	<div class="inner">
                    <div style={{position:'relative', fontSize:'32px', textAlign:'center', width:'100%', fontWeight:'900'}}>
    	    	        <p>Psicología para medir<br/>
                           memoria, atención, reflejos...<br/> 
                           ¡Descubre nuestras pruebas!</p>
                    </div>
                </div>
    	    </div>
    	</div>
    </div>
</div>

<div style={{position:'relative',  float:'right',fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
    <div class="col" ontouchstart="this.classList.toggle('hover');"  style={{position:'relative', margin:'auto',  fontSize:'52px', textAlign:'center', width:'500px', fontWeight:'900'}}>
    	<div class="container">
    	    <div class="front" style={{}}>
                <div class="inner" style={{position:'relative', marginTop:'90px', float:'right',fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    <div style={{position:'relative', marginTop:'90px', fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Historial<hr/>
                    <div style={{position:'relative', float:'right',fontSize:'28px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Extracción de datos y análisis para<br/>
ver buenas y malas decisiones.<br/>
¡Aprende a aprender!
                        </div>
                    </div>
                </div>
    	    </div>
    	    <div class="back">
    	    	<div class="inner">
                    <div style={{position:'relative', fontSize:'32px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Extracción de datos y análisis para<br/>
ver buenas y malas decisiones.<br/>
¡Aprende a aprender!
                    </div>
                </div>
    	    </div>
    	</div>
    </div>
</div>

<div style={{position:'relative', float:'right',fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
    <div class="col" ontouchstart="this.classList.toggle('hover');"  style={{position:'relative', margin:'auto',  fontSize:'52px', textAlign:'center', width:'500px', fontWeight:'900'}}>
    	<div class="container">
    	    <div class="front" style={{}}>
                <div class="inner" style={{position:'relative', marginTop:'90px', float:'right',fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    <div style={{position:'relative', marginTop:'90px', fontSize:'52px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Objetivos<hr/>
                    <div style={{position:'relative', float:'right',fontSize:'28px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Podrás adaptar tu juego<br/>
a tu aprendizaje, no te frustres.<br/>
Juega divirtiéndote, gana aprendiendo.
                        </div>
                    </div>
                </div>
    	    </div>
    	    <div class="back">
    	    	<div class="inner">
                    <div style={{position:'relative', fontSize:'32px', textAlign:'center', width:'100%', fontWeight:'900'}}>
                    Podrás adaptar tu juego<br/>
a tu aprendizaje, no te frustres.<br/>
Juega divirtiéndote, gana aprendiendo.
                    </div>
                </div>
    	    </div>
    	</div>
    </div>
</div>

</div>



    <div  ref='headeri'   style={{width:'60%', display:'flex', float:'right', position:'relative', marginTop:'180px'}}>
    
    <div style={{opacity:this.state.widthInfo , backgroundColor:'#2f3032', diplay:'flex',  margin:'auto', position:'relative', marginBottom:'auto',  transition:'0.8s', borderRadius:'10px 10px 10px 10px'}} >

<div id='carj1'  style={{width:'100%', backgroundColor:'#2f3032', paddingTop:'1px', paddingBottom:'1px', paddingRight:'1px', paddingLeft:'1px',  backgroundColor:'#f7fcff', borderRadius:'10px 10px 10px 10px'}}>  

    <div id='carj2' style={{width:'100%', backgroundColor:'#2f3032', paddingBottom:'0px', paddingTop:'0px', borderRadius:'10px 10px 10px 10px'}}>
    <img style={{display: 'flex', margin:'auto', minHeight:'620px',  height:'620px ', opacity:this.state.widthInfo , borderRadius:'10px',backgroundColor:'white', transition:'0.8s' }} src={info}></img>

        {/* <div style={{height:'600px', marginRight:'30px',backgroundColor:'#ffffff'}}>
         <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center'}}>
<div style={{position:'relative', marginTop:'150px', float:'left',fontSize:'60px', textAlign:'center', width:'100%', fontWeight:'900'}}>
Aprendizaje,<br/>
</div>
<div style={{position:'relative', marginTop:'30px',float:'left', fontSize:'60px', textAlign:'center', width:'100%', fontWeight:'900'}}>
Psicología<br/>
</div>
<div style={{position:'relative', marginTop:'30px',float:'left',  fontSize:'60px', textAlign:'center', width:'100%', fontWeight:'900'}}>
y Análisis<br/>
</div>
</div>           

        </div> */}

    </div>

</div>

</div>

    </div>
    </div>



    <div class='parall' style={{display:'flex', flexDirection:'column', marginTop:'1340px', backgroundColor:'white', width:'100%', position:'relative', height:'900px' }}>
    <div style={{position:'relative', fontSize:'60px', textAlign:'center', width:'100%', fontWeight:'900', padding:'50px'}}>
Gana mientras juegas y te diviertes. <br/>
 ¡Mejora con nosotros! 
</div>
    <div class='row' style={{display:'flex', position:'absolute', width:'100%', height:'100%', marginTop:'40px'}}>
   
<div style={{height:'350px ', width:'350px',  display:'flex', justifyContent:'center', marginRight:'60px', borderRadius:'0px', backgroundColor:'#2f3032', position:'relative', marginBottom:'auto', marginTop:'auto', borderWidth:'1px', borderStyle:'solid', borderColor:'#f7fcff', borderRadius:'10px'}} class="text-center">
        <div id='carjC2' style={{position:'relative', marginTop:'auto', marginBottom:'auto',  display:'flex', flexDirection:'column',  justifyContent:'center', height:'300px', width:'300px', borderRadius:'10px'}} >
        <p style={{textAlign:'center', fontSize:'26px', color:'black', marginTop:'20px', width:'70%', margin:'auto'}}> Descriptivos generales</p>
        <img  style={{height:'auto ', marginBottom:'35px', width:'150px', margin:'auto'}} src={statics}></img>
        </div>
             
        </div>

        <div style={{height:'350px ', width:'350px',  display:'flex', justifyContent:'center', borderRadius:'0px', backgroundColor:'#2f3032', position:'relative', marginBottom:'auto', marginTop:'auto', borderWidth:'1px', borderStyle:'solid', borderColor:'#f7fcff', borderRadius:'10px'}} class="text-center">
        <div id='carjC2' style={{position:'relative', marginTop:'auto', marginBottom:'auto', display:'flex', flexDirection:'column',  justifyContent:'center', height:'300px', width:'300px', borderRadius:'10px'}} >
        <p style={{textAlign:'center', fontSize:'26px', color:'black', marginTop:'20px', width:'70%', margin:'auto'}}> Infografías personalizadas</p>
        <img  style={{height:'auto ', marginBottom:'35px', width:'150px', margin:'auto'}} src={infos}></img>
        </div>
             
    </div>
    <div   style={{height:'350px ', width:'350px',  display:'flex', justifyContent:'center',marginLeft:'60px', borderRadius:'0px', backgroundColor:'#2f3032', position:'relative', marginBottom:'auto', marginTop:'auto', borderWidth:'1px', borderStyle:'solid', borderColor:'#f7fcff', borderRadius:'10px'}} class="text-center">
        <div id='carjC2' style={{position:'relative', marginTop:'auto', marginBottom:'auto', display:'flex', flexDirection:'column',  justifyContent:'center', height:'300px', width:'300px', borderRadius:'10px'}} >
        <p style={{textAlign:'center', fontSize:'26px', color:'black', marginTop:'20px', width:'100%', margin:'auto'}}> Capacidad y juegos cognitivos</p>
        <img  style={{height:'auto ', marginBottom:'35px', width:'150px', margin:'auto'}} src={exes}></img>
      
        </div>
             
    </div>
    <div id='buttonComienzo' style={{position:'absolute', left:'50%', transform:'translate(-50%, 0)', bottom:'150px'}}>
 
 <a href="/loggin" class="btn btn-outline-white btn-lg">Comenzar análisis
     <i class="fas fa-graduation-cap ml-2"></i>
 </a>
 </div>
</div>
</div>


    
    {/* <div style={{width:'100%', float:'right'}}>
<div  style={{width:this.state.width2 , backgroundColor:'#2f3032', marginTop:'250px', marginBottom:'90px',  transition:'0.8s', float:"right"}} >

<div id='carj3'  style={{width:'100%', backgroundColor:'#2f3032', paddingTop:'1px', paddingBottom:'1px', paddingLeft:'1px',  backgroundColor:'#f7fcff'}}>  

    <div id='carj4' style={{width:'100%', backgroundColor:'#2f3032', paddingBottom:'30px', paddingTop:'30px'}}>

    
    <div class='col'> 
   
   <div ref={this.myDivToFocus} style={{display:'flex', justifyContent:'center', borderRadius:'10px', backgroundColor:'#2f3032'}} class="card-body text-center py-5 px-5 my-5">
           <div>
           <p style={{textAlign:'center', fontSize:'26px', color:'white'}}> Infoproductos</p>
           <img style={{display: 'flex', minHeight:'620px',  height:'620px ', opacity:this.state.widthInfo , borderRadius:'10px',backgroundColor:'white', transition:'0.8s' }} src={info}></img>
           </div>
                
           </div>
          
        

   </div>


    </div>

</div>

</div>
</div> */}
<div class='parall' style={{width:'100%'}} >

<div style={{width:'40%', height:'100%', float:'left',  opacity:1, position:'relative', display:'flex' }} >
    <div style={{position:'relative', display:'flex', margin:'auto', marginTop:'140px', marginBottom:'250px', height:'600px', width:'80%', backgroundColor:'white', borderRadius:'30px'}}>
    <div style={{position:'relative', fontSize:'60px', textAlign:'center', width:'100%', fontWeight:'900', padding:'50px'}}>
¡No te pierdas nuestras <br/>
 pruebas y test! 
</div>

    </div>
</div>

<div style={{width:this.state.width2, opacity:1, backgroundColor:'#ffffff', marginTop:'90px', marginBottom:'250px',  transition:'0.8s', float:'right', borderRadius:'10px 0px 0px 10px'}} >

<div id='carj3'  style={{width:'100%', backgroundColor:'#ffffff', paddingTop:'20px', paddingBottom:'20px', paddingLeft:'20px', backgroundColor:'#2f3032', borderRadius:'10px 0px 0px 10px'}}>  

    <div id='carj4' style={{width:'100%', backgroundColor:'#ffffff', paddingBottom:'30px', paddingTop:'30px', display:'flex', flexDirection:'row', borderRadius:'10px 0px 0px 10px'}}>

    <div style={{display:'flex', flexDirection:'column',  width:'100%', float:'right'}}>
    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'60px', backgroundColor:'#ffffff'}}>

<div onMouseOver= {this.nbackImages} onMouseOut= {this.out} style={{marginRight:'90px'}} class='box'>

<img  class='title' src={stimuli[this.state.counter].image}/>
</div>
<div style={{marginTop:'-60px'}} onMouseOver= {this.nbackImages2} onMouseOut= {this.out2} class='box'>

<img class='title' src={stimuli[this.state.counter2].image}></img>
</div>
<div onMouseOver= {this.nbackImages3} onMouseOut= {this.out3}  style={{marginLeft:'90px'}} class='box'>
{/* <div class='wave -one'></div>
<div class='wave -two'></div>
<div class='wave -three'></div> */}
<div>
<img class='title' src={stimuli[this.state.counter3].image}></img>
</div>
</div>

            
           

            
        </div>   
        <div style={{backgroundColor:'#ffffff'}}> 
        <div id='carjC3' style={{height:'auto ', width:'40%', borderRadius:'10px',  margin:'auto', padding:'30px'}} >
            <p style={{textAlign:'center', fontSize:'26px', color:'black', transition:'1.0s'}}> Conseguir que coincidan es posible.</p>
            <p class='frase' style={{textAlign:'center', fontSize:'26px', color:'white'}}> Adáptate, elige la mejor estrategia.</p>
            <div style={{margin:'auto', display:'flex', marginTop:'40px'}} id='buttonComienzo'>
                    <a onClick={this.resolve} class="btn btn-outline-white btn-lg">Quiero un GG
                        <i class="fas fa-graduation-cap ml-2"></i>
                    </a>
                    </div>
            </div>  
            </div>  
            </div>     
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}



    </div>

</div>

</div>
</div>
    <main >
{/* <div class="row wow fadeIn" style={{width:'80%', marginTop:'-300px', backgroundColor:''}}>
    <div class='col' style={{display:'flex' }}> 

    <div class='row' style={{display:'flex'}}>
    
    <div style={{height:'300px ', width:'300px', marginRight:'30px', display:'flex', justifyContent:'center', borderRadius:'10px', backgroundColor:'white'}} class="card-body text-center py-5 px-5 my-5">
            <div>
            <p style={{textAlign:'center', fontSize:'26px'}}> Descriptivos generales</p>
            <img style={{height:'auto ', marginTop:'25px', width:'150px'}} src={statics}></img>
            </div>
                 
            </div>



    </div>
 
    <div  class='row' style={{display:'flex'}}>

        <div style={{height:'300px ', width:'300px', display:'flex', justifyContent:'center', borderRadius:'10px', backgroundColor:'white'}} class="card-body text-center py-5 px-5 my-5">
            <div>
            <p style={{textAlign:'center', fontSize:'26px'}}> Infografías personalizadas</p>
            <img style={{height:'auto ', width:'150px'}} src={infos}></img>
            </div>
                 
        </div>

        <div id='buttonComienzo' style={{disply:'flex', margin:'auto'}}>
     
     <a href="/loggin" class="btn btn-outline-white btn-lg">Comenzar análisis
         <i class="fas fa-graduation-cap ml-2"></i>
     </a>
     </div>
        
        <div style={{height:'300px ', width:'300px', display:'flex', justifyContent:'center', borderRadius:'10px', backgroundColor:'white'}} class="card-body text-center py-5 px-5 my-5">
            <div>
            <p style={{textAlign:'center', fontSize:'26px'}}> Capacidad y juegos cognitivos</p>
            <img style={{height:'auto ', width:'150px'}} src={exes}></img>
          
            </div>
                 
        </div>
          
    </div>

    </div>
    
   
    <div class='col'> 
   
    <div ref={this.myDivToFocus} style={{display:'flex', justifyContent:'center', borderRadius:'10px', backgroundColor:'white'}} class="card-body text-center py-5 px-5 my-5">
            <div>
            <p style={{textAlign:'center', fontSize:'26px'}}> Infoproductos</p>
            <img style={{height:'620px ', width:'auto', borderRadius:'10px',backgroundColor:'white' }} src={info}></img>
            </div>
                 
            </div>
           
         

    </div>
  
   
</div> */}



    <div style={{marginTop:'200px'}} class="container" >
  
  <div  class='row'>
    <InstagramEmbed style={{marginRight:'40px'}}
  url='https://www.instagram.com/p/B42zvjjo33A'
  maxWidth={540}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
<InstagramEmbed style={{marginLeft:'40px'}}
  url='https://www.instagram.com/p/B4nfjwuIeDu'
  maxWidth={540}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div>
</div>
    </main>
    </div>
    </div>

   

    
    );
  }
}

export default Home;