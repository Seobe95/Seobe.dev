import styled from 'styled-components'
import Link from 'next/link'

const HeaderNavigationBlock = styled.ul`
  font-weight: 300;
  font-size: 1rem;
  padding-left: 1rem;
  li {
    &:first-of-type {
      border-right: 1px solid #d7d0d0;
      margin-right: 1rem;
      padding-right: 1rem;
    }
    display: inline;
  }
`

const HeaderNavigation = () => {
  return (
    <HeaderNavigationBlock>
      <li>
        <Link href={'/resume'}>Resume</Link>
      </li>
      <li>
        <Link href={'/tags'}>Tag</Link>
      </li>
    </HeaderNavigationBlock>
  )
}

export default HeaderNavigation
