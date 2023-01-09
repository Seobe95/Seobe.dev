import styled from 'styled-components'
import { mediaQuery } from '../../../styles/media'

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
`

const Responsive = ({ children, className }: ResponsiveProps) => {
  return <ResponsiveBlock className={className}>{children}</ResponsiveBlock>
}

export default Responsive
