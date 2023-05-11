import styled from 'styled-components'
import { mediaQuery } from '../../../styles/media'
import { themedPalette } from '../../../styles/theme'

export interface ResponsiveProps {
  className?: string
  children: React.ReactNode
}

const ResponsiveBlock = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(768)} {
    width: calc(100% - 2rem);
    padding: 0.5rem 1rem;
  }
  ${mediaQuery(425)} {
    width: 100%;
  }
`

const Responsive = ({ children, className }: ResponsiveProps) => {
  return <ResponsiveBlock className={className}>{children}</ResponsiveBlock>
}

export default Responsive

