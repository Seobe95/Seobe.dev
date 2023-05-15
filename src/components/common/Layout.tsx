import styled from 'styled-components'
import {Header, Footer} from '../base/index'
export interface LayoutProps {
  children: React.ReactNode
}

const LayoutBlock = styled.main`
  padding-top: 4rem;
  min-height: 100%;
  padding-bottom: 8rem;

  @media (max-width: 425px) {
    padding-top: 3rem;
  }
`

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutBlock>{children}</LayoutBlock>
      <Footer />
    </>
  )
}
