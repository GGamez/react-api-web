// Home.js

import React, { Component } from 'react';
import Chart from "react-apexcharts";
import CenteredGrid from './playerModel'
import CenteredChart from './charts'
import GamesCard from '../cards/gameCard'
import Loggin, { authenticationService } from '../../Loggin';
import { MDBBtn } from 'mdbreact';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



class lol_extractor extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: null,
      currentUser: authenticationService.currentUserValue,
      todos: [],
      inputValue: '',
      summoner: {teamId: '', name: '', name2: ''},
      id: '',
      tok: '',
      ess : [],
      logged: false,
      compara: false,
      options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: []
          }
        },
        series: [
          {
            name: "series-1",
            data: []
          }
        ]
      };
    }
    
    
// getget = function(match) {

//   let counter = 0;   
//   return Object.keys(match).map((players) => { 
//     if (match[players].currentAccountId == this.state.summoner.id) { 
//       return  (match[players].champName)
//     }
//   })
// //    Object.keys(match).map((players) => { if (match[players].summonerName == this.state.summoner.name && counter <= 10) {counter +=1; this.state.series.damage.push(match[players].damageDealtToObjectives); }else{return}
// //}) 
// }
                
// getgot = function(match) {
//   return Object.keys(match).map((players, i) =>{
//     if (match[players].currentAccountId == this.state.summoner.id) {
//       return  (match[players].rivalChamp)
//     }
//   })
// }

handleChango = selectedOption => {
  this.setState(
    { selectedOption : selectedOption }
  );
};

userLogged = function(name){
  fetch(`https://young-shore-87060.herokuapp.com/search/${name+'_Nested'}`, {
    method: 'get',
    headers: new Headers ({token: this.state.currentUser.token})
  }).then(res => res.json())
    .then((data) => {
      this.state.todos = [];
     console.log(data)
     // let nam = name.charAt(0).toUpperCase() + name.slice(1);   
      let dato = [];
      dato = [data]    
      //console.log(dato)
      dato.map((match) => {
        //let matcho = {...match}
      let mitch = {...match}              
      this.setState({todos : {...mitch}} )   
      this.setState({id : this.state.currentUser.usuario.summonerId} )  
      //this.setState({ todos : data })
      //mitch.push(matcho)
      //console.log(match);
      //console.log(this.state.todos)
      //return ('nothing');
      this.renderData();
   }) 
  }).catch((e) => console.log(e))
}



componentWillMount = function (){
  console.log('willmount')
  let name = '';
  if(!this.state.currentUser){
  name = ''
  this.setState({logged: false})
  }else{
    name = this.state.currentUser.usuario.nombre;
    this.setState({logged: true})
  }
  this.userLogged(name);
  //console.log(this.state.currentUser.usuario.nombre)
 // console.log(this.state.inputValue)
}

renderData = function(){
  this.state.series[0].data = []
  this.state.options.xaxis.categories = []
  let pushed = []
  let pushod = []
  let pushin = []
  let ttt = {}
  let i = 0;
  let counter = 0;
  const todd = [this.state.todos];
  let eiei = [];
  let feiei = [];
  todd.map((i) => {ttt = {...i};
  let ooo = {...ttt};
  //console.log(todd)
  pushed.push(ooo);
  pushed.map((todo) => (pushod.push([todo])))
    pushod.map((todo) => (
      todo.map((players, key, next) => {eiei.push(players)})
      //Object.keys(players).map((item, i) => {pushin.push(players[item]);})
    ))
    
  });

  
  //console.log(this.state.series, this.state.options)
  eiei.map(matches => (Object.keys(matches).map((player, i) => { 
    Object.keys(matches[player]).map(players => {
     // console.log(matches[player][players].summonerId)
      if (matches[player][players].currentAccountId  === this.state.id) {
        this.state.series[0].data.push(matches[player][players].damageDealtToObjectives); 
        this.state.options.xaxis.categories.push(i);
        feiei.push(matches[player]) }
      })
    })
  )); 
  
  this.setState({ess: feiei, todos:eiei});
  console.log(eiei)
  console.log(feiei)
  //return (feiei)
}

