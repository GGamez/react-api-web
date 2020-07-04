import React, { Component, useState } from 'react';
import '../../../App.css';
import img2 from '../../../Images/example_2.jpeg'
import img3 from '../../../Images/example_3.jpeg'
import img4 from '../../../Images/example_4.jpeg'
import img0 from '../../../Images/stim_0.jpeg'
import ravv from '../../../Images/ravv.png'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';
import axios from 'axios';
import Loggin, { authenticationService } from '../../Loggin';
import Select from 'react-select';
import ConsoleHelper from '../../../helper/ConsoleHelper'

const myTimer = setTimeout(function a(){ConsoleHelper('Timer executed')},5000);

function getTimeLeft(timeout){
      ConsoleHelper(Math.ceil((timeout._idleStart + timeout._idleTimeout)/1000 - process.uptime ));
    }

function stimuli (image) { return(
      
    {
        name: `stimuli_${image}`,
        position: image,
        image: require(`../../../Images/raven/${image}.png`)
    }
)}

const getValue = (value) => {

  if(value != ""){
    return(<h2 style={{color:'#00ff00'}}> {value} </h2> )
  }else{
    return(<h2 style={{color:'#ff0000'}}> ... </h2> )
  }
} 



  const options = [
    { value: '', label: '' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
  
  ];

  

class raven extends Component {

    // componentWillMount(){

    //     ConsoleHelper('asdasd')
    //     if(!this.state.isExample){
    //         this.getRandomImage(stimuli)
    //     }
    //     //this.getRandomImage(stimuli)
    // }
    handleChange = selectedOption => {

      this.setState({select : selectedOption})
      
      return(selectedOption)
     
    };

    handleFicha = () => {

     
      if(this.state.page == 0 && this.state.level == 36){

        if(this.state.listOrder.length == this.state.level){
          this.state.listOrder[35] = this.state.select
          this.setState({ficha:true, page: 1})
          
        }else{
          ConsoleHelper(this.state.level, 'yeyeyeyeyeyeye')
          this.state.listOrder.push(this.state.select)
          this.setState({ficha:true, page: 1})
          ConsoleHelper(this.state.level)
        }
     
        
      }else if(this.state.page == 0 ){
        
        this.setState({ficha:true, page: 1})
          //this.state.select = this.state.listOrdero[this.state.level]
          //this.setState({listOrder : [([this.state.level-1]) : {values : this.state.selectedOption.value, level: this.state.level}]})
        
      }
      else{
        this.setState({ficha:false, page:0})
      }
     
    };

    handleCard = (event) => {

     // ConsoleHelper(event)
      if(this.state.page == 0){
        this.setState({ficha:true, page: 1})
        
      }
      else{
       
        this.setState({ficha:false, page:0, level:event,select:this.state.listOrder[event-1] })
        this.getImage(event)
      }
     
    };

    handleOnKeyDown = (e) => {
        ConsoleHelper(e)
        if (['ArrowRight'].includes(e.key) && this.state.level < 36) {
          if(this.state.listOrder.length < this.state.level ){
            ConsoleHelper('asdasdasdasds')
            this.state.listOrder.push(this.state.select)
            this.state.listOrdero.push(this.state.level)
            this.setState({select:options[0]}); 
                 
          }else{
         
            this.state.listOrder[this.state.level-1] = this.state.select
            this.setState({select:this.state.listOrder[this.state.level]})
            //this.state.select = this.state.listOrdero[this.state.level]
            //this.setState({listOrder : [([this.state.level-1]) : {values : this.state.selectedOption.value, level: this.state.level}]})
          }
          
          this.getImage(this.state.level+1)
          e.preventDefault();
        }else if  (['ArrowLeft'].includes(e.key) && this.state.level > 1) {
          ConsoleHelper(this.state.listOrder[this.state.level-1])
          this.state.listOrder[this.state.level-1] = this.state.select
          this.setState({select:this.state.listOrder[this.state.level-2]})
          //this.state.select = this.state.listOrdero[this.state.level-2]
          //this.state.listorder[this.state.level-1].setState({values : this.state.selectedOption.value, level: this.state.level})
          this.getImage(this.state.level-1)
          
          e.preventDefault();
        }
      };

    handlepreImage = () =>{
      
      if( this.state.level > 1){
        ConsoleHelper(this.state.listOrder[this.state.level-1])
        this.state.listOrder[this.state.level-1] = this.state.select
        this.setState({select:this.state.listOrder[this.state.level-2]})
        //this.state.select = this.state.listOrdero[this.state.level-2]
        //this.state.listorder[this.state.level-1].setState({values : this.state.selectedOption.value, level: this.state.level})
        this.getImage(this.state.level-1)
        
      }

      
    }

    handlepostImage = () => {
      if(this.state.level < 36){
        //ConsoleHelper(this.state.listOrder)
        
        if(this.state.listOrder.length < this.state.level ){
          ConsoleHelper('asdasdasdasds')
          this.state.listOrder.push(this.state.select)
          this.state.listOrdero.push(this.state.level)
          this.setState({select:options[0]}); 
               
        }else{
       
          this.state.listOrder[this.state.level-1] = this.state.select
          this.setState({select:this.state.listOrder[this.state.level]})
          //this.state.select = this.state.listOrdero[this.state.level]
          //this.setState({listOrder : [([this.state.level-1]) : {values : this.state.selectedOption.value, level: this.state.level}]})
        }
        
        this.getImage(this.state.level+1)
      }
     
    }
  

   
    
    componentDidMount(){
      this.getImago(this.state.level)
      ConsoleHelper('asdasdasd')
    }
    

    async getImage(imagen) {

      if(this.state.listOrder.length <= imagen ){
        this.setState({select:options[0]}); 

      }
        let img = await stimuli(imagen);
        this.setState({image:img.image, level:imagen});
        ConsoleHelper(this.state.level, this.state.listOrder[imagen-1]) 

    }

    async getImago(imagen) {

      
      let img = await stimuli(imagen);
      this.setState({image:img.image, level:imagen});
      ConsoleHelper(this.state.level, this.state.listOrder ) 

  }


    constructor(props) {
        super(props);
        this.state = {
            experimento:'raven',
            currentUser: authenticationService.currentUserValue,
            level: 1,
            ficha : false,
            page: 0,
            select: options[0],
            image : '',
            listOrder:[],
            listOrdero:[],
            not: [],
            prevnum : '',
            tot: 0,
            isExample:true,
            record: {
                timestampStart: {0:['Empty Level'],1:[],2:[],3:[],4:[],},
                timestampPress: {0:['Empty Level'],1:[],2:[],3:[],4:[],},
                trial:'',
                isTarget: ''

            }
        }
        
      }

    senData = () => {
      const r = window.confirm("¿Estás seguro de haber terminado?"); if(r == true){axios.post('http://localhost:3000/testio', { accept: 'application/json','content-type': 'application/json', experiment:this.state, id:this.state.currentUser.usuario._id, lastExp: Math.floor(Date.now())}).then(()=>{
        return(window.location.href = "/cognitive-test")
      }); 
     // 
    };
      
     
  }



    isthisFicha(){
      if (!this.state.ficha){
        return( 
        
        <div style={{position:'relative'}}>
          
        <div style={{margin:'auto', position:'relative', justifyContent:'center'}}>
          
       <MDBContainer>
         
         <div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDown(e)} style={{position:'relative', height:'100%', width:'100%', overflow:'hidden', marginTop:'80px'}}>
               <div style={{display:'block', justifyContent:'center', margin:'auto', textAlign:'center', height:'auto', width:'auto'}}>
               <img style={{display:'flex', justifyContent:'center', margin:'auto', textAlign:'center', height:'auto', width:'auto'}} src={this.state.image}></img>     
             </div>
             </div>
      
                   </MDBContainer>
                   
                   </div>
                   <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'30px' }}>
                   <Select className ='mi-col-set' maxMenuHeight='60px !important' 
       value={this.state.select}
       onChange={this.handleChange}
       options={options}
     />

</div>

<div  onClick= {this.handleFicha} id='buttonComienzo' style={{display:'flex', marginTop:'30px'}}>
     
     <a class="btn btn-outline-white btn-lg">Ficha
         <i class="fas fa-graduation-cap ml-2"></i>
     </a>
     </div>
<div style={{display:'flex', marginTop:'30px', justifyContent:'center'}}>
<MDBRow>
<div  style={{display:'flex', justifyContent:'left', marginRight:'15px'}}>
<div  onClick= {this.handlepreImage} id='buttonComienzo' style={{disply:'flex', margin:'auto'}}>
     
     <a class="btn btn-outline-white btn-lg">Anterior
         <i class="fas fa-graduation-cap ml-2"></i>
     </a>
     </div>
</div>
<div  style={{display:'flex', justifyContent:'right',  marginLeft:'15px'}}>
<div  onClick= {this.handlepostImage} id='buttonComienzo' style={{disply:'flex', margin:'auto'}}>
     
     <a class="btn btn-outline-white btn-lg">Siguiente
         <i class="fas fa-graduation-cap ml-2"></i>
     </a>
     </div>
                   </div>
                   </MDBRow></div>

                  
                   </div>
)
      }else {

return(
  <div>

  <div  onClick= {this.senData} id='buttonComienzo' style={{display:'flex', paddingTop:'40px'}}>
     
     <a class="btn btn-outline-white btn-lg">¡He terminado!
         <i class="fas fa-graduation-cap ml-2"></i>
     </a>
     </div>
  <div style={{marginRight:'30px'}}>
   
   <li  style={{ display: 'flex', position:'relative',
  flexDirection: 'row', flexWrap:'wrap', justifyContent:'center', height:'auto'}}  className='row-8'>

<div >
    
                   </div>
    {this.state.listOrder.map((answers, key) => {
      return( 
      
        <div onClick= {event => this.handleCard(key+1)}>
      <MDBCard className = 'card-body' id='card-bodyo' style = {{width :'200px', marginTop:'20px', borderRadius:'15px', marginLeft:'30px', zIndex:'200' }}> 
      <MDBCardTitle  style={{textAlign:'center', textAlign:'center'}}>
      <h1>Nº: {key+1} </h1>     
      </MDBCardTitle>
      <hr/>
      <MDBCardText style={{textAlign:'center', textAlign:'center'}}>   
      {getValue(answers.value)}
      </MDBCardText>

      </MDBCard>
      
      </div>)
    })}
</li>

  </div>
  </div>
)
      }
    }
    


  render() {
   
    let counter  = 0;
   
    let timerId = setInterval(() => {counter += 1; ConsoleHelper(counter)}, 1000);

    // after 5 seconds stop
    setTimeout(() => { clearInterval(timerId); ConsoleHelper(); }, 5000);

  

    return (
<div>

  


       
                         
       <div  >{this.isthisFicha()}</div>
       <div>
       <svg  style={{position:'relative', backgroundAttachment: 'fixed' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
       </div>

                          </div>                   
    );
  }
}

export default raven;