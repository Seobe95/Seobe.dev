import Head from 'next/head'
import styled from 'styled-components'
import Responsive from '../src/components/common/Responsive'
import { themedPalette } from '../styles/theme'

const Block = styled.div`
  color: ${themedPalette.text};
  background: ${themedPalette.bg_page1};
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Seobe.dev</title>
      </Head>
      <Block>
        <Responsive>gdgd &nsb; adsf adsf</Responsive>
      </Block>
    </>
  )
}
