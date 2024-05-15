import React, { useState } from 'react'

const initState = {
    fname: 'Anushika',
    lname: 'Singh'
}

const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        const newPerson = {...person}
        newPerson.fname = 'Shruti'
        newPerson.lname = 'Singh'
        setPerson(newPerson)
    }

    console.log('Render ObjectUseState');
    
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
