import React, {Component} from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faWindowMinimize,faWindowMaximize,faWindowClose} from '@fortawesome/free-solid-svg-icons'

const WindowWrapper = styled.div`
	position: absolute;

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
	right: 6px;

	height: 100%;

	margin: auto;

	color: #686871;
	font-size: 0.8em;
`

const StyledWindowButton = styled(WindowButton)`
  margin-left: 5px;

  &:hover {
  	color: #141416;
  }
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

function ResizableWindow(props){
	const resizableObject =(
			<ResizableBox className={ props.resizable ? 'Resizable' : 'Unresizable' }
    			width={props.width}
  			 	height={props.height}
  			 	minConstraints={[200, 50]}
					axis={ props.resizable ? 'both' : 'none' }
					handleSize={[0, 0]}
		  >
		  
		  	{props.children}
		  </ResizableBox>
	)

	return resizableObject
}

class Window extends Component {
  
  render() {
    return (  
    	<Draggable
    		bounds="parent"
				handle = ".window-handle"
    	>   
    		<WindowWrapper>
    			<ResizableWindow width={this.props.defaultWidth} height={this.props.defaultHeight} resizable={this.props.resizable}>
      			<WindowHeader className="window-handle">
		      		
							<StyledWindowLogo />
							<HeaderTitle>{this.props.title}</HeaderTitle>

							<WindowButtonGroup onMouseDown={e => e.stopPropagation()}>

								<a onClick={() => this.props.minimizeFunction(this.props.id)}>
									<StyledWindowButton icon={faWindowMinimize} onClick={() => alert("test")}  />
								</a>
								
								{}
								<a>
									<StyledWindowButton icon={faWindowMaximize} />
								</a>

								<a onClick={() => this.props.closeFunction(this.props.id)}>
									<StyledWindowButton icon={faWindowClose} />
								</a>
							</WindowButtonGroup>

		      	</WindowHeader>

		      	<WindowBody>
		      	</WindowBody>  
    		</ResizableWindow>
			</WindowWrapper>
  	</Draggable>	
    );
  }
}

Window.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string,
	active: PropTypes.bool,
	resizable: PropTypes.bool,
	defaultWidth: PropTypes.number,
	defaultHeight: PropTypes.number,
	minimizeFunction: PropTypes.func.isRequired,
	closeFunction: PropTypes.func.isRequired
}

Window.defaultProps = {
	defaultWidth: 500,
	defaultHeight: 400
}

export default Window