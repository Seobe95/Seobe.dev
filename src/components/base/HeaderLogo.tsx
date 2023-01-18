import styled from 'styled-components'
import Link from 'next/link'
import { themedPalette } from '../../../styles/theme'
import responsive from '../../../styles/responsive'

const StyledLink = styled(Link)`
  color: ${themedPalette.text};
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  @media ${responsive.mobile} {
    font-size: 1.25rem;
  }
`

const HeaderLogo = () => {
  return (
    <StyledLink href={'/'}>
      Seobe.dev
    </StyledLink>
  )
}

export default HeaderLogo
