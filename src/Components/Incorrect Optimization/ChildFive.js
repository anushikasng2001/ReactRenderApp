import React from 'react'

const ChildFive = ({name}) => {
    console.log('Render ChildFive Component');
  return (
    <div>
      Hello {name}
    </div>
  )
}

export default React.memo(ChildFive)
