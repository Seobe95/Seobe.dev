import styled from 'styled-components'
import localFont from '@next/font/local'
import Link from 'next/link'

const font = localFont({ src: '../../../public/fonts/BMHANNAPro.ttf' })

const StyledLink = styled(Link)`
  color: #d2d3d7;
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
