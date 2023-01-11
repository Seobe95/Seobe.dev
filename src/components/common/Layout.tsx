import styled from 'styled-components'
import Header from '../base/Header'

export interface LayoutProps {
  children: React.ReactNode
}

const LayoutBlock = styled.main`
  padding-top: 4rem;
`

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutBlock>{children}</LayoutBlock>
    </>
  )
}
