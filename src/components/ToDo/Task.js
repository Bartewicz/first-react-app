import React from 'react'

const Task = ({ name, deleteTask }) => (
  <div>
    {name}
    <button
      onClick={deleteTask}
    >
      X
    </button>
  </div>
)

export default Task