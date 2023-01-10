import styled from 'styled-components'
import localFont from '@next/font/local'
import Link from 'next/link'
import { themedPalette } from '../../../styles/theme'

const font = localFont({ src: '../../../public/fonts/BMHANNAPro.ttf' })

const StyledLink = styled(Link)`
  color: ${themedPalette.text};
  font-size: 2rem;
`

const HeaderLogo = () => {
  return (
    <StyledLink href={'/'} style={font.style}>
      Seobe.dev
    </StyledLink>
  )
}

export default HeaderLogo
