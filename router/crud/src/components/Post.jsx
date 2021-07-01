/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import PostBody from './PostBody';
import axios from 'axios';
import ContentContext from '../context/ContentContext';
import { useHistory } from 'react-router-dom';

export default function Post({match}) {
  const [content, setContent] = useContext(ContentContext)
  const history = useHistory()

  useEffect(()=> {
    const getFetch = (url) => {
      fetch(url).then((response) => response.json())
      .then(response => setContent(response))
    }
    getFetch('http://localhost:7777/posts')
    }, [setContent])

  const {id} = match.params;
  const [deleted, setDeleted] = useState(null);

  const handleEdit = (e) => {
    history.push(`/posts/${id}/edit`)
  }

  const handleDel = (e) => {
    const url = `http://localhost:7777/posts/${id}`
    axios.delete(url)
    .then(() => setDeleted(true))
  }

  if (!deleted) return (
    <PostBody id={id}>
      <p>{(content.find(item => item.id === +id)).content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDel}>Del</button>
    </PostBody>
  )

  return (<Redirect to="/"/>)
}
