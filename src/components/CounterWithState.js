import React from 'react'

class CounterWithState extends React.Component {
    state = {
        count: 0
    }


    render() {
        const minusCount = () => {
            this.setState({
                count: this.state.count - 1
            })
        }
        const plusCount = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={minusCount}> - </button>
                    <button onClick={plusCount}> + </button>
                </div>
            </div>
        )
    }
}

export default CounterWithState