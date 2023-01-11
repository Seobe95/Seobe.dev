import styled from 'styled-components'
import Link from 'next/link'
import { mediaQuery } from '../../../styles/media'
import { themedPalette } from '../../../styles/theme'

const HeaderNavigationBlock = styled.nav`
  font-weight: 300;
  font-size: 1.5rem;
  padding-left: 1rem;
  span {
    &:first-of-type {
      border-right: 1px solid #d7d0d0;
      margin-right: 1rem;
      padding-right: 1rem;
    }
    display: inline;
  }
  ${mediaQuery(375)} {
    padding-left: 0.125rem;
  }
`

const StyledLink = styled(Link)`
  padding: 0.25rem;
  :hover {
    background: ${themedPalette.hover};
    border-radius: 15%;
  }
`

const HeaderNavigation = () => {
  return (
    <HeaderNavigationBlock>
      <span>
        <StyledLink href={'/resume'}>Resume</StyledLink>
      </span>
      <span>
        <StyledLink href={'/tags'}>Tag</StyledLink>
      </span>
    </HeaderNavigationBlock>
  )
}

export default HeaderNavigation
