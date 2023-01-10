import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyles'
import Layout from '../src/components/common/Layout'
import { useThemeEffect } from '../src/hooks/useThemeEffect'
import useThemeStore from '../src/hooks/useThemeStore'
import { cookies } from 'next/headers'

export default function App({ Component, pageProps }: AppProps) {
  useThemeEffect()

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
