import React from 'react'
import useFetchPosts from '../../hooks/useFetchPosts'

function CustomHooks1() {
  const { posts, error } = useFetchPosts()

  if (error) {
    return <div>Error!</div>
  }

  if (!posts.length) {
    return <div>Loading..</div>
  }

  return (
    <div>
      <div>This is the example of Custom Hooks (API Fetch) with UseEffect</div>
      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default CustomHooks1
