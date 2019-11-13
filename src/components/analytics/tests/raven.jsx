import React, { Component, useState } from 'react';
import '../../../App.css';
import img2 from '../../../Images/example_2.jpeg'
import img3 from '../../../Images/example_3.jpeg'
import img4 from '../../../Images/example_4.jpeg'
import img0 from '../../../Images/stim_0.jpeg'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';
import axios from 'axios';
import Loggin, { authenticationService } from '../../Loggin';
import Select from 'react-select';


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

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
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

    //     console.log('asdasd')
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

     
      if(this.state.page == 0){
        this.setState({ficha:true, page: 1})
        
      }else{
        this.setState({ficha:false, page:0})
      }
     
    };

    handleCard = (event) => {

     // console.log(event)
      if(this.state.page == 0){
        this.setState({ficha:true, page: 1})
        
      }else{
       
        this.setState({ficha:false, page:0, level:event,select:this.state.listOrder[event-1] })
        this.getImage(event)
      }
     
    };

    handleOnKeyDown = (e) => {
        console.log(e)
        if (['ArrowRight'].includes(e.key) && this.state.level < 36) {
            this.setState({level:(this.state.level + 1)})
            this.getImage(this.state.level)
          e.preventDefault();
        }else if  (['ArrowLeft'].includes(e.key) && this.state.level > 1) {
            this.setState({level:(this.state.level - 1)})
            this.getImage(this.state.level)
          e.preventDefault();
        }
      };

    handlepreImage = () =>{
      
      if( this.state.level > 1){
        console.log(this.state.listOrder[this.state.level-1])
        this.state.listOrder[this.state.level-1] = this.state.select
        this.setState({select:this.state.listOrder[this.state.level-2]})
        //this.state.select = this.state.listOrdero[this.state.level-2]
        //this.state.listorder[this.state.level-1].setState({values : this.state.selectedOption.value, level: this.state.level})
        this.getImage(this.state.level-1)
        
      }

      
    }

    handlepostImage = () => {
      if(this.state.level < 36){
        //console.log(this.state.listOrder)
        
        if(this.state.listOrder.length < this.state.level ){
          console.log('asdasdasdasds')
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
      console.log('asdasdasd')
    }
    

    async getImage(imagen) {

      if(this.state.listOrder.length <= imagen ){
        this.setState({select:options[0]}); 

      }
        let img = await stimuli(imagen);
        this.setState({image:img.image, level:imagen});
        console.log(this.state.level, this.state.listOrder[imagen-1]) 

    }

    async getImago(imagen) {

      
      let img = await stimuli(imagen);
      this.setState({image:img.image, level:imagen});
      console.log(this.state.level, this.state.listOrder ) 

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
      const r = window.confirm("¿Estás seguro de haber terminado?"); if(r == true){axios.post('https://young-shore-87060.herokuapp.com/raven', { accept: 'application/json','content-type': 'application/json',experiment:this.state, id:this.state.currentUser.usuario._id}).then(()=>{
        return(window.location.href = "/cognitive-test")
      }); 
     // 
    };
      
     
  }
    isthisFicha(){
      if (!this.state.ficha){
        return( <div style={{position:'relative'}}>
        <div style={{margin:'auto', position:'relative', justifyContent:'center'}}>
       <MDBContainer>
         
         <div tabIndex="1" onKeyDown={(e) => this.handleOnKeyDown(e)} style={{position:'relative', height:'100%', width:'100%', overflow:'hidden', marginTop:'50px'}}>
               <div style={{display:'block', justifyContent:'center', margin:'auto', textAlign:'center', height:'auto', width:'auto'}}>
               <img style={{display:'flex', justifyContent:'center', margin:'auto', textAlign:'center', height:'auto', width:'auto'}} src={this.state.image}></img>     
             </div>
             </div>
      
                   </MDBContainer>
                   
                   </div>
                   <div style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:'row', }}>
                   <Select className ='mi-col-set' maxMenuHeight='60px !important' 
       value={this.state.select}
       onChange={this.handleChange}
       options={options}
     />
</div>
<div style={{display:'flex', marginTop:'100px', justifyContent:'center'}}>
<MDBRow>
<div  style={{display:'flex', justifyContent:'left', marginRight:'15px'}}>
<MDBBtn onClick= {this.handlepreImage} color="indigo" type='submit' >Anterior</MDBBtn>
</div>
<div  style={{display:'flex', justifyContent:'right',  marginLeft:'15px'}}>
                     <MDBBtn onClick= {this.handlepostImage} color="indigo" type='submit' >Siguiente</MDBBtn>
                   </div>
                   </MDBRow></div>

                  
                   </div>
)
      }else {

return(
  <div style={{marginRight:'30px'}}>
    <div >
    <MDBRow>
      <div  onClick={this.senData} style={{display:'flex',  marginTop:'30px',  marginLeft:'15px'}}>
                     <MDBBtn  >¡He terminado!</MDBBtn>
                   </div></MDBRow>
                   </div>
   <li  style={{ display: 'flex', position:'relative',
  flexDirection: 'row', flexWrap:'wrap', justifyContent:'center', marginTop:'40px', height:'300px'}}  className='row-8'>
    {this.state.listOrder.map((answers, key) => {
      return( 
      
        <div onClick= {event => this.handleCard(key+1)}>
      <MDBCard className = 'card-body' id='card-bodyo' style = {{width :'200px', marginTop:'20px', borderRadius:'15px', marginLeft:'30px'}}> 
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
)
      }
    }
    


  render() {
   
  
    
    return (
<div style={{position:'relative'}}>

  
<div style={{marginTop:'30px', position:'relative'}}>
       <MDBRow>
       <div  onClick= {this.handleFicha} style={{display:'flex', justifyContent:'left', marginRight:'15px',position:'relative'}}>
       <MDBBtn  color="indigo" type='submit' >Ficha</MDBBtn>
       </div>
       
                          </MDBRow></div>
       <div style={{position:'relative'}} >{this.isthisFicha()}</div>

                          </div>                   
    );
  }
}

export default raven;