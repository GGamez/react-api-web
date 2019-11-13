import { MDBContainer, MDBRow, MDBCol , MDBTable, MDBTableBody, MDBTableHead, MDBDataTable  } from 'mdbreact';
import React, { Component } from 'react';
import Teams from '../cards/teamMatch'

export default function Chart() {

      let enemies = ['enemy1', 'enemy1', 'enemy1', 'enemy1', 'enemy1', 
      'enemy1', 'enemy1', 'enemy1', 'enemy1', 'enemy1','enemy1', 'enemy1']
      
    
      return (     
        <div>
          {enemies.map(enemigos =>{ return( <Teams/>)})}
        </div>

      );
    }
  

