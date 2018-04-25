import React from 'react'
import Header from './Header'

const Add = ({numberA, numberB}) => (
    <div>
        Suma {numberA} i {numberB} jest równa <Header text={numberA + numberB} />
    </div>
)

export default Add