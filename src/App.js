import React from 'react'
import MyFirstComponent from './components/myFirstComponent'
import Add from './components/Add'
import Header from './components/Header'

const App = () => (
    <div>
        <MyFirstComponent name="Bartosz" />
        <Add numberA={3} numberB={5} />
        <Header text={'Ala ma kota'} />
    </div>
)

export default App