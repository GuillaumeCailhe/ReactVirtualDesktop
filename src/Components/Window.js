import React, {Component} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const WindowWrapper = styled.section`
  width: 300px;
  height: 200px;
  background: lavender;
  border-radius: 2%;
`;

const WindowHeader = styled.section`
	background: rebeccapurple;
	height: 25px;
	border-top-left-radius: 2%;
	border-top-right-radius: 2%;
`

const WindowButton = styled.button`

`

class Window extends Component {
  render() {
    return (  
		    <Draggable 
				bounds = "parent"
		    >
		    	<WindowWrapper>
		      	<WindowHeader />
		      </WindowWrapper>
		    </Draggable>   		

    );
  }
}

export default Window;