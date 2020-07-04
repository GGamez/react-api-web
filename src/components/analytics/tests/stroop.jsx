import React, { Component, useState } from 'react';
import img from '../../../Images/example_1.jpeg'
import img2 from '../../../Images/example_2.jpeg'
import img3 from '../../../Images/example_3.jpeg'
import img4 from '../../../Images/example_4.jpeg'
import img0 from '../../../Images/stim_0.jpeg'
import botta from '../../../Images/botonlibre.png'
import bottb from '../../../Images/botonpress.png'
import axios from 'axios';
import Loggin, { authenticationService } from '../../Loggin';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';
import ConsoleHelper from '../../../helper/ConsoleHelper'

function returneo() {
    return(window.location.href='/cognitive-test')
}
const Nano = require('timestamp-nano');


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

const stimuliP = [
    {
        name: 'red',
        position: 0,
        color: '#ff0000'
    },
    {
        name: 'green',
        position: 1,
        color: '#00ff00'
    },
    {
        name: 'yellow',
        position: 2,
        color: '#d0ff00'
    },
    {
        name: 'black',
        position: 3,
        color: '#000000'
    },
    
    
]

const stimulicolor = [
    [

        {
            name: 'green',
            position: 1,
            counter: 0,
            color: '#00ff00'
        },
    {
        name: 'yellow',
        position: 2,
        counter: 0,
        color: '#d0ff00'
    },
    {
        name: 'black',
        position: 3,
        counter: 0,
        color: '#000000'
    },
  
  

    
],
[

    {
        name: 'yellow',
        position: 2,
        counter: 0,
        color: '#d0ff00'
    },
    
    {
        name: 'black',
        position: 3,
        counter: 0,
        color: '#000000'
    },
   
    {
        name: 'red',
        position: 0,
        counter: 0,
        color: '#ff0000'
    },

    
],
[

    {
        name: 'black',
        position: 3,
        counter: 0,
        color: '#000000'
    },

    {
        name: 'red',
        position: 0,
        counter: 0,
        color: '#ff0000'
    },
   
   
   
    {
        name: 'green',
        position: 1,
        counter: 0,
        color: '#00ff00'
    },
 
    
],
[

    
    {
        name: 'red',
        position: 0,
        counter: 0,
        color: '#ff0000'
    },

    {
        name: 'green',
        position: 1,
        counter: 0,
        color: '#00ff00'
    },
     {
        name: 'yellow',
        position: 2,
        counter: 0,
        color: '#d0ff00'
    },
   
    
  
    
]
]
   
class stroop extends Component {

    stimuli = [
        {
            name: 'red',
            position: 0,
            color: '#ff0000'
        },
        {
            name: 'green',
            position: 1,
            color: '#00ff00'
        },
        {
            name: 'yellow',
            position: 2,
            color: '#d0ff00'
        },
        {
            name: 'black',
            position: 3,
            color: '#000000'
        },
        
        
    ]
    stimulia = [
        {
            name: 'red',
            position: 0,
            counter:0,
            color: '#ff0000'
        },
        {
            name: 'green',
            position: 1,
            counter:0,
            color: '#00ff00'
        },
        {
            name: 'yellow',
            position: 2,
            counter:0,
            color: '#d0ff00'
        },
        {
            name: 'black',
            position: 3,
            counter:0,
            color: '#000000'
        },
        
        
    ]
   

