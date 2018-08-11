import React, {Component} from 'react'
import TaskBar from './Components/Taskbar.js'
import Desktop from './Components/Desktop.js'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      tasks: [{
        title: "Hello world !",
        active: 0
      },{
        title:"Text editor",
        active: 0
      }]
    }

    // Binding
    this.openWindow = this.openWindow.bind(this)
  }

  componentDidMount(){
    document.title = "React Virtual Desktop"
  }

  openWindow(taskIndex){
    let tasksCopy = this.state.tasks;
    tasksCopy[taskIndex].active = 1;
    this.setState({
      tasks: tasksCopy
    })
  }

  render() {
    return (
      <div>
        <TaskBar 
          tasks={this.state.tasks}
          onTaskClick={this.openWindow}
        />
        <Desktop 
          tasks = {this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
