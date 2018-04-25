import React from 'react'

const names = ['Ala', 'Ola', 'Ela']

const divs = [
    <div key={1}>{names[0]}</div>,
    <div key={2}>{names[1]}</div>,
    <div key={3}>{names[2]}</div>,
    <div key={4}>{names[3]}</div>,
]

const MappingArray = (properties) => (
    <h1>{divs}</h1>
)

export default MappingArray