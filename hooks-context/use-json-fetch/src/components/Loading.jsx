import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function Loading({url}) {
  const [data, loading, error] = useJsonFetch(url)

  return (
    <div>
      <h5>{url}</h5>
      Data: {loading && <img src="../loading-25.gif" alt=""/>}
      {data && '✅' }
      {error && error }
    </div>
  )
}
