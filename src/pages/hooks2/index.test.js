import React from 'react'
import { shallow } from 'enzyme'
import {
  render,
  waitForDomChange,
  act,
  getByText,
  fireEvent,
} from '@testing-library/react'
import CustomHooks2 from './index'
import useFetchComments from '../../hooks/useFetchComments'

jest.mock('../../hooks/useFetchComments')

test('should match with snapshot when it is loading', async () => {
  useFetchComments.mockImplementation(() => ({
    comments: [],
    error: null,
    fetchComments: jest.fn(),
  }))

  // use shallow so it does not trigger useEffect
  const component = shallow(<CustomHooks2 />)
  expect(component).toMatchSnapshot()
})

test('should match with snapshot when there is no data', async () => {
  const mockFn = {
    fetchComments: jest.fn(),
  }

  useFetchComments.mockImplementation(() => ({
    comments: [],
    error: null,
    fetchComments: mockFn.fetchComments,
  }))

  const fetchComments = jest.spyOn(mockFn, 'fetchComments')

  const { asFragment } = render(<CustomHooks2 />)

  await waitForDomChange()

  expect(asFragment()).toMatchSnapshot()
  expect(fetchComments).toHaveBeenNthCalledWith(1, 1) // to test useEffect
})

test('should match with snapshot when it contains a lits of comments', async () => {
  const mockFn = {
    fetchComments: jest.fn(),
  }

  useFetchComments.mockImplementation(() => ({
    comments: [
      {
        postId: 1,
        id: 1,
        name: 'name',
        email: 'email@email.com',
        body: 'body',
      },
    ],
    error: null,
    fetchComments: mockFn.fetchComments,
  }))

  const fetchComments = jest.spyOn(mockFn, 'fetchComments')

  const { asFragment } = render(<CustomHooks2 />)

  await waitForDomChange()

  expect(asFragment()).toMatchSnapshot()
  expect(fetchComments).toHaveBeenNthCalledWith(1, 1)
})

test('should match with snapshot when it contains error', async () => {
  const mockFn = {
    fetchComments: jest.fn(),
  }

  useFetchComments.mockImplementation(() => ({
    comments: [],
    error: 'error',
    fetchComments: mockFn.fetchComments,
  }))

  const fetchComments = jest.spyOn(mockFn, 'fetchComments')

  const { asFragment } = render(<CustomHooks2 />)

  await waitForDomChange()

  expect(asFragment()).toMatchSnapshot()
  expect(fetchComments).toHaveBeenNthCalledWith(1, 1)
})

test('should not set any value when component is unmounted', async () => {
  const mockFn = {
    fetchComments: jest.fn(),
  }

  useFetchComments.mockImplementation(() => ({
    comments: [],
    error: 'error',
    fetchComments: mockFn.fetchComments,
  }))

  const fetchComments = jest.spyOn(mockFn, 'fetchComments')

  const { asFragment, unmount } = render(<CustomHooks2 />)

  unmount()

  expect(asFragment()).toMatchSnapshot() // blank DOM since it's unmounted
  expect(fetchComments).toHaveBeenNthCalledWith(1, 1)
})

test('onClick button post id 1', async () => {
  useFetchComments.mockImplementation(() => ({
    comments: [
      {
        postId: 1,
        id: 1,
        name: 'name',
        email: 'email@email.com',
        body: 'body',
      },
    ],
    error: null,
    fetchComments: jest.fn(),
  }))

  const { asFragment, container } = render(<CustomHooks2 />)
  await waitForDomChange()
  const button = getByText(container, 'POST ID 1')
  fireEvent.click(button)
  expect(asFragment()).toMatchSnapshot()
})

test('onClick button post id 2', async () => {
  useFetchComments.mockImplementation(() => ({
    comments: [
      {
        postId: 1,
        id: 1,
        name: 'name',
        email: 'email@email.com',
        body: 'body',
      },
    ],
    error: null,
    fetchComments: jest.fn(),
  }))

  await act(async () => {
    const { asFragment, container } = render(<CustomHooks2 />)
    await waitForDomChange()
    const firstRender = asFragment()
    const button = getByText(container, 'POST ID 2')
    fireEvent.click(button)
    expect(asFragment()).toMatchDiffSnapshot(firstRender)
  })
})
