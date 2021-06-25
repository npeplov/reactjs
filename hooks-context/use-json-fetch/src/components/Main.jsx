import React, {} from 'react'
import Loading from './Loading'
import Data from './Data';
import Error from './Error'

export default function Main() {
  return (
    <>
      <Loading url='http://localhost:7070/loading'/>
      <Data url='http://localhost:7070/data'/>
      <Error url='http://localhost:7070/error'/>
    </>
  )
}
