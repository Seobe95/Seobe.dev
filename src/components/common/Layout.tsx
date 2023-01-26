import styled from 'styled-components'
import Footer from '../base/Footer'
import Header from '../base/Header'
export interface LayoutProps {
  children: React.ReactNode
}

const LayoutBlock = styled.main`
  padding-top: 4rem;
  min-height: 100%;
  padding-bottom: 8rem;
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
