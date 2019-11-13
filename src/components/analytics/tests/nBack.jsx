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

function returneo() {
    return(window.location.href='/cognitive-test')
}
const Nano = require('timestamp-nano');

  const stimuli = [
    {
        name: 'stimuli_1',
        position: 0,
        image: require('../../../Images/stim_1.jpeg')
    },
    {
        name: 'stimuli_2',
        position: 1,
        image: require('../../../Images/stim_2.jpeg')
    },
    {
        name: 'stimuli_3',
        position: 2,
        image: require('../../../Images/stim_3.jpeg')
    },
    {
        name: 'stimuli_4',
        position: 3,
        image: require('../../../Images/stim_4.jpeg')
    },
    {
        name: 'stimuli_5',
        position: 4,
        image: require('../../../Images/stim_5.jpeg')
    },
    {
        name: 'stimuli_6',
        position: 5,
        image: require('../../../Images/stim_6.jpeg')
    },
    {
        name: 'stimuli_7',
        position: 6,
        image: require('../../../Images/stim_7.jpeg')
    },
    {
        name: 'stimuli_8',
        position: 7,
        image: require('../../../Images/stim_8.jpeg')
    },
    {
        name: 'stimuli_9',
        position: 8,
        image: require('../../../Images/stim_9.jpeg')
    },
    {
        name: 'stimuli_0',
        position: 9,
        image: require('../../../Images/stim_10.jpeg')
    }
]
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


class nBack extends Component {

    // componentWillMount(){

    //     console.log('asdasd')
    //     if(!this.state.isExample){
    //         this.getRandomImage(stimuli)
    //     }
    //     //this.getRandomImage(stimuli)
    // }

     handleOnKeyDown = async(e) => {
        //console.log(e)
     
        if (['ArrowRight'].includes(e.key)) {
            this.setState({button: require('../../../Images/botonpress.png')});
            try{
                this.state.record.timestampPress[this.state.level][this.state.levelo].push((this.state.record.timestampStart[this.state.level][this.state.levelo] -  Math.floor(Date.now())));
                console.log(Nano.fromDate(new Date()).toJSON());
            }catch{
                
                console.log(this.state.record.timestampPress)
                //this.state.record.timestampPress[this.state.level][this.state.levelo].push( Math.floor(Date.now()))
            }
            
            
          
        }
        this.setState({pushed : true });
        await sleep(200);
        this.setState({pushed: false});
      };


      getbutton(){
          if(this.state.pushed == true){
              return(
<img style={{display:'flex', justifyContent:'center', margin:'auto', marginTop:'150px', textAlign:'center', height:'75px', width:'75px'}} src= {botta}></img>
              )
          }else{
              return(<img style={{display:'flex', justifyContent:'center', margin:'auto', marginTop:'150px', textAlign:'center', height:'75px', width:'75px'}} src= {bottb}></img>)
          }
      }

      isExample(bool, level){
    
        if(bool == false){

           
                return( 
                
                    <div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDown(e)} style={{position:'absolute', left:'0', height:'100%', width:'100%', overflow:'hidden'}}>
                <div style={{display:'block', justifyContent:'center', margin:'auto', marginTop:'120px',textAlign:'center', height:'400px', width:'400px'}}>
                <img style={{display:'flex', justifyContent:'center', margin:'auto', textAlign:'center', height:'400px', width:'400px'}} src={this.state.image}></img>     
              </div>
              {this.getbutton()}
              </div>)
            }
            
            
    
        else if(level == 1){
            this.state.tot = 0;
            return(
                <div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'absolute', left:'0', height:'100%', width:'100%', overflow:'hidden'}}>

