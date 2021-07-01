import React from 'react'

export default function Post({match}) {
  return (
    <div>
      This is post #{match.params.id} 
    </div>
  )
}
