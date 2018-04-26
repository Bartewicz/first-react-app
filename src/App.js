import React from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from './components/CounterWithState'

const App = () => (
    <div>
        <MyFirstComponent name="Bartosz" />
        <Add numberA={3} numberB={5} />
        <Add numberA={13} numberB={75} />
        <Header text={'Ala ma kota'} isRed={false}/>

        <hr />

        <p>null: {null}</p>
        <p>undefined: {undefined}</p>
        <p>true: {true}</p>
        <p>false: {false}</p>
        <p>string 'Ala ma kota': {'Ala ma kota'}</p>
        <p>number 23: {23}</p>
        
        <p>array [1, 2, 3]: {[1, 2, 3]}</p>
        <p>array ['Ala', 'Ola', 'Ela']: {['Ala', 'Ola', 'Ela']}</p>
        <div>array with JSX: {[<b key={1}>BOLD</b>, <h1 key={2}>H1</h1>]}</div>

        {/* <p>object: {{}}</p> */}

        <hr />

        <MappingArray />
        
        <hr />

        <MappingArray2 />

        <hr />

        <CounterWithState />
    </div>
)

export default App