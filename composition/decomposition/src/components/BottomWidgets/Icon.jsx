import React from 'react'

export default function Icon({src}) {
  if (src)
  return (
    <img src={src} alt=""/>
  )
  else return null
}
