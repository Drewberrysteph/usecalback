import React from "react"

const Name = ({ name, handleChange }) => {
  console.log("Name component change")

  return (
    <div>
      <h2>Name component</h2>
      <p>Name: {name}</p>
      <input type="text" onChange={e => handleChange(e.target.value)} />
    </div>
  )
}

export default React.memo(Name)
