import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data({url}) {
  const [data, loading, error] = useJsonFetch(url)

  return (
    <div>
      <h5>{url}</h5>
      {loading && <img src="../loading-25.gif" alt=""/>}
      {data && 'Data: ' + data.status }
      {error && error}
    </div>
  )
}
