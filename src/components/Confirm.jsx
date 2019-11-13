// Home.js

import React, { Component } from 'react';
import axios from 'axios';

class Confirm extends Component {
  render() {
      
    
    const validate = () => {
        
        axios.put(`http://localhost:3000/confirmation`, { accept: 'application/json','content-type': 'application/json', token : this.props.match.params.token}
    //     {method: 'post',
    //     headers: 
    //       new Headers ({token: this.props.match.params.token
    //   })}
       
        )
            .then(({ data }) => { 
              let token = this.props.match.params.token; 
              console.log(JSON.stringify(data))
              //localStorage.setItem('currentUser', JSON.stringify(data));
              //currentUserSubject.next(data);
            //   this.setState({         
            //   ...CLEAR_STATE,
            //   tok : token,
            //   message: `Bienvenido ${''}`
            // })
          }).then(() => {return (window.location.href = "/")})
            .catch(( err ) => console.log(err))
        }

        validate();

    return (

        
        <div>
       
          <h2>Confirm</h2>
        </div>
    );
  }
}

export default Confirm;