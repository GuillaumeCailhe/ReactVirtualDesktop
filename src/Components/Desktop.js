import React, {Component} from 'react'
import styled from 'styled-components'
import Window from './Window.js'
import PropTypes from 'prop-types'

const Wallpaper = styled.div`
	background : #61dafb;
	background-image:
		repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
		repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
		linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
		linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
		background-size: 70px 120px;
	position: absolute;
	top: 30px;
	bottom: 0px;
	left: 0px;
	right: 0px;
`

class Desktop extends Component {
	render(){
		const windows = this.props.tasks.map((task, index)=>
			{
				const window = 
					<Window 
						key={index}
						id={index}
						active={task.active} 
					 	title={task.title}
		      	minimizeFunction = {this.props.windowMinimizeFunction}
		      	closeFunction = {this.props.windowCloseFunction}
		  		/>
	  		
				return task.active ? window : null
	  	}
		)

		return(
			<Wallpaper>
				{windows}
			</Wallpaper>
		)
	}
}

Desktop.propTypes = {
	tasks: PropTypes.array,
	windowMinimizeFunction: PropTypes.func.isRequired,
	windowCloseFunction: PropTypes.func.isRequired
}

export default Desktop;