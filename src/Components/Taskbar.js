import React, {Component} from 'react'
import Clock from "./Clock"
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Bar = styled.header`
	background-color: black;
	height: 30px;
	color: white;
	line-height: 30px;
	
	vertical-align:middle;
	font-size: 0.7em;
`

const StyledLogo = styled(Logo)`
	display: inline-block;
	margin-left: 10px;

	vertical-align:middle;
	font-size: 2em;
	color: #61dafb;
`

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
`

function Logo(props){
	return(
		<FontAwesomeIcon className={props.className} icon={faReact} spin />
	)
}

function TaskList(props){
		const tasks = props.tasks.map((window)=>
				<Task key={window}>{window}</Task>
			)
		return(
			<TaskGroup>{tasks}</TaskGroup>
		)
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
			<StyledLogo />

			<TaskList tasks={this.state.tasks} />

			<ClockWrapper>
				<Clock />
			</ClockWrapper>
		</Bar>
    );
  }
}

export default TaskBar;