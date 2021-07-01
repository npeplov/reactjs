import { useState } from "react"
import React from 'react'

export default function NewPost({history}) {
  const [content, setcontent] = useState('')

  const postFetch = (url) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({id: 0, content})
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postFetch('http://localhost:7777/posts');
    history.go(-1)
  }

  const handleChange = (e) => {
    const {value} = e.target
    setcontent(value)
  }

  return (
    <div>
      {/* <Redirect to="/posts"/> */}
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={content} name="" id="" cols="24" rows="3" placeholder="Введите текст нового поста"></textarea>
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  )
}