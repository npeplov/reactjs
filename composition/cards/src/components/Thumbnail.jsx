import React from 'react'

export default function Thumbnail({src}) {
  if (src)
    return (
      <img src={src} alt="" />
    )
  return null
}
