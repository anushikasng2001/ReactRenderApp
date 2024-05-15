import React from 'react'

const ChildFour = ({name}) => {

    const date = new Date()

    console.log('Render ChildFour');
  return (
    <div>
      Hello {name}. The time is {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}.
    </div>
  )
}

export default React.memo(ChildFour)
