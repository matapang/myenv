import React, { Component } from 'react';
import Dashboard from './containers/Dashboard'


//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">        
        <h2 style={{fontWeight:200}} className="ml-3 mt-2">          
          My Env
        </h2>        
        <Dashboard/>
      </div>
    );
  }
}

export default App;



