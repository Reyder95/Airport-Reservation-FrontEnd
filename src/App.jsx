import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom' // Importing the router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/home.jsx';
import FlightList from './pages/flight-list.jsx';

import './pages/css/global.css';

function openNav() {
  
  if (document.getElementById('open-nav').style.display == 'block') {
    document.getElementById('open-nav').style.display = 'none';
  }
  else {
    document.getElementById('open-nav').style.display = "block";
  }
}


class App extends React.Component {
    
    super(props) {
    }
    
    render() {
        return(
          <Router className="mainRouter">
            <div className="nav-toggle-bar p-1">
              <div className="clearfix">
                <FontAwesomeIcon onClick={openNav} className="float-right bar-icon" icon={faBars}/>
              </div>
            </div>
            <div className="top-nav shadow"> 
              <div className="clearfix">
                <ul id="open-nav">
                  <li><Link id="router-link" to="/" className="route-home">Home</Link></li>
                  <li><Link id="router-link" to="/travel-information" className="route-travel-information">Travel Information</Link></li>
                  <li><Link id="router-link" to="/plane-information" className="route-plane-information">Plane Information</Link></li>
                </ul>
              </div>
            </div>
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/flight-list" component={FlightList}/>
            </Switch>
          </Router>
        );
    }
}

export default App;
