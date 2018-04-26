import React from 'react'
import Header from './Header'

class CounterWithState extends React.Component {
    state = {
        count: 0
    }

    minusCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    plusCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div>
                <Header text={this.state.count} isRed={true} />
                <div>
                    <button onClick={this.minusCount}> - </button>
                    <button onClick={this.plusCount}> + </button>
                </div>
            </div >
        )
    }
}

export default CounterWithState