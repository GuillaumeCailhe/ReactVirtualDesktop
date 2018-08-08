import React, {Component} from 'react';
import TaskBar from './Components/Taskbar.js';
import Desktop from './Components/Desktop.js';

class App extends Component {
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
