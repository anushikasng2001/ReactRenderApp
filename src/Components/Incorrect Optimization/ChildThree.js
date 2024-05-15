import React from 'react'

const ChildThree = ({children, name}) => {
    console.log('Render ChildThree Component');
  return (
    <div>
      {children} {name}
    </div>
  )
}

export default React.memo(ChildThree)
