import React, {Component} from 'react';
import logo from '../logo.svg';
import Clock from "./Clock";
import styled, { keyframes } from 'styled-components';

const Bar = styled.header`
	background-color: black;
	height: 50px;
	color: white;
	line-height: 50px;
`;

const rotateLogo = keyframes`
  	from { transform: rotate(0deg); }
  	to { transform: rotate(360deg); }

`;

const LogoButton = styled.img`
	display: inline-block;
	height: 50px;
	animation: ${rotateLogo} infinite 20s linear;
`;

const ClockWrapper = styled.div`
	display: inline-block;
	position: absolute;
	right: 10px;
`;

class TaskBar extends Component {
  render() {
    return (
		<Bar>
			<LogoButton src={logo} />

			<ClockWrapper>
				<Clock />
			</ClockWrapper>
		</Bar>
    );
  }
}

export default TaskBar;