import React, { useState, useEffect } from 'react'
import useFetchComments from '../../hooks/useFetchComments'

function CustomHooks2() {
  const [isLoading, setIsLoading] = useState(true)
  const [postId, setPostId] = useState(1)
  const { comments, error, fetchComments } = useFetchComments()

  useEffect(() => {
    let ignore = false

    async function fetch() {
      await fetchComments(postId)
      if (!ignore) setIsLoading(false)
    }

    fetch()

    return () => {
      ignore = true
    }
  }, [fetchComments, postId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  if (!comments.length) {
    return <div>No data.</div>
  }

  return (
    <div>
      <h4>
        Example of how to use custom hooks (fetch) within useEffect (didmount
        and didupdate)
      </h4>
      <div>
        <button type="submit" onClick={() => setPostId(1)}>
          POST ID 1
        </button>
        <button type="submit" onClick={() => setPostId(2)}>
          POST ID 2
        </button>
      </div>
      <div>
        <h4>POST ID = {postId}</h4>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomHooks2
