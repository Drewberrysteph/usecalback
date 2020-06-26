import React from "react"

const Counter2 = ({ count2, handleCount2 }) => {
  console.log("Counter2 component render")
  return (
    <div>
      <p>Counter2: {count2}</p>
      <button onClick={handleCount2}> Increment2</button>
    </div>
  )
}

export default React.memo(Counter2)
