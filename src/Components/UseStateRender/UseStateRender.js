import React, { useState } from 'react'

export default function UseStateRender() {

    const [count, setCount] = useState(0)

    console.log('Render useState component');

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  )
}
