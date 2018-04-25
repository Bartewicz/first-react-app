import React from 'react'

const users = [
    {name: 'Ala', key: 'user1'},
    {name: 'Ola', key: 'user2'},
    {name: 'Ela', key: 'user3'},
    {name: 'Ewa', key: 'user4'}
]

const MappingArray = () => (
    <h1>
        {
            users.map(user => <div key={user.key}>{user.name}</div>)
        }
        </h1>
)

export default MappingArray