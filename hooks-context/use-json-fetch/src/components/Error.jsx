import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function Error({url}) {
  const [data, loading, error] = useJsonFetch(url)

  return (
    <div className="Error">
      <h5>{url}</h5>
      {loading && <img src="../loading-25.gif" alt=""/>}
      {data && 'Data: ' + data.status }
      {error && error}
    </div>
  )
}
