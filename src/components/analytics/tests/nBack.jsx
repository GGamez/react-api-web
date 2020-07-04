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

    //     ConsoleHelper('asdasd')
    //     if(!this.state.isExample){
    //         this.getRandomImage(stimuli)
    //     }
    //     //this.getRandomImage(stimuli)
    // }

     handleOnKeyDown = async(e) => {
        //ConsoleHelper(e)

        if (['ArrowRight'].includes(e.key)) {
            this.setState({button: require('../../../Images/botonpress.png')});

            try{
                this.state.record.timestampPress[this.state.level][this.state.levelo].push((this.state.record.timestampStart[this.state.level][this.state.levelo] -  Math.floor(Date.now())));
                ConsoleHelper(Nano.fromDate(new Date()).toJSON());
            }catch{

                ConsoleHelper(this.state.record.timestampPress)
                //this.state.record.timestampPress[this.state.level][this.state.levelo].push( Math.floor(Date.now()))
            }

            if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'HIT';

                if(this.state.record.timestampPress[this.state.level][this.state.levelo].length <= 2){
                    this.state.TRHIT[this.state.level] += this.state.record.timestampPress[this.state.level][this.state.levelo][1];
                    this.state.accuracyXblockHits[this.state.level] += 1;
                }
                //this.setState({is_Cr_Hi_Fa_Om: {[this.state.level] : {[this.state.levelo] : 'HIT'}}})
            }else if(this.state.isTarget[this.state.level][this.state.levelo] == false){
                this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'FA';
                if(this.state.record.timestampPress[this.state.level][this.state.levelo].length <= 2){
                    this.state.TRFA[this.state.level] += this.state.record.timestampPress[this.state.level][this.state.levelo][1];
                    this.state.failsXblockFa[this.state.level] += 1;
                }

                //this.setState({is_Cr_Hi_Fa_Om: {[this.state.level] : {[this.state.levelo] : 'FA'}}})
            }

        }
        this.setState({pushed : true });
        await sleep(200);
        this.setState({pushed: false});
      };


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
                <img style={{display:'flex', justifyContent:'center', margin:'auto', textAlign:'center', height:'400px', width:'400px'}} src={this.state.image}></img>

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
            return(
<div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDownExample(e)} style={{position:'relative',  display:'flex',outlineWidth: '0', justifyContent:'center', height:'100%', width:'100%', overflow:'hidden'}}>

<div style={{display:'block', marginTop:'180px', textAlign:'center', height:'auto', width:'auto'}}>            <img style={{width:'80%', margin:'auto', marginTop:'60px'}} src={img2}></img>

            <h2 style={{width:'80%', margin:'auto', marginTop:'60px'}}> <br/> ¡Vamos a probar con <br/> <b>n = 2! </b> n = 2 significa que al contar la distancia entre imágenes, llagamos hasta <b>2 </b>. <br/> Pulsa el número de la imagen repetida del ejemplo para <b> COMENZAR </b><br/><b>¡ RECUERDA </b> que tendrás  pulsar la tecla '->' (flecha derecha) cuando toque !</h2>
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
            Object.keys(this.state.isTarget).map(blocks => {

                if(blocks >= 1){
                    this.state.isTarget[blocks].map((istarget, index) => {
                        if(istarget == false){
            
                            if(this.state.record.timestampPress[blocks][index].length < 2){
                                this.state.accuracyXblockCr[blocks] += 1;
                            }
                            //this.setState({is_Cr_Hi_Fa_Om: {[this.state.level] : {[this.state.levelo] : 'HIT'}}})
                        }else if(istarget == true){

                            if(this.state.record.timestampPress[blocks][index].length < 2){
                                this.state.failsXblockOm[blocks] += 1;
                            }
            
                            //this.setState({is_Cr_Hi_Fa_Om: {[this.state.level] : {[this.state.levelo] : 'FA'}}})
                        }
                    })
                    
    
                }

              
               
            });

            

           
            ConsoleHelper(this.state)
            
            axios.post('https://young-shore-87060.herokuapp.com/n-back', { accept: 'application/json','content-type': 'application/json',experiment:this.state, id:this.state.currentUser.usuario._id, lastExp: Math.floor(Date.now()) })

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
            ConsoleHelper('yeah')

            this.setState({isExample:false})
            this.getRandomImage(stimuli, 1)
          e.preventDefault();
        }
    }
        else if(this.state.level == '2'){
            if(e.keyCode == '54') {
                ConsoleHelper('yeah')

                this.setState({isExample:false})
                this.getRandomImage(stimuli, 2)
              e.preventDefault();
        }
    }else if(this.state.level == '3'){
            if(e.keyCode == '54') {
                ConsoleHelper('yeah')

                this.setState({isExample:false})
                this.getRandomImage(stimuli, 2)
              e.preventDefault();
        }
    }else if(this.state.level == '4'){
            if(e.keyCode == '52') {
                ConsoleHelper('yeah')

                this.setState({isExample:false})
                this.getRandomImage(stimuli, 3)
              e.preventDefault();
        }
    }else if(this.state.level == '5'){
        if(e.keyCode == '52') {
            ConsoleHelper('yeah')

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
                let cR = 'CR'
                this.state.is_Cr_Hi_Fa_Om[this.state.level].push(cR)
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
                ConsoleHelper(this.state.tot)
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
                            ConsoleHelper(this.state.tot)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(true)
                            this.setState({not: []})
                            ConsoleHelper('NOoOOOOOOOOOOOOOOOOOO')
                            stimuli.map(images => {
                            if (images.image != img.image){
                                this.state.not.push(images)
                                }
                            })
                            if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                                this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'OM';
                            }
                    }
                    else if (this.state.tot < maximum){
                        var num = Math.floor( Math.random() * (2) + 1 );
                        ConsoleHelper(num)
                        if (num == 2){
                            var img = imgAr[( this.state.listOrder[this.state.level][levelo-lvl])];
                            this.setState({image:img0})
                            ConsoleHelper(this.state.listOrder, imgAr, levelo, lvl,img)
                            await sleep(200)
                            this.setState({image:img.image, tot: (this.state.tot + 1) })
                            ConsoleHelper(this.state.tot)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(true)
                            if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                                this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'OM';
                            }

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
                            ConsoleHelper(this.state.tot)
                            await sleep(200)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(false)
                            this.setState({image:img.image})
                            if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                                this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'CR';
                            }
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
                            ConsoleHelper(this.state.tot)
                            await sleep(200)
                            this.state.listOrder[this.state.level].push(img.position)
                            this.state.isTarget[this.state.level].push(false)
                            this.setState({image:img.image})
                            if(this.state.isTarget[this.state.level][this.state.levelo] == true){
                                this.state.is_Cr_Hi_Fa_Om[this.state.level][this.state.levelo] = 'CR';
                            }
                        ConsoleHelper('YESSSSSSSSSSSSSSSSSSS')
                    }

                   



                }


                ConsoleHelper(this.state)
                

                this.state.record.timestampStart[this.state.level].map((date, idx) => {

                })
                await sleep(500)
            }
            if(cap == 3) {
                this.setState({isExample:true, level:(this.state.level + 1)});
                ConsoleHelper(this.state)
            }

        }

    }


    constructor(props) {
        super(props);
        this.state = {
            experimento:'n-Back',
            currentUser: authenticationService.currentUserValue,
            level: 5,
            levelo:'',
            image : img0,
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
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

       </div>
    );
  }
}

export default nBack;