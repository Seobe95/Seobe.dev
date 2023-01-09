import styled from 'styled-components'
import Responsive from '../common/Responsive'
import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import ThemeToggleButton from './ThemeToggleButton'

export interface HeaderProps {}

const HeaderBlock = styled.header`
  background: #28292d;
  height: 4rem;
`

const HeaderInner = styled(Responsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderInner>
        <HeaderLogo />
        <Right>
          <ThemeToggleButton />
          <HeaderNavigation />
        </Right>
      </HeaderInner>
    </HeaderBlock>
  )
}

export default Header