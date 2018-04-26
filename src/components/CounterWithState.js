import React from 'react'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    btn: {
        margin: '10px'
    }
}

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