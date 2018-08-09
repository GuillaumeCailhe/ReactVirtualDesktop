import React, {Component} from 'react';
import logo from '../logo.svg';
import Clock from "./Clock";
import styled, { keyframes } from 'styled-components';

const Bar = styled.header`
	background-color: black;
	height: 30px;
	color: white;
	line-height: 30px;

	font-size: 0.7em;
`;

const rotateLogo = keyframes`
  	from { transform: rotate(0deg); }
  	to { transform: rotate(360deg); }

`;

const LogoButton = styled.img`
	display: inline-block;
	height: 30px;
	animation: ${rotateLogo} infinite 20s linear;
`;

const TaskGroup = styled.ul`
	display: inline-block;
	position: absolute;
	top: 0;
	bottom : 0;

	vertical-align:middle;
	margin: auto;
`

const Task = styled.li`
	display: inline;
	margin-right: 20px;
`

const ClockWrapper = styled.div`
	display: inline-block;
	position: absolute;
	right: 10px;
`;

function TaskList(props){
		const tasks = props.tasks.map((window)=>
				<Task key={window}>{window}</Task>
			);
		return(
			<TaskGroup>{tasks}</TaskGroup>
		);
}

class TaskBar extends Component {

  constructor(props){
    super(props);
    this.state = {
    	tasks: ["Hello world !", "Text editor"]
    }
  }

  render() {
    return (
		<Bar>
			<LogoButton src={logo} />

			<TaskList tasks={this.state.tasks} />

			<ClockWrapper>
				<Clock />
			</ClockWrapper>
		</Bar>
    );
  }
}

export default TaskBar;