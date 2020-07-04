import React, { Component } from 'react';
import Loggin, { authenticationService } from './Loggin';
import ConsoleHelper from '../helper/ConsoleHelper'



class About extends Component {
  render() {
 
    ConsoleHelper(authenticationService.currentUserValue) 
    return (
        
      <div>


     
      <main class="mt-5 pt-5" style={{backgroundColor:'#f7fcff'}} >
      <div class="container" >


          <section class="card blue-gradient wow fadeIn" id="intro">


              <div class="card-body text-center py-5 px-5 my-5">

                  <h1 style= {{fontSize: '50px'}} class="mb-4">
                      <strong>Analiza tu juego, controla la victoria</strong>
                  </h1>
                  <p style= {{fontSize: '20px'}}>
                      <strong>Los mejores análisis e infografías</strong>
                  </p>
                  <p style= {{fontSize: '30px'}}class="mb-4">
                      <strong>Mejora tu juego y controla la victoria con GG Diggers, expertos en análisis y rendimiento deportivo digital.</strong>
                  </p>
                  <a href="/loggin" class="btn btn-outline-white btn-lg">Comenzar análisis
                      <i class="fas fa-graduation-cap ml-2"></i>
                  </a>

              </div>

          </section>

      </div>
  </main>

  <main class="mt-5 pt-5" style={{backgroundColor:'#fffff'}} >
      
  </main>
  <main class="mt-5 pt-5" style={{backgroundColor:'#f7fcff'}} >
      
  </main>
  </div>
    );
  }
}

export default About;