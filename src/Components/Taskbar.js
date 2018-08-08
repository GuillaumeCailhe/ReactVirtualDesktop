import React, {Component} from 'react';
import Clock from "./Clock";
import styled from 'styled-components';

const Bar = styled.header`
	background-color: rebeccapurple;
	height: 50px;
	color: white;
	line-height: 50px;
`;

const ClockWrapper = styled.div`
	position: absolute;
	right: 10px;
`

class TaskBar extends Component {
  render() {
    return (
		<Bar>
			<ClockWrapper>
				<Clock />
			</ClockWrapper>
		</Bar>
    );
  }
}

export default TaskBar;