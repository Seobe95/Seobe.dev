import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import Responsive from '../common/Responsive'
import HeaderLogo from './HeaderLogo'
// import HeaderNavigation from './HeaderNavigation'
import ThemeToggleButton from './ThemeToggleButton'

export interface HeaderProps {}

const HeaderBlock = styled.header`
  background: ${themedPalette.bg_page1};
  height: 4rem;
  position: fixed;
  width: 100%;
  z-index: 10;

  @media (max-width: 425px) {
    height:  3rem
  }
`

const HeaderInner = styled(Responsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  @media (max-width: 425px) {
    padding: 8px 0;
  }
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
          {/* <HeaderNavigation /> */}
        </Right>
      </HeaderInner>
    </HeaderBlock>
  )
}

export default Header