// renderData = () => {
//   this.ei().then(function(el){console.log(el)})
//   //console.log(eiei)
//   return (eiei) 
// }

  
componentDidMount = function(nam, name) {

  if(!this.state.logged){
    console.log('didmount')
  }else if(this.state.logged){
    console.log('didmount')
   
    // console.log(this.state.inputValue)
               
         let toRender = [];
         let tod = this.state.todos
         console.log(nam, name)
         tod.map(matches => Object.keys(matches).map(match =>{
          
           Object.keys(matches[match]).map(players => {
            // console.log(matches[match][players].summonerName)
            
             if(matches[match][players].summonerName == nam ||matches[match][players].summonerName == name){
               toRender.push(matches[match])
           }
           })
          
       })
       )
       console.log(toRender)
   
       this.renderPostData(toRender);
  }

  
      //mitch.push(matcho)
      //console.log(match);
      //console.log(this.state.todos)
      //return ('nothing');
      //this.renderData();

  
}

shouldComponentUpdate(nextProps, nextState) {
  
  if (this.state.ess !== nextState.ess) {
    return true;
  }
  if (this.state.compara === true) {
    this.setState({compara: false})
    return true;
  }
  return false;
}

renderPostData = function(eiei){

  let feiei = []
  //console.log(this.state.series, this.state.options)
  eiei.map(matches => (Object.keys(matches).map((player) => { 
      //console.log(players)
     // console.log(matches[player][players].summonerId)
      if (matches[player].currentAccountId  === this.state.id) {
        this.state.series[0].data.push(matches[player].goldSpent); 
        this.state.options.xaxis.categories.push(player);
        feiei.push(matches[player]) }
        }
      )
    
  )); 
  
  this.setState({ess: eiei});
  //console.log(eiei)
  //console.log(feiei)
  //return (feiei)
}

handleChange = e => this.setState({
  m: e.target.value
})

   // console.log(evt.target.value)
   // console.log(this.state.inputValue)


getMatches = () => {
  let eoeo = this.renderData();
  //console.log(this.state.currentUser.usuario.nombre)
  //console.log(this.state.inputValue)
  

  return(eoeo)
}

      
_handleKeyDown = () => {
  console.log('as')
  let nam = this.state.m;
  let nombre = nam.charAt(0).toUpperCase() + this.state.m.slice(1);
  console.log(nam, nombre)
  console.log(this.props)
  console.log(authenticationService.currentUserValue) 
  //console.log(nam)
  //console.log(this.state.todos)
  this.setState({summoner : {name2:nombre}, look: true, compara:true});
 // this.setState(this.state.series[0].data = []);
 // this.setState(this.state.options.xaxis.categories = []);
  //console.log(this.state.series)
  //console.log(this.state.options)
  this.componentDidMount(nam, nombre);
  
}


_handleKeyDown2 = () => {
  console.log('as')
  return (window.location.href = `http://192.168.0.162:3000/search/${this.state.inputValue}`) 
}


returnChart(){
  //console.log(this.state.options)
 //console.log(this.state.series)
  return(
    <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width = '800'/>
  )
}

// getInfo(match){
//   //console.log({match})
//   return(

//   //console.log(this.state.summoner.name),
//   //console.log(this.state.options),
//   //console.log(this.state.series),
  
//   <div>
//             <CenteredGrid eiei={match} userId={this.state.id}/>
//         </div> )
// }
    



render() {


let arr = [{game:'league'},{game:'league'} ]
return (
<div>


  <div className='row1' style={{marginRight:'20px', marginLeft:'20px'}} >
     
     

   
      <CenteredGrid eiei={this.state.ess} userId={this.state.id} >

      <div>
        <Select
        value={this.selectedOption}
        onChange={this.handleChango}
        options={options}
      />
      </div>
        </CenteredGrid>

   </div>
   
        
  
 
  <CenteredChart eiei={this.state.ess} userId={this.state.id}/>
  <br />
  <br />
  <br />
  <p className="h4 text-center mb-4">Historial</p>
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
  <label style={{width:'240px', marginLeft:'auto', marginRight:'auto', justifyContent:'center', display:'flex'}} htmlFor="defaultFormLoginEmailEx" className="text-center">
    buscar compañero...
  </label>
  <div className="text-center" >
    <row style={{width:'240px', marginLeft:'auto', marginRight:'auto', display:'flex'}}>
    <input
      type="text"
      name="m"
      className="form-control"
      
      onChange={this.handleChange}/>
    </row>
  </div>
  <br />

  <div className="text-center mt-4">
    <MDBBtn color="indigo" type='submit' value='Register' onClick={this._handleKeyDown}>Buscar</MDBBtn>
  </div>
  <br />
  <br />
  <br />
  <br />
{/* 
         {this.returnChart()} */}
     
        
      
  </div>
 
 );
}

  
}

export default lol_extractor;