import React from 'react'

export default function Note({text}) {
  const destroyNote = () => {
    
  }

  return (
    <>
    <div className="Note">
      <p>{text}</p>
      <button onClick={destroyNote}>Destroy</button>
    </div>
    </>
  )
}
