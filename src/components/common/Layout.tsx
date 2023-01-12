import styled from 'styled-components'
import Header from '../base/Header'
import localFont from '@next/font/local'

const font = localFont({ src: '../../../public/fonts/BMHANNAPro.ttf' })
export interface LayoutProps {
  children: React.ReactNode
}

const LayoutBlock = styled.main`
  padding-top: 5rem;
  .code {
    font-family: ${font};
  }
`

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutBlock>{children}</LayoutBlock>
    </>
  )
}
