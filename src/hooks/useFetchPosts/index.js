import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetchPosts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    async function fetchPosts() {
      try {
        setError(null)
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        if (!ignore) setPosts(data)
      } catch (err) {
        if (!ignore) setError(err)
      }
    }

    fetchPosts()

    return () => {
      ignore = true
    }
  }, [])

  return { posts, error }
}

export default useFetchPosts
