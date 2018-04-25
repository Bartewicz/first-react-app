import React from 'react'

const names = ['Ala', 'Ola', 'Ela', 'Ewa']

const MappingArray = (properties) => (
    <h1>
        {
            names.map((name) => <div key={name}>{name}</div>)
        }
    </h1>
)

export default MappingArray