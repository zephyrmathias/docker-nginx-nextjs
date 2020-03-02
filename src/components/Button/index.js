import styled from 'styled-components'
import { yellow7, yellow5, gray3 } from '../../constants/colors'

function getButtonType(type) {
  switch (type) {
    case 'primary-action':
      return `
        background: ${yellow5};
        color: black;

        &:hover {
          background: ${yellow7};
        }

        &:disabled {
          background: ${gray3};
        }
      `
    case 'secondary':
      return 'background: black; color: white;'
    default:
      return 'background: black; color: white;'
  }
}

const Button = styled.button`
  border-radius: 4px;
  height: 44px;
  font-size: 14px;
  line-height: 14px;
  outline: none;
  user-select: none;
  border: none;
  text-transform: uppercase;
  min-width: 150px;
  cursor: pointer;
  ${({ type }) => getButtonType(type)}
`

Button.defaultProps = {
  type: 'primary-action',
}

export default Button
