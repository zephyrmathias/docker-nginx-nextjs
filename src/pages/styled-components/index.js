import React from 'react'
import { Header, header2 } from './styled'
import * as Styled from './styled'

function StyledComponentsPage() {
  return (
    <div>
      <h1>Example of how you make styled-components readable</h1>
      <h4>to solve issue: styled-components or react component</h4>
      <Header>Example 1</Header>
      <div>Import it as a component</div>
      <img src="/images/styled-comp-ex1.jpg" alt="" width="500px" />
      <hr />
      <h1 css={header2}>Example 2</h1>
      <div>Declare it as css and pass it as css props</div>
      <img src="/images/styled-comp-ex2.jpg" alt="" width="500px" />
      <hr />
      <Styled.Header>Example 3</Styled.Header>
      <div>
        Import all exported styled-components as Styled and then sStyled.xxx
      </div>
      <img src="/images/styled-comp-ex3.jpg" alt="" width="500px" />
    </div>
  )
}

export default StyledComponentsPage
