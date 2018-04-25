import React from 'react'

const styles = {
    header: {
        display: 'inline',
        margin: 0
    }

}

const Header = (value) => (
    <h1
        style={
            value.isRed ?
                { ...styles.header, color: 'red' } :
                { ...styles.header, color: 'blue' }
        }
    >
        {value.text}
    </h1>
)

export default Header