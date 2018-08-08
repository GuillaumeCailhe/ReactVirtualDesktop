import React, {Component} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const WindowWrapper = styled.section`
  width: 500px;
  height: 400px;
  background: #e6e6fa;
  border-radius: 2%;
  border: 3px solid #bcbccc;
`;

const WindowHeader = styled.section`
	background: #bcbccc;
	height: 30px;
	border-top-left-radius: 2%;
	border-top-right-radius: 2%;
`

class Window extends Component {
  render() {
    return (  
		    <Draggable 
				bounds = "parent"
				handle = ".window-handle"
		    >
		    	<WindowWrapper>
		      	<WindowHeader className="window-handle" />
		      </WindowWrapper>
		    </Draggable>   		

    );
  }
}

export default Window;