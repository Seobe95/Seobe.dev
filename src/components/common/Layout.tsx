import styled from 'styled-components'
import Footer from '../base/Footer'
import Header from '../base/Header'
export interface LayoutProps {
  children: React.ReactNode
}

const LayoutBlock = styled.div`
  padding-top: 4rem;
  /* height: auto; */
  min-height: 100%;
  padding-bottom: 100px;
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
