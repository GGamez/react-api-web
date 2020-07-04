// Home.js
import { BehaviorSubject } from 'rxjs';
import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import ConsoleHelper from '../helper/ConsoleHelper'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const CLEAR_STATE = {
    m: '',
    n: '',
    p: '',
    message: '',
    tok:'',

  }

function logout() {
    // remove user from local storage to log user out
    const r = window.confirm("¿Estás seguro de querer salir?  para volver a entrar, ponte en contacto con info@ggdiggers.com, ¡te daremos acceso encantados!"); if(r == true){ localStorage.removeItem('currentUser');
    currentUserSubject.next(null); window.location.href = "/" }
    
    
}

  export const authenticationService = {
    currentUser: currentUserSubject.asObservable(),
    logout,
    get currentUserValue () { if(!currentUserSubject.value){return false }else{return currentUserSubject.value }}
};

class Loggin extends Component {

  constructor(props) {
    super(props);
    this.state = CLEAR_STATE
    
  }

    handleChange = e => this.setState({
      [ e.target.name ]: e.target.value
    })
  
    handleSubmit = (e) => {
      e.preventDefault()
      this.setState({message:'cargando...'})
      //const { m, n, p } = this.state
      // ConsoleHelper(this.state.m)
      // ConsoleHelper(this.state.n)
      // ConsoleHelper(this.state.p)
      //ConsoleHelper(this.state.p)
      axios.post('http://localhost:3000/login', { accept: 'application/json','content-type': 'application/json',email:this.state.m,password:this.state.p})
         .then(({ data }) => { 
          //let token = {usuario:{nombre : this.state.n, mail : this.state.m, logged : true}}
          ConsoleHelper(data)
          localStorage.setItem('currentUser', JSON.stringify(data));
          currentUserSubject.next(data);    
         }).then(() => {return (window.location.href = "/cognitive-test")})
         .catch(( err ) => this.setState({message:'Parece que el email y contraseña no coinciden o no existen'}))
        //   this.setState({         
        //   ...CLEAR_STATE,
        //   tok : token,
        //   message: `Bienvenido ${''}`
        // })
      //})
      
    }

    userLogged(currentUserV) {
      if(!currentUserV){
        return (
<main class="mt-5 pt-5" style={{backgroundColor:'#f7fcff'}} >
      <div class="container" >


          <section class="card blue-gradient wow fadeIn" id="intro">

          <div style={{marginTop:'200px'}}>
            {}
            <MDBContainer  >
              <MDBRow >
                <MDBCol style={{marginTop:'60px'}} md="6">
                  <form  onSubmit={this.handleSubmit}>
                    <p className="h4 text-center mb-4"></p>
                    {/* <label htmlFor="defaultFormLoginNameEx" className="grey-text">
                      Tu nombre
                    </label>
                    <input
                      type='text'
                    name='n'
                    value={this.state.n}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                    <br /> */}
                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                      Tu e-mail
                    </label>
                    <input
                      type="text"
                      name="m"
                      className="form-control"
                      value={this.state.m}
                      onChange={this.handleChange}
                    />
                    <br />
                    <br />
                   
                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                      Tu Contraseña
                    </label>
                    <input
                      type="password"
                    name='p'
                    value={this.state.p}
                    onChange={this.handleChange} 
                      className="form-control"
                    />
                    <div className="text-center mt-4">
                      <MDBBtn style={{marginTop:'40px'}} color="indigo" type='submit' value='Register'>Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
                <p style= {{fontSize: '20px', right:'40', marginTop:'-120px', position:'absolute', textAlign:'center'}}>
                      <strong>Bienvenido<br/>
                      
                      </strong>
                      Si tienes algna duda al respecto del servicio <br/> no dudes en contactarnos: <br/> <a  href='/' > info@ggdiggers.com </a>
                       
                  </p>
              </MDBRow>
            </MDBContainer>
            <div className="text-center mt-4">
              {this.state.message && <p>{this.state.message}</p>}
              </div>

              <p style= {{fontSize: '20px', position:'relative', marginTop: '80px', textAlign:'center'}}>
                      <strong>¿No tienes cuenta? <a href='/regist'> Regístrate </a> 
                      </strong>
                      
                  </p>
                    {/* <h2>Logg</h2>
          
                    <>
                    <div><form onSubmit={this.handleSubmit}>
                    <div className = "my-class"></div> 
                    <Row>
                       <Col xs={6}>e-mail</Col>
                     </Row>
                    <input  
                      type='text'
                      name='m'
                      value={this.state.m}
                      onChange={this.handleChange} />
                    <div>
                        
                    <Row>
                       <Col xs={6}>nombre</Col>
                     </Row>
                     <input
                      type='text'
                      name='n'
                      value={this.state.n}
                      onChange={this.handleChange} />
                    <div>
                        
                    <Row>
                       <Col xs={6}>password</Col>
                     </Row> 
                     <input
                      type='password'
                      name='p'
                      value={this.state.p}
                      onChange={this.handleChange} />
          
                      <div>
                      <Row>
                       <Col xs={6}>  ______________</Col>
                      </Row>
          
                      <div>
                    <input type='submit' value='Register' />
                    </div>
                    </div>
                  {this.state.message && <p>{this.state.message}</p>}
                  </div>
                </div>
                
                </form>
                
                </div>
                </>
                 */}
                </div>
              <div class="card-body text-center py-5 px-5 my-5">

                 

              </div>

          </section>


          <section class="pt-5">

              <div class="row mt-3 wow fadeIn">

              <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                    
                    </div>                 

              </div>


              <div class="row wow fadeIn">

              <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                    
                    </div> 

              </div>
             
          </section>
      </div>
  </main>
          
        )

        }else{
          window.location.href = "/cognitive-test"
         
      }
    }

  render() {
   
    return (
<div>
       {this.userLogged(authenticationService.currentUserValue)}
       </div>  
     );
  }
}

export default Loggin;