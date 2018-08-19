import React, {Component} from 'react'
import TaskBar from './Components/Taskbar'
import Desktop from './Components/Desktop'
import AppMenu from './Components/AppMenu'
import Welcome from './Components/Applications/Welcome'
import TaskManager from './Components/Applications/TaskManager'
import './App.css'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isAppMenuShown : false,
      applications: null,
      tasks: [{
        title: "Welcome", 
        applicationComponent: <Welcome />,
        isWindowActive: true,
        isWindowResizable: false,
        defaultWindowWidth: 400,
        defaultWindowHeight: 400,
        zIndex: 1
      }
      ]
    }

    // Binding
    this.setWindowActivity = this.setWindowActivity.bind(this)
    this.openWindow = this.openWindow.bind(this)
    this.minimizeWindow = this.minimizeWindow.bind(this)
    this.closeTask = this.closeTask.bind(this)
    this.setFocus = this.setFocus.bind(this)
    this.openAppMenu = this.openAppMenu.bind(this)
    this.closeAppMenu = this.closeAppMenu.bind(this)
    this.createTask = this.createTask.bind(this)
  }
  
  componentDidMount(){
      this.setState({
      // List of available applications to create tasks from
      applications:[{
        title: "Task manager",
        component: <TaskManager tasks={this.state.tasks} killFunction={this.closeTask} />,
        isWindowResizable: true,
        defaultWindowWidth: 400,
        defaultWindowHeight: 400,
      },{
        title: "Empty window",
        component: null,
        isWindowResizable: true,
        defaultWindowWidth: 200,
        defaultWindowHeight: 200,
      }]
    })
  }
  // Functions relative to windows and tasks

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
    Create a new task of a certain application
    @applicationId: the id of the app as refered in the applications state
  **/
  createTask(applicationId){
    // Task creation
    let application = this.state.applications[applicationId]

    let task = {
        title: application.title, 
        applicationComponent: application.component,
        isWindowResizable: application.isWindowResizable,
        defaultWindowWidth: application.defaultWindowWidth,
        defaultWindowHeight: application.defaultWindowHeight,
    }

    // Changing the state
    let tasksCopy = this.state.tasks
    tasksCopy.push(task)
    this.setState({tasks: tasksCopy})

    // Open the created task
    this.openWindow(this.state.tasks.length-1)
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

  // Functions relative to the app menu
  openAppMenu(){
    this.setState({isAppMenuShown: true})
  }

  closeAppMenu(){
    this.setState({isAppMenuShown: false})
  }

  render() {
    let appMenu = null
    if(this.state.isAppMenuShown){
        appMenu = <AppMenu 
          closeMenuFunction = {this.closeAppMenu} 
          applications = {this.state.applications}
          createTaskFunction={this.createTask} 
          />
      }

    return (
      <div>
        <TaskBar 
          tasks={this.state.tasks}
          onTaskClick={this.openWindow}
          openAppMenuFunction={this.openAppMenu}
        />
        <Desktop 
          tasks = {this.state.tasks}
          windowMinimizeFunction = {this.minimizeWindow}
          windowCloseFunction = {this.closeTask}
          windowFocusFunction = {this.setFocus}
        />
        {appMenu}
      </div>
    )
  }
}

export default App;
