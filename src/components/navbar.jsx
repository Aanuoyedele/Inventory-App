import React from 'react';
import logo from './stackoverflow.png';

function Navbar(params) {
    return(
        <navbar className="App-navbar">
              <img src={logo} className="" alt="logo" width="100px" />
              
              <a className="App-link" href="https://stackoverflow.com" target="_blank">About</a>
              <a className="App-link" href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer"> Products </a>
              <a className="App-link" href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">For Teams </a>
              <input type="search" width="500px"/>
              <button className="badge badge-primary">LogIn</button>
              <button className="badge badge-primary">SignUp</button>
            </navbar>
    )
    
}
export default Navbar