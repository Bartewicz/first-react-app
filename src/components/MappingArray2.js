import React from 'react'

const users = [
    {name: 'Szymon', pos: 1},
    {name: 'Paweł', pos: 2},
    {name: 'Mateusz', pos: 3},
    {name: 'Bartosz', pos: 4}
]

const usersList = users.map(user => <li key={'male user ' + user.pos}>{user.pos}. {user.name}</li>)

const MappingArray2 = () => (<ul> { usersList } </ul>)

export default MappingArray2