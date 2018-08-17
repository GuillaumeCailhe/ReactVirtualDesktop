import React, {Component} from 'react'
import TaskBar from './Components/Taskbar'
import Desktop from './Components/Desktop'
import Welcome from './Components/Applications/Welcome'
import TaskManager from './Components/Applications/TaskManager'
import './App.css'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      // tasks is used to deal with the windows and the taskbar
      tasks: [{
        title: "Welcome", 
        applicationComponent: <Welcome />,
        isWindowActive: true,
        isWindowResizable: false,
        defaultWindowWidth: 400,
        defaultWindowHeight: 400,
        zIndex: 4
      },{
        title:"Task manager",
        applicationComponent: null,
        isWindowActive: false,
        isWindowResizable: true,
        defaultWindowWidth: 400,
        defaultWindowHeight: 300,
        zIndex: 0
      },{
        title:"Hello world",
        applicationComponent: null,
        isWindowActive: false,
        isWindowResizable: true,
        defaultWindowWidth: 200,
        defaultWindowHeight: 200,
        zIndex: 0
      },{
        title:"Painter",
        applicationComponent: null,
        isWindowActive: false,
        isWindowResizable: true,
        defaultWindowWidth: 200,
        defaultWindowHeight: 200,
        zIndex: 0
      }
      ]
    }

    // Binding
    this.setWindowActivity = this.setWindowActivity.bind(this)
    this.openWindow = this.openWindow.bind(this)
    this.minimizeWindow = this.minimizeWindow.bind(this)
    this.closeTask = this.closeTask.bind(this)
    this.setFocus = this.setFocus.bind(this)
  }

  componentDidMount(){
    // will be useless when the application's informations will be fetched from API
    let tasksCopy = this.state.tasks
    tasksCopy[1].applicationComponent = <TaskManager tasks={this.state.tasks} killFunction={this.closeTask} />
    this.setState({
      tasks: tasksCopy
    })
  }

  /**
  Set a window in(active) 
  Is used by openWindow() and minimizeWindow()
  @taskIndex : the id of the window/task
  @activity : boolean, 1 for active, 0 inactive
  **/
  setWindowActivity(taskIndex, activity){
    let tasksCopy = this.state.tasks
    tasksCopy[taskIndex].isWindowActive = activity
    this.setState({
      tasks: tasksCopy
    })
  }
  
  /**
    Is called when the taskbar is clicked.
    Open the window in the desktop.
    @taskIndex: the id of the window/task
  **/
  openWindow(taskIndex){
    this.setWindowActivity(taskIndex, true)
    this.setFocus(taskIndex)
  }
  
  /**
    Is called when clicking on the minimize button on a window.
    Minimize the window (than can be reopened by clicking in the taskbar)
    @taskIndex : the id of the window/task
  **/
  minimizeWindow(taskIndex){
    this.setWindowActivity(taskIndex, false)
  }
  
  /**
    Is called when clicking on the close button on a window.
    Close the window (you can't reopen it in the taskbar)
    Terminate the underlying application.
    @taskIndex : the id of the window/task
  **/
  closeTask(taskIndex){
    // We set the focus before closing, to avoid disrupting the z-index order
    this.setFocus(taskIndex)
    
    // Removing the task from the list
    let tasksCopy = this.state.tasks
    tasksCopy.splice(taskIndex, 1)
    this.setState({tasks: tasksCopy})
  }


  /**
    Set the focus on a window (z-index)
    @windowIndex: the window to focus on
  **/
  setFocus(windowIndex){
    let tasksCopy = this.state.tasks
    let tasksCopyLength = tasksCopy.length

    if(tasksCopyLength > 1 && tasksCopy[windowIndex].zIndex !== tasksCopyLength) // the z-index is not changed if it's not necessary
    {
      let windowOriginalZIndex = tasksCopy[windowIndex].zIndex
      // the z-index is changed according to the number of tasks
      for(let i = 0; i < tasksCopyLength; i++){
        if(tasksCopy[i].zIndex > windowOriginalZIndex ){
          tasksCopy[i].zIndex--
        }else if(i === windowIndex){
          tasksCopy[i].zIndex = tasksCopyLength
        }
      }
      this.setState({tasks: tasksCopy})
    }

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
          windowCloseFunction = {this.closeTask}
          windowFocusFunction = {this.setFocus}
        />
      </div>
    );
  }
}

export default App;
