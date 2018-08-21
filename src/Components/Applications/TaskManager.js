import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  user-select: none;
  padding: 5px;
  font-size: 0.7em;

  & thead {
    background: #d1d1e3;
    text-align: left;
  }
`;

const TaskTr = styled.tr`
  background-color: ${props => (props.selected ? '#61dafb' : 'none')};
`;

const KillButton = styled.button`
	position: absolute;
	bottom 0px;
	right: 0px;

	background: #d1d1e3;
	border: none;

	&:hover {
		background : #a7a7b5;
	}
`;

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTask: null
    };

    this.killTask = this.killTask.bind(this);
  }

  killTask() {
    if (this.state.selectedTask != null) {
      this.props.killFunction(this.state.selectedTask);
      this.setState({ selectedTask: null });
    }
  }

  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return (
        <TaskTr
          key={index}
          onClick={() => this.setState({ selectedTask: index })}
          selected={this.state.selectedTask === index}
        >
          <td>{task.title}</td>
          <td>{index}</td>
        </TaskTr>
      );
    });

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>PID</th>
            </tr>
          </thead>
          <tbody>{tasks}</tbody>
        </Table>

        <KillButton type="button" onClick={() => this.killTask()}>
          Kill
        </KillButton>
      </div>
    );
  }
}

TaskManager.propTypes = {
  tasks: PropTypes.array.isRequired,
  killFunction: PropTypes.func.isRequired
};

export default TaskManager;
