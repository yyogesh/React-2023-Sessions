import React from "react"

const Child = ({onChildClick}: {onChildClick: any }) => {

    console.log('child render')

    return (
    <div>
        <button onClick={onChildClick}>Child Button</button>
    </div>
  )
}

//To prevent useless list re-renderings, you wrap it into React.memo()
export default React.memo(Child)