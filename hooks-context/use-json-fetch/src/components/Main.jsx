import React, {} from 'react'
import Common from './Common';

export default function Main() {
  return (
    <>
      <Common url='http://localhost:7070/loading'/>
      <Common url='http://localhost:7070/data'/>
      <Common url='http://localhost:7070/error' className="Error" />
    </>
  )
}
