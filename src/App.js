import React, { Component } from 'react';
import './App.css';
import Logo4u from './components/Login/Logo/Logo'

class App extends Component {
  render() {
     return (
       <div className="App">
         <Logo4u/>
       </div>
     );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'funciona?')) 
    //  es preferible usar el código de arriba xq al anidar elementos, se vuelve muy complejo
  }
}

export default App;
