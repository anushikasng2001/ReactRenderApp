import React, { useState } from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

const GrandParent = () => {

    const [newCount, setNewCount] = useState(0)

    console.log('Render GrandParent');

  return (
    <div>
        <button onClick={() => setNewCount(newCount + 1)}>GrandParent Count - {newCount}</button>
        <ParentOne newCount = {newCount}>
            <ChildOne/>
        </ParentOne>
    </div>
  )
}

export default GrandParent
