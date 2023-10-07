import { useEffect } from "react"

const Child = ({onChildClick}: {onChildClick: any }) => {

    useEffect(() => {
        console.log('child render')
    }, [])

    return (
    <div>
        <button onClick={onChildClick}>Child Button</button>
    </div>
  )
}

export default Child