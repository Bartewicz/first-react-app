import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import Dashboard from './components/Dashboard'
import ToDo from './components/ToDo'
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'
import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import CounterWithState from './components/CounterWithState'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import Header from './components/Header'

class App extends React.Component {
    state = {
        isOpen: false
    }

    drawerStateHandler = () => this.setState({
        isOpen: !this.state.isOpen
    })

    closeDrawer = () => this.setState({
        isOpen: false
    })

    render() {
        return (
            <div>
                <AppBar
                    title="My First React App"
                    onLeftIconButtonClick={this.drawerStateHandler}
                />

                <Router>
                    <div>
                        <Sidebar
                            open={this.state.isOpen}
                            handler={this.drawerStateHandler}
                            close={this.closeDrawer}
                        />

                        <Route exact path={'/'} component={Dashboard} />
                        <Route path={'/to-do'} component={ToDo} />
                        <Route path={'/hello/:name'} component={Hello} />
                        <Route path={'/what-react-displays'} render={
                            () => (
                                <div>
                                    <p>null: {null}</p>
                                    <p>undefined: {undefined}</p>
                                    <p>true: {true}</p>
                                    <p>false: {false}</p>
                                    <p>string 'Ala ma kota': {'Ala ma kota'}</p>
                                    <p>number 23: {23}</p>

                                    <p>array [1, 2, 3]: {[1, 2, 3]}</p>
                                    <p>array ['Ala', 'Ola', 'Ela']: {['Ala', 'Ola', 'Ela']}</p>
                                    <div>array with JSX: {[<b key={1}>BOLD</b>, 
                                    <h1 key={2}>H1</h1>]}</div>

                                    {/* <p>object: {{}}</p> */}
                                </div>
                            )
                        } />
                        <Route path={'/mapping-array'} component={MappingArray} />
                        <Route path={'/mapping-array2'} component={MappingArray2} />
                        <Route path={'/counter-with-state'} component={CounterWithState} />
                        <Route path={'/my-first-component'} render={
                            () => (<MyFirstComponent name="Bartosz" />)
                        } />
                        <Route path={'/add-3-&-5'} render={
                            () => (<Add numberA={3} numberB={5} />)
                        } />
                        <Route path={'/add-13-&-75'} render={
                            () => (<Add numberA={13} numberB={75} />)
                        } />
                        <Route path={'/header'} render={
                            () => (<Header text={'Ala ma kota'} isRed={false} />)
                        } />
                    </div>
                </Router>

                <hr />

            </div>
        )
    }
}

export default App