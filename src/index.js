import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import Nav from './Nav'
import Home from './Home'
import Duel from './Duel'
import Results from './Results'
import {BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'


class Routes extends Component {
	render () {
		return(
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
	        			<Route path='/duel/results' component={Results} />
						<Route path='/duel' component={Duel} />
						<Route path='/pirates' component={App} />
						<Route render={function(){
							return <p>Not found.</p>
						}} />
					</Switch>
				</div>
			</Router>
			)
	}
}

ReactDOM.render(
	<Routes />,
	document.getElementById('root')
	);
