/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ContentContext from '../context/ContentContext';
import { useHistory } from 'react-router-dom';

export default function EditPost({match}) {
  const {id} = match.params;
  const [content, setcontent] = useContext(ContentContext)
  const [text, setText] = useState(content.find(item => item.id === +id).content)
  const history = useHistory()

  
  useEffect(()=> {
    
  },[content])

  const handleChange = (e) => {
    const {value} = e.target
    setText(value)
  }

  const handleSave = (e) => {
    e.preventDefault();
    const url = 'http://localhost:7777/posts'
    axios.post(url, { id: +id, content: text })
    .then(() => history.push(`../${id}`))
  }

  return (
    <form onSubmit={handleSave}>
      <textarea onChange={handleChange} value={text} cols="24" rows="3"></textarea>
      <button>Save</button>
    </form>
  )
}
