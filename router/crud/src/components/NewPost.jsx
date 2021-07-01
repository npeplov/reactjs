import { useState } from "react"
import {Redirect} from 'react-router-dom'
import React from 'react'
import axios from "axios"

export default function NewPost({history}) {
  const [content, setcontent] = useState('')
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:7777/posts'
    axios.post(url, { id: 0, content })
    .then(resp => setResponse(resp))
  }

  const handleChange = (e) => {
    const {value} = e.target
    setcontent(value)
  }

  if (!response)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <textarea onChange={handleChange} value={content} cols="24" rows="3" placeholder="Введите текст нового поста"></textarea>
          <button type="submit">Опубликовать</button>
        </form>
      </div>
    )

  return (<Redirect to="/"/>)
}