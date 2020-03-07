/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'
import { toMatchDiffSnapshot } from 'snapshot-diff'

configure({ adapter: new Adapter() })

jest.mock('axios')

expect.extend({ toMatchDiffSnapshot })
