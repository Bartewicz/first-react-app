import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from './components/CounterWithState'

const App = () => (
    <div>

        <hr />

        <Router>
            <div>
                <Link to={'/'}>Home </Link>
                <Link to={'/counter'}>Mapping Array </Link>
                <Link to={'/mapping-array2'}>Mapping Array2 </Link>
                <Link to={'/counter-with-state'}>Counter With State </Link>

                <hr />

                <Route path={'/mapping-array'} component={MappingArray} />
                <Route path={'/mapping-array2'} component={MappingArray2} />
                <Route path={'/counter-with-state'} component={CounterWithState} />
            </div>
        </Router>

        <hr />

        <MyFirstComponent name="Bartosz" />
        <Add numberA={3} numberB={5} />
        <Add numberA={13} numberB={75} />
        <Header text={'Ala ma kota'} isRed={false} />

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

    </div>
)

export default App