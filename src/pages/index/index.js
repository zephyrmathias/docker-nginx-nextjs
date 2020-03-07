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
      <ul>
        <li>
          <Link href="/hooks1" prefetch={false} passHref>
            <a>Custom Hooks (API Call) - UseEffect</a>
          </Link>
        </li>
        <li>
          <Link href="/hooks2" prefetch={false} passHref>
            <a>Custom Hooks (API Call) - Custom Fetch</a>
          </Link>
        </li>
      </ul>
      <div />
    </div>
  )
}

export default Homepage
