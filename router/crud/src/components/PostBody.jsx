import React from 'react'

export default function PostBody(props) {
  return (
    <div>
      <p>This is post #{props.id}</p>
      {props.children}
    </div>
  )
}
