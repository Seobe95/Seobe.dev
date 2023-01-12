import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyles'
import Layout from '../src/components/common/Layout'
import { useThemeEffect } from '../src/hooks/useThemeEffect'
import '@code-hike/mdx/dist/index.css'

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
