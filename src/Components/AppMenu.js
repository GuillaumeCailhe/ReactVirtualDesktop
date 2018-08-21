import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAppMenu = styled.div`
  background: black;
  position: fixed;

  width: 15%;

  top: 30px;
  left: 0;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  font-size: 0.8em;
  color: white;

  z-index: ${props => props.zIndex};
`;

const App = styled.div`
  padding: 2px;
  cursor: pointer;

  &:hover {
    background: #61dafb;
    color: black;
  }
`;

class AppMenu extends Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.handleClickAnywhere = this.handleClickAnywhere.bind(this);
    this.handleClickOnApp = this.handleClickOnApp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickAnywhere);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickAnywhere);
  }

  handleClickAnywhere(event) {
    if (this.menuRef && !this.menuRef.current.contains(event.target)) {
      this.props.closeMenuFunction();
    }
  }

  handleClickOnApp(index) {
    this.props.createTaskFunction(index);
    this.props.closeMenuFunction();
  }

  render() {
    const applications = this.props.applications.map((app, index) => {
      return (
        <App key={index} onClick={() => this.handleClickOnApp(index)}>
          {app.title}
        </App>
      );
    });

    return (
      <StyledAppMenu innerRef={this.menuRef} zIndex={this.props.menuZIndex}>
        {applications}
      </StyledAppMenu>
    );
  }
}

AppMenu.propTypes = {
  applications: PropTypes.array,
  closeMenuFunction: PropTypes.func.isRequired,
  createTaskFunction: PropTypes.func.isRequired,
  menuZIndex: PropTypes.number.isRequired
};

AppMenu.defaultProps = {
  menuZIndex: 1000
};

export default AppMenu;
