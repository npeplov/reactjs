import React from 'react'

export default function Details({user}) {
  if (user)
    return (
      <div>
        Details
        <li><img src={user.avatar} alt="" /></li>
        <li>{user.name}</li>
        <li>{user.details && user.details.city}</li>
        <li>{user.details && user.details.company}</li>
        <li>{user.details && user.details.position}</li>
      </div>
    )
  else return null
}
