import React from 'react'

const Header = (value) => (
    <h1
        style={{
            color: 'red',
            display: 'inline',
            margin: 0
        }}
    >
        {value.text}
    </h1>
)

export default Header