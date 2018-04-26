import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

const menuObjects = [
  { link: '/', name: 'Home' },
  { link: '/hello/Bartosz', name: 'Hello' },
  { link: '/what-react-displays', name: 'What React Displays' },
  { link: '/my-first-component', name: 'My First Component' },
  { link: '/mapping-array', name: 'Mapping Array' },
  { link: '/mapping-array2', name: 'Mapping Array2' },
  { link: '/counter-with-state', name: 'Counter With State' },
  { link: '/add-3-&-5', name: 'Add 3 & 5' },
  { link: '/add-13-&-75', name: 'Add 13 & 75' },
  { link: '/header', name: 'Header' }
]

const Sidebar = (props) => {

  const converted = function (el, i) {
    return (
      <Link key={i} to={el.link}><MenuItem onClick={props.close}>{el.name}</MenuItem></Link>
    )
  }

  const menuItemsArray = menuObjects.map(converted)

  return (
    <Drawer
      docked={false}
      open={props.open}
      onRequestChange={props.handler}
    >
      {menuItemsArray}
    </Drawer>
  )
}

export default Sidebar