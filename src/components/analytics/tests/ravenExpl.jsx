import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';
import tet from '../../../Images/raven/prueba.png'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';


class ravenExpl extends Component {

  constructor(props) {
    super(props);
    this.state = {

      currentUser: authenticationService.currentUserValue,
    }
  }

  handleExo = () => {
    window.location.href = "/raven-test"
  }
  render() {
  
     
   
    return (
        <div class="instructions" style={{margin:'auto', width:'60%', paddingTop: '5%',paddingBottom: '5%', fontSize:'22px'}}>	


<p>  ¡Hola! En esta tarea vas a hacer una prueba de razonamiento. Te recuerdo las <b>instrucciones:</b> </p> <br/>
<p> - La regla más importante, aunque parezca un clichè, <b>haz la tarea lo mejor que puedas y en el menor tiempo posible </b>. Eso sí, hazlo tranquílo, no te juegas un aprobado, el único objetivo es mejorar.</p> <br/>
<p> - En la tarea se presentan imagénes con una serie de figuras. Siempre faltará una figura en la imagen y tú objetivo es señalar entre las opciones qué figura es la que encaja en la imagen. Siempre hay una <b> ÚNICA opción correcta</b>. Abajo podrás ver un ejemplo. En este caso tendrías que seleccionar la opción número 1 que es la correcta. </p> <img src={tet}  style={{display:'flex', height:'450px', width:'550px', margin:'auto', justifyContent:'center'}}/>
<p> - La prueba consta de <b>36 figuras (ítems)</b>. Si no consigues resolver una figura puededes pasar y volver a ella luego. Para pasar de figura tienes que marcar la respuesta y pulsar en el boton 'Record' e irás automáticamente a la siguiente figura.</p>
<p> Para volver a una figura específica puedes pulsar en el botón 'Ficha' que se encuentra en el inferior de la pantalla y luego seleccionar el número de figura a la que quieres volver. Podrás ver en la pantalla de 'Ficha' los ítems que has dejado sin responder al igual que  los que ya has respondido.</p>
<p> <b>Atención</b>. Si por algún casual vuelves a una figura en la que habías respondido y no quieres cambiar la respuesta , vuelve a marcar la respuesta que habías elegido o haz click en el botón de 'Ficha' pero <b>NO</b> pulses el botón record ya que esto borraria tu respuesta.</p><br/>
<p>- Si te resulta imposible alguna figura siempre la puedes dejar en blanco después de haberlo intentado.</p> <br/>


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

export default ravenExpl;