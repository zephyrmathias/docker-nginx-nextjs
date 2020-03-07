import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Button from './index'
import { yellow7, yellow5, gray3 } from '../../constants/colors'

test('Button should apply default values', () => {
  const component = shallow(<Button />)
  expect(component).toMatchSnapshot()
  expect(component).toHaveStyleRule('border-radius', '4px')
  expect(component).toHaveStyleRule('height', '44px')
  expect(component).toHaveStyleRule('font-size', '14px')
  expect(component).toHaveStyleRule('line-height', '14px')
  expect(component).toHaveStyleRule('outline', 'none')
  expect(component).toHaveStyleRule('user-select', 'none')
  expect(component).toHaveStyleRule('border', 'none')
  expect(component).toHaveStyleRule('text-transform', 'uppercase')
  expect(component).toHaveStyleRule('min-width', '150px')
  expect(component).toHaveStyleRule('cursor', 'pointer')
  expect(component).toHaveStyleRule('background', yellow5)
  expect(component).toHaveStyleRule('background', yellow7, {
    modifier: ':hover ',
  })
  expect(component).toHaveStyleRule('background', gray3, {
    modifier: ':disabled ',
  })
  expect(component).toHaveStyleRule('color', 'black')
})

test('Button should apply secondary styles', () => {
  const component = shallow(<Button type="secondary" />)
  expect(component).toMatchSnapshot()
  expect(component).toHaveStyleRule('border-radius', '4px')
  expect(component).toHaveStyleRule('height', '44px')
  expect(component).toHaveStyleRule('font-size', '14px')
  expect(component).toHaveStyleRule('line-height', '14px')
  expect(component).toHaveStyleRule('outline', 'none')
  expect(component).toHaveStyleRule('user-select', 'none')
  expect(component).toHaveStyleRule('border', 'none')
  expect(component).toHaveStyleRule('text-transform', 'uppercase')
  expect(component).toHaveStyleRule('min-width', '150px')
  expect(component).toHaveStyleRule('cursor', 'pointer')
  expect(component).toHaveStyleRule('background', 'black')
  expect(component).toHaveStyleRule('color', 'white')
})
