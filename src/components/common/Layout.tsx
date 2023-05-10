import { Suspense } from 'react'
import styled from 'styled-components'
import Loading from '../../../pages/loading'
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
