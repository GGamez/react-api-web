import { MDBContainer, MDBRow, MDBCol , MDBTable, MDBTableBody, MDBTableHead, MDBDataTable  } from 'mdbreact';
import React, { Component } from 'react';

export default function Chart() {

   
    const data = {
        columns: [
          {
            label: 'Date',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Team1',
            field: 'team1',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Team2',
            field: 'team2',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Result',
            field: 'result',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Bans',
            field: 'bans',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Picks',
            field: 'picks',
            sort: 'asc',
            width: 100
          }
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162'
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372'
          },
          {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            age: '59',
            date: '2012/08/06',
            salary: '$137'
          },
          {
            name: 'Rhona Davidson',
            position: 'Integration Specialist',
            office: 'Tokyo',
            age: '55',
            date: '2010/10/14',
            salary: '$327'
          },
          {
            name: 'Colleen Hurst',
            position: 'Javascript Developer',
            office: 'San Francisco',
            age: '39',
            date: '2009/09/15',
            salary: '$205'
          }
        ]
      };
      
    
      return (
        


  
        <MDBDataTable
        scrollY
        striped
        bordered
        small
        data={data}/>
    
          


      );
    }
  

