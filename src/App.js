import React from 'react'
import MyFirstComponent from './components/myFirstComponent'
import Add from './components/Add'

const App = () => (
    <div>
        <MyFirstComponent name="Bartosz" />
        <Add numberA={3} numberB={5} />
        <Add numberA={13} numberB={75} />
    </div>
)

export default App