import styled from 'styled-components'
import MoonIcon from '../../../public/svg/icon-moon.svg'
import SunIcon from '../../../public/svg/icon-sun.svg'
import { themedPalette } from '../../../styles/theme'
import useThemeToggle from '../../hooks/useThemeToggle'

const IconButton = styled.button`
  background: none;
  border: none;
`

const StyledMoonIcon = styled(MoonIcon)`
  width: 1.5rem;
  background: none;
  cursor: pointer;
  :hover {
    fill: #e3e3e3;
  }
`

const StyledSunIcon = styled(SunIcon)`
  width: 1.5rem;
  background: none;
  cursor: pointer;
  :hover {
    fill: pink;
  }
`

export default function ThemeToggleButton() {
  const { theme, toggle } = useThemeToggle()

  const isDark = theme === 'dark'

  return (
    <>
      <IconButton onClick={toggle}>{isDark ? <StyledSunIcon /> : <StyledMoonIcon />}</IconButton>
    </>
  )
}