    stimulib = [
        {
            name: 'red',
            position: 0,
            counter:0,
            color: '#ff0000'
        },
        {
            name: 'green',
            position: 1,
            counter:0,
            color: '#00ff00'
        },
        {
            name: 'yellow',
            position: 2,
            counter:0,
            color: '#d0ff00'
        },
        {
            name: 'black',
            position: 3,
            counter:0,
            color: '#000000'
        },
        
    ]
    stimulic = [
    
        {
            name: 'red',
            position: 0,
            counter:0,
            color: '#ff0000'
        },
        {
            name: 'green',
            position: 1,
            counter:0,
            color: '#00ff00'
        },
        {
            name: 'yellow',
            position: 2,
            counter:0,
            color: '#d0ff00'
        },
        {
            name: 'black',
            position: 3,
            counter:0,
            color: '#000000'
        },
        
    ]
    countfffo= [
        [
        0,
        0,
      
        0,
        0,
        
    ],
    [
        0,
        0,
      
        0,
        0,
        
     
        
    ],
    [
       
        0,
        0,
      
        0,
        0,
        
        
    ],
    [
        0,
        0,
      
        0,
        0,
        
        
    ]
]
    stimulicolor = [
        [
             
        {
            name: 'green',
            position: 1,
            counter: 0,
            color: '#00ff00'
        },
        {
            name: 'yellow',
            position: 2,
            counter: 0,
            color: '#d0ff00'
        },
        {
            name: 'black',
            position: 3,
            counter: 0,
            color: '#000000'
        },
     
  
        
    ],
    [
        {
            name: 'red',
            position: 0,
            counter: 0,
            color: '#ff0000'
        },
        {
            name: 'yellow',
            position: 2,
            counter: 0,
            color: '#d0ff00'
        },
        {
            name: 'black',
            position: 3,
            counter: 0,
            color: '#000000'
        },
     
    
        
    ],
    [
       
        {
            name: 'black',
            position: 3,
            counter: 0,
            color: '#000000'
        },
        {
            name: 'red',
            position: 0,
            counter: 0,
            color: '#ff0000'
        },
        {
            name: 'green',
            position: 1,
            counter: 0,
            color: '#00ff00'
        },
     
        
    ],
    [
         {
            name: 'yellow',
            position: 2,
            counter: 0,
            color: '#d0ff00'
        },
       
        {
            name: 'red',
            position: 0,
            counter: 0,
            color: '#ff0000'
        },
        {
            name: 'green',
            position: 1,
            counter: 0,
            color: '#00ff00'
        },
      
        
    ]
]
       


      
    // componentWillMount(){

    // //     ConsoleHelper('asdasd')
    //     if(!this.state.isExample){
    //         this.getRandomImage(stimuli)
    //     }
    //     //this.getRandomImage(stimuli)
    // }

