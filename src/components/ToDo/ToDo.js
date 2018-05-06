import React from 'react'
import List from './List'

class ToDo extends React.Component {
  state = {
    tasks: [
      { name: 'Jedź na Dziki Wschód.', uid: 1524820899598 },
      { name: 'Zdobądź konia i posadę szeryfa.', uid: 1524820931172 }
    ],
    filterText: ''
  }

  deleteTask = (taskUid) => {
    const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <div>
        <List
          deleteTaskFunction={this.deleteTask}
          tasksList={this.state.tasks}
        />
      </div>
    )
  }
}

export default ToDo