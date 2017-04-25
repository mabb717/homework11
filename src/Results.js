import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//get search text
var path = document.URL;
var fixedPath = path.replace(/%20/g, " ");
//split to get pirate name
var separators = ['=', '&'];
var pirateNames = fixedPath.split(new RegExp(separators.join('|'), 'g'));
console.log(pirateNames);

//make piratesFile usable


function Winner(props){
	var PirateNameOne = pirateNames[1];
	var PirateNameTwo = pirateNames[3];
//access each pirate's weapons from props
	var WeaponOne = this.props.find(x => x.name === PirateNameOne).weapon

	return PirateNameOne + " defeats " + PirateNameTwo + " with a " + WeaponOne + " !!!"

}


class Results extends Component {


	render() {
	  	console.log(this.props)
	  
	    return (
		    <div className="results">
		        <h1>Results</h1>
		        {Winner()}

		        <Link
						className='button' to={{
							pathname: './'}}>
						Duel again
				</Link>
				 <Link
						className='button' to={{
							pathname: '/'}}>
						Home
				</Link>
		    </div>
	    )
	}
}

export default Results;