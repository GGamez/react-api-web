import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';
import tet from '../../../Images/example_3.jpeg'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';
import ConsoleHelper from '../../../helper/ConsoleHelper'


class nBackExpl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:0,
      date:0,
      currentUser: authenticationService.currentUserValue,
    }
  }

  
  componentDidMount(){

    fetch(`https://young-shore-87060.herokuapp.com/time-to-nback`, {
method: 'get',
headers: new Headers ({id: authenticationService.currentUserValue.usuario._id})
}).then(res => res.json())
.then((data) => { 
  ConsoleHelper(data)
  if (data.size !== 0){
    this.setState({data:Math.floor(data.date.dateExp), date:Math.floor(Date.now())})
  }


})
.then(() => {
    ConsoleHelper(this.state)
})
.catch(( err ) => ConsoleHelper(err))


    
}

// redirects(){
//   if((this.state.date - this.state.data) < (60*60*24*20) ){
//       return(
      
//      window.alert('Parece que aún no han pasado dos semanas desde la última vez que lo hiciste...'), window.location.href = "/cognitive-test"          
//          )
//   }
// }
  handleExo = () => {
    window.location.href = "/memory-test"
  }
  render() {
  
    if(((this.state.date - this.state.data)/1000) < (60*60*24*14) && this.state.data !== 0){
    
      return(
      
     window.alert('Parece que aún no han pasado dos semanas desde la última vez que lo hiciste...'), window.location.href = "/cognitive-test"          
         )
  }
   
    return (

      <div>
        
        <div class="instructions" >	


<p>  ¡Hola! En esta tarea vas a hacer una prueba de Memoria de trabajo. Será corta y tendrás que
estar MUY concentrado así que da lo mejor de ti. Te recuerdo las instrucciones: <b>instrucciones:</b> </p> <br/>
<p> - La tarea consiste en la presentación de una serie de figuras abstractas. Se presentará una
a la vez, es decir, se presenta una figura y después de un periodo muy pequeño de tiempo
se presentará otra. <b>La presentación no parará </b> hasta que se complete una serie de 20
figuras.</p> <br/>
<p> - Tu objetivo será indicar pulsando una tecla (La flecha derecha) cuando una imagen se ha
repetido con anterioridad en la posición n que vendrá marcada por el nivel.</p>
<p> - Harás varios bloques con diferentes niveles. Los niveles se diferencian en la n posiciones
atrás de las figuras que se repiten y que tienes que indicar.</p>
<p> ¿Suponiendo que ahora este es el nivel n=3 que figura tendrías que pulsar? La solución
correcta es la <b>figura número 4 </b>. Si quieres cuenta con el dedo cuantas posiciones han
pasado hasta que se ha repetido la figura y verás que han pasado 3 posiciones, es decir, ha
sido un <b>n=3 </b></p>
<br/>
<img src={tet} style={{display:'flex',  width:'90%', margin:'auto', textAlign:'center', justifyContent:'center', position:'relative'}}/>
<br/>
<p> Por último, tranquilo, haz la tarea lo mejor que puedas, solo necesitas estar muy
concentrado. No durará más de 5 minutos. ¡Suerte!</p> <br/>


<div style={{marginTop:'30px', position:'relative'}}>
       <MDBRow>
       <div  onClick= {this.handleExo} style={{display:'flex', justifyContent:'left', marginRight:'15px',position:'relative'}}>
       <MDBBtn  color="indigo" type='submit' >Comenzar</MDBBtn>
       </div>
       
                          </MDBRow></div>



</div>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

                          </div>
    );
  }
}

export default nBackExpl;