import React, { useState } from 'react'
import ChildTwo from './ChildTwo';

const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Anushika')

    console.log('Render ParentTwo component');

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        <button onClick={() => setName('Shruti')}>Change Name - {name}</button>
        <ChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo
