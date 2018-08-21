import React, { Component } from 'react';
import Clock from './Clock';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Bar = styled.header`
  background-color: black;
  height: 30px;
  color: white;
  line-height: 30px;

  vertical-align: middle;
  font-size: 0.7em;
`;

const StyledLogo = styled(Logo)`
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;

  vertical-align: middle;
  font-size: 2em;
  color: #61dafb;

  &:hover {
    background: white;
  }
`;

const StyledTaskList = styled(TaskList)`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;

  vertical-align: middle;
  margin: auto;
`;

const Task = styled.li`
  display: inline;
  color: ${props => (props.focused ? 'white' : '#888888')};
  margin-right: 20px;
  cursor: pointer;
`;

const ClockWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 10px;
`;

function Logo(props) {
  return (
    <div
      className={props.className}
      onClick={() => props.openAppMenuFunction()}
    >
      <FontAwesomeIcon icon={faReact} spin />
    </div>
  );
}

function TaskList(props) {
  const tasksLength = props.tasks.length;
  const tasks = props.tasks.map((task, index) => (
    <Task
      key={index}
      onClick={() => props.onTaskClick(index)}
      focused={task.zIndex === tasksLength ? true : false}
    >
      {task.title}
    </Task>
  ));
  return <ul className={props.className}> {tasks}</ul>;
}

class TaskBar extends Component {
  render() {
    return (
      <Bar>
        <StyledLogo openAppMenuFunction={this.props.openAppMenuFunction} />

        <StyledTaskList
          tasks={this.props.tasks}
          onTaskClick={this.props.onTaskClick}
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
  openAppMenuFunction: PropTypes.func.isRequired
};

export default TaskBar;
