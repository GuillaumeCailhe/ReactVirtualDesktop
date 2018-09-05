import React, { Component } from "react";
import styled from "styled-components";
import Window from "./Window.js";

const Wallpaper = styled.div`
  background: #61dafb;
  background-image: repeating-linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 60px
    ),
    linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    ),
    linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    );
  background-size: 70px 120px;
  position: absolute;
  top: 30px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

type DesktopProps = {
  tasks?: array,
  windowMinimizeFunction: func,
  windowCloseFunction: func,
  windowFocusFunction: func
};

class Desktop extends Component<DesktopProps> {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };

    this.wallpaperRef = React.createRef();
  }

  componentDidMount() {
    // We get the wallpaper dimensions when it has been rendered
    this.setState({
      width: this.wallpaperRef.current.clientWidth,
      height: this.wallpaperRef.current.clientHeight
    });
  }

  render() {
    const windows = this.props.tasks.map((task, index) => {
      const window = (
        <Window
          key={task.title + task.index}
          id={index}
          title={task.title}
          active={task.isWindowActive}
          resizable={task.isWindowResizable}
          defaultWidth={task.defaultWindowWidth}
          defaultHeight={task.defaultWindowHeight}
          maxWidth={this.state.width}
          maxHeight={this.state.height}
          zIndex={task.zIndex}
          minimizeFunction={this.props.windowMinimizeFunction}
          closeFunction={this.props.windowCloseFunction}
          focusFunction={this.props.windowFocusFunction}
        >
          {task.applicationComponent}
        </Window>
      );

      return task.isWindowActive ? window : null;
    });

    return <Wallpaper innerRef={this.wallpaperRef}>{windows}</Wallpaper>;
  }
}

export default Desktop;
