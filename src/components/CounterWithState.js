import React from 'react'

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
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.minusCount}> - </button>
                    <button onClick={this.plusCount}> + </button>
                </div>
            </div >
        )
    }
}

export default CounterWithState