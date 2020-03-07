import { renderHook, act } from '@testing-library/react-hooks'
import axios from 'axios'
import useFetchComments from './index'

test('should return default comments, error and fetchComments function', () => {
  const { result } = renderHook(() => useFetchComments())
  expect(result.current.comments).toStrictEqual([])
  expect(result.current.error).toBeNull()
  expect(result.current.fetchComments).toStrictEqual(expect.any(Function))
})

test('should set comments value when fetchComments successfully', async () => {
  const mockRes = [
    {
      postId: 1,
      id: 1,
      name: 'name',
      email: 'email@email.com',
      body: 'body',
    },
  ]
  axios.get.mockResolvedValue({ data: mockRes })
  const { result, waitForNextUpdate } = renderHook(() => useFetchComments())

  result.current.fetchComments(1)

  await waitForNextUpdate()

  expect(result.current.comments).toStrictEqual(mockRes)
  expect(result.current.error).toBeNull()
})

test('should set error when fetchComments failed', async () => {
  axios.get.mockRejectedValue('error')
  const { result, waitForNextUpdate } = renderHook(() => useFetchComments())

  result.current.fetchComments(1)

  await waitForNextUpdate()

  expect(result.current.comments).toStrictEqual([])
  expect(result.current.error).toBe('error')
})
