import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';
import tet from '../../../Images/raven/prueba.png'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBCardText } from 'mdbreact';
import '../../../App.css';
import ConsoleHelper from '../../../helper/ConsoleHelper'

class ravenExpl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:0,
      date:0,
      currentUser: authenticationService.currentUserValue,
    }
  }

  componentDidMount(){

    fetch(`http://localhost:3000/time-to-raven`, {
method: 'get',
headers: new Headers ({id: authenticationService.currentUserValue.usuario._id})
}).then(res => res.json())
.then((data) => { 


  if (data.size !== 0){
    this.setState({data:Math.floor(data.date.dateExp), date:Math.floor(Date.now())})
  }

})
.then(() => {
    console.log(this.state)
})
.catch(( err ) => ConsoleHelper(err))


    
}



  handleExo = () => {
    window.location.href = "/raven-test"
  }
  render() {
  
  //   if(((this.state.date - this.state.data)/1000) < (60*60*24*14) && this.state.data !== 0){
    
  //     return(
      
  //    window.alert('Parece que aún no han pasado dos semanas desde la última vez que lo hiciste...'), window.location.href = "/cognitive-test"          
  //        )
  // }
   
    return (

      <div>
        <div class="instructions">	


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
       
                          </MDBRow>
                          </div>


</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,58.7C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>

    );
  }
}

export default ravenExpl;