import React from 'react'

class CounterWithState extends React.Component {
    render() {
        return (
            <div>
                <h1>Tu będzie liczba</h1>
                <div>
                    <button> - </button>
                    <button> + </button>
                </div>
            </div>
        )
    }
}

export default CounterWithState