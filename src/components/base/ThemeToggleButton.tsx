import styled from 'styled-components'
import MoonIcon from '../../../public/svg/icon-moon.svg'
import SunIcon from '../../../public/svg/icon-sun.svg'

const StyledMoonIcon = styled(MoonIcon)`
  width: 1.5rem;
  background: none;
  cursor: pointer;
  :hover {
    fill: #e3e3e3;
  }
`

export default function ThemeToggleButton() {
  return (
    <div>
      <StyledMoonIcon />
      {/* <StyledSunIcon /> */}
    </div>
  )
}
