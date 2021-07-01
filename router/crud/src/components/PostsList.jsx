import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ContentContext from '../context/ContentContext';

export default function PostsList() {
  const [posts, setPosts] = useContext(ContentContext);

  useEffect(()=> {
  const getFetch = (url) => {
    fetch(url).then((response) => response.json())
    .then(response => setPosts(response))
  }
  getFetch('http://localhost:7777/posts')
  }, [setPosts])
  
  // console.log(posts);

  if (posts && posts.length) return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          Дата: {post.created}
          <p><Link to={`/posts/${post.id}`}>{post.content}</Link></p>
        </li>
      ))}
    </ul>
    )
  return null
}
