import React, {Component} from 'react';
import styled from 'styled-components';

const Navbar = styled.header`
	background-color: black;
	height: 50px;
`;

class TaskBar extends Component {
  render() {
    return (
		<Navbar />
    );
  }
}

export default TaskBar;