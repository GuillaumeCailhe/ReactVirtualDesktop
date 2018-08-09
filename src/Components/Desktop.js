import React, {Component} from 'react';
import styled from 'styled-components';
import Window from './Window.js';

const Wallpaper = styled.div`
	background : #61dafb;
	background-image:
		repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
		repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
		linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
		linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
		background-size: 70px 120px;
	position: absolute;
	top: 30px;
	bottom: 0px;
	left: 0px;
	right: 0px;
`

class Desktop extends Component {
	render(){
		return(
			<Wallpaper>
				<Window title="Hello world !" />
			</Wallpaper>
		);
	}
}

export default Desktop;