import React from 'react'
import axios from 'axios'
import { render, act, waitForDomChange } from '@testing-library/react'
import useFetchPosts from '../../hooks/useFetchPosts'
import CustomHooks1 from './index'

jest.mock('../../hooks/useFetchPosts')

// unit test with mocking useFetchPosts directly
test('should match with snapshot when it contains a list of posts', () => {
  useFetchPosts.mockImplementation(() => ({
    posts: [
      {
        userId: 1,
        id: 1,
        title: 'mock title',
        body: 'mock body',
      },
    ],
    error: null,
  }))

  act(() => {
    const { asFragment } = render(<CustomHooks1 />)
    expect(asFragment()).toMatchSnapshot()
  })
})

// this is integration testing but mocking axios instead
// test('should match with snapshot when it contains a list of posts', async () => {
//   const mockResult = [
//     {
//       userId: 1,
//       id: 1,
//       title: 'mock title',
//       body: 'mock body',
//     },
//   ]
//   axios.get.mockResolvedValue({ data: mockResult })

//   await act(async () => {
//     const { asFragment } = render(<CustomHooks1 />)
//     await waitForDomChange()
//     expect(asFragment()).toMatchSnapshot()
//   })
// })

test('should match with snapshot when it is error', () => {
  useFetchPosts.mockImplementation(() => ({
    posts: [],
    error: 'error message',
  }))

  act(() => {
    const { asFragment } = render(<CustomHooks1 />)
    expect(asFragment()).toMatchSnapshot()
  })
})

test('should match with snapshot when it does not contain a post', () => {
  useFetchPosts.mockImplementation(() => ({
    posts: [],
    error: null,
  }))

  act(() => {
    const { asFragment } = render(<CustomHooks1 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
