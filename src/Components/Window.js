import React, {Component} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import logo from '../logo.svg';
import PropTypes from 'prop-types';

const WindowWrapper = styled.section`
  width: 500px;
  height: 400px;

  background: #e6e6fa;

  border-radius: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const WindowHeader = styled.div`
	position: absolute;
	top: 0;

	width: 100%;
	height: 30px;

	line-height: 30px;
	text-align: center;
`

const HeaderLogo = styled.img`
	display: inline-block;
	position: absolute;
	left: 5px;
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

`

const WindowButton = styled.button`
	display: inline-block;
	vertical-align:middle;
  border: none;
  padding: 6px;
  margin: 4px 2px;
  border-radius: 50%;
`

	const WindowReduceButton = WindowButton.extend`
		background: gold;
	`

	const WindowEnlargeButton = WindowButton.extend`
		background: forestgreen;
	`

	const WindowCloseButton = WindowButton.extend`
		background: crimson;
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

class Window extends Component {
  render() {
    return (  
		    <Draggable 
				bounds = "parent"
				handle = ".window-handle"
		    >
		    	<WindowWrapper>
		      	<WindowHeader className="window-handle">
							<HeaderLogo src={logo}  />
							<HeaderTitle>{this.props.title}</HeaderTitle>

							<WindowButtonGroup>
								<WindowReduceButton  />
								<WindowEnlargeButton />
								<WindowCloseButton />
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

export default Window;