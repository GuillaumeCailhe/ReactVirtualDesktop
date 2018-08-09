import React, {Component} from 'react';
import TaskBar from './Components/Taskbar.js';
import Desktop from './Components/Desktop.js';

class App extends Component {

  componentDidMount(){
    document.title = "React Virtual Desktop"
  }

  render() {
    return (
      <div>
        <TaskBar />
        <Desktop />
      </div>
    );
  }
}

export default App;
