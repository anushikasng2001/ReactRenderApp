import React, { useState } from 'react'

const initState = ['Anushika', 'Shruti']

const ArrayUseState = () => {

    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        const newPersons = [...persons]
        newPersons.push('Mirnal')
        newPersons.push('Rudra')
        setPersons(newPersons)
    }

    console.log('Render ArrayUseState');

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        {persons.map(person => (
            <div key={person}>{person}</div>
        ))}
    </div>
  )
}

export default ArrayUseState
