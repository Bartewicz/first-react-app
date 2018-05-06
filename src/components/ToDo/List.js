import React from 'react'
import Task from './Task'

const List = ({ tasksList, deleteTaskFunction }) => (
  <div>
    {
      tasksList.map(task => (
        <Task
          name={task.name}
          key={task.uid}
          deleteTask={() => deleteTaskFunction(task.uid)}
        />
      ))
    }
  </div>
)

export default List