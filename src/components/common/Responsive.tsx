import styled from 'styled-components'
import { mediaQuery } from '../../../styles/media'
import { themedPalette } from '../../../styles/theme'

export interface ResponsiveProps {
  className?: string
  children: React.ReactNode
}

const ResponsiveBlock = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1024px;
  }
  ${mediaQuery(1056)} {
    width: calc(100% - 2rem);
  }
  ${mediaQuery(375)} {
    width: 100%;
    padding: 1rem;
  }
`

const Responsive = ({ children, className }: ResponsiveProps) => {
  return <ResponsiveBlock className={className}>{children}</ResponsiveBlock>
}

export default Responsive
