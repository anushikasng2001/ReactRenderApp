import React, { useContext } from 'react'
import { CountContext } from './ContextParent';

export const ChildA = () => {
    console.log('Render ChildA');
  return (
    <div>
      <div>Child A</div>
      <ChildB/>
    </div>
  )
}

export const ChildB = () => {
    console.log('Render ChildB');
    return (
      <div>
        <div>Child B</div>
        <ChildC/>
      </div>
    )
  }

  export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('Render ChildC');
    return (
      <div>
        <div>Child C count - {count}</div>
      </div>
    )
  }
