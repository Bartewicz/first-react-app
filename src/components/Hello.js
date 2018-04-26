import React from 'react'

const HelloNested = (props) => (
  <h1>Hello {props.match.params.name}!</h1>
)

const Hello = (props) => (
  <HelloNested {...props} />
)

export default Hello