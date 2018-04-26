import React from 'react'
import {withRouter} from 'react-router-dom'

const HelloNested = withRouter((props) => (
  <h1>Hello {props.match.params.name}!</h1>
))

const HelloNestedWithRouter = withRouter(HelloNested)

const Hello = (props) => (
  <HelloNestedWithRouter />
)

export default Hello