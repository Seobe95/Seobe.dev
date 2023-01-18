import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import Responsive from '../common/Responsive'
import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import ThemeToggleButton from './ThemeToggleButton'

export interface HeaderProps {}

const HeaderBlock = styled.header`
  background: ${themedPalette.bg_page1};
  height: 4rem;
  position: fixed;
  width: 100%;
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
  justify-content: center;
`

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderInner>
        <div>
          <HeaderLogo />
        </div>
        <Right>
          <ThemeToggleButton />
          <HeaderNavigation />
        </Right>
      </HeaderInner>
    </HeaderBlock>
  )
}

export default Header