            <div style={{display:'block', marginTop:'100px', textAlign:'center', height:'auto', width:'auto'}}>
            <img src={img}></img> 
            <h1 style={{width:'80%', margin:'auto', marginTop:'60px'}}> En el siguiente ejercicio aparecerá una secuencia de imágenes como la que ves, de una en una. Tendrás que pulsar la tecla '->' (flecha derecha) cuando se repita una imagen cada "n", donde "n" es la distancia entre imágenes o nivel de dificultad. ¡Vamos a probar con <br/> <b>n = 1! </b>  </h1> 
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> n = 1 significa que al contar la distancia entre imágenes, llagamos hasta <b>1 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/> <b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>   
          </div>
          </div>)
        }
        else if (level==2){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'absolute', left:'0', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'100px', textAlign:'center', height:'auto', width:'auto'}}>            <img src={img2}></img> 
           
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> n = 2 significa que al contar la distancia entre imágenes, llagamos hasta <b>2 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>  
          </div>
          </div>)
        }else if (level==3){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'absolute', left:'0', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'100px', textAlign:'center', height:'auto', width:'auto'}}>            <img src={img2}></img> 
           
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> n = 2 significa que al contar la distancia entre imágenes, llagamos hasta <b>2 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2> 
          </div>
          </div>)
        }else if (level==4){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'absolute', left:'0', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'100px', textAlign:'center', height:'auto', width:'auto'}}>            <img src={img3}></img> 
           
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> n = 3 significa que al contar la distancia entre imágenes, llagamos hasta <b>3 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>    
          </div>
          </div>)
        }else if (level==5){
            this.state.tot = 0;
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'absolute', left:'0', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'100px', textAlign:'center', height:'auto', width:'auto'}}>            <img src={img3}></img> 
           
            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> n = 3 significa que al contar la distancia entre imágenes, llagamos hasta <b>3 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>   
          </div>
          </div>)
        }
        else if (level==6){
            this.state.tot = 0;
            axios.post('https://young-shore-87060.herokuapp.com/n-back', { accept: 'application/json','content-type': 'application/json',experiment:this.state, id:this.state.currentUser.usuario._id })
            
            return(  <div style={{display:'block', marginTop:'100px', textAlign:'center', height:'auto', width:'auto'}}>
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
            console.log('yeah')
            
            this.setState({isExample:false})
            this.getRandomImage(stimuli, 1)
          e.preventDefault();
        }
    }
        else if(this.state.level == '2'){
            if(e.keyCode == '54') {
                console.log('yeah')
                
                this.setState({isExample:false})
                this.getRandomImage(stimuli, 2)
              e.preventDefault();
        }
    }else if(this.state.level == '3'){
            if(e.keyCode == '54') {
                console.log('yeah')
                
                this.setState({isExample:false})
                this.getRandomImage(stimuli, 2)
              e.preventDefault();
        }
    }else if(this.state.level == '4'){
            if(e.keyCode == '52') {
                console.log('yeah')
                
                this.setState({isExample:false})
                this.getRandomImage(stimuli, 3)
              e.preventDefault();
        }
    }else if(this.state.level == '5'){
        if(e.keyCode == '52') {
            console.log('yeah')
            
            this.setState({isExample:false})
            this.getRandomImage(stimuli, 3)
          e.preventDefault();
    }
}

};
    
    
    

    async getRandomImage(imgAr, lvl) {


        for (let cap = 0; cap <=3; cap ++){
            
           
            this.setState({tot:0})
            let maximum = 0;

            for (let i=0; i<=4; i++){
                let levelo = 0
                
                if(cap == 1){
                    levelo = i + 5
                    maximum = 2;
                }else if(cap == 2) {
                    levelo = i + 10
                    maximum = 1;
                }else if(cap == 3) {
                    levelo = i + 15
                    maximum = 2;
                }else{
                    levelo = i
                    maximum = 1;
                }
                this.state.record.timestampPress[this.state.level].push([levelo])
                this.setState({levelo:levelo})
                this.state.record.timestampStart[this.state.level].push( Math.floor(Date.now()))
               if(levelo<lvl){ 
                var nam = Math.floor( Math.random() * imgAr.length );
                var img = imgAr[nam];
                if(this.state.listOrder[this.state.level][levelo-lvl] == img.position){
                    this.setState({not: []})
                    stimuli.map(images => {
                    if (images.image != img.image){            
                        this.state.not.push(images)
                        }
                    })
                    var defNam = Math.floor( Math.random() * this.state.not.length );
                    img = this.state.not[defNam]
                }
               
                this.setState({image:img0})
                console.log(this.state.tot)
                await sleep(200)  
                this.state.listOrder[this.state.level].push(img.position)
                this.state.isTarget[this.state.level].push(false)
                this.setState({image:img.image})
                }
                else{  
                    if ((4-i) < (maximum - this.state.tot)){
                        var img = imgAr[( this.state.listOrder[this.state.level][levelo-lvl])];
                            this.setState({image:img0})
                            await sleep(200) 
                            this.setState({image:img.image, tot: (this.state.tot + 1) })
                            console.log(this.state.tot)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(true)
                            this.setState({not: []})
                            console.log('NOoOOOOOOOOOOOOOOOOOO')
                            stimuli.map(images => {
                            if (images.image != img.image){            
                                this.state.not.push(images)
                                }
                            })
                    }      
                    else if (this.state.tot < maximum){
                        var num = Math.floor( Math.random() * (2) + 1 );
                        console.log(num)
                        if (num == 2){ 
                            var img = imgAr[( this.state.listOrder[this.state.level][levelo-lvl])];
                            this.setState({image:img0})
                            console.log(this.state.listOrder, imgAr, levelo, lvl,img)
                            await sleep(200) 
                            this.setState({image:img.image, tot: (this.state.tot + 1) })
                            console.log(this.state.tot)
                            this.state.listOrder[this.state.level].push(img.position)   
                            this.state.isTarget[this.state.level].push(true)
                        
                        }else if (num == 1){
                            var nam = Math.floor( Math.random() * imgAr.length );
                            var img = imgAr[nam];
                            if(this.state.listOrder[this.state.level][levelo-lvl] == img.position){
                                this.setState({not: []})
                                stimuli.map(images => {
                                if (images.image != img.image){            
                                    this.state.not.push(images)
                                    }
                                })
                                var defNam = Math.floor( Math.random() * this.state.not.length );
                                img = this.state.not[defNam]
                            }
                           
                            this.setState({image:img0})
                            console.log(this.state.tot)
                            await sleep(200)  
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(false)
                            this.setState({image:img.image})
                        }
                    }
                    
                    else{
                        var nam = Math.floor( Math.random() * imgAr.length );
                            var img = imgAr[nam];
                            if(this.state.listOrder[this.state.level][levelo-lvl] == img.position){
                                this.setState({not: []})
                                stimuli.map(images => {
                                if (images.image != img.image){            
                                    this.state.not.push(images)
                                    }
                                })
                                var defNam = Math.floor( Math.random() * this.state.not.length );
                                img = this.state.not[defNam]
                            }
                           
                            this.setState({image:img0})
                            console.log(this.state.tot)
                            await sleep(200)  
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(false)
                            this.setState({image:img.image})
                        
                        console.log('YESSSSSSSSSSSSSSSSSSS')
                    }
                    
                    
                    
                }
    
               
                console.log(this.state)
                this.state.record.timestampStart[this.state.level].map((date, idx) => {
                    
                })
                await sleep(2000)    
            }   
            if(cap == 3) {
                this.setState({isExample:true, level:(this.state.level + 1)})
            }
            
        }
        
    }


    constructor(props) {
        super(props);
        this.state = {
            experimento:'n-Back',
            currentUser: authenticationService.currentUserValue,
            level: 1,
            levelo:'',
            image : img0,
           
            button : require('../../../Images/botonlibre.png'),

            listOrder:{0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
            isTarget: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},

            not: [],
            prevnum : '',
            tot: 0,
            isExample:true,
            record: {
                timestampStart: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
                timestampPress: {0:['Empty Level'],1:[],2:[],3:[],4:[],5:[]},
                trial:'',
                isTarget: ''

            }
        }
      }

    
    


  render() {
    
   
    return (
        <div>
       {this.isExample(this.state.isExample, this.state.level)}
       </div>
    );
  }
}

export default nBack;