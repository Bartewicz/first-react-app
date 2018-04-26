import React from 'react'
import Header from './Header'

class Add extends React.Component {
    render() {
        return (
            <div>
                Suma {this.props.numberA} i {this.props.numberB} jest równa
        <Header text={this.props.numberA + this.props.numberB} isRed={true} />
            </div>
        )
    }
}

export default Add