import React from 'react'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    btn: {
        margin: '10px'
    }
}

class CounterWithState extends React.Component {
    constructor() {
        super()

        console.log('Component is created...')

        this.state = {
            count: 0
        }

        this.minusCount = () => {
            this.setState({
                count: this.state.count - 1
            })
        }

        this.plusCount = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    // WILL BE DEPRECATED IN REACT 17
    componentWillMount () {
        console.log('Component will mount!')
    }
    
    // We will be usually using this to fetch data from server
    componentDidMount () {
        console.log('Component did mount!')
    }
    
    componentWillUnmount () {
        console.log('Component will unmounted!')
    }
    
    shouldComponentUpdate () {
        console.log('Should component update?')
        return true
    }
    
    // WILL BE DEPRECATED IN REACT 17
    componentWillReceiveProps () {
        console.log('Ccomponent will receive props.')
    }

    componentWillUpdate () {
        console.log('Component will update!')
    }
    
    componentDidUpdate () {
        console.log('Component did update!')
    }
    
    render () {
        console.log('Rendering.. ti ti ti...!')
        
        return (
            <div>
                <Header
                    text={this.state.count}
                    isRed={true}
                    />
                <div>
                    <RaisedButton
                        label={'+'}
                        primary={true}
                        onClick={this.plusCount}
                        style={styles.btn}
                    />
                    <RaisedButton
                        label={'-'}
                        secondary={true}
                        onClick={this.minusCount}
                        style={styles.btn}
                    />
                </div>
            </div >
        )
    }
}

export default CounterWithState