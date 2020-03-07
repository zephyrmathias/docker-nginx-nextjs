import { useState, useCallback } from 'react'
import axios from 'axios'

function useFetchComments() {
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)

  const fetchComments = useCallback(async (postId) => {
    try {
      setError(null)
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      )
      setComments(data)
    } catch (err) {
      setError(err)
    }
  }, [])

  return { comments, error, fetchComments }
}

export default useFetchComments
