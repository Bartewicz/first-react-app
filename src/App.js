import React from 'react'
import MyFirstComponent from './components/myFirstComponent'
import Add from './components/Add'
import Header from './components/Header'

const App = () => (
    <div>
        <MyFirstComponent name="Bartosz" />
        <Add numberA={3} numberB={5} />
        <Add numberA={13} numberB={75} />
        <Header text={'Ala ma kota'} isRed={false}/>
    </div>
)

export default App