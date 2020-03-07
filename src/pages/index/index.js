import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header = styled.h1`
  color: red;
`

// test github release
const Homepage = () => {
  return (
    <div>
      <Header>a PR</Header>
      <Link href="/hooks1" prefetch={false} passHref>
        <a>Custom Hooks (API Call) - UseEffect</a>
      </Link>
      <div />
    </div>
  )
}

export default Homepage
