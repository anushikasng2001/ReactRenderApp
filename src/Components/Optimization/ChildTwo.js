import React from 'react'

const ChildTwo = () => {
    console.log('Render ChildTwo Component');
  return (
    <div>
      ChildTwo component
    </div>
  )
}

export default React.memo(ChildTwo)
