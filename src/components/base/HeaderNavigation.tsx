import styled from 'styled-components'
import Link from 'next/link'
import { themedPalette } from '../../../styles/theme'
import responsive from '../../../styles/responsive'

const HeaderNavigationBlock = styled.nav`
  font-weight: 300;
  font-size: 1.5rem;
  padding-left: 1rem;
  @media ${responsive.mobile} {
    padding-left: 0.25rem;
  }
  ul {
    padding: 0px;
    margin: 0px;
  }
  li {
    &:first-of-type {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
      @media ${responsive.mobile} {
        margin-right: 0.125rem;
        padding-right: 0.125rem;
      }
    }
    display: inline;
  }
`

const StyledLink = styled(Link)`
  padding: 0px 0.25rem;
  :hover {
    background: ${themedPalette.hover};
    border-radius: 5%;
  }
  @media ${responsive.mobile} {
    font-size : 1.125rem;
  }
`

const HeaderNavigation = () => {
  return (
    <HeaderNavigationBlock>
      <ul>
        <li>
          <StyledLink href={'/resume'}>Resume</StyledLink>
        </li>
        <li>
          <StyledLink href={'/tags'}>Tag</StyledLink>
        </li>
      </ul>
    </HeaderNavigationBlock>
  )
}

export default HeaderNavigation
