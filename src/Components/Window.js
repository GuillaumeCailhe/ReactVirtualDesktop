import React, {Component} from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faWindowMinimize,faWindowMaximize,faWindowClose} from '@fortawesome/free-solid-svg-icons'

const WindowWrapper = styled.section`
  width: 500px;
  height: 400px;

  background: #e6e6fa;

  border-radius: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const WindowHeader = styled.div`
	position: absolute;
	top: 0;

	width: 100%;
	height: 30px;

	line-height: 30px;
	text-align: center;
`

const StyledWindowLogo = styled(WindowLogo)`
	display: inline-block;
	position: absolute;
	left: 10px;
	bottom: 0;
	top: 0;

	margin: auto;
	height: 25px;
`

const HeaderTitle = styled.h2`
	display: inline-block;
	margin: auto;
	font-size: 0.8em;
`

const WindowButtonGroup = styled.div`
	display: inline-block;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 5px;

	height: 100%;

	margin: auto;

	color: #686871;
	font-size: 0.8em;
`

const StyledWindowButton = styled(WindowButton)`
  margin-left: 5px;
`

const WindowBody = styled.div`
	background: #fafafe;

	position: absolute;
	top: 30px;
	bottom: 6px;
	left: 6px;
	right: 6px;

	padding: 2px;
	overflow: auto;
`

function WindowLogo(props){
	return(
		<FontAwesomeIcon className={props.className} icon={faReact} />
	)
}

function WindowButton(props){
	return(
	  <FontAwesomeIcon className={props.className} icon={props.icon} />
	)
}


class Window extends Component {
  render() {
    return (  
		    <Draggable 
				bounds = "parent"
				handle = ".window-handle"
		    >
		    	<WindowWrapper>
		      	<WindowHeader className="window-handle">
							<StyledWindowLogo />
							<HeaderTitle>{this.props.title}</HeaderTitle>

							<WindowButtonGroup>
								<StyledWindowButton icon={faWindowMinimize} />
								<StyledWindowButton icon={faWindowMaximize} />
								<StyledWindowButton icon={faWindowClose} />
							</WindowButtonGroup>

		      	</WindowHeader>

		      	<WindowBody>
		      	</WindowBody>

		      </WindowWrapper>
		    </Draggable>   		

    );
  }
}

Window.propTypes = {
	title: PropTypes.string
}

export default Window