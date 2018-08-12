import React, {Component} from 'react'
import TaskBar from './Components/Taskbar.js'
import Desktop from './Components/Desktop.js'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      tasks: [{
        title: "Hello world !",
        active: true
      },{
        title:"Text editor",
        active: false
      }]
    }

    // Binding
    this.setWindowActivity = this.setWindowActivity.bind(this)
    this.openWindow = this.openWindow.bind(this)
    this.minimizeWindow = this.minimizeWindow.bind(this)
    this.closeWindow = this.closeWindow.bind(this)
  }

  componentDidMount(){
    document.title = "React Virtual Desktop"
  }
  
  /**
  Set a window in(active)
  @taskIndex : the id of the window
  @activity : boolean, 1 for active, 0 inactive
  **/
  setWindowActivity(taskIndex, activity){
    let tasksCopy = this.state.tasks
    tasksCopy[taskIndex].active = activity
    this.setState({
      tasks: tasksCopy
    })
  }

  openWindow(taskIndex){
    this.setWindowActivity(taskIndex, true)
  }

  minimizeWindow(taskIndex){
    this.setWindowActivity(taskIndex, false)
  }

  closeWindow(taskIndex){
    let tasksCopy = this.state.tasks
    tasksCopy.splice(taskIndex, 1)
    this.setState({tasks: tasksCopy})
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
          windowMinimizeFunction = {this.minimizeWindow}
          windowCloseFunction = {this.closeWindow}
        />
      </div>
    );
  }
}

export default App;
