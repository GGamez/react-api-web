import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';
import tet from '../../../Images/example_3.jpeg'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';


class nBackExpl extends Component {

  constructor(props) {
    super(props);
    this.state = {

      currentUser: authenticationService.currentUserValue,
    }
  }

  handleExo = () => {
    window.location.href = "/memory-test"
  }
  render() {
  
     
   
    return (
        <div class="instructions" style={{margin:'auto', width:'60%', paddingTop: '5%',paddingBottom: '5%', fontSize:'30px'}}>	


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
    );
  }
}

export default nBackExpl;