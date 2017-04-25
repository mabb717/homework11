import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import PirateDetail from './PirateDetail';

class Routes extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/detail/:id' component={PirateDetail} />
         </div>
      </Router>
    )
  }
}

export default Routes