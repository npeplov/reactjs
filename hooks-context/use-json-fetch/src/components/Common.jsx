import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function Common({url, className}) {
  const [data, loading, error] = useJsonFetch(url)

  return (
    <div className={className}>
      <h5>{url}</h5>
      {loading && <img src="../loading-25.gif" alt=""/>}
      {error && error}
      {data && '✅ Data: ' + JSON.stringify(data)  }
    </div>
  )
}
