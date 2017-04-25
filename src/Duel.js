import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Avatar from './img/drunkenPirate_avatar.svg'


//PIRATEPREVIEW

function PiratePreview(props){
	return (
	    <div>
	      <img className='avatar' src={props.avatar} alt={`Avatar for ${props.piratename}`} />
	      	<h2 className="pirate">{props.piratename}</h2>
		    <button className='reset' 
		      	onClick={props.onReset.bind(null, props.id)}>
		        	Reset
		    </button>
	    </div>
	)
}

// PIRATEINPUT

class PirateInput extends React.Component {
	constructor(props){
  		super(props)

		this.state = {
		    piratename: ''
		}
	    this.handleChange = this.handleChange.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)

	}
	handleChange(event){
	    var value = event.target.value
	    this.setState(function(){
		    return {
		        piratename: value
		    }
	    })
	}

	handleSubmit(event){
	  event.preventDefault()
	  this.props.onSubmit(
	  	this.props.id,
	  	this.state.piratename)
	}


	render(){
		return (
			<form className="column" onSubmit={this.handleSubmit}>
				<label className='header' htmlFor='piratename'>
					{this.props.label}
				</label>
				<input
		          id='piratename'
		          placeholder='Pirate Name'
		          type='text'
		          autoComplete='off'
		          value={this.state.piratename}
		          onChange={this.handleChange}
         		/>
         		<button
		          className='button'
		          type='submit'
		          disabled={!this.state.piratename}>
		            Submit
		        </button>
			</form>
		)
	}
}

// DUEL

class Duel extends Component {
	constructor(props){
		super(props)

		this.state = {
			pirateOneName: '',
			pirateTwoName: '',
			pirateOneImage: null,
			pirateTwoImage: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}

	handleSubmit(id, piratename){
		this.setState(function(){
			const newState = {}
			newState[id + 'Name'] = piratename
		    // newState[id + 'Image'] = `http://localhost:3000/${piratename}.svg`
		    newState[id + 'Image'] = `http://localhost:3000/${Avatar}`
		    console.log(newState)
		    return newState
		})
	}

	handleReset(id){
		this.setState(function(){
		    const newState = {}
		    newState[id + 'Name'] = ''
		    newState[id + 'Image'] = null
		    return newState
	  	})
	}

	render() {
		var match = this.props.match
		var pirateOneName = this.state.pirateOneName
	    var pirateTwoName = this.state.pirateTwoName
	    var pirateOneImage = this.state.pirateOneImage
	    var pirateTwoImage = this.state.pirateTwoImage

		return (
			<div className="duel-container">
				<div className="row">
					{!pirateOneName && <PirateInput id='pirateOne' label='Pirate One' onSubmit={this.handleSubmit} /> }
								
			        {pirateOneImage !== null && 
			 			<PiratePreview
			            avatar={pirateOneImage}
			            piratename={pirateOneName}
			            onReset={this.handleReset}
			            id='pirateOne'
			        /> }

					{!pirateTwoName && <PirateInput  id='pirateTwo' label='Pirate Two' onSubmit={this.handleSubmit} /> }
				
					{pirateTwoImage !== null && 
						<PiratePreview
						avatar={pirateTwoImage}
						piratename={pirateTwoName}
						onReset={this.handleReset}
						id='pirateTwo'
					/> }
				</div>

				{pirateOneImage && pirateTwoImage && 
					<Link
					className='button' to={{
						pathname: match.url + '/results', 
						search: `?pirateOneName=` + pirateOneName + '&pirateTwoName=' + pirateTwoName
					}}>
					Duel
					</Link>
				}
			</div>
		)
	}
}


export default Duel;