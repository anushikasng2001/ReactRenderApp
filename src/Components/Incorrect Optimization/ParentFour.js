import React, { useCallback, useMemo, useState } from 'react'
import ChildFive from './ChildFive';

const ParentFour = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Anushika')

  const person = {
    fname: 'Anushika',
    lname: 'Singh'
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

    console.log('Render ParentFour component');

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        <button onClick={() => setName('Shruti')}>Change Name - {name}</button>
        <ChildFive name={name} handleClick={memoizedHandleClick}/>
        {/* <ChildFive name={name} person={memoizedPerson}/> */}

    </div>
  )
}

export default ParentFour