     handleOnKeyDown = async(e) => {
        // //ConsoleHelper(e)

       
            if (['s'].includes(e.key)) {
                //this.setState({button: require('../../../Images/botonpress.png')});
                
                if(this.state.color !== '#ff0000'){
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('mistakeeee')
                }else{
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('YEEEEEEEEEEEEEEEP')
                }
                try{
                    this.state.record.timestampPress[this.state.level][this.state.levelo].push((this.state.record.timestampStart[this.state.level][this.state.levelo] -  Math.floor(Date.now())));
                    this.state.record.colorePressed[this.state.level][this.state.levelo].push("red")
                    // ConsoleHelper(Nano.fromDate(new Date()).toJSON());
                }catch{
    
                    // ConsoleHelper(this.state.record.timestampPress)
                    //this.state.record.timestampPress[this.state.level][this.state.levelo].push( Math.floor(Date.now()))
                }
    
                // if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                //     this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'HIT';
    
                //     if(this.state.record.timestampPress[this.state.level][this.state.levelo].length <= 2){
                //         this.state.TRHIT[this.state.level] += this.state.record.timestampPress[this.state.level][this.state.levelo][1];
                //         this.state.accuracyXblockHits[this.state.level] += 1;
                //     }
                //     //this.setState({is_Cr_Hi_Fa_Om: {[this.state.level] : {[this.state.levelo] : 'HIT'}}})
                // }else if(this.state.isTarget[this.state.level][this.state.levelo] == false){
                //     this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'FA';
                //     if(this.state.record.timestampPress[this.state.level][this.state.levelo].length <= 2){
                //         this.state.TRFA[this.state.level] += this.state.record.timestampPress[this.state.level][this.state.levelo][1];
                //         this.state.failsXblockFa[this.state.level] += 1;
                //     }
    
                //     //this.setState({is_Cr_Hi_Fa_Om: {[this.state.level] : {[this.state.levelo] : 'FA'}}})
                // }
    
            }
        
            if (['f'].includes(e.key)) {
                //this.setState({button: require('../../../Images/botonpress.png')});
                
                if(this.state.color !== '#00ff00'){
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('mistakeeee')
                }else{
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('YEEEEEEEEEEEEEEEP')
                }
                try{
                    this.state.record.timestampPress[this.state.level][this.state.levelo].push((this.state.record.timestampStart[this.state.level][this.state.levelo] -  Math.floor(Date.now())));

                    this.state.record.colorePressed[this.state.level][this.state.levelo].push("green")
                    // ConsoleHelper(Nano.fromDate(new Date()).toJSON());
                }catch{
    
                    // ConsoleHelper(this.state.record.timestampPress)
                    //this.state.record.timestampPress[this.state.level][this.state.levelo].push( Math.floor(Date.now()))
                }
            }
        
            if (['i'].includes(e.key)) {
                //this.setState({button: require('../../../Images/botonpress.png')});
                
                if(this.state.color !== '#d0ff00'){
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('mistakeeee')
                }else{
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('YEEEEEEEEEEEEEEEP')
                }
                try{
                    this.state.record.timestampPress[this.state.level][this.state.levelo].push((this.state.record.timestampStart[this.state.level][this.state.levelo] -  Math.floor(Date.now())));

                    this.state.record.colorePressed[this.state.level][this.state.levelo].push("yellow")
                    // ConsoleHelper(Nano.fromDate(new Date()).toJSON());
                }catch{
    
                    // ConsoleHelper(this.state.record.timestampPress)
                    //this.state.record.timestampPress[this.state.level][this.state.levelo].push( Math.floor(Date.now()))
                }
            }
       
            if (['p'].includes(e.key)) {
                //this.setState({button: require('../../../Images/botonpress.png')});
                
                if(this.state.color !== '#000000'){
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('mistakeeee')
                }else{
                    ConsoleHelper(this.state.color)
                    ConsoleHelper('YEEEEEEEEEEEEEEEP')
                }
                try{
                    this.state.record.timestampPress[this.state.level][this.state.levelo].push((this.state.record.timestampStart[this.state.level][this.state.levelo] -  Math.floor(Date.now())));

                    this.state.record.colorePressed[this.state.level][this.state.levelo].push("black")
                    // ConsoleHelper(Nano.fromDate(new Date()).toJSON());
                }catch{
    
                    // ConsoleHelper(this.state.record.timestampPress)
                    //this.state.record.timestampPress[this.state.level][this.state.levelo].push( Math.floor(Date.now()))
                }
            
        }
      
       
        
      

        //ConsoleHelper(this.state.isPressed)
        this.setState({pushed : true, isPressed:true });
        //ConsoleHelper(this.state.isPressed)
        await sleep(200);
        this.setState({pushed: false});
      };

      hasBeenPressed(){
        return new Promise((resolve, reject) => {
            //ConsoleHelper(this.state.isPressed)
            window.addEventListener('keypress', resolve, {once:true});
        })

        // if(pressed == true){
        //     callback()
        // }
      }

      getbutton(){
          if(this.state.pushed == true){
              return(
<img  onClick={this.handleOnKeyDown} style={{position:'relative', display:'flex', justifyContent:'center', margin:'auto', marginTop:'100px', textAlign:'center', height:'75px', width:'75px'}} src= {botta}></img>
              )
          }else{
              return(<img  onClick={this.handleOnKeyDown} style={{position:'relative', display:'flex', justifyContent:'center', margin:'auto', marginTop:'100px', textAlign:'center', height:'75px', width:'75px'}} src= {bottb}></img>)
          }
      }

      isExample(bool, level){

        if(bool == false){


                return(

                    <div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDown(e)} style={{position:'relative', display:'flex', outlineWidth: '0', justifyContent:'center',  height:'100%', width:'100%', overflow:'hidden'}}>
                <div className='col'>
                <div style={{display:'block', justifyContent:'center', margin:'auto', marginTop:'120px',textAlign:'center', height:'400px', width:'400px'}}>
                <p style={{display:this.state.word, justifyContent:'center', margin:'auto', textAlign:'center', color: this.state.color , fontSize:'140px', backgroundColor:this.state.backgroundColor}}> {this.state.colorName} </p>
                <img style={{display:this.state.block, justifyContent:'center', margin:'auto', textAlign:'center', height:'400px', width:'400px'}} src={this.state.image}></img>
              </div>
              {this.getbutton()}
              </div>
              </div>)
            }



