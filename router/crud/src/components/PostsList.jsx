import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function PostsList() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getFetch = (url) => {
      fetch(url).then((response) => response.json())
      .then(response => setPosts(response))
    }
    getFetch('http://localhost:7777/posts')
  }, [])

  return (
    <div>
      <button><Link to="/posts/new">Создать пост</Link></button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            Дата: {post.created.toString()}
            <p><Link to={`/posts/${post.id}`}>{post.content}</Link></p>
          </li>
        ))}
      </ul>
    </div>
  )
}
