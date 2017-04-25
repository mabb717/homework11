import React, { Component } from 'react'
import Home from './Home'
import {BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import App from './App';
import Nav from './Nav'
import { Link , NavLink } from 'react-router-dom'



class Routes extends Component {
  render() {
    return (
    	<Router>
	      <div className="container">
			<NavLink exact activeClassName='active' to='/'>Home</NavLink>
			<Route exact path='/' component={Home} />
	        <Route path='/pirates' component={App} />
	      </div>
      	</Router>
      )
  }
}

export default Home
