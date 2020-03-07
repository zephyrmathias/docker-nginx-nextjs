import axios from 'axios'
import { renderHook } from '@testing-library/react-hooks'
import useFetchPosts from './index'

test('should set list of posts correctly when fetching a list of posts successfully', async () => {
  const mockResult = [
    {
      userId: 1,
      id: 1,
      title: 'mock title',
      body: 'mock body',
    },
  ]
  axios.get.mockResolvedValue({ data: mockResult })

  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts())

  expect(result.current.posts).toStrictEqual([])
  expect(result.current.error).toBeNull()

  await waitForNextUpdate()

  expect(result.current.posts).toStrictEqual(mockResult)
  expect(result.current.error).toBeNull()
})

test('should set error message when failed fetching a list of posts', async () => {
  const errMsg = 'error message'
  axios.get.mockRejectedValue(errMsg)

  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts())

  expect(result.current.posts).toStrictEqual([])
  expect(result.current.error).toBeNull()

  await waitForNextUpdate()

  expect(result.current.posts).toStrictEqual([])
  expect(result.current.error).toBe(errMsg)
})

test('should not set any value if component is unmounted and fetching a list of posts', async () => {
  axios.get.mockResolvedValue('mock')

  const { result, unmount } = renderHook(() => useFetchPosts())

  unmount()

  expect(result.current.posts).toStrictEqual([])
  expect(result.current.error).toBeNull()
})

test('should not set any value if component is unmounted and failed fetching a list of posts', async () => {
  axios.get.mockRejectedValue('mock')

  const { result, unmount } = renderHook(() => useFetchPosts())

  unmount()

  expect(result.current.posts).toStrictEqual([])
  expect(result.current.error).toBeNull()
})
