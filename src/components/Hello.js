import React from 'react'

const Hello = (props) => (
  <h1>Hello {props.match.params.name}!</h1>
)

export default Hello