        else if(level == 1){
            this.state.tot = 0;
            return(
                <div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'relative', display:'flex', outlineWidth: '0', justifyContent:'center', height:'100%', width:'100%', overflow:'hidden'}}>

            <div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>
            <img style={{width:'80%', margin:'auto', }} src={img}></img>
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> <br/> ¡Vamos a probar con <br/> <b>n = 1! </b>  </h2>
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> n = 1 significa que al contar la distancia entre imágenes, llagamos hasta <b>1 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/> <b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>
          </div>
          </div>)
        }
        else if (level==2){
            this.state.tot = 0;
            this.state.tot = 0;
            let counterRed = 0;
            let counterGreen  = 0;
            let counterYellow = 0;
            let counterBlack = 0;

           let totred = 0;
           let totgreen = 0;
           let totyellow = 0;
           let totblack = 0;
            let timeReaction = 0;
           
            Object.keys(this.state.record.colore).map(blocks => {

                if(blocks == 1){
                    this.state.record.colore[blocks].map((istarget, index) => {
                        if(istarget == '#ff0000'){
                            totred += 1;
                            if(this.state.record.colorePressed[blocks][index][1] == 'red'){
                                counterRed += 1;
                                timeReaction += this.state.record.timestampPress[blocks][index][1]
                                ConsoleHelper(istarget, index, counterRed)
                            }
                        }else if(istarget == '#00ff00'){
                            totgreen += 1;
                            if(this.state.record.colorePressed[blocks][index][1] == 'green'){
                                counterGreen += 1;
                                timeReaction += this.state.record.timestampPress[blocks][index][1]
                                ConsoleHelper(istarget, index, counterRed)
                            }
                        }else if(istarget == '#d0ff00'){
                            totyellow += 1;
                            if(this.state.record.colorePressed[blocks][index][1] == 'yellow'){
                                counterYellow += 1;
                                timeReaction += this.state.record.timestampPress[blocks][index][1]
                                ConsoleHelper(istarget, index, counterRed)
                            }
                        }else if(istarget == '#000000'){
                            totblack += 1;
                            if(this.state.record.colorePressed[blocks][index][1] == 'black'){
                                counterBlack += 1;
                                timeReaction += this.state.record.timestampPress[blocks][index][1]
                                ConsoleHelper(istarget, index, counterRed)
                            }
                        }


                        ConsoleHelper(istarget)
                        ConsoleHelper(index)
                        ConsoleHelper(totred)
                        ConsoleHelper(totgreen)
                        ConsoleHelper(totyellow)
                        ConsoleHelper(totblack)

                    })


                   
                }   
            });

           
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'relative',  display:'flex',outlineWidth: '0', justifyContent:'center', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>            
<p style={{color:'red', textAlign:'center'}}> Has acertado {(counterRed/21)} </p> <br/>
<p style={{color:'green', textAlign:'center'}}> Has acertado {(counterGreen/21)}</p> <br/>
<p style={{color:'yellow', textAlign:'center'}}> Has acertado {(counterYellow/21)}</p> <br/>
<p style={{color:'black', textAlign:'center'}}> Has acertado {(counterBlack/21)}</p> <br/>
<p style={{color:'blue', textAlign:'center'}}> En total {((counterRed+counterGreen+counterYellow+counterBlack)/84)}, tardando de promedio {(timeReaction/84)*(-1)} milisegundos</p> <br/>
          </div>
          </div>)
        }else if (level==3){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'relative', display:'flex', outlineWidth: '0', justifyContent:'center', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>            <img style={{width:'80%', margin:'auto', marginTop:'60px'}} src={img2}></img>

            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}><br/> ¡Vamos a seguir con <br/> <b>n = 2! </b>   n = 2 significa que al contar la distancia entre imágenes, llagamos hasta <b>2 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>
          </div>
          </div>)
        }else if (level==4){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'relative',  display:'flex',outlineWidth: '0', justifyContent:'center', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>            <img style={{width:'80%', margin:'auto', marginTop:'60px'}} src={img3}></img>

            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> <br/> ¡Vamos a probar con <br/> <b>n = 3! </b>  n = 3 significa que al contar la distancia entre imágenes, llagamos hasta <b>3 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>
          </div>
          </div>)
        }else if (level==5){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'relative',  display:'flex',outlineWidth: '0', justifyContent:'center', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>            <img style={{width:'80%', margin:'auto', marginTop:'60px'}} src={img3}></img>

            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> <br/> ¡Vamos a seguir con <br/> <b>n = 3! </b>  n = 3 significa que al contar la distancia entre imágenes, llagamos hasta <b>3 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>
          </div>
          </div>)
        }
        else if (level==6){
            this.state.tot = 0;
            let counterRed = 0;
            let counterGreen  = 0;
            let counterYellow = 0;
            let counterBlack = 0;
            

            

           
            // ConsoleHelper(this.state)
            
            // axios.post('http://localhost:3000/n-back', { accept: 'application/json','content-type': 'application/json',experiment:this.state, id:this.state.currentUser.usuario._id, lastExp: Math.floor(Date.now()) })

            return(  <div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>
            <img src={img}></img>
            <h1 style={{width:'80%', margin:'auto', marginTop:'60px'}}> ¡Resultados guardados! <br/>  </h1>
            <div >
    <MDBRow>
      <div  onClick={returneo} style={{display:'flex',  marginTop:'30px',  marginLeft:'15px'}}>
                     <MDBBtn  >Regresar</MDBBtn>
                   </div></MDBRow>
                   </div>          </div> )

        }
    }
      handleOnKeyDownExample = (e) => {

        if (this.state.level == '1'){
            if(e.keyCode == '52') {
            // ConsoleHelper('yeah')

            this.setState({isExample:false, isPressed:false})
            this.getRandomImage(this.stimuli, 1)
          e.preventDefault();
        }
    }
        else if(this.state.level == '2'){
            if(e.keyCode == '54') {
                // ConsoleHelper('yeah')

                this.setState({isExample:false, isPressed:false})
                this.getRandomImage(this.stimuli, 2)
              e.preventDefault();
        }
    }else if(this.state.level == '3'){
            if(e.keyCode == '54') {
                // ConsoleHelper('yeah')

                this.setState({isExample:false, isPressed:false})
                this.getRandomImage(this.stimuli, 2)
              e.preventDefault();
        }
    }else if(this.state.level == '4'){
            if(e.keyCode == '52') {
                // ConsoleHelper('yeah')

                this.setState({isExample:false, isPressed:false})
                this.getRandomImage(this.stimuli, 3)
              e.preventDefault();
        }
    }else if(this.state.level == '5'){
        if(e.keyCode == '52') {
            // ConsoleHelper('yeah')

            this.setState({isExample:false, isPressed:false})
            this.getRandomImage(this.stimuli, 3)
          e.preventDefault();
    }
}

};




    async getRandomImage(imgAr, lvl) {
        let countfff1 = 0;
        let countfff2 = 0;
        let countfff3 = 0;
        let countfff = 0;



   
   

        for (let cap = 0; cap <=3; cap ++){

          
            this.setState({randomizea:1,
                randomizeb:2,
                randomizec:3,tota:0, totb:0, totc:0, randomized:3})

              
            let maximum = 0;

            for (let i=0; i<=20; i++){
                let levelo = 0

                if(cap == 1){
                    levelo = i + 21
                    maximum = 21;
                }else if(cap == 2){
                    levelo = i + 42
                    maximum = 21;
                }else if(cap == 3){
                    levelo = i + 63
                    maximum = 21;
                }
                else{
                    levelo = i
                    maximum = 21;
                }
                //this.state.record.timestampPress[this.state.level].push([levelo])
                this.setState({levelo:levelo, isPressed:false, backgroundColor:'#ffffff00'})
                let cR = 'CR'
                this.state.is_Cr_Hi_Fa_Om[this.state.level].push(cR)
                this.state.record.timestampPress[this.state.level].push([levelo])
                this.state.record.colorePressed[this.state.level].push([levelo])

                this.state.record.timestampStart[this.state.level].push( Math.floor(Date.now()))
                countfff += 1;
                if (levelo <= 84){


                        if(this.state.tota == 7){
                            this.setState({randomized: (this.state.randomized - 1), randomizea:0, tota: 0})
                            
                            if(this.state.randomizeb != 0){
                                this.setState({randomizeb:1})
                                if(this.state.randomizec != 0){
                                    this.setState({randomizec:2})
                                }
                            }else{
                                if(this.state.randomizec != 0){
                                    this.setState({randomizec:1})
                                }    
                            }
                        
                        }
                        
                        if(this.state.totb == 7){
                            this.setState({randomized: (this.state.randomized - 1),  randomizeb:0, totb: 0})
                            // if(this.state.randomizea != 0){
                            //     this.setState({randomizea:1})
                            // }
                            if(this.state.randomizea != 0){
                                if(this.state.randomizec != 0){
                                    this.setState({randomizec:2})
                                }
                            }else{
                                if(this.state.randomizec != 0){
                                    this.setState({randomizec:1})
                                }
                            }
                           
                        }
                        if(this.state.totc == 7){
                            this.setState({randomized: (this.state.randomized - 1), randomizec:0, totc: 0})                           
                            // if(this.state.randomizea != 0){
                            //     this.setState({randomizea:1})
                            // }
                        }

                        var num = Math.floor( Math.random() * this.state.randomized) + 1 ;
                         


                        if (num == this.state.randomizec){
                            let imgArr = this.stimulic;
                            ConsoleHelper('CCCCCCCC')
                            var nam = Math.floor( Math.random() * imgArr.length );
                            countfff3 += 1
                            ConsoleHelper(imgArr)
                            let img = imgArr[nam];
                            this.stimulic[nam].counter += 1;
                            this.setState({colorName:' ', image: img0});
                            // ConsoleHelper(this.state.listOrder, imgAr, levelo, lvl,img)
                            await sleep(200)
                            
                            this.setState({color:img.color, colorName: img.name, backgroundColor:img.color, tot: (this.state.tot +1),totc: (this.state.totc + 1) })
                            // ConsoleHelper(this.state.tot)
                            if(this.stimulic[nam].counter == 7){
                                this.stimulic.splice(nam, 1)
                            }
                            
                                
                            //this.stimulia.splice(nam, 1)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(false)
                            ConsoleHelper(this.stimulic)
                            

                        }
                        else if (num == this.state.randomizea){

                            let imgArr = this.stimulia;
                            ConsoleHelper('AAAAAAAA')
                            var nam = Math.floor( Math.random() * imgArr.length );
                            countfff1 += 1
                            ConsoleHelper(imgArr)
                            let img = imgArr[nam];
                            this.stimulia[nam].counter += 1;
                            this.setState({colorName:' ', image: img0});
                            // ConsoleHelper(this.state.listOrder, imgAr, levelo, lvl,img)
                            await sleep(200)
                            
                            this.setState({color:img.color, colorName: img.name, tot: (this.state.tot +1),tota: (this.state.tota + 1) })
                            // ConsoleHelper(this.state.tot)
                            if(this.stimulia[nam].counter == 7){
                                this.stimulia.splice(nam, 1)
                            } 
                            //this.stimulia.splice(nam, 1)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(true)
                            ConsoleHelper(this.stimulia)
                          

                        }else if (num == this.state.randomizeb){
                            countfff2 += 1
                            let imgArr = this.stimulib;
                            ConsoleHelper('BBBBBBBBB')
                           
                            var nam = Math.floor( Math.random() * imgArr.length );
                            let imag = imgArr[nam];
                            let colr = [];
                            ConsoleHelper(nam, imgArr)
                            this.stimulib[nam].counter += 1;
                            if(this.stimulicolor[imag.position].length != 0){
                                
                                var defNamColor = Math.floor( Math.random() * this.stimulicolor[imag.position].length);

                            
                                colr = this.stimulicolor[imag.position][defNamColor]
                                
                                this.stimulicolor[imag.position][defNamColor].counter = (this.stimulicolor[imag.position][defNamColor].counter+1);
                                this.countfffo[imag.position][colr.position] += 1;

                                
                                if( this.stimulicolor[imag.position][defNamColor].counter == 2){
                                    this.stimulicolor[imag.position].splice(defNamColor, 1)
                                }
                            }else{
                                
                                var defNamColor = Math.floor( Math.random() * stimulicolor[imag.position].length);
                                colr = stimulicolor[imag.position][0]
                                this.countfffo[imag.position][colr.position] += 1;
                            }
                                
                            
                            
                         

                            this.setState({colorName:' ', image: img0})
                            // ConsoleHelper(this.state.tot)
                            await sleep(200)
                            this.state.listOrder[this.state.level].push(imag.position)
                            this.state.isTarget[this.state.level].push(false)
                            this.setState({color:imag.color, colorName: colr.name, tot: (this.state.tot +1),totb: (this.state.totb + 1) })
                            if(this.stimulib[nam].counter == 7){
                                this.stimulib.splice(nam, 1)
                            }
                                
                            
                           // this.stimulib.splice(nam, 1)
                        }else{
                            ConsoleHelper('NOOOOOOOOO' + num)
                            var nam = Math.floor( Math.random() * imgAr.length );
                            let img = imgAr[nam];
                            this.setState({colorName:' '})
                            // ConsoleHelper(this.state.listOrder, imgAr, levelo, lvl,img)
                            await sleep(200)
                            this.setState({color:'#000000', colorName: 'noooooo', tot: (this.state.tot +1) })
                            // ConsoleHelper(this.state.tot)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(true) 
                        }
                        this.state.record.colore[this.state.level].push(this.state.color)
                        this.state.record.coloreName[this.state.level].push(this.state.colorName)
                        await this.hasBeenPressed();

                    }
                // ConsoleHelper(this.state)
                if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                    this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'OMMISSION';
                }

                this.state.record.timestampStart[this.state.level].map((date, idx) => {

                })
               
            }
            if(cap == 3) {
                ConsoleHelper(countfff)
                ConsoleHelper(countfff1)
                ConsoleHelper(countfff2)
                ConsoleHelper(countfff3)
                ConsoleHelper(this.countfffo)
                ConsoleHelper(this.stimulicolor)
                ConsoleHelper(this.state)
                this.setState({isExample:true, level:(this.state.level + 1)});
                // ConsoleHelper(this.state)
            }

        }

    

    }


    constructor(props) {
        super(props);
        this.state = {
            experimento:'stroop',
            currentUser: authenticationService.currentUserValue,
            level: 1,
            levelo:'',
            image : img0,
            randomized: 3,
            randomizea:1,
            randomizeb:2,
            randomizec:3,

            
            color: '',
            colorName:'',
            notColor: [],
            backgroundColor:'#ffffff00',
            TRHIT : {1:0,2:0,3:0,4:0,5:0},
            TRFA : {1:0,2:0,3:0,4:0,5:0},
            button : require('../../../Images/botonlibre.png'),

            listOrder:{0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
            isTarget: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
            is_Cr_Hi_Fa_Om: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
            accuracyXblockHits: {1:0,2:0,3:0,4:0,5:0},
            accuracyXblockCr: {1:0,2:0,3:0,4:0,5:0},
            failsXblockOm: {1:0,2:0,3:0,4:0,5:0},
            failsXblockFa: {1:0,2:0,3:0,4:0,5:0},
            reactionTime: {rtHits: [], rtCorrectRejections: [], rtOmissions:[], rtFalseAlarm:[] },

            word:'flex',
            block:'flex',

            isPressed: false,
            not: [],
            prevnum : '',
            tota: 0,
            totb: 0,
            totc: 0,
            
            isExample:true,
            record: {
                timestampStart: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
                timestampPress: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
                colore: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
                coloreName: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
                colorePressed: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},

                trial:'',
                isTarget: ''

            }
        }
      }





  render() {


    return (
        <div>
       {this.isExample(this.state.isExample, this.state.level)}
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

       </div>
    );
  }
}

export default stroop;