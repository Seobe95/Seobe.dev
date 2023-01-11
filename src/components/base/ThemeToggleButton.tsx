import styled from 'styled-components'
import MoonIcon from '../../../public/svg/icon-moon.svg'
import SunIcon from '../../../public/svg/icon-sun.svg'
import { themedPalette } from '../../../styles/theme'
import useThemeToggle from '../../hooks/useThemeToggle'

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  :hover {
    background: ${themedPalette.hover};
  }
`

const StyledMoonIcon = styled(MoonIcon)`
  width: 2rem;
  background: none;
`

const StyledSunIcon = styled(SunIcon)`
  width: 2rem;
  background: none;
`

export default function ThemeToggleButton() {
  const { theme, toggle } = useThemeToggle()

  const isDark = theme === 'dark'

  return <IconButton onClick={toggle}>{isDark ? <StyledSunIcon /> : <StyledMoonIcon />}</IconButton>
}
