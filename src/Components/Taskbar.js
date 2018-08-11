import React, {Component} from 'react'
import Clock from "./Clock"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

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

const StyledTaskList = styled(TaskList)`
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
		const tasks = props.tasks.map((task, index)=>
		<Task 
			key={index}
			onClick={() => props.onTaskClick(index)}
		>
			{task.title}
		</Task>
		)
	return(
		<ul className={props.className}> {tasks}</ul>
	)
}

class TaskBar extends Component {

  render() {

    return (
		<Bar>
			<StyledLogo />

			<StyledTaskList 
			tasks={this.props.tasks}
			onTaskClick = {this.props.onTaskClick}
		 	/>

			<ClockWrapper>
				<Clock />
			</ClockWrapper>
		</Bar>
    );
  }
}

TaskBar.propTypes = {
	tasks: PropTypes.array,
	onTaskClick: PropTypes.func.isRequired,
}


export default TaskBar;