import Head from 'next/head'
import styled from 'styled-components'
import Header from '../src/components/base/Header'

const Block = styled.div``

export default function Home() {
  return (
    <>
      <Head>
        <title>Seobe.dev</title>
      </Head>
      <Header />
      <Block>ㅎㅇ</Block>
    </>
  )
}
