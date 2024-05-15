import React, { useState } from 'react'
import ChildThree from './ChildThree';
import ChildFour from './ChildFour';

const ParentThree = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Anushika')

    console.log('Render ParentThree component');

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        <button onClick={() => setName('Shruti')}>Change Name - {name}</button>
        <ChildFour name={name}/>
        {/* <ChildThree name={name}>
            <strong>Hello</strong>
        </ChildThree> */}
    </div>
  )
}

export default ParentThree
