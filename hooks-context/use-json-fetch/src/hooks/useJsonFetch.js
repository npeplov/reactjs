import { useState, useEffect } from "react";

export default function  useJsonFetch(url) {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) 
          throw new Error(response.statusText)
        const data = await response.json()
        setData(data)
      }
      catch(e) {
        setError(e.toString())
      }
      finally {
        setLoading(false)
      }
    }
    getData()
  }, [url])

  return [data, isLoading, hasError]
